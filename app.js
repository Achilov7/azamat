var img = document.getElementById('img');

var slides=['https://motor.ru/imgs/2021/03/19/10/4568451/0e28c07439450dadd18aeec20e6181f236816d33.jpg'];

var Start=0;

function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img src="+slides[Start-1]+">";
   
}
setInterval(slider,2000);
