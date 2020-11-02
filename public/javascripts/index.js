let firstNum = document.getElementById("first-num");
let secondNum = document.getElementById("second-num");
let resNum = document.getElementById("res-num");
let notice = document.getElementById("notice");
let form = document.getElementById("form")

calcBtn.addEventListener("submit", formSubmit);

function formSubmit() {

  resNum.value = "";

  if(firstNum.value.length === 0 || secondNum.value.length === 0)
  {
    notice.innerHTML = "Cả 2 ô đều phải có giá trị!";
    return false;
  }

  let inp1 = parseFloat(firstNum.value);
  let inp2 = parseFloat(secondNum.value);

  if(isNaN(inp1))
  {
    notice.innerHTML = "Giá trị ở ô <em> Số thứ nhất </em> không phải là số!";
    return false;
  }

  if(isNaN(inp2))
  {
    notice.innerHTML = "Giá trị ở ô <em> Số thứ hai </em> không phải là số!";
    return false;
  }

  let methods = document.getElementsByName('operation');

  let isChecked = false;

  for(i = 0; i < methods.length; i++) { 
    if(methods[i].checked) {

      isChecked = true;

      if (methods[i].value === "divide") {
        if (inp2 === 0) {
          notice.innerHTML = "Số bị chia không thể bằng 0!"
          return false;
        }
      }
    }
  } 

  if (!isChecked) {
    notice.innerHTML = "Chưa phép tính nào được chọn!";
    return false;
  }

  notice.innerHTML = "";
}