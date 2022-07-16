const toDoForm = document.querySelector(".frmToDo");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".ulToDoList");

const TODOS_LS = "toDos";

let toDos = []; // 할일 배열에

function deleteTodo(event) {
  // console.log(event.target);
  // console.log(event.target.parentNode); // 클릭한 버튼의 부모 요소 (li 태그 DOM )
  const btn = event.target; //
  const li = btn.parentNode;
  toDoList.removeChild(li);

  //
  const cleanToDos = toDos.filter(function (toDo) {
    // 개별항목들 하나씩 돌면서 함수 호출한 후 해당되는 것만 배열에 담아 리턴
    return toDo.id !== parseInt(li.id); // 숫자변환하고, 조건비교.  여기서는 클릭한 것 빼고 나머지들
  });
  console.log(cleanToDos);
  toDos = cleanToDos; // 삭제 결과를 toDos 에
  saveToDos();
}

function saveToDos() {
  // localStorage.setItem(TODOS_LS, toDos);
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // 오브젝트를 를 문자열 jSON로 변환해서 저장
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.addEventListener("click", deleteTodo);
  const span = document.createElement("span");
  const newId = toDos.length + 1; // 항목별 ID 부여. 삭제용 등
  delBtn.innerText = "❌";
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId; // 태그에 id=1 식으로 부여됨.
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj); // 추가
  saveToDos(); // 저장
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
  // console.log(toDos);
}

function loadToDos() {
  const loadedtoDos = localStorage.getItem(TODOS_LS);
  if (loadedtoDos !== null) {
    const parsedToDos = JSON.parse(loadedtoDos); // JSON 을 오브젝트로 변환
    // console.log(parsedToDos);
    parsedToDos.forEach(function (toDo) {
      // console.log(toDo);
      paintToDo(toDo.text);
    });
  }
}

window.addEventListener('load', () => {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
});