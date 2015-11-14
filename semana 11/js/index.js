window.requestAnimFrame = (function(){
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();

var partNum = 1;
//particle number per click

var c = document.getElementById('c');
var ctx = c.getContext('2d');
//context and id of canvas

var w = window.innerWidth;
var h = window.innerHeight;
//width and height of canvas

c.width = w;
c.height = h;
//setting the width and height for canvas

var mouse = {
  x: w / 2, 
  y: h / 2
};
//mouse position

document.addEventListener('mousemove', function(e){ 
    mouse.x = e.clientX || e.pageX; 
    mouse.y = e.clientY || e.pageY 
}, false);
//finding the mouse position

//when clicked, the set-up function runs
document.addEventListener('mousemove', 
  function() {
    var particles = [];
    for(i = 0; i < partNum; i++) {
      particles.push(new particle);
    }
    
    //the particle function
    function particle() {
      this.x = mouse.x;
      this.y = mouse.y;
      //setting the mouse position to the particle x and y
  
      this.vx = Math.random() * 10 - 5;
      this.vy = Math.random() * 10 - 5;
      //random velocity
  
      this.r = Math.random() * 10;
      //random radius
  
      var r = '#2ecc71';
      var o = '#1abc9c';
      var y = '#3498db';
      var array = [r, o, y];
	    this.color = array[Math.floor(Math.random() * 3)];
      //only random colors of the variables
    }

    var draw = function() {
      requestAnimFrame(draw);
      
      for(t = 0; t < particles.length; t++) {
        var p = particles[t];
        var color = p.color;
        //variables to help create the context of the particle(2)
    
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(p.x, p.y, p.r, Math.PI * 2, false);
        ctx.fillRect(p.x, p.y, p.r, 10);
        //the context of the particle(s)
    
        p.x+=p.vx;
        p.y+=p.vy;
        //setting velocities
        
        p.r*=0.75;
    
        if(p.r < 1) {
          p.color = 'white';
        };
        if(p.r < -1) {
          p.vx = 0;
          p.vy = 0;
        };
        //making white particles small
      }
    }

    draw();
  }, false);


//follow me!

//I appreciate it!

var particles = [];
for(i = 0; i < 25; i++) {
  particles.push(new particle);
}
    
//the particle function
function particle() {
  this.x = mouse.x;
  this.y = mouse.y;
  //setting the mouse position to the particle x and y
  
  this.vx = Math.random() * 20 - 10;
  this.vy = Math.random() * 20 - 10;
  //random velocity
  
  this.r = Math.random() * 10;
  //random radius
  
  var r = '#2ecc71';
  var o = '#1abc9c';
  var y = '#3498db';
  var array = [r, o, y];
  this.color = array[Math.floor(Math.random() * 3)];
  //only random colors of the variables
}

var draw = function() {
  requestAnimFrame(draw);
  
  for(t = 0; t < particles.length; t++) {
    var p = particles[t];
    var color = p.color;
    //variables to help create the context of the particle(2)
    
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(p.x, p.y, p.r, 10);
    //the context of the particle(s)
    
    p.x+=p.vx;
    p.y+=p.vy;
    //setting velocities
        
    p.r*=0.75;
    
    if(p.r < 1) {
      p.color = 'white';
    };
    if(p.r < -1) {
      p.vx = 0;
      p.vy = 0;
    };
    //making white particles small
  }
}

draw();