const underline = document.getElementById('underline');
const menuList = document.querySelectorAll('.menu');

function handleMouseover() {
  const { left, width } = this.getBoundingClientRect();
  const underlineLeft = left + window.pageXOffset;
  const underlineWidth = width;
  underline.style.left = `${underlineLeft}px`;
  underline.style.width = `${underlineWidth}px`;
  underline.style.opacity = 1;
  underline.style.display = 'block';
}

function handleMouseout() {
  underline.style.opacity = 0;
  underline.style.display = 'none'; 
}

menuList.forEach((menu) => {
  menu.addEventListener('mouseenter', handleMouseover);
  menu.addEventListener('mouseleave', handleMouseout);
});



const menus = document.querySelectorAll(".career");

menus.forEach((menu) => {
  menu.addEventListener("mouseover", () => {
    const hidden_menu = menu.nextElementSibling;
    if (hidden_menu.classList.contains("hidden")) {
      hidden_menu.style.display = "block";
    }
  });

  menu.addEventListener("mouseleave", () => {
    const hidden_menu = menu.nextElementSibling;
    if (hidden_menu.classList.contains("hidden")) {
      hidden_menu.style.display = "none";
    }
  });
   // 숨겨진 메뉴에서 메뉴 항목 클릭시 숨겨진 메뉴 유지
   const hidden_menu = menu.nextElementSibling;
   if (hidden_menu) {
     hidden_menu.addEventListener("mouseenter", () => {
       hidden_menu.style.display = "block";
     });
     hidden_menu.addEventListener("mouseleave", () => {
       hidden_menu.style.display = "none";
     });
   }
});
function goToHome(){
    location.href="http://127.0.0.1:5500/8%EA%B3%BC%EC%A0%9C/index.html";
}