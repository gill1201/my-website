const icon= document.getElementById("searchimg");
const box= document.getElementById("searchbox");
icon.addEventListener("click",()=> {
    box.classList.toggle("active");
    if (box.classList.contains("active")) {
      box.focus();
    }
});