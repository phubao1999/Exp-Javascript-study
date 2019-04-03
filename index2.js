function Cat(){
    this.stomach = [];
};

Cat.prototype.eat = function(){
    this.stomach.push(mouse);
    mouse.die();
};

module.exports = Cat;