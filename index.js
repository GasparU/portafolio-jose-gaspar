function toggleMenu() {
  const menuToggle = document.querySelector(".toggle");
  const sidebar = document.querySelector(".sidebar");
  menuToggle.classList.toggle("active");
  sidebar.classList.toggle("active");
}

let list = document.querySelectorAll(".list")
function setActiveClass(){
  list.forEach((item) => {
    item.classList.remove("active2");
    this.classList.add("active2");
  });
}
list.forEach( (item)=> 
item.addEventListener("mouseover", setActiveClass))

function toggleMenu2() {
  const menuToggle = document.querySelector(".toggle");
  const sidebar = document.querySelector(".navigation");
  menuToggle.classList.toggle("active2");
  sidebar.classList.toggle("active2");
}