const alphabet = 	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let ranstring;
let field;
$(()=>{
	field = $("#start");
   field.click(StartResp);
});

function GenRandom(length){
	let s = "";
	for(let i = 0;i < length;i++){
		s+=alphabet[Math.floor(Math.random()*alphabet.length)];
	}
	return s;
}

function PutWrong(){
	let timeout;
	field.unbind("click");
	if(Math.floor(Math.random()*50)===0){
		field.text(ranstring);
		field.click(()=>{
			alert("恭喜！找到了正确的字符串！");
			clearTimeout(timeout);
			field.unbind("click");
		});
		timeout = setTimeout(()=>{
			alert("错过了正确的字符串！");
			field.unbind("click");
		},1000);
	} else {
		let wrongstring = GenRandom(6);
		field.text(wrongstring);
		field.click(()=>{
			alert("点击了错误的字符串！");
			clearTimeout(timeout);
			field.unbind("click");
		});
		timeout = setTimeout(PutWrong,1000);
	}
}

function StartResp(){

		field.unbind("click");
		ranstring = GenRandom(6);
		field.text(ranstring);
		setTimeout(PutWrong,3000);

}
