//import * as THREE from '';
//import {OrbitControls} from '';


//1st step
const scene = new THREE.Scene();

//var camera =  new THREE.PerspectiveCamera(Field_of_view, Aspect Ratio, Near Plane, Far Plane);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 3;   // +ve back -ve front



//Diff types of renderer WebGL renderer, CSS 2d Renderer, CSS 3d Renderer and SVG renderer
///WebGl Renderer Provides most flexibility & power to create crazy scenes 
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor("#e5e5e5");  //white
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



var geometry = new THREE.BoxGeometry(1,1,1);

//required light
//const material = new THREE.MeshStandardMaterial({ color: 0xFF6347  } );  //color: 0x00ff00  

//not required light
var material = new THREE.MeshBasicMaterial({color: 0X0000FF}); //color: 0x00ff00  wireframe: true 
const cube = new THREE.Mesh(geometry, material);
 scene.add(cube);



//light
const light = new THREE.PointLight( 0xffffff);
light.position.set( 5, 5, 30 );
scene.add(light)


/*
window.addEventListener('resize', ()=>{
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect=  window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();  //call Camera
})
*/




var animate = function () {
    requestAnimationFrame(animate);
    //  cube.rotation.x += 0.03;
    //  cube.rotation.y += 0.01;
    //  cube.rotation.z += 0.07;  
    renderer.render(scene, camera); 
};
animate();

