'use strict'

class Game {
	constructor( width, height ) {
		this.canvas = document.createElement( 'canvas' );
		document.body.appendChild( this.canvas );
		this.canvas.width = width || 320;
		this.canvas.height = height || 320;

		// オブジェクトを格納
		this.objs = [];
		// キーが押されているか
		this.input = {};
		// 登録されたキー
		this._keys = {};
	}

	start() {
		// 使用するキー
		this.keybind( 'up', 'up' );
		this.keybind( 'down', 'down' );
		this.keybind( 'right', 'right' );
		this.keybind( 'left', 'left' );

		//メインループを呼び出す
		this._mainLoop();

		//イベントリスナーをセットする
		this._setEventListener();
	}

	 // イベントリスナーをセットするためのメソッド
	_setEventListener() {
		//なにかキーが押されたときと、はなされたときに呼ばれる
		const _keyEvent = e => {
			//デフォルトのイベントを発生させない
			e.preventDefault();
			//_keysに登録された数だけ繰り返す
			for ( let key in this._keys ) {
				//イベントのタイプによって呼び出すメソッドを変える
				switch ( e.type ) {
					case 'touchstart' :
						//押されたキーが、登録されたキーの中に存在するとき、inputのそのキーをtrueにする
						if ( e.target.className === this._keys[key] ) this.input[key] = true;
						break;
					case 'touchend' :
						//押されたキーが、登録されたキーの中に存在するとき、inputのそのキーをfalseにする
						if ( e.target.className === this._keys[key] ) this.input[key] = false;
						break;
				}
			}
		}
		//なにかキーが押されたとき
		addEventListener( 'touchstart', _keyEvent, { passive: false } );
		//キーがはなされたとき
		addEventListener( 'touchend', _keyEvent, { passive: false } );
	} //_setEventListener() 終了

	/**
	 * メインループ
	 */
	_mainLoop() {
		//画家さん（コンテキスト）を呼ぶ
		const ctx = this.canvas.getContext( '2d' );
		//塗りつぶしの色に、黒を指定する
		ctx.fillStyle = '#000000';
		//左上から、画面のサイズまでを、塗りつぶす
		ctx.fillRect( 0, 0, this.canvas.width, this.canvas.height );

		//ゲームに登場する全てのもの（オブジェクト）の数だけ繰り返す
		for ( let i=0; i<this.objs.length; i++ ) {
			//スプライトやテキストなど、すべてのオブジェクトのupdateメソッドを呼び出す
			this.objs[i].update( this.canvas );
		}

		//自分自身（_mainLoop）を呼び出して、ループさせる
		requestAnimationFrame( this._mainLoop.bind( this ) );
	} //_mainLoop() 終了

	/**
	 * オブジェクトをゲームに追加できるようになる、addメソッドを作成
	 *
	 * 引数
	 * obj : 追加したいオブジェクト
	 */
	add( obj ) {
		//this.objs配列の末尾に、objの値を追加
		this.objs.push( obj );
	} //add() 終了

	/**
	 * 使いたいキーを登録できるようになる、keybindメソッドを作成
	 *
	 * 引数
	 * name : キーにつける名前
	 * key : キーコード
	 */
	keybind( name, key ) {
		//キーの名前と、キーコードを関連づける
		this._keys[name] = key;
		//キーが押されているかどうかを入れておく変数に、まずはfalseを代入しておく
		this.input[name] = false;
	} //keybind() 終了

}