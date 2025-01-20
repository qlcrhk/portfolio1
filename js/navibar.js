const headerWrap = document.getElementById("headerWrap");
const gnb = document.getElementById("gnb");
const horizontalUnderline = document.getElementById("horizontalUnderline");
const gnbMenus = document.querySelectorAll("#gnb > ul > li > a");

// 밑줄 동작 변수
let underlineActive = false;

document.querySelector(".hamburger").addEventListener("click", function(){
  document.getElementById("gnbList").style.right = 0;
  document.querySelector(".mobileClose").style.display = "block";
  console.log("hi");
});

document.querySelector(".mobileClose").addEventListener("click", function(){
  document.getElementById("gnbList").style.right = "-500px";
  document.querySelector(".mobileClose").style.display = "none";
});
// 밑줄 표시 함수
function activateUnderline() {
  underlineActive = true; // 밑줄 활성화 상태
  horizontalUnderline.style.top = "60px"; // 밑줄이 위치할 기본 top 값 설정

  gnbMenus.forEach((menu) => {
    menu.addEventListener("mouseenter", horizontalIndicator);
    menu.addEventListener("mouseleave", hideUnderline);
  });

  function horizontalIndicator(e) {
    if (!underlineActive) return; // 활성 상태에서만 동작
    const target = e.currentTarget;
    horizontalUnderline.style.left = `${target.offsetLeft}px`;
    horizontalUnderline.style.width = `${target.offsetWidth}px`;
    horizontalUnderline.style.top = `${target.offsetTop + target.offsetHeight}px`;
  }

  function hideUnderline() {
    if (!underlineActive) return; // 활성 상태에서만 동작
    horizontalUnderline.style.width = "0px"; // 밑줄 숨김
  }
}

// 밑줄 제거 함수
function deactivateUnderline() {
  underlineActive = false; // 밑줄 비활성화 상태
  horizontalUnderline.style.width = "0px"; // 밑줄 숨김

  gnbMenus.forEach((menu) => {
    menu.removeEventListener("mouseenter", horizontalIndicator);
    menu.removeEventListener("mouseleave", hideUnderline);
  });
}

// 화면 크기에 따라 밑줄 기능 처리
function handleWindowSize() {
  const windowWidth = window.innerWidth;

  if (windowWidth >= 1240) {
    maxHeight = "280px"; // 큰 화면에서의 최대 높이
    if (!underlineActive) activateUnderline(); // 밑줄 활성화
  } else {
    deactivateUnderline(); // 작은 화면에서는 밑줄 비활성화
  }
}

// 초기 실행
handleWindowSize();

// 화면 크기 변경 시 동적 처리
window.addEventListener("resize", handleWindowSize);

document.querySelector("#gnb ul").addEventListener("mouseover",()=>{
  document.querySelector("#gnbList").style.height = "250px";
})

document.querySelector("#gnb ul").addEventListener("mouseleave",()=>{
  document.querySelector("#gnbList").style.height = "80px";
})