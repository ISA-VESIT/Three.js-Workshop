
import * as THREE from 'three';
import {OrbitControls} from "https://threejs.org/examples/jsm/controls/OrbitControls.js";
import {GLTFLoader} from '../three.js-master/examples/jsm/loaders/GLTFLoader.js';


    ////step 1
let scene, camera, renderer;
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,45,30000);
camera.position.set(1,60,-100);

renderer = new THREE.WebGLRenderer({antialias:true});
///renderer.setClearColor('#efefef');
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);


   /////step 2
/*when you import from cdn link use THREE.OrbitControls*/
//let controls = new THREE.OrbitControls(camera, renderer.domElement);
/*when you import locally use OrbitControls*/
let controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 500;
controls.maxDistance = 1500;
// camera.position.z = -20000;
controls.update();


/////step 3

let materialArray = [];
let texture_ft = new THREE.TextureLoader().load( '/penguins/penguins(2)/arid2_ft.jpg');
let texture_bk = new THREE.TextureLoader().load( '/penguins/penguins(2)/arid2_bk.jpg');
let texture_up = new THREE.TextureLoader().load( '/penguins/penguins(2)/arid2_up.jpg');
let texture_dn = new THREE.TextureLoader().load( '/penguins/penguins(2)/arid2_dn.jpg');
let texture_rt = new THREE.TextureLoader().load( '/penguins/penguins(2)/arid2_rt.jpg');
let texture_lf = new THREE.TextureLoader().load( '/penguins/penguins(2)/arid2_lf.jpg');
  
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));
 

let skyboxGeo = new THREE.BoxGeometry( 10000, 10000, 10000);
let skybox = new THREE.Mesh( skyboxGeo, materialArray);
scene.add( skybox );

for (let i = 0; i < 6; i++)
  materialArray[i].side = THREE.BackSide;



////step 4      testing with the box
/*
let boxGeo = new THREE.BoxGeometry( 10, 10, 10);
let BoxMat = new THREE.MeshBasicMaterial({color: 0x0000FF});
let box = new THREE.Mesh( boxGeo, BoxMat);
scene.add( box );
box.position.set(0,5,0);
box.scale.set(1,1,1);
*/



              /// step 5 adding ninja
/*
const loader = new GLTFLoader();
loader.load('/assets/wraith.glb',
  function ( glb ) {  
      console.log(glb);
      scene.add( glb );
  },
  function ( xhr ) {
      console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
  },
  function ( error ) {
      console.error( 'An error happened' );
  }
);

let ninja = new THREE.Object3D();
loader.load('/assets/wraith.glb', function (object){
  ninja = object.scene;
  scene.add(ninja);
});
ninja.position.set(0,30,0);

*/


  const light = new THREE.PointLight();
  light.position.set( 5, 5, 30 );
  const Dlight = new THREE.DirectionalLight(0xffffff,1)
  scene.add(light,Dlight);

  const LightHelper = new THREE.PointLightHelper(light);
  const GridHelper = new THREE.GridHelper(200,50);
  scene.add(  LightHelper, GridHelper );
  


function animate() {
  renderer.render(scene,camera);
  //skybox.rotation.x += 0.1;
  controls.update();
  requestAnimationFrame(animate);
}
animate();



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