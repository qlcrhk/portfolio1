const headerWrap = document.getElementById("headerWrap");
const gnbList = document.getElementById("gnbList");
const active = document.querySelector('#gnbList.active');
const gnbMenus = document.querySelectorAll("#gnb > ul > li > a");
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".mobileClose");

// 밑줄 동작 변수
let underlineActive = false;


hamburger.addEventListener('click', function () {
  gnbList.classList.add('mobile');
  closeBtn.classList.add('show');
})
closeBtn.addEventListener('click', function () {
  gnbList.classList.remove('mobile');
  closeBtn.classList.remove('show');
})

gnbList.addEventListener('mouseenter', function() {
  gnbList.classList.add('active');

})
gnbList.addEventListener('mouseleave', function() {
  gnbList.classList.remove('active');
})
