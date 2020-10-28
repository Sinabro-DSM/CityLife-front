 let char = document.getElementById('char');
let i = 1;
let j = 0;
char.style.transition = "0s";

$(document).keydown(function(event) {
    char.src = "./../IMG/캐릭터2.png";
    if (event.keyCode == '37') {
        if(char.style.marginLeft.split("px")[0]==0){
            return;
        }else{ // 끝에서 멈추게
        char.style.marginLeft = (i-1)*70 + "px";
        }
        i--;
    } // 왼쪽으로 움직이기
    else if (event.keyCode == '39') {
        char.src = "./../IMG/캐릭터1.png";
        if(char.style.marginLeft.split("px")[0]>=3290){
            return;
        }else{
            char.style.marginLeft = i*70 + "px";
        }
        i++;
    } // 오른쪽으로 움직이기
    else if (event.keyCode == '32'){
        char.style.transition = "0.4s";
        char.style.marginBottom = "100px";
        setTimeout(function() {
            char.style.marginBottom = "0px";
            char.style.transition = "0s";
          }, 500);
    } // 점프기능

  }); // 캐릭터 움직이는 거 구현 */

   let val = true;
  let alertVal = document.getElementById('alert'); 
  let arrow = document.getElementById('arrow');
  let alertVal2 = document.getElementById('alert2'); 
  let arrow2 = document.getElementById('arrow2');
  let alertVal3 = document.getElementById('alert3'); 
  let arrow3 = document.getElementById('arrow3');
  window.onload = function(){
      setInterval(() => {
        console.log(char.style.marginLeft)
        if(char.style.marginLeft == '700px'){
            alertVal.style.display = "flex";
            arrow.style.display = 'block';
            $(document).keydown(function(event) {
                if(event.keyCode == '38'){
                    location.href = "https://www.dsm-dms.com/";
                    val = !val;
                }
              }); // 캐릭터 움직이는 거 구현 
        }        
        else{
            alertVal.style.display = "none";
            arrow.style.display = 'none';
        }
        if(char.style.marginLeft == '1960px'){
            alertVal2.style.display = "flex";
            arrow2.style.display = 'block'
             $(document).keydown(function(event) {
                if(event.keyCode == '38'){
                    location.href = "https://www.dsm-dms.com/";
                }
              }); // 캐릭터 움직이는 거 구현 
        }        
        else{
            alertVal2.style.display = "none";
            arrow2.style.display = 'none'
        }
        if(char.style.marginLeft == '3080px'){
            alertVal3.style.display = "flex";
            arrow3.style.display = 'block'
             $(document).keydown(function(event) {
                if(event.keyCode == '38'){
                    location.href = "https://www.dsm-dms.com/";
                }
              }); // 캐릭터 움직이는 거 구현 
        }        
        else{
            alertVal3.style.display = "none";
            arrow3.style.display = 'none'
        }
      }, 1);
  }
  
