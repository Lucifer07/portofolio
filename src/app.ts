import * as THREE from 'three';
import Camera from './assets/Camera';
import Renderer from './assets/Renderer';
import Controls from './assets/Controls';
import ObjectManager from './assets/ObjectManager';

export default class Main {
    private canvas: HTMLCanvasElement;
    private dialog: HTMLElement;
    private okButton: HTMLElement;
    private camera: Camera;
    private renderer: Renderer;
    private controls: Controls;
    private objectManager: ObjectManager;
    private scene:THREE.Scene

    constructor(canvas: HTMLCanvasElement, dialog: HTMLElement, okButton: HTMLElement) {
        this.canvas = canvas;
        this.dialog = dialog;
        this.okButton = okButton;
        this.scene= new THREE.Scene()
        this.camera = new Camera();
        this.renderer = new Renderer(this.canvas);
        this.controls = new Controls(this.camera.getCamera(), document.body);
        this.objectManager = new ObjectManager(new THREE.Scene());
        this.okButton.addEventListener('click', () => {
            this.dialog.style.display = 'none';
            this.init();
        });

        window.addEventListener('resize', () => this.onWindowResize());
    }

    private init(): void {
        this.controls.lock();
        let light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(50, 50, 50).normalize();
        this.scene.add(light)
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load('texture/ground.jpeg', (texture) => {
            this.objectManager.createGround(texture);
            this.objectManager.createTrees();
            this.animate();
        });
    }

    private animate(): void {
        requestAnimationFrame(() => this.animate());
        const delta = 0.01;
        const moveForward = true; 
        const moveBackward = false;
        const moveLeft = false; 
        const moveRight = false;

        if (moveForward) this.controls.moveForward(delta);
        if (moveBackward) this.controls.moveForward(-delta);
        if (moveLeft) this.controls.moveRight(-delta);
        if (moveRight) this.controls.moveRight(delta);
        this.renderer.render(this.scene, this.camera.getCamera());
    }

    private onWindowResize(): void {
        const width = window.innerWidth;
        const height = window.innerHeight;
        this.renderer.setSize(width, height);
        this.camera.updateAspect();
    }
}
