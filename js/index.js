var aid=0;
var myopacity=0;

function fontsports()
{
	if(aid<=8){
		if(myopacity<1)
		{
			myopacity+=0.01;
			getById("f"+aid).style.opacity=myopacity;
		}else
		{
			myopacity=0;
			aid++;
		}
	}
	if(aid>8){
		for (var i = 0; i < 9; i++) {
			getById("f"+i).style.opacity=0;	
		}
		aid=0;
		myopacity=0;
		fontsports();
	}
}
setInterval(fontsports,10);
function getById(id)
{
	return document.getElementById(id);
}
function menu(){
	var menu=document.getElementById('menu');
	menu.style.display=(menu.style.display=="none")?"block":"none";
}


function over1()
{
	var id1=document.getElementById("t1");
	var id2=document.getElementById("t2");
	id1.style.backgroundColor="#fff";
	id1.style.color="#18bd9b";
	id2.style.backgroundColor="#18bd9b";
	id2.style.color="#fff";
}
function over2()
{
	var id1=document.getElementById("t1");
	var id2=document.getElementById("t2");
	id2.style.backgroundColor="#fff";
	id2.style.color="#18bd9b";
	id1.style.backgroundColor="#18bd9b";
	id1.style.color="#fff";
}


function animate(j){/****检索模块中指向图标的变化****/
	var myid=document.getElementById('search_which');
	var m=52*(j-1)+40;
	myid.style.left=m+'px';
}

function login(){
	document.getElementById("gin").style.display = "block";
}
function show1(){
	document.getElementById("in").value = "学(工)号";
	document.getElementById("gin").style.display = "none";
}
function show2(){
	document.getElementById("in").value = "借书证号";
	document.getElementById("gin").style.display = "none";
}