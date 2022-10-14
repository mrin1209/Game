'use strict'

//ブラウザがページを完全に読みこむまで待つ
addEventListener( 'load', () => {

	const game = new Game(800,800);

	//歩く速さ
	const WALKING_SPEED = 10;

	const anko = new Sprite( 'img/anko.png',200,200 );
	anko.onenterframe = () => {
		if ( game.input.left ) anko.x -= WALKING_SPEED;
		if ( game.input.right ) anko.x += WALKING_SPEED;
		if ( game.input.up ) anko.y -= WALKING_SPEED;
		if ( game.input.down ) anko.y += WALKING_SPEED;
	}
	game.add( anko );

	game.start();

});