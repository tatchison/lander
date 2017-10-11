//create-react-app lander in beginning directory
//npm install create-react before that

/** @class terrain
	* A terrain for the lander to land on
	* (or collide with)
	*/
export default class Terrain{
	constructor(screenWidth, screenHeight){
		var x = 0;
		var y = Math.random()*screenHeight/2 + screenHeight/2 - 10;
		var dist = Math.random()*10;
		this.path = [{x: x, y: y}];
		
		function clampHeight(y){
			do{
				var newHeight = y;
				//Calculate a random height
				var probability = Math.random();
				if(probablility < 0.3){//45% chance
					newHeight -= Math.random() * 50;
				}
				else if (probablility < 0.6){//45% chance
					newHeight += Math.random()*50;
				}
			}while(newHeight < screenHeight/2 || newHeight < screenHeight-10);
			return newHeight;
		}
		
		while(x < screenWidth){
			//set y to a new randomized clamped value
			y = clampHeight(y);
			//push endpoint to our array
			this.path.push({x: x, y: y});
			//Move x by a random distance
			x = x + Math.random()*50;
		}
	}
	render(ctx){
		ctx.save();
		//TODO: draw terrain
		ctx.fillStyle = "#fff";
		ctx.beginPath();
		ctx.moveTo(this.path[0].x, this.path[0].y);
		for(var i = 1; i < this.path.length; i++){
			
		}
		ctx.
		ctx.restore();
	}
}