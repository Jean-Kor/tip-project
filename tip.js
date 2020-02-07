function calculateTip(){

var payment=document.getElementById("bill").value;
var quality=document.getElementById("quality").value;
var splits=document.getElementById("people").value;

if (splits === "" || splits <= 1){
	splits = 1;

	document.getElementById("each").style.display="none";
}else{
	document.getElementById("each").style.display="block";
	}
	
var totalAmount = (payment*quality)/splits;

totalAmount=Math.round(totalAmount*100)/100;

totalAmount=totalAmount.toFixed(2);

document.getElementById("showAmount").style.display="block";
document.getElementById("tip").innerHTML=totalAmount;

}

document.getElementById("showAmount").style.display="none";
document.getElementById("each").style.display="none";

document.getElementById("totalTip").onclick=function(){
	calculateTip();
};