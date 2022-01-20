//画面に画像を表示する
document.write( '<img id="rico" src="https://1.bp.blogspot.com/-mydFVP9S3nA/XkZdIlKHS6I/AAAAAAABXUE/L72vQ9kOY2M6B-WR8fE5XHiPzjiSc1r3wCNcBGAsYHQ/s180-c/nigaoe_john_fleming.png">' );
 
//キャラクターの位置
var y = 0;
var x = 0;
 
//なにかキーが押されたとき、keydownfuncという関数を呼び出す
addEventListener( "keydown", keydownfunc );
 
//キーが押されたときに呼び出される関数
function keydownfunc( event ) {
 
	//押されたボタンに割り当てられた数値（すうち）を、key_codeに代入
	var key_code = event.keyCode;
 
	if( key_code === 37 ) x -= 32;		//「左ボタン」が押されたとき、xの値から32を引き算する
	if( key_code === 38 ) y -= 32;		//「上ボタン」が押されたとき、yの値から32を引き算する
	if( key_code === 39 ) x += 32;		//「右ボタン」が押されたとき、xの値に32を足し算する
	if( key_code === 40 ) y += 32;		//「下ボタン」が押されたとき、yの値に32を足し算する
 
	//りこちゃんの画像の位置（いち）を反映（はんえい）させる
	document.getElementById( 'rico' ).style.top = y + "px";
	document.getElementById( 'rico' ).style.left = x + "px";
 
}
