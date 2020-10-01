var higstrong;
window.onload = gethigstrong();
 
function gethigstrong() 
{
  higstrong = document.getElementsByTagName('strong'); 
}
function Highlight() 
{
   for (var i=0; i<higstrong.length; i++)
   {                                                    
    higstrong[i].style.color = "red";
    }
}
function ReturnAsItIs()
{
  for (var i=0; i<higstrong.length; i++) 
  {
    higstrong[i].style.color = "black";
  }
}
