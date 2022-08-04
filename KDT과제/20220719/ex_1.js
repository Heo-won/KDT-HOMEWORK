 
// const dateTag = document.querySelectorAll("td");
// const inputDate = document.querySelector("#date");
// const inputContent = document.querySelector("#content");

// for (let i = 0; i < dateTag.length; i++) {
//   dateTag[i].addEventListener("click", function (e) {
//     // 내가 클릭한 날짜
//     let day = e.target.innerText;
//     inputDate.value = day;
//   });
// }

// function writeSchedule() {
//   if (inputDate.value == "") {
//     alert("날짜를 선택해주세요.");
//   } else if (inputContent.value == "") {
//     alert("내용을 입력해주세요.");
//   } else {
//     let day = Number(inputDate.value);

//     const addLi = document.createElement("li");
//     addLi.append(inputContent.value);

//     dateTag[4 + day].append(addLi);

//     inputDate.value = "";
//     inputContent.value = "";
//   }
// }


const date = document.querySelector("#date");
const content = document.querySelector("#content");
const calendar = document.querySelector("table");

let target;

calendar.addEventListener("click", function(e) {
  console.log("e-target", e.target.tagName);
  // console.log("e-target", e.currenttarget); //클릭된 요소의 부모요소
  if(e.target.tagName === "P") {
    date.value = e.target.textContent;
    target = e.target.parentNode;
     } else if (e.target.tagName === "TD") {
      date.value = e.target.querySelector("p").textContent;//e.target에서도 쿼리셀렉터 사용 가능
      target = e.target;
  } else if (e.target.tagName === "DIV") {
    e.target.remove();
  }

})

function writeSchedule() {
  let task = content.value;
  let divEl = document.createElement("div");
// //두번째 방법
  divEl.setAttribute("onclick", "deleteTask(this)");
// //위에 한줄까지 두번째 방법
  divEl.textContent = task;


  //첫번째 방법
  // divEl.addEventListener("click", function () {
  //   if(divEl.style.textDecoration === "line-through") {
  //     divEl.remove();
  //   } else {
  //     divEl.style = "text-decoration: line-through";
  //   }
   
   
  //   divEl.style = text-decoration: line-through;
  // })

  target.append(divEl);

  content.value = "";
}

//두번째 방법
function deleteTask(t) {
  t.remove();  //t = this
}