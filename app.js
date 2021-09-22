const scene = new THREE.Scene();

//CAMERA
const camera = new THREE.OrthographicCamera(window.innerWidth / - 16, window.innerWidth / 16,window.innerHeight / 16, window.innerHeight / - 16, -200, 500);
//const camera = new THREE.OrthographicCamera(window.innerWidth/-4 , window.innerWidth/4 ,window.innerHeight /4, window.innerHeight/-4, -200, 500);
camera.position.x = 2;
camera.position.y = 1;
camera.position.z = 3;
camera.lookAt(scene.position);

//const camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / -2, window.innerHeight / 2, 0.1, 1000);
///const camera= new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);

//CUBE
const geometry = new THREE.BoxGeometry(10,10,10);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

cube.position.x = window.innerWidth/-16;
cube.position.y = window.innerHeight/-16;
cube.position.z = 0;

// cube.position.x = window.innerWidth;
// cube.position.y = window.innerHeight;
// cube.position.z = 0;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//CLOCK
const clock = new THREE.Clock();
clock.start();

function animate() {

    let t= clock.getElapsedTime();

    // if (t>20){
    //     cube.position.x = X
    //     cube.position.y = Y
    //     cube.position.z = Z
    // }

    console.log(t);

    let X = 5 * t;
    X+=window.innerWidth/-16;
    let Y = 5 * t;
    Y+=window.innerHeight/-16;
    let Z = 0;

    cube.position.x = X
    cube.position.y = Y
    cube.position.z = Z

    let rotY= (Math.PI*t*18)/(180);

    cube.rotation.x += 0.0;
    cube.rotation.y = rotY;
    cube.rotation.z += 0.0;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();