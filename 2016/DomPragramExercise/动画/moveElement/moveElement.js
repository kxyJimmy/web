// JavaScript Document
function positionMessage()
{
		if(!document.getElementById) return false;
	if(!document.getElementById("message")) return false;
	var elem = document.getElementById("message");
	elem.style.position="absolute";
	elem.style.left="50px";
	elem.style.top="100px";
	moveElement("message",125,25,20);
	if(!document.getElementById("message2")) return false;
	var elem = document.getElementById("message2");
	elem.style.position="absolute";
	elem.style.left="50px";
	elem.style.top="50px";
	moveElement("message2",125,25,20);
}
function moveElement(elementID,final_x,final_y,interval)
{
	if(!document.getElementById) return false;
	if(!document.getElementById(elementID)) return false;
	var elem = document.getElementById(elementID);//字符串加引号
	//elem.style.left="200px";
	var xpos =parseInt(elem.style.left);
	var ypos =parseInt(elem.style.top);
	if(xpos==final_x&&ypos==final_y)
	   return true;
	   if(xpos<final_x)
	    xpos++;
	  if(xpos>final_x)
	    xpos--;
	  if(ypos<final_y)
	    ypos++;
	  if(ypos>final_y)
	    ypos--;
	 elem.style.left=xpos+"px";
	 elem.style.top=ypos+"px";
	var repeat= "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
	 movement=setTimeout(repeat,interval);
}
function addLoadEvent(func)
{
var oldload =window.onload;
if(typeof window.onload!="function")
window.onload=func;
else
{
	window.onload=function()
	{
		oldonload();
		func();
	}
	
}
	
}
addLoadEvent(positionMessage);
//addLoadEvent(moveMessage);