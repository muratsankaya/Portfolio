

let world;

//To handle overlapping random locations
//An array of locations[x cordinate, y cordinate, z cordinate] of planets
let locations = [];

let fighterJets = [];

let planetColors = [[157, 180, 255], [162, 185, 255], [167, 188, 255], [170, 191, 255], [175, 195, 255], [186, 204, 255],
                    [192, 209, 255], [202, 216, 255], [238, 232, 255], [237, 238, 255], [251, 248, 255], [255, 249, 249],
                    [255, 245, 236], [255, 244, 232], [255, 241, 223], [255, 235, 209], [255, 215, 174], [255, 198, 144],
                    [255, 190, 127], [255, 187, 123], [255, 183, 119]];


let container; //the container will hold the robots

let noiseOffSetX, noiseOffSetY, noiseOffSetZ;

let textureDrawColor = [100, 100, 100];

let textCleared = true;

let buffer;

//calculates the distance between 2 points in 3D space
function dist3D(x1, y1, z1, x2, y2, z2){
  return Math.pow(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2), 1/2);
}

class FighterJet{

  constructor(obj){
    this.obj = obj;
    this.targetX;
    this.targetY;
    this.targetZ;
    this.flying = false;
    this.speed = random(.1, .3);
  }

  isFlying(){
    return this.flying;
  }

  move(){

    //Caclulate the distance
    let d = dist3D(this.obj.x, this.obj.y, this.obj.z, this.targetX, this.targetY, this.targetZ);

    //move towards the planet
    let x = this.obj.x + this.speed*((this.targetX - this.obj.x) / d);
    let y = this.obj.y + this.speed*((this.targetY - this.obj.y) / d);
    let z = this.obj.z + this.speed*((this.targetZ - this.obj.z) / d);

    //this.obj.setRotation(atan((this.targetX - this.obj.x) / d), atan((this.targetY - this.obj.y) / d), atan((this.targetZ - this.obj.z) / d));

    //each fighter jet is an entity/object itself
    this.obj.setX(x);
    this.obj.setY(y);
    this.obj.setZ(z);

    if(d < 1.5) this.flying = false; //reached the target

  }

  setTarget(x, y, z){
    this.flying = true; //Begin the fly
    this.targetX = x;
    this.targetY = y;
    this.targetZ = z;
  }

}

function getLocation(){
  return [(random(2) < 1  ? random(-100, -5) : random(5, 100)),
          (random(2) < 1  ? random(-100, -5) : random(5, 100)),
          (random(2) < 1  ? random(-100, -5) : random(5, 100))];
}

function checkLocation(l){ //checks for distance
  for(let i = 0; i < locations.length; ++i){
    if(abs(locations[i][0] - l[0]) < 2 || abs(locations[i][1] - l[1]) < 2 &&  abs(locations[i][2] - l[2])) return false; //
  }
  return true;
}

function addPrimitive(val){
  let howManyTries = 1000;
  let loc = getLocation();

  while(!checkLocation(loc) && howManyTries > 0){
    loc =  getLocation();
    --howManyTries;
  }

  if(howManyTries > 0){

    locations.push(loc);
    let col = planetColors[int(random(planetColors.length))];

    if(val < 1){

      let sph = new Sphere({
        x: loc[0], y: loc[1], z: loc[2],
        radius: random(.2, 1.5),
        red: col[0], green: col[1], blue: col[2],
        clickFunction: function(theBox) {

  							// move the user toward this box over a 1 second period
  							world.slideToObject( theBox , 1000 );

  						},

        enterFunction: function(theBox) {
  				// runs 1 time whenever the cursor has intersected with the cube

  				// make the cube slighly bigger
  				theBox.setScale(1.2, 1.2, 1.2);
  			},

        leaveFunction: function(theBox) {
          // runs 1 time whenever the cursor has left the vicinity of the cube

          // make the cube normal size
          theBox.setScale(1, 1, 1);
        }


      });

      world.add(sph);
    }

    else if(val < 2){

          let dodec = new Dodecahedron({
            x: loc[0], y: loc[1], z: loc[2],
            radius: random(.2, 1.5),
            red: col[0], green: col[1], blue: col[2],
            clickFunction: function(theBox) {

      							// move the user toward this box over a 1 second period
      							world.slideToObject( theBox , 1000 );

      						},

            enterFunction: function(theBox) {
      				// runs 1 time whenever the cursor has intersected with the cube

      				// make the cube slighly bigger
      				theBox.setScale(1.2, 1.2, 1.2);
      			},

            leaveFunction: function(theBox) {
              // runs 1 time whenever the cursor has left the vicinity of the cube

              // make the cube normal size
              theBox.setScale(1, 1, 1);
            }
          });

          world.add(dodec);
      }

    else if(val < 3){

      let t = new Tetrahedron({
            x: loc[0], y: loc[1], z: loc[2],
            radius: random(.2, 1.5),
            red: col[0], green: col[1], blue: col[2],
            clickFunction: function(theBox) {

      							// move the user toward this box over a 1 second period
      							world.slideToObject( theBox , 1000 );

      						},

            enterFunction: function(theBox) {
      				// runs 1 time whenever the cursor has intersected with the cube

      				// make the cube slighly bigger
      				theBox.setScale(1.2, 1.2, 1.2);
      			},

            leaveFunction: function(theBox) {
              // runs 1 time whenever the cursor has left the vicinity of the cube

              // make the cube normal size
              theBox.setScale(1, 1, 1);
            }

          });

      world.add(t);

    }

    else if( val < 4){
      let c = new Circle({
            x: loc[0], y: loc[1], z: loc[2],
            radius: random(.2, 1.5),
            red: col[0], green: col[1], blue: col[2],
            side: 'double',
            clickFunction: function(theBox) {

      							// move the user toward this box over a 1 second period
      							world.slideToObject( theBox , 1000 );

      						},

            enterFunction: function(theBox) {
      				// runs 1 time whenever the cursor has intersected with the cube

      				// make the cube slighly bigger
      				theBox.setScale(1.2, 1.2, 1.2);
      			},

            leaveFunction: function(theBox) {
              // runs 1 time whenever the cursor has left the vicinity of the cube

              // make the cube normal size
              theBox.setScale(1, 1, 1);
            }

          });

          world.add(c);

    }

    else if( val < 5){
      let co = new Cone({
            x: loc[0], y: loc[1], z: loc[2],
            height: random(.2, 1.5),
            radiusBottom: random(.2, 1.5), radiusTop: random(.2, 1.5),
            red: col[0], green: col[1], blue: col[2],
            clickFunction: function(theBox) {

      							// move the user toward this box over a 1 second period
      							world.slideToObject( theBox , 1000 );

      						},
            enterFunction: function(theBox) {
      				// runs 1 time whenever the cursor has intersected with the cube

      				// make the cube slighly bigger
      				theBox.setScale(1.2, 1.2, 1.2);
      			},

            leaveFunction: function(theBox) {
              // runs 1 time whenever the cursor has left the vicinity of the cube

              // make the cube normal size
              theBox.setScale(1, 1, 1);
            }

          });

          world.add(co);

    }

    else {
      let tok = new TorusKnot({
            x: loc[0], y: loc[1], z: loc[2],
            radius: random(.2, 1.5),
            radiusTubular: random(0.05, .15),
            red: col[0], green: col[1], blue: col[2],
            clickFunction: function(theBox) {

      							// move the user toward this box over a 1 second period
      							world.slideToObject( theBox , 1000 );

      						},

            enterFunction: function(theBox) {
      				// runs 1 time whenever the cursor has intersected with the cube

      				// make the cube slighly bigger
      				theBox.setScale(1.2, 1.2, 1.2);
      			},

            leaveFunction: function(theBox) {
              // runs 1 time whenever the cursor has left the vicinity of the cube

              // make the cube normal size
              theBox.setScale(1, 1, 1);
            }

          });

          world.add(tok);

    }

  }

}

function setup(){
  noCanvas();

  world = new World('VRScene');

  noiseDetail(25);

  noiseOffSetX = random(1000);
  noiseOffSetY = random(1000, 2000);
  noiseOffSetZ = random(2000, 3000);

  //uncomment this when relaesing the project
	world.camera.cameraEl.removeAttribute('wasd-controls');

  // set a background color (RGB)
  world.setBackground(0, 0, 0);

  container = new Container3D({x: -5, y: 2, z: -5});

  world.add(container);

  for (let i = 0; i < 10000; ++i){
    addPrimitive(random(6));
  }

  container.addChild( new OBJ({
  		asset: 'robot_obj',
  		mtl: 'robot_mtl',
  		x: 0,
  		y: 0,
  		z: 0,
  		rotationX:0,
  		rotationY:180,
  		scaleX:1,
  		scaleY:1,
  		scaleZ:1,
  	})
  );

  container.addChild( new OBJ({
  		asset: 'robot_obj',
  		mtl: 'robot_mtl',
  		x: 0,
  		y: 0,
  		z: -5,
  		rotationX:0,
  		rotationY:180,
  		scaleX:1,
  		scaleY:1,
  		scaleZ:1,
  	})
  );

  container.addChild( new OBJ({
  		asset: 'robot_obj',
  		mtl: 'robot_mtl',
  		x: 0,
  		y: 0,
  		z: -10,
  		rotationX:0,
  		rotationY:180,
  		scaleX:1,
  		scaleY:1,
  		scaleZ:1,
  	})
  );

  for(let i = 0; i < 25; ++i){
    let j = int(random(locations.length));
    let fighterjet =  new OBJ({
      		asset: 'fighterjet_obj',
          mtl: 'fighterjet_mtl',
      		x: locations[j][0],
      		y: locations[j][1],
      		z: locations[j][2],
      		rotationX:  0,
      		rotationY: 180,
      		scaleX:.01,
      		scaleY:.01,
      		scaleZ:.01,
       });

       world.add(fighterjet);

       fighterJets.push(new FighterJet(fighterjet));
  }

  // dynamic texture buffer
  let texture;

  // create our off screen graphics buffer & texture
	buffer = createGraphics(512, 512);
  buffer.background(255);
  buffer.textSize(30);
  buffer.text("Press 'P' to draw", 150, 260);
	texture = world.createDynamicTextureFromCreateGraphics(buffer);

  // create a control panel that the user can click on
	let panel = new Plane({
		width: 5, height: 5,
		x: -0, y: 3, z: -2,
		dynamicTexture: true,
		asset: texture,
		dynamicTextureWidth: 512,
		dynamicTextureHeight: 512,
		overFunction: function(entity, intersectionInfo) {
			// intersectionInfo is an object that contains info about how the user is
			// interacting with this entity.  it contains the following info:
			// .distance : a float describing how far away the user is
			// .point3d : an object with three properties (x, y & z) describing where the user is touching the entity
			// .point2d : an object with two properites (x & y) describing where the user is touching the entity in 2D space (essentially where on the dynamic canvas the user is touching)
			// .uv : an object with two properies (x & y) describing the raw textural offset (used to compute point2d)


			if(keyIsDown(80)){
         if(clearText) {
           clearText = false;
           buffer.clear();
         }
         buffer.fill(textureDrawColor[0], textureDrawColor[1], textureDrawColor[2]);
         buffer.noStroke();
         buffer.ellipse(intersectionInfo.point2d.x, intersectionInfo.point2d.y, 15);
         buffer.stroke(51);
       }

		}
	});

	world.add(panel);

  let clearCircle = new Circle({
        x: .7, y: .2, z: -2,
        radius: .2,
        side: 'double',

        overFunction: function(entity, intersectionInfo) {

    			 if(mouseIsPressed) {
             buffer.clear();
             buffer.text("Press 'P' to draw" , 150, 260);
             clearText = true;
           }

    		},

      });

  world.add(clearCircle);

  let clearText = new Text({
    text: "CLEAR",
    textAlign: 'center',
    x: .7, y: -.2, z: -2,
    scaleX: 5, scaleY: 5, scaleZ: 5,

  });

  world.add(clearText);

  let changeColorText = new Text({
    text: "Change Color",
    textAlign: 'center',
    x: -.8, y: -.2, z: -2,
    scaleX: 5, scaleY: 5, scaleZ: 5,

  });

  world.add(changeColorText);

  let changeCircle = new Circle({
        x: -.8, y: .2, z: -2,
        radius: .2,
        side: 'double',
        red: textureDrawColor[0], green: textureDrawColor[1] , blue: textureDrawColor[2],

        overFunction: function(entity, intersectionInfo) {

    			 if(mouseIsPressed) {
             let rgb = [random(255), random(255), random(255)];
             textureDrawColor = rgb;
             this.setColor(rgb[0], rgb[1], rgb[2]);
           }

    		},

      });

  world.add(changeCircle);

  let clickHereToDraw = new Text({
    text: "Click 'R' for the Drawing Scene",
    textAlign: 'center',
    x: 0, y: -4, z: 10,
    scaleX: 40, scaleY: 40, scaleZ: 40,
  });

  world.add(clickHereToDraw);

  // // create a new 'sky' entity - this functions as a huge sphere (500 meter radius) that
	// // is wrapped using an 'equirectangular' image (simliar to a "mercator projection" for a map)
	// // the image is loaded in the 'index.html' file
	// let sky = new Sky({
	// 	asset: 'sky1'
	// });
  //
	// world.add(sky);

  //document.getElementById('soundtrack').play(); //start the sound

}

function draw(){

  let x = constrain(container.x + map(noise(noiseOffSetX), 0, 1, -.3, .3), -90, 90);
  noiseOffSetX += .01;
  container.setX(x);

  let y = constrain(container.y + map(noise(noiseOffSetY), 0, 1, -.3, .3), -90, 90);
  noiseOffSetY += .01;
  container.setY(y);

  let z = constrain(container.z + map(noise(noiseOffSetZ), 0, 1, -.3, .3), -90, 90);
  noiseOffSetZ += .01
  container.setZ(z);

  for(let i = 0; i < fighterJets.length; ++i){
    if(!fighterJets[i].isFlying()){ //If the fighter jet is not currently flying

      let newTarget = locations[int(random(locations.length))];

      //If the new target is the same location with current planet
      //Then flying state will reset to false and a new random location will be assigned
      //This will continue until a new location assigned
      //Which in theory can never happen, but thats a very low probability
      //Even if that happens, the fighter jet will just be stable on a planet
      fighterJets[i].setTarget(newTarget[0], newTarget[1], newTarget[2]);

    }
   else{
     fighterJets[i].move();
   }
  }

  if(keyIsDown(82)) world.setUserPosition(0, 2, 6);

}
