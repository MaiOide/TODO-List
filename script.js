'use strict'
function onButtonClick() {
  //テキストの値を取得
  let target = document.forms.id_form1.id_textBox1.value;

  //やりたいことリスト追加
  let p = document.createElement('p');//<p></p>
  p.className = "item-list";//<p class="item-list"></p>
  p.id = document.getElementsByTagName("p").length + 1;//<p class="item-list" id=1></p>
  p.innerHTML = target;//<p class="item-list" id=1>target</p>
  document.body.appendChild(p);//追加

  //削除ボタン追加
  let input = document.createElement("input");
  input.onclick = removeList;
  input.className="remove"
  input.value = "削除";
  input.type = "button";
  input.id = "button" + document.getElementsByTagName("p").length;
  let target2 = document.getElementById(p.id);
  target2.appendChild(input);

  //最終更新日時追加
  let now = new Date();
  let nowYear = now.getFullYear();
  let nowMon = now.getMonth() + 1;
  let nowDate = now.getDate();
  let nowHour = now.getHours();
  let nowMinute = now.getMinutes();
  let nowSecond = now.getSeconds();

  
  nowMinute=nowMinute.toString();
if(nowMinute.length===1){
  nowMinute="0"+nowMinute
}
nowSecond=nowSecond.toString();
if(nowSecond.length===1){
  nowSecond="0"+nowSecond
}

  document.getElementById("update-time").innerText = `更新日時: ${nowYear}/${nowMon}/${nowDate} ${nowHour}:${nowMinute}:${nowSecond}`;
}

//削除
function removeList() {
  if (window.confirm('本当に削除しますか？')) {
    
    this.previousSibling.remove();
    this.remove();
  }
}
