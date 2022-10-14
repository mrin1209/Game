'use strict'

/**
 * シーンに関してのクラス
 */
class Scene {

	constructor() {
		this.objs = [];
	} //constructor() 終了

	/**
	 * シーンにオブジェクトを追加するときに呼び出されるメソッド
	 *
	 * 引数
	 * obj : スプライトやテキストなど（オブジェクト）
	 */
	add( obj ) {
		//this.objsの末尾に、objを追加
		this.objs.push( obj );
	} //add() 終了

}