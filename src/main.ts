import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';

class Game {
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;
    private controls: PointerLockControls;
    private velocity: THREE.Vector3;
    private direction: THREE.Vector3;
    private clock: THREE.Clock;
    private moveForward: boolean = false;
    private moveBackward: boolean = false;
    private moveLeft: boolean = false;
    private moveRight: boolean = false;
    private startPoin:THREE.Vector3=new THREE.Vector3(0, 2, 0)
    private treshold=450
    constructor(canvas:HTMLCanvasElement) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.controls = new PointerLockControls(this.camera, document.body);
        this.velocity = new THREE.Vector3();
        this.direction = new THREE.Vector3();
        this.clock = new THREE.Clock();
        this.renderer= new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            context: canvas.getContext('webgl', { antialias: true })||undefined
        });
        this.init();
    }

    private init() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    
        this.scene.add(this.controls.getObject());
    
        this.setupEventListeners();
        this.createGround();
        this.createTrees();
        this.createLight();
    
        this.camera.position.set(0, 2, 0); 
        this.camera.lookAt(new THREE.Vector3(0, 2, -1)); 
    
        this.animate();
    
    }
    

    private setupEventListeners() {
        document.addEventListener('click', () => {
            this.controls.lock();
        });

        document.addEventListener('keydown', this.onKeyDown.bind(this));
        document.addEventListener('keyup', this.onKeyUp.bind(this));

        window.addEventListener('resize', this.onWindowResize.bind(this));
    }

    private onKeyDown(event: KeyboardEvent) {
        switch (event.code) {
            case 'ArrowUp':
            case 'KeyW':
                this.moveForward = true;
                break;
            case 'ArrowLeft':
            case 'KeyA':
                this.moveLeft = true;
                break;
            case 'ArrowDown':
            case 'KeyS':
                this.moveBackward = true;
                break;
            case 'ArrowRight':
            case 'KeyD':
                this.moveRight = true;
                break;
        }
    }

    private onKeyUp(event: KeyboardEvent) {
        switch (event.code) {
            case 'ArrowUp':
            case 'KeyW':
                this.moveForward = false;
                break;
            case 'ArrowLeft':
            case 'KeyA':
                this.moveLeft = false;
                break;
            case 'ArrowDown':
            case 'KeyS':
                this.moveBackward = false;
                break;
            case 'ArrowRight':
            case 'KeyD':
                this.moveRight = false;
                break;
        }
    }

    private onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    private createGround() {
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load('textures/ground.jpeg', (texture) => {
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(10, 10); 
    
            const groundGeometry = new THREE.PlaneGeometry(1000, 1000);
            const groundMaterial = new THREE.MeshPhongMaterial({ map: texture });
            const ground = new THREE.Mesh(groundGeometry, groundMaterial);
            ground.rotation.x = -Math.PI / 2;
            this.scene.add(ground);
        });
    }
    

    private createTrees() {
        for (let i = 0; i < 100; i++) {
            const x = Math.random() * 1000 - 500;
            const z = Math.random() * 1000 - 500;
            // Assuming Tree class exists and creates a tree mesh
            const tree = new Tree(x, z, this.scene);
            tree.create();
        }
    }

    private createLight() {
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(50, 50, 50).normalize();
        this.scene.add(light);
    }
    private animate() {
        requestAnimationFrame(this.animate.bind(this));
        const delta = this.clock.getDelta();
        this.velocity.x -= this.velocity.x * 10.0 * delta;
        this.velocity.z -= this.velocity.z * 10.0 * delta;

        this.direction.z = Number(this.moveForward) - Number(this.moveBackward);
        this.direction.x = Number(this.moveRight) - Number(this.moveLeft);
        this.direction.normalize();

        if (this.moveForward || this.moveBackward) this.velocity.z -= this.direction.z * 400.0 * delta;
        if (this.moveLeft || this.moveRight) this.velocity.x -= this.direction.x * 400.0 * delta;

        this.controls.moveRight(-this.velocity.x * delta);
        this.controls.moveForward(-this.velocity.z * delta);
        console.log(this.controls.camera.position.x,"ini x");
        console.log(this.controls.camera.position.z, " ini z");
        if (Math.abs(this.controls.camera.position.x)>=this.treshold||Math.abs(this.controls.camera.position.z)>=this.treshold) {
            this.controls.camera.position.copy(this.startPoin)
        }
        this.renderer.render(this.scene, this.camera);
    }
}


class Tree {
    private trunk: THREE.Mesh;
    private leaves: THREE.Mesh;

    constructor(private x: number, private z: number, private scene: THREE.Scene) {
        this.trunk = this.createTrunk();
        this.leaves = this.createLeaves();
    }

    private createTrunk(): THREE.Mesh {
        const trunkGeometry = new THREE.CylinderGeometry(0.5, 0.5, 5, 32);
        const trunkMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
        const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
        trunk.position.set(this.x, 2.5, this.z);
        this.scene.add(trunk);
        return trunk;
    }

    private createLeaves(): THREE.Mesh {
        const leavesGeometry = new THREE.SphereGeometry(3, 32, 32);
        const leavesMaterial = new THREE.MeshBasicMaterial({ color: 0x228B22 });
        const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
        leaves.position.set(this.x, 6, this.z);
        this.scene.add(leaves);
        return leaves;
    }

    public create() {
        // No need to explicitly call createTrunk() and createLeaves() here
        // They are already created in the constructor
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const dialog = document.getElementById('dialog');
    const okButton = document.getElementById('okButton');
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    if (okButton && dialog) {
        okButton.addEventListener('click', () => {
            dialog.style.display = 'none';
            new Game(canvas);
        });
    } else {
        console.error('Failed to find dialog or okButton element.');
    }
});
