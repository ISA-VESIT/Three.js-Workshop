
import * as THREE from 'three';
import {GLTFLoader} from '../three.js-master/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";


console.log(THREE)
//Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer({antialias:true});
 renderer.setClearColor("#e5e5e5");  //Background color white
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const controls = new  OrbitControls(camera, renderer.domElement);
 camera.position.z = 90;   // Range : zoom from 1 to 100, 1 = near, 100 = far
 //camera.position.y = 50;
controls.enableDaming = true;
controls.enableCampingFactor = 0.25;
controls.enableZoom = true;
controls.update();



// // Mesh
// const Mesh = new THREE.Mesh(geometry, material);
//  scene.add(Mesh); 
// Position
// Mesh.position.x = 0;
// Mesh.position.y = 0;
// Mesh.position.z = 0;
// Mesh.rotation.set(0,0,0);
//controls.update();


//lights
const light = new THREE.PointLight( 0xffffff);
light.position.set( 5, 5, 30 );

// const ambientlight = new THREE.AmbientLight( 0xffffff);
// scene.add( light,ambientlight );
//if ambient light doesnt work  use directional light

const Dlight = new THREE.DirectionalLight(0xffffff,1)
scene.add(light,Dlight);

// const LightHelper = new THREE.PointLightHelper(light);
// const GridHelper = new THREE.GridHelper(200,50);
// scene.add(  LightHelper, GridHelper );



                          // lets load the cyber ninja
  const loader = new GLTFLoader();
  loader.load('/assets/wraith.glb',
	// onLoad callback
	// Here the loaded data is assumed to be an object
	function ( glb ) {
		// Add the loaded object to the scene
    console.log(glb);
		scene.add( glb );
	},
	// onProgress callback
	function ( xhr ) {
		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	},
	// onError callback
	function ( error ) {
		console.error( 'An error happened' );
	}
);


let ninja = new THREE.Object3D();
loader.load('/assets/wraith.glb', function (object){
    ninja = object.scene;
    scene.add(ninja);
});
 
  
// Animate function can also used as a loops 
function animate() {
  requestAnimationFrame(animate);
    // ninja.rotation.x += 0.02;
    // ninja.rotation.y += 0.02;
    //ninja.rotation.z += 0.02;
     controls.update();
	  renderer.render( scene, camera );
   }
animate();  

// export {ninja};

/*
//For Resposiviness
window.addEventListener('resize', ()=>{
  //update renderer
  renderer.setSize(window.innerWidth,window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // update camera
  camera.aspect=  window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();  //call Camera
  controls.update();
})
*/