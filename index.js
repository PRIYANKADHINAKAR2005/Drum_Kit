var NumberOfButtons=document.querySelectorAll("button").length;
for( i=0;i<NumberOfButtons;i++)
{

document.querySelectorAll(".drum")[i].addEventListener("click",function()
{
    
    var buttonHtml=this.innerHTML;
    makesound(buttonHtml);
    buttonAnimation(buttonHtml);

    
    

});
}

document.addEventListener("keydown",function(event)
{
    var buttonHtml=event.key;
    makesound(buttonHtml);
    buttonAnimation(buttonHtml);
});
function makesound(key){

    switch(key)
    {
        case "w":
            var crash=new Audio("./sounds/crash.mp3");
            crash.play();
            break;
            
        case "a":
            var crash=new Audio("./sounds/kick-bass.mp3");
            crash.play();
            break;
            
        case "s":
            var crash=new Audio("./sounds/snare.mp3");
            crash.play();
            break;
            
        case "d":
             var crash=new Audio("./sounds/tom-1.mp3");
             crash.play();
             break;
             
        case "j":
            var crash=new Audio("./sounds/tom-2.mp3");
            crash.play();
            break;
            
        case "k":
            var crash=new Audio("./sounds/tom-3.mp3");
            crash.play();
            break;
            
        case "l":
            var crash=new Audio("./sounds/tom-4.mp3");
            crash.play();
            break;
            


        

    }
}
function buttonAnimation(key)
{
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){document.querySelector("."+key).classList.remove("pressed")},200);
    
}
