/*
Plugin Name: Lightbox
Plugin Version: 1.0.0
Plugin Author: Abhiraj Yadav
About Plugin: ...
*/


// function to include html popup code

function includePopupHTML(){

    let html = '<div id="vis-popup"><span id="close" onclick="closePopUp()"><img src="lightbox/images/close.png" alt="" id="npop"></span><img src="lightbox/images/left.png" alt="" id="leftarrow"><img src="lightbox/images/right.png" alt="" id="rightarrow"><img src="images/image2.jpg" alt="" id="mainPopImage"></div>';

    let popdiv = document.createElement("div");
    popdiv.innerHTML = html;

    document.body.insertBefore(popdiv, document.body.firstChild);
}


let img;
let current;

// includePopupHTML();

// function to init plugin
function imagePopupInit(target){
    
    //select all images with class target
    img = document.getElementsByClassName(target);

    // add event listener on all selected images
    for(let i = 0; i < img.length; i++){
        // add pointer
        img[i].style.cursor = "pointer";

        // add event listener
        img[i].addEventListener("click", function(){
            document.getElementById("mainPopImage").src = this.src;
            document.getElementById("vis-popup").style.display = "block";
            checkArrow();
        })
    }

    // console.log(img);
    
    includePopupHTML();
    // next button
    document.getElementById("rightarrow").addEventListener('click', function(){
        nextImg();
    });

    // prev button
    document.getElementById("leftarrow").addEventListener('click', function(){
        prevImg();
    });
    
}


// close button
function closePopUp(){
    document.getElementById("mainPopImage").src = "";
    document.getElementById("vis-popup").style.display = "none";
}

// next image
function nextImg(){
    getCurrentImage();
    current++;
    document.getElementById("mainPopImage").src = img[current].src;
    checkArrow();
}

// prev image
function prevImg(){
    getCurrentImage();
    current--;
    document.getElementById("mainPopImage").src = img[current].src;
    checkArrow();
}


function getCurrentImage(){
    for (let i = 0; i < img.length; i++) {
        if(img[i].src == document.getElementById("mainPopImage").src){
            current = i;
        }    
    }
}


function checkArrow(){
    getCurrentImage();
    if (current == "0") {
        document.getElementById("leftarrow").style.display = "none";
        document.getElementById("rightarrow").style.display = "block";
    } else if(current == img.length -1 ){
        document.getElementById("rightarrow").style.display = "none";
        document.getElementById("leftarrow").style.display = "block";
    } else {
        document.getElementById("leftarrow").style.display = "block";
        document.getElementById("rightarrow").style.display = "block";

    }
}

