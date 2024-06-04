//enable function

buttonEle = document.body.querySelector("#activation");
containerEle = document.body.querySelector("#container");
imageEle = document.body.querySelector("#actualPicture")
messageEle = document.body.querySelector('#message');


let mode = "light";

function switchTheme(){

    if(mode === "light"){

        mode = "dark";
        
        containerEle.setAttribute("class","dark");
        
        imageEle.setAttribute("src","imgAsset/nightImg.png");

        messageEle.setAttribute("style","color:white");



    } else{
    
        mode = "light";

        containerEle.setAttribute("class","light");
        
        imageEle.setAttribute("src","imgAsset/dayImg.png");

        messageEle.setAttribute("style","color:black");

    }

}

///

buttonEle.addEventListener("click", switchTheme);