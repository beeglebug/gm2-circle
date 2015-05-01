var Vector2 = require('gm2-vector2');

/**
 *  * a circle
 *   * @constructor
 *    * @param {Number} [radius=1] the radius of the circle
 *     * @param {Vector2} [position=new Vector2] the radius of the circle
 *      */
var Circle = function(radius, position) {

	this.radius = radius || 1;
	this.position = position || new Vector2();

};

Circle.prototype.getCenter = function() {

	return this.position;

};

Circle.prototype.setCenter = function(position) {

	this.position = position;

	return this;

};

Circle.prototype.setRadius = function(radius) {

	this.radius = radius;

	return this;
};

/**
 *  * creates and returns a copy of the circle
 *   * @returns {Circle} a copy of the original circle
 *    */
Circle.prototype.copy = function() {

	return new Circle( this.radius, this.position.copy() );

};


/**
 *  * creates and returns a rect which exactly contains the circle
 *   * @returns {Rect} a Rect which encompasses the circle
 *    */
Circle.prototype.toRect = function() {

	var size = this.radius * 2;
	var pos = this.position.copy();
	pos.x -= this.radius;
	pos.y -= this.radius;

	return new Rect( size, size, pos );

};

Circle.prototype.randomPoint = function() {

    var angle = util.random() * Math.PI * 2;
    var r = Math.sqrt( util.random() ) * this.radius;

	return new Vector2(
		this.position.x + (r * Math.cos(angle)),
		this.position.y + (r * Math.sin(angle))
	);

};

Circle.prototype.toString = function() {
	return this.radius + 'r@' + this.position.toString();
};


Circle.prototype.scale = function(scale) {

	this.radius *= scale;
	return this;
};

// does the same as scale
// Circle.prototype.expand = function(amount) {
// 	this.radius += amount;
// 		return this;
// 		};a
//
//
module.exports = Circle;
