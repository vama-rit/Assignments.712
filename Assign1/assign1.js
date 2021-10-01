const scene = new THREE.Scene();

//CAMERA
const camera = new THREE.OrthographicCamera(window.innerWidth / - 16, window.innerWidth / 16, window.innerHeight / 16, window.innerHeight / - 16, -200, 500);
//const camera = new THREE.OrthographicCamera(window.innerWidth/-4 , window.innerWidth/4 ,window.innerHeight /4, window.innerHeight/-4, -200, 500);
camera.position.x = 2;
camera.position.y = 1;
camera.position.z = 3;
camera.lookAt(scene.position);

//CUBE
const geometry = new THREE.BoxGeometry(10, 10, 10);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

cube.position.x = window.innerWidth / -16;
cube.position.y = window.innerHeight / -16;
cube.position.z = 0;

//CLOCK
const clock = new THREE.Clock();
clock.start();

class Position {

    constructor(x, y, z) {

        this.x = x;
        this.y = y;
        this.z = z;
        // var vec=new THREE.Vector3(x, y, z);
        // return (vec);
    }

}

// class Rotation {

//     constructor(xa, ya, za, theta) {
//         this.xa = xa;
//         this.ya = ya;
//         this.za = za;
//         this.theta = theta;
//     }
// }

class Quat {

    constructor(vec_a,vec_b,theta,time){

        this.vec_a=vec_a;
        this.vec_b=vec_b;
        this.theta=theta;
        this.time=time;

    }

    getaxisangle(){

        vec_a=this.vec_a.normalize();
        vec_b=this.vec_b.normalize();
        
    }

}


class GetKeyValues {

    constructor(x, y, z, xa, ya, za, theta) {

        this.x = x;
        this.y = y;
        this.z = z;
        this.xa = xa;
        this.ya = ya;
        this.za = za;
        this.theta = theta;

    }

    //Rotation rot= new Rotation(xa,ya,za,theta)

}

function getKeyFrameinputs() {

    let keyvals= new GetKeyValues;

    let pos_a = new Position(keyvals.x,keyvals.y,keyvals.z);
    let pos_b = new Position(keyvals.xa,keyvals.ya,keyvals.za);

    var vec_a= new THREE.Vector3(pos_a.x,pos_a.y,pos_a.z);
    var vec_b= new THREE.Vector3(pos_b.x,pos_b.y,pos_b.z);

    let set_quat = new Quat(vec_a,vec_b,keyvals.theta,time)
}


function animate() {

    getKeyFrameinputs();

    let t = clock.getElapsedTime();
    console.log(t);
    
    let X = 5 * t;
    X += window.innerWidth / -16;
    let Y = 5 * t;
    Y += window.innerHeight / -16;
    let Z = 0;
    
    cube.position.x = X
    cube.position.y = Y
    cube.position.z = Z
    
    
    //var s = sphere mesh
    // var va = 1st start vector
    // var vb = 2nd end vector;
    
    

// const vector = new THREE.Vector3( 1, 0, 0 );
// vector.applyQuaternion( quaternion );
// mesh.quaternion.slerp( endQuaternion, 0.01 );
// .slerp ( qb : Quaternion, t : Float ) : Quaternion
    
//     THREE.Quaternion.slerp(qa, qb, qc, 1);
    
//     s.useQuaternion = true;
//     s.quaternion = qc;
    let rotY = (Math.PI * t * 18) / (180);
    
    cube.rotation.x += 0.0;
    cube.rotation.y = rotY;
    cube.rotation.z += 0.0;
    
    // getKeyFrameinputs();
    
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();



