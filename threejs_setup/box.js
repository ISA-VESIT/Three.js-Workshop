

var scene = new THREE.Scene();
//var camera =  new THREE.PerspectiveCamera(Field_of_view, Aspect Ratio, Near Plane, Far Plane);
  var camera =  new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z = 5;


var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#e5e5e5");  //Background color white
renderer.setSize(window.innerWidth,window.innerHeight);   //Size 
document.body.appendChild(renderer.domElement);  //create a canvas element with settings or renderer settings


//For Resposiviness
window.addEventListener('resize', ()=>{
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect=  window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();  //call Camera
})
//renderer.render(scene, camera);




// const geometry = new THREE.SphereGeometry( 15, 32, 16 );
// const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );

//var geometry = new THREE.BoxGeometry(x,y,z);
var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshLambertMaterial({color: 0xF7F7F7});


var mesh =  new THREE.Mesh(geometry, material);
mesh.position.x = 0;  // 0 = center
mesh.position.y = 0;
mesh.position.z = 0;
//mesh.rotation.set(x,y,z);
mesh.rotation.set(7,2,0);
mesh.scale.set(1,1,1);
scene.add(mesh);


// //rendering 60 fps
var render = function(){
  requestAnimationFrame(render);
    mesh.rotation.x += 0.03;     // rotation at x axis
     mesh.rotation.y += 0.01;   // rotation at y axis
   mesh.scale.z -= 0.01;  //inverted itself and keepgrowing
  renderer.render(scene, camera);  // black background removed
}


//var light = new THREE.PointLight(Color:int,frequency:float,distance:number,decay: float);
var light = new THREE.PointLight(0XFFFFFF,2,10);

//light.position.set(x,y,z);
light.position.set(0,0,4);
scene.add(light);
renderer.render(scene, camera);




//for complex animation we can use Gsap, green sock animation, time line plugin
//this.tl = new TimeLineMax().delay(1 sec = 1000msec ,300 millisecond = .3 sec);

/*
this.tl = new TimelineMax().repeat(4).delay(.3)
this.tl = new TimelineMax().delay(.3)
 this.tl = new TimelineMax({paused: true});

//this.tl.to(this.mesh.scale, duration=1, obj= {x:2, ease: Expo.easeOut})
   this.tl.to(this.mesh.scale, 1, {x:2, y:2, z:2, ease: Expo.easeOut});
   this.tl.to(this.mesh.scale, 1, {x: 1, y: 1, z: 1, ease: Expo.easeOut}); 

     //this.tl.to(this.mesh.position, 1, {x: 2, ease: Expo.easeOut});
    this.tl.to(this.mesh.position, 1, {y: 2, ease: Expo.easeOut})
    this.tl.to(this.mesh.position, 1, {x: -2, ease: Expo.easeOut})
    this.tl.to(this.mesh.position, 1, {y: -1, ease: Expo.easeOut})
    this.tl.to(this.mesh.position, 1, {x: 1, ease: Expo.easeOut}) 

//this.tl.to(this.mesh.scale, 2, {y: 2, ease: Expo.easeOut})
// this.tl.to(this.mesh.rotation, 3, {y: Math.PI*.5 , ease: Expo.easeOut})
// this.tl.to(this.mesh.rotation, 3, {y: -Math.PI*.5 , ease: Expo.easeOut})

document.body.addEventListener('click', ()=>{
    this.tl.play();
})
render();
 window.addEventListener('mousemove', onMouseMove);
*/


// var raycaster = new THREE.Raycaster();    //hover, mouse over, pointer over
// var mouse = new THREE.Vector2();

// function onMouseMove(event) {
//     event.preventDefault();
//     mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
// 	  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

//     raycaster.setFromCamera( mouse, camera );
//     var intersects = raycaster.intersectObjects( scene.children, true );

// 	for ( var i = 0; i < intersects.length; i ++ ) {

// 		intersects[ i ].object.material.color.set( 0xff0000 );
//     //    intersects[ i ].object.rotation.set(2,3,2);
//         this.tl = new TimelineMax();
//    this.tl.to(intersects[i].object.scale, 1, {x:2, y:2, z:2, ease: Expo.easeOut});
//    this.tl.to(intersects[i].object.scale, 1, {x: 1, y: 1, z: 1, ease: Expo.easeOut});
//    //this.tl.to(intersects[i].object.rotation, 1, {x: 1, y: 1 , z: 1, ease: Expo.easeOut});
//      this.tl.to(intersects[i].object.position, 2, {x: 2, ease: Expo.easeOut});
//     this.tl.to(intersects[i].object.position, 2, {y: 2, ease: Expo.easeOut});
//     this.tl.to(intersects[i].object.position, 2, {x: -2, ease: Expo.easeOut});
//     this.tl.to(intersects[i].object.rotation, 2, {y:  -2, ease: Expo.easeOut})
//     this.tl.to(intersects[i].object.position, 1, {x: 1, ease: Expo.easeOut}) ;
//     this.tl.to(intersects[i].object.position, 1, {y: -1, ease: Expo.easeOut});
//     this.tl.to(intersects[i].object.position, 2, {x: (Math.random() - 0.5) * 10, ease: Expo.easeOut});
//     this.tl.to(intersects[i].object.position, 1, {y:(Math.random() - 0.5) * 10, ease: Expo.easeOut}) ;
// 	}

 //renderer.render( scene, camera );
//}

//   render();
// window.addEventListener('mousemove', onMouseMove);















