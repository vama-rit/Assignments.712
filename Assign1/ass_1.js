const scene = new THREE.Scene();

//CAMERA
//const camera = new THREE.OrthographicCamera(window.innerWidth / - 16, window.innerWidth / 16,window.innerHeight / 16, window.innerHeight / - 16, -200, 500);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.x = 0;
camera.position.y = 0;
camera.position.z = -70;
camera.lookAt(scene.position);

//const camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / -2, window.innerHeight / 2, 0.1, 1000);

//CUBE
const geometry = new THREE.BoxGeometry(5, 5, 5);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//CLOCK
const clock = new THREE.Clock();
clock.start();

// class Position {

//     constructor(x, y, z) {

//         this.x = x;
//         this.y = y;
//         this.z = z;
//         // var vec=new THREE.Vector3(x, y, z);
//         // return (vec);
//     }

// }

let kf = getKeyFrameinputs();

cube.position.x = kf[0].x;
cube.position.y = kf[0].y;
cube.position.z = kf[0].z;

let anim = new MyAnimator(kf);

function animate() {

    let e_t = clock.getElapsedTime();
    // console.log("e_t ", e_t);


    let frame = anim.getFrame(e_t);

    cube.position.x = frame.myPosition.x;
    cube.position.y = frame.myPosition.y;
    cube.position.z = frame.myPosition.z;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();