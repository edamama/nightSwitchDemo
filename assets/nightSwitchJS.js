//enable function

buttonEle = document.body.querySelector("#activation");
containerEle = document.body.querySelector("#container");
imageEle = document.body.querySelector("picture")


let mode = "light";

function switchTheme(){

    if(mode === "light"){

        mode = "dark";
        
        containerEle.setAttribute("class","dark");
        
        imageEle.src = "imgAsset/nightImage";

    } else{
    
        mode = "light";

        containerEle.setAttribute("class","light");
        
        imageEle.src = "imgAsset/dayImg.png";

    }

}

///

buttonEle.addEventListener("click", switchTheme);