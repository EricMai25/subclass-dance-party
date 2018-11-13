var makeGifDancer = function(top, left, timeBetweenSteps) {
  
  makeDancer.call(this, top, left, 10);
  this.$node = $('<span class="dancer4"></span>');
  this.setPosition(top, left);
  this.step();
  this.left;
  this.$node.fadeIn(1000);
  this.pos = Math.floor(Math.random() * 1600);
};

makeGifDancer.prototype = Object.create(makeDancer.prototype);
makeGifDancer.prototype.constructor = makeGifDancer;
makeGifDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // this.$node.fadeIn(5000);
  
  if (this.pos === 1600) {
    makeDancer.prototype.left.call(this)
  }else {
  // this.$node.left = this.pos + 'px';
  this.setPosition(top, this.pos);
  this.pos ++ ; 
  } 
    
  //makeDancer.prototype.step.call(this) 
  
};
makeGifDancer.prototype.left = function() {
  makeDancer.prototype.left.call(this);
  // this.$node.fadeIn(5000);
  if (this.pos === 0) {
    makeDancer.prototype.step.call(this)
  } else{
    
    this.setPosition(top, this.pos);
    this.pos -- ;
    
  }
  // this.$node.left = this.pos + 'px';

  //makeDancer.prototype.step.call(this) 
  
};