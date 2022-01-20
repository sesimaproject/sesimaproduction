//画面に画像を表示する
document.write( '<img id="rico" src="https://user-images.githubusercontent.com/93245017/150281128-724ce237-09c5-4d4b-8753-1ee71c0c478b.png">' );
 
//ricoのオブジェクトを作成
var rico = new Object();
rico.x = 0;
rico.y = 0;
 
//キーボードのオブジェクトを作成
var key = new Object();
key.up = false;
key.down = false;
key.right = false;
key.left = false;
 
//メインループ
function main() {
 
	//キーボードが押された時、keydownfunc関数（かんすう）を呼び出す
	addEventListener( "keydown", keydownfunc );
	//キーボードがはなされた時、keyupfunc関数（かんすう）を呼び出す
	addEventListener( "keyup", keyupfunc );
 
	//方向キーが押されている場合（ばあい）は、ricoが移動する
	if( key.left === true ) rico.x -= 32;		//key.leftがtrueのとき、rico.xの値から32を引き算する
	if( key.up === true ) rico.y -= 32;		//key.upがtrueのとき、rico.yの値から32を引き算する
	if( key.right === true ) rico.x += 32;		//key.rightがtrueのとき、rico.xの値に32を足し算する
	if( key.down === true ) rico.y += 32;		//key.downがtrueのとき、rico.yの値に32を足し算する
 
	//ricoの画像の位置（いち）を反映（はんえい）させる
	document.getElementById( 'rico' ).style.top = rico.y + "px";
	document.getElementById( 'rico' ).style.left = rico.x + "px";
 
	//main関数（かんすう）、つまり自分自身の関数を呼び出すことでループさせる。
	requestAnimationFrame( main );
 
}
requestAnimationFrame( main );
 
//キーボードが押されたときに呼び出される関数（かんすう）
function keydownfunc( event ) {
	var key_code = event.keyCode;
	if( key_code === 37 ) key.left = true;		//「左ボタン」が押されたとき、key.leftをtrueにする
	if( key_code === 38 ) key.up = true;		//「上ボタン」が押されたとき、key.upをtrueにする
	if( key_code === 39 ) key.right = true;		//「右ボタン」が押されたとき、key.rightをtrueにする
	if( key_code === 40 ) key.down = true;		//「下ボタン」が押されたとき、key.downをtrueにする
}
 
//キーボードがはなされたときに呼び出される関数
function keyupfunc( event ) {
	var key_code = event.keyCode;
	if( key_code === 37 ) key.left = false;		//「左ボタン」がはなされたとき、key.leftをfalseにする
	if( key_code === 38 ) key.up = false;  		//「上ボタン」がはなされたとき、key.upをfalseにする
	if( key_code === 39 ) key.right = false		//「右ボタン」がはなされたとき、key.rightをfalseにする;
	if( key_code === 40 ) key.down = false;		//「下ボタン」がはなされたとき、key.downをfalseにする
}

