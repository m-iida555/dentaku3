var input1p = document.getElementById('input1');
var operator;
var input;
var point=0;
var zeroTwo=0;
var toBeErased = 0;


function reset(){
  input1p.value="";
  input2="";
  operator="";
  point=0;
  zeroTwo=0;
}

function num(n){
  if(toBeErased==1){
    toBeErased=0;
    input1p.value="";
  }
  /*
  if(operator=="="){
    operator="";
    input1p.value="";
  } 
  */
  /*小数点２つ以上の入力不可*/
    /*  質問部分は以下です */
  if(n=="00"){
    if(zeroTwo == 1)return;
    if(input1p.value=="0" || ""){
    input1p.value="0";
    zeroTwo = 1;
    return;
    }
  }
  
  
  if(n=='.'){
    if(point == 1)return;
        /*.01を0.01に変換*/
    if(input1p.value=="")input1p.value="0.";
    else input1p.value=input1p.value + ".";
    point=1;
    return;
    }
  
  if(input1p.value=="0"){
    input1p.value="";
  }　/*num関数で、nが入力された時、もし入力欄に0が既に入力されていたら、入力欄を消し、nを入力するという指示*/
  else if(input1p.value=="00"){
    input1p.value="";
  }
  input1p.value=input1p.value+n;
  
  

    
  }
  
/*
 if(input1p.value=="0","")
 if(n="00")
 input1p.value="";
 input1p.value=input1p.value+"0";
}
*/
  
/* 何の入力もない時に00でスタートさせたくない時の方法の確認*/




function calc(c) {
 if(operator!=""){
   equal();
 }
 operator = c;
 input2 = input1p.value;
 toBeErased = 1;
}

function equal() {
 if      (operator == "+") { input1p.value = Number(input2) + Number(input1p.value);}
 else if (operator == "-") { input1p.value = Number(input2) - Number(input1p.value);}
 else if (operator == "×") { input1p.value = Number(input2) * Number(input1p.value);}
 else if (operator == "÷") { input1p.value = Number(input2) / Number(input1p.value);}
 operator = "";
 toBeErased=1;
} 