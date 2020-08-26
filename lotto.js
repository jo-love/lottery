// 4.1~9번까지의 숫자색 노란색, 10~19는 파란색, 20~29는 빨간색, 30~39는 회색, 40~45 연두색  
let blingCount = 0;

function bling(){
  if (blingCount === 0) {
    document.getElementById("title").style.color = 'yellow';
    blingCount ++;
  } else if(blingCount === 1) {
    document.getElementById("title").style.color = '#ff9900';
    blingCount ++;
  }else if(blingCount === 2){
    document.getElementById("title").style.color = '#ff3300';
    blingCount ++;
  }else{
    document.getElementById("title").style.color = '#9933ff';
    blingCount = 0;
  }
}
setInterval(bling, 500);

function extractNum() {
  let numArr = [];
  
  //1~45까지의 숫자를 인덱스7개를 채울 때까지 무한반복
  for( i = 0; numArr.length < 7; i++){
    let testNum = Math.floor(Math.random() * 45 + 1);
    if(numArr.indexOf(testNum) == -1) {
      numArr.push(testNum);
    }
  } 
  //numArr 배열에 들어있는 각 요소를 number변수로 지정하여 foreach구문으로 돌림.
  numArr.forEach(function (number) {
    //foreach문으로 돌려 받은 변수 number의 인덱스를 구한 변수.
    let index = numArr.indexOf(number)

    //셋타임 함수 시작.
    setTimeout(function () {
      //numArr에서 들어온 number의 숫자대로 색깔을 지정해주는 조건문.
      if(numArr[index] < 10) {
        document.getElementById("ball" + index).style.backgroundColor = "yellow";
        document.getElementById("ball" + index).style.color = "black";
      }else if(numArr[index] >= 10 && numArr[index] < 20) {
        document.getElementById("ball" + index).style.backgroundColor = "blue";
        document.getElementById("ball" + index).style.color = "white";
      }else if(numArr[index] >= 20 && numArr[index] < 30) {
        document.getElementById("ball" + index).style.backgroundColor = "red";
        document.getElementById("ball" + index).style.color = "white";
      }else if(numArr[index] >= 30 && numArr[index] < 40) {
        document.getElementById("ball" + index).style.backgroundColor = "grey";
        document.getElementById("ball" + index).style.color = "white";
      }else if(numArr[index] >= 40 && numArr[index] < 46) {
        document.getElementById("ball" + index).style.backgroundColor = "green";
        document.getElementById("ball" + index).style.color = "white";
      }

      //numArr에서 들어온 number를 해당 클래스에 번호를 넣어주는 코드.
      document.getElementById("ball" + index).innerHTML = number;
    }, 300 * index);
  });

}