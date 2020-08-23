// 4.1~9번까지의 숫자색 노란색, 10~19는 파란색, 20~29는 빨간색, 30~39는 회색, 40~45 연두색  
let blingCount = 0;

function bling(){
  if (blingCount === 0) {
    document.getElementById("title").style.color = '#d6806e';
    blingCount ++;
  } else if(blingCount === 1) {
    document.getElementById("title").style.color = '#fbb666';
    blingCount ++;
  }else if(blingCount === 2){
    document.getElementById("title").style.color = '#f9f871';
    blingCount ++;
  }else{
    document.getElementById("title").style.color = '#f2ecff';
    blingCount = 0;
  }
}
setInterval(bling, 500);

function extractNum() {
  let numArr = [];
  
  //1~45까지의 숫자를 인덱스7개를 채울 때까지 무한정 반복
  for( i = 0; numArr.length < 7; i++){
    let testNum = Math.floor(Math.random() * 45 + 1);
    if(numArr.indexOf(testNum) == -1) {
      numArr.push(testNum);
    }
  } 
 
  for( i = 0; i < 7; i++){

    //지정해준 숫자에 맞는 색으로 바꿔준다.
    if(numArr[i] < 10) {
      document.getElementById("ball" + i).style.backgroundColor = "yellow";
      document.getElementById("ball" + i).style.color = "black";
    }else if(numArr[i] >= 10 && numArr[i] < 20) {
      document.getElementById("ball" + i).style.backgroundColor = "blue";
      document.getElementById("ball" + i).style.color = "white";
    }else if(numArr[i] >= 20 && numArr[i] < 30) {
      document.getElementById("ball" + i).style.backgroundColor = "red";
      document.getElementById("ball" + i).style.color = "white";
    }else if(numArr[i] >= 30 && numArr[i] < 40) {
      document.getElementById("ball" + i).style.backgroundColor = "grey";
      document.getElementById("ball" + i).style.color = "white";
    }else if(numArr[i] >= 40 && numArr[i] < 46) {
      document.getElementById("ball" + i).style.backgroundColor = "green";
      document.getElementById("ball" + i).style.color = "white";
    }

     //인덱스 7개를 채운 숫자들을 html에 연결
    document.getElementById("ball" + i).innerHTML = numArr[i];
  }
}
