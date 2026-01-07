import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
    stack: string;
}

const experiences: Experience[] = [
    {
        title: "Senior Backend Engineer",
        company: "Surya Anugrah Mulya",
        period: "12/2024 - Present",
        description: "Developed and Optimized Financial Services: Engineered MetaTrader 4 and MetaTrader 5 trading services using PHP Lumen and PHP Swoole, ensuring high-performance, low-latency execution. Designed and Implemented FIX Protocol Solutions: Built a FIX Server Protocol using Golang, handling session management, message parsing, validation, and high-throughput trading communication. Developed FIX API Gateway: Created a FIX API Gateway in Golang to bridge FIX protocol communication with internal microservices and REST/gRPC-based systems. Integrated FIX API for Trading Communication: Designed and implemented FIX API communication for seamless and reliable data exchange between trading platforms and financial markets. Built Scalable Trading Platform in Golang: Developed a high-performance trading platform using Golang, optimizing transaction speed, reliability, and security. Implemented High-Performance Data Exchange: Utilized REST API and gRPC for efficient service-to-service communication, enabling smooth interaction between microservices. Optimized Data Processing and Messaging: Leveraged Redis for caching and RabbitMQ for message queuing, ensuring real-time data processing and improved system scalability. Ensured System Resilience and Reliability: Designed fault-tolerant architectures capable of handling high-throughput requests while maintaining low-latency response times in financial applications.",
        stack: "Backend Development: PHP Lumen, PHP Swoole, Golang (Fiber) API & Communication Protocols: FIX API, REST API, gRPC Message Brokers & Caching: RabbitMQ, Redis Databases & Storage: MySQL, Postgresql, Indexing & Query Optimization Infrastructure & Deployment: Docker, Microservices Architecture"
    },
    {
        title: "Full Stack Developer",
        company: "Akselerasi Informasi Indonesia",
        period: "07/2024 - 01/2025",
        description: "As the project lead, I spearheaded the design and development of an ERP application using a microservices architecture to enhance system scalability and operational efficiency for the company. I led a team in strategizing, implementing, and refining the application to ensure optimal performance and alignment with business goals. Stack: Laravel, Go, Docker, Kubernetes, MySQL, Redis, Nginx, RabbitMQ. As the project lead, I directed the server migration for PT Sinar Jaya, ensuring a seamless process with minimal downtime. I led efforts to enhance server performance and security, guaranteeing a successful migration aligned with the company's operational needs. Stack: CentOS, Nginx, MariaDB, PHP, Promox, Git Server, Docker, Kubernetes, Rancher, Symmetricds. Developing and Enhancing JakWiFi – Server Monitoring Application for Public WiFi Networks in Jakarta, Developed a monitoring application to track the performance and status of public WiFi networks in Jakarta in real-time. Stack: Radius, Laravel, Mysql, Docker. Developing and Enhancing Ekrutes – Online Testing and Data Management Platform, Developed an online testing platform with a focus on security, scalability, and providing reliable data management for clients, business partners, employees, and the public. Stack: Laravel, React, IONIC, PostgreSQL, Docker, Nginx, Tailwind CSS. Developing and Enhancing VMeet – Virtual Meeting Application for the Indonesian National Armed Forces (SATKOMLEK TNI), Designed and built a secure virtual meeting application for military use, with encryption support and a stable video conferencing feature. Stack: WebRTC, Node.js, Java, Scala, Ruby on Rails, PostgreSQL, Redis, Nginx, Docker. As the project lead, I directed the development and enhancement of a dashcam monitoring application for vehicles for the Indonesian National Armed Forces (SATKOMLEK TNI). I oversaw the creation of real-time video data management features, along with tracking and video analysis capabilities, to ensure comprehensive monitoring and operational effectiveness. Stack: Laravel, React, PostgreSQL, Firebase, Docker, Pusher.",
        stack: "Laravel, Go, Docker, Kubernetes, MySQL, Redis, Nginx, RabbitMQ, CentOS, MariaDB, PHP, Promox, Git Server, Rancher, Symmetricds, Radius, React, IONIC, PostgreSQL, Tailwind CSS, WebRTC, Node.js, Java, Scala, Ruby on Rails, Firebase, Pusher"
    },
    {
        title: "Associate Backend Engineer",
        company: "Indodax",
        period: "04/2024 - 07/2024",
        description: "Builds and maintains blockchain network nodes, ensuring the stability and security of the network. Develops and sustains a microservice application that interfaces with the blockchain network, enhancing transaction processes within the node for efficiency and reliability.",
        stack: "Go, PHP, Javascript, Rush, Solidity"
    },
    {
        title: "Full Stack Developer Trainee",
        company: "Sea Labs Indonesia",
        period: "01/2024 - 03/2024",
        description: "Version Control and Collaboration: Developed expertise in leveraging Git for optimized collaboration and robust code management, ensuring streamlined version control and efficient team workflows. Programming Languages: Exhibited advanced proficiency in Go (Golang), javascript, and type script, applying Object-Oriented Programming (OOP) principles to achieve superior code organization and modularity. Database Management: Attained comprehensive knowledge of Relational Database Management Systems (RDBMS), excelling in database modeling and data manipulation to provide effective data management solutions. API Development: Demonstrated expertise in developing RESTful APIs with the Gin framework, promoting seamless communication between software components and ensuring high interoperability. Web Development: Mastered the creation of responsive HTML webpages integrated with RESTful APIs using the React framework, delivering dynamic and user-centric web applications. Application Deployment: Acquired hands-on experience in deploying applications through Docker containerization technology, facilitating streamlined deployment processes and enhanced scalability.",
        stack: "Go, Javascript, PostgreSQL, Tailwind, SASS, Docker"
    },
    {
        title: "Mechanical Engineering",
        company: "The Ritz Carlton",
        period: "11/2023 - 12/2023",
        description: "Optimizing hotel operations as a Mechanical Engineer, responsible for overseeing the installation and maintenance of HVAC systems, elevators, and plumbing fixtures, improving energy efficiency by 10%. Collaborating within a team to implement a preventive maintenance program, resulting in a 20% reduction in downtime and enhancing guest satisfaction scores by 7%.",
        stack: ""
    },
    {
        title: "Full Stack Developer",
        company: "1010-group",
        period: "09/2023 - 11/2023",
        description: "Elevated company profile development as a fullstack developer proficient in Laravel for backend and frontend technologies, crafting a dynamic web platform showcasing product lists, articles, and more. Integrated Laravel's robust backend capabilities to manage and organize diverse content effectively while ensuring seamless user experiences on the frontend. Delivered a polished, feature-rich website, enhancing the company's online presence and facilitating customer engagement with intuitive navigation and compelling content displays.",
        stack: "Laravel, Mysql"
    },
    {
        title: "Full Stack Developer",
        company: "Venatronics LLC",
        period: "11/2022 - 09/2023",
        description: "Revolutionized the export-import electronic component industry as a fullstack developer proficient in Laravel, Go and Next.js, orchestrating the creation of a comprehensive web platform featuring product listings, seamless shopping experiences, an intuitive admin dashboard, and more. Seamlessly integrated backend capabilities with Next.js's dynamic frontend framework to ensure optimal performance and user engagement. Delivered a cutting-edge solution, streamlining the procurement process and empowering businesses to thrive in the digital marketplace with enhanced efficiency and functionality.",
        stack: "Laravel, Go, Next.js, Javascript, Mysql"
    },
    {
        title: "Full Stack Developer",
        company: "PT Andromedia",
        period: "02/2022 - 07/2022",
        description: "Revitalized the co-working rental industry as a fullstack developer adept in Laravel for backend operations and frontend development, coupled with Kotlin proficiency for crafting a cutting-edge mobile application. Orchestrated the creation of a comprehensive platform enabling seamless co-working space bookings, payment processing, and user management. Leveraged Laravel's robust backend functionalities to ensure secure data handling and seamless API integrations, while Kotlin's versatility empowered the development of a sleek and user-friendly mobile app. Delivered a transformative solution, enhancing accessibility and convenience for co-working space seekers, and streamlining operations for space providers.",
        stack: "Laravel, ReactJs, Mysql"
    },
    {
        title: "Full Stack Developer",
        company: "Nuansa Inti Persada",
        period: "08/2021 - 09/2021",
        description: "Revolutionized public street lighting management with expertise in Laravel for backend and frontend development, crafting RESTful APIs to handle IoT device control. Engineered a comprehensive monitoring page allowing real-time surveillance and control of IoT devices for public lighting systems. Leveraged Laravel's robust features to ensure seamless integration with IoT sensors, enabling efficient monitoring and remote control functionalities. Delivered a transformative solution enhancing energy efficiency, safety, and operational effectiveness in public infrastructure management.",
        stack: "PHP, Mysql"
    },
    {
        title: "Electrical Engineering",
        company: "Fajar Lighting",
        period: "09/2019 - 12/2020",
        description: "Designs, constructs, and repairs electrical networks, ensuring optimal performance and reliability. Maintains equipment to support operational efficiency and safety.",
        stack: ""
    }
];

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
    private startPoin: THREE.Vector3 = new THREE.Vector3(0, 1.7, 0)
    private treshold = 450
    private treePositions: THREE.Vector3[] = [];
    private buildings: Building[] = [];
    private currentPopup: HTMLElement | null = null;
    private light!: THREE.DirectionalLight;
    private ambientLight!: THREE.AmbientLight;
    private stars!: THREE.Points;
    private timeDisplay!: HTMLElement;

    constructor(canvas: HTMLCanvasElement) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.controls = new PointerLockControls(this.camera, document.body);
        this.velocity = new THREE.Vector3();
        this.direction = new THREE.Vector3();
        this.clock = new THREE.Clock();
        this.renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            context: canvas.getContext('webgl', { antialias: true }) || undefined
        });
        this.init();
    }

    private init() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    
        this.scene.add(this.controls.getObject());
    
        this.setupEventListeners();
        this.createGround();
        this.createTrees();
        this.createBuildings();
        this.createLight();
    
        this.camera.position.set(0, 1.7, 0);
        this.camera.lookAt(new THREE.Vector3(0, 1.7, -1));

        this.animate();
    }
    
    private setupEventListeners() {
        const instructions = document.getElementById('dialog');

        instructions?.addEventListener('click', () => {
            this.controls.lock();
        });

        this.controls.addEventListener('lock', () => {
            instructions!.style.display = 'none';
        });

        this.controls.addEventListener('unlock', () => {
            instructions!.style.display = 'block';
        });
    
        const onKeyDown = (event: KeyboardEvent) => {
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
        };

        const onKeyUp = (event: KeyboardEvent) => {
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
        };
    
        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('keyup', onKeyUp);
    
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
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
            const tree = new Tree(x, z, this.scene);
            tree.create();
            this.treePositions.push(new THREE.Vector3(x, 0, z));
        }
    }

    private createBuildings() {
        const buildingPositions = [
            new THREE.Vector3(40, 0, 40),
            new THREE.Vector3(-40, 0, 40),
            new THREE.Vector3(40, 0, -40),
            new THREE.Vector3(-40, 0, -40),
            new THREE.Vector3(80, 0, 0),
            new THREE.Vector3(-80, 0, 0),
            new THREE.Vector3(0, 0, 80),
            new THREE.Vector3(0, 0, -80),
            new THREE.Vector3(60, 0, 60),
            new THREE.Vector3(-60, 0, -60)
        ];

        experiences.forEach((exp, index) => {
            if (index < buildingPositions.length) {
                const building = new Building(buildingPositions[index].x, buildingPositions[index].z, this.scene, exp);
                this.buildings.push(building);
            }
        });

        this.createRoads();
    }

    private createRoads() {
        const roadWidth = 10;
        const roadHeight = 0.1;
        const roadMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });

        for (let i = -80; i <= 80; i += 40) {
            const roadGeometry = new THREE.PlaneGeometry(160, roadWidth);
            const road = new THREE.Mesh(roadGeometry, roadMaterial);
            road.rotation.x = -Math.PI / 2;
            road.position.set(0, roadHeight, i);
            this.scene.add(road);
        }

        for (let i = -80; i <= 80; i += 40) {
            const roadGeometry = new THREE.PlaneGeometry(roadWidth, 160);
            const road = new THREE.Mesh(roadGeometry, roadMaterial);
            road.rotation.x = -Math.PI / 2;
            road.position.set(i, roadHeight, 0);
            this.scene.add(road);
        }
    }

    private createLight() {
        this.light = new THREE.DirectionalLight(0xffffff, 1);
        this.light.position.set(50, 50, 50);
        this.scene.add(this.light);

        // Ambient light for base
        this.ambientLight = new THREE.AmbientLight(0x404040, 0.2);
        this.scene.add(this.ambientLight);

        this.createStars();
        this.createTimeDisplay();
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

        const currentPos = new THREE.Vector3().copy(this.controls.camera.position);
        currentPos.y = 0;
        const desiredMove = new THREE.Vector3(-this.velocity.x * delta, 0, -this.velocity.z * delta);
        let adjustedMove = desiredMove.clone();

        for (const treePos of this.treePositions) {
            const toTree = treePos.clone().sub(currentPos);
            const dist = toTree.length();
            if (dist < 3) {
                const normal = toTree.normalize();
                const dot = adjustedMove.dot(normal);
                if (dot > 0) {
                    adjustedMove.sub(normal.clone().multiplyScalar(dot));
                }
            }
        }

        // Check buildings
        for (const building of this.buildings) {
            const toBuilding = building.position.clone().sub(currentPos);
            const dist = toBuilding.length();
            if (dist < 5) {
                const normal = toBuilding.normalize();
                const dot = adjustedMove.dot(normal);
                if (dot > 0) {
                    adjustedMove.sub(normal.clone().multiplyScalar(dot));
                }
            }
        }

        this.controls.moveRight(adjustedMove.x);
        this.controls.moveForward(adjustedMove.z);

      
        if (Math.abs(this.controls.camera.position.x)>=this.treshold||Math.abs(this.controls.camera.position.z)>=this.treshold) {
            this.controls.camera.position.copy(this.startPoin)
        }
        this.updateLighting();
        this.updateTimeDisplay();
        this.checkBuildingProximity();
        this.renderer.render(this.scene, this.camera);
    }

    private checkBuildingProximity() {
        const cameraPos = this.controls.camera.position;
        for (const building of this.buildings) {
            const distance = cameraPos.distanceTo(building.position);
            if (distance < 10) {
                this.showExperiencePopup(building.experience);
                return;
            }
        }
        this.hideExperiencePopup();
    }

    private showExperiencePopup(exp: Experience) {
        if (this.currentPopup) {
            this.currentPopup.remove();
        }
        const popup = document.createElement('div');
        popup.id = 'experience-popup';
        popup.innerHTML = `
            <div id="popup-content">
                <h2>${exp.title}</h2>
                <h3>${exp.company}</h3>
                <p><strong>Period:</strong> ${exp.period}</p>
                <p>${exp.description}</p>
                <p><strong>Stack:</strong> ${exp.stack}</p>
                <button id="close-popup">Close</button>
            </div>
        `;
        document.body.appendChild(popup);
        this.currentPopup = popup;

        const closeBtn = popup.querySelector('#close-popup') as HTMLButtonElement;
        closeBtn.addEventListener('click', () => this.hideExperiencePopup());
    }

    private hideExperiencePopup() {
        if (this.currentPopup) {
            this.currentPopup.remove();
            this.currentPopup = null;
        }
    }

    private updateLighting() {
        const time = this.clock.getElapsedTime() * 0.05;
        const elevation = Math.max(0.1, (Math.sin(time) + 1) * 0.5 * Math.PI / 2);
        const azimuth = time * 0.5;

        const x = Math.cos(azimuth) * Math.cos(elevation) * 100;
        const y = Math.sin(elevation) * 100;
        const z = Math.sin(azimuth) * Math.cos(elevation) * 100;

        this.light.position.set(x, y, z);
        this.light.intensity = Math.sin(elevation) * 1.5 + 0.5;

        // Night mode
        const isNight = elevation < 0.3;
        this.stars.visible = isNight;
        this.ambientLight.intensity = isNight ? 0.1 : 0.2;
        if (isNight) {
            this.light.color.setHex(0xaaaaff);
            this.light.intensity = 0.3;
        } else {
            this.light.color.setHex(0xffffff);
        }
    }

    private createStars() {
        const starGeometry = new THREE.BufferGeometry();
        const starCount = 1000;
        const positions = new Float32Array(starCount * 3);

        for (let i = 0; i < starCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 2000; // Spread stars
            if (i % 3 === 1) positions[i] = Math.random() * 500 + 50; // Above ground
        }

        starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5 });
        this.stars = new THREE.Points(starGeometry, starMaterial);
        this.stars.visible = false;
        this.scene.add(this.stars);
    }

    private createTimeDisplay() {
        this.timeDisplay = document.createElement('div');
        this.timeDisplay.id = 'time-display';
        this.timeDisplay.style.position = 'fixed';
        this.timeDisplay.style.top = '10px';
        this.timeDisplay.style.right = '10px';
        this.timeDisplay.style.color = 'white';
        this.timeDisplay.style.fontSize = '18px';
        this.timeDisplay.style.fontFamily = 'Arial, sans-serif';
        this.timeDisplay.style.background = 'rgba(0, 0, 0, 0.5)';
        this.timeDisplay.style.padding = '5px 10px';
        this.timeDisplay.style.borderRadius = '5px';
        document.body.appendChild(this.timeDisplay);
    }

    private updateTimeDisplay() {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        this.timeDisplay!.innerText = now.toLocaleDateString('id-ID', options);
    }
}

class Tree {

    constructor(private x: number, private z: number, private scene: THREE.Scene) {
        this.createTrunk();
        this.createLeaves();
    }

    private createTrunk(): void {
        const trunkGeometry = new THREE.CylinderGeometry(0.5, 0.5, 5, 32);
        const trunkMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
        const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
        trunk.position.set(this.x, 2.5, this.z);
        this.scene.add(trunk);
    }

    private createLeaves(): void {
        const leavesGeometry = new THREE.SphereGeometry(3, 32, 32);
        const leavesMaterial = new THREE.MeshBasicMaterial({ color: 0x228B22 });
        const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
        leaves.position.set(this.x, 6, this.z);
        this.scene.add(leaves);
    }

    public create() {
    }
}

class Building {

    public position: THREE.Vector3;

    constructor(private x: number, private z: number, private scene: THREE.Scene, public experience: Experience) {
        this.position = new THREE.Vector3(x, 0, z);
        this.loadBuilding();
    }

    private loadBuilding() {
        const loader = new GLTFLoader();
        loader.load(
            'model/house/scene.gltf',
            (gltf: any) => {
                console.log('House model loaded successfully');
                const model = gltf.scene;
                model.scale.set(1, 1, 1);
                model.position.set(this.x, 0, this.z);
                if (this.x > 0 && this.z > 0) model.rotation.y = Math.PI / 2;
                else if (this.x < 0 && this.z > 0) model.rotation.y = -Math.PI / 2;
                else if (this.x > 0 && this.z < 0) model.rotation.y = Math.PI;
                this.scene.add(model);

                // Add title text above the house
                this.addTitleText(model.position.y + 8); // Above house
            },
            (progress: any) => {
                console.log('Loading progress:', progress);
            },
            (error: any) => {
                console.error('Error loading house model:', error);
                this.createFallbackBuilding();
            }
        );
    }

    private addTitleText(yPos: number) {
        const fontLoader = new FontLoader();
        fontLoader.load(
            'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',
            (font) => {
                const textGeometry = new TextGeometry(`${this.experience.title} - ${this.experience.company}`, {
                    font: font,
                    size: 1,
                    height: 0.1,
                    curveSegments: 12,
                    bevelEnabled: false
                });
                const textMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
                const textMesh = new THREE.Mesh(textGeometry, textMaterial);
                textMesh.position.set(this.x, yPos, this.z);
                this.scene.add(textMesh);
            },
            undefined,
            (error: any) => {
                console.error('Error loading font:', error);
            }
        );
    }

    private createFallbackBuilding() {
        const houseGroup = new THREE.Group();

        const houseGeometry = new THREE.BoxGeometry(5, 8, 5);
        const houseMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
        const house = new THREE.Mesh(houseGeometry, houseMaterial);
        house.position.set(0, 4, 0);
        houseGroup.add(house);

        const roofGeometry = new THREE.ConeGeometry(3.5, 4, 4);
        const roofMaterial = new THREE.MeshPhongMaterial({ color: 0x8B0000 });
        const roof = new THREE.Mesh(roofGeometry, roofMaterial);
        roof.position.set(0, 10, 0);
        houseGroup.add(roof);

        const doorGeometry = new THREE.BoxGeometry(1, 2, 0.1);
        const doorMaterial = new THREE.MeshPhongMaterial({ color: 0x654321 });
        const door = new THREE.Mesh(doorGeometry, doorMaterial);
        door.position.set(0, 1, 2.6);
        houseGroup.add(door);

        houseGroup.position.set(this.x, 0, this.z);
        this.scene.add(houseGroup);
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