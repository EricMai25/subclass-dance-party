var makeGifDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer4"></span>');
  this.setPosition(top, left);
  this.step();
};

makeGifDancer.prototype = Object.create(makeDancer.prototype);
makeGifDancer.prototype.constructor = makeGifDancer;
makeGifDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.fadeIn();
};