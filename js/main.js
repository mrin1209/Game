'use strict'

//ブラウザがページを完全に読みこむまで待つ
addEventListener( 'load', () => {

	const game = new Game(800,800);

  	//マップの作成
	const map = [
		[11,11,11,11,11,11,11,11,11,11],
		[11,10,10,10,10,10,10,10,10,11],
		[11, 4, 4, 4, 4, 4, 4, 4, 4,11],
		[11, 4,11, 4, 4,11,11,11, 4,11],
		[11, 4,11,11,11,11,10,10, 4,11],
		[11, 4,11,10,10,11, 4, 4, 4,11],
		[11, 4,11, 4, 4,11,11,11, 4,11],
		[11, 4, 9, 4, 4, 9,10,11, 4,11],
		[11, 4, 4, 4, 4, 4, 4,11, 4,11],
		[11,11,11,11,11,11,11,11,11,11]
	];

	//歩く速さ
	const WALKING_SPEED = 10;

  //変数sceneに、あなたはシーンですよ、と教える
	const scene = new Scene();

  //変数tilemapに、あなたはタイルマップですよ、と教える
	const tilemap = new Tilemap( 'img/tile.png' );
	//tilemap.dataに、どんなマップなのか教える
	tilemap.data = map;
	//マップを登録する
	scene.add( tilemap );

  const anko = new Sprite( 'img/anko.png',200,200 );

  //sceneに、山田先生のスプライト画像を追加して、とお願いする
	scene.add( anko );

	scene.onenterframe = () => {
		if ( game.input.left ) anko.x -= WALKING_SPEED;
		if ( game.input.right ) anko.x += WALKING_SPEED;
		if ( game.input.up ) anko.y -= WALKING_SPEED;
		if ( game.input.down ) anko.y += WALKING_SPEED;
	}

	//gameに、シーンを追加して、とお願いする
	game.add( scene );

	game.start();

});