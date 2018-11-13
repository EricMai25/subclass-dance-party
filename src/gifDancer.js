var makeGifDancer = function(top, left, timeBetweenSteps) {
  
  makeDancer.call(this, top, left, 10);
  this.$node = $('<span class="dancer4"></span>');
  this.setPosition(top, left)
  this.step();
  this.$node.fadeIn(1000);
  this.pos = 0;
};

makeGifDancer.prototype = Object.create(makeDancer.prototype);
makeGifDancer.prototype.constructor = makeGifDancer;
makeGifDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // this.$node.fadeIn(5000);
  
    if(this.pos === 1600){
      return;
    }
    // this.$node.left = this.pos + 'px';
    this.setPosition(top, this.pos)
    this.pos += 1;
    
    //makeDancer.prototype.step.call(this) 
  
    
};