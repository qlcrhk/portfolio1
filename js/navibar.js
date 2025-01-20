const headerWrap = document.getElementById("headerWrap");
const gnb = document.getElementById("gnb");
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


document.querySelector("#gnb ul").addEventListener("mouseover",()=>{
  document.querySelector("#gnbList").style.height = "250px";
})

document.querySelector("#gnb ul").addEventListener("mouseleave",()=>{
  document.querySelector("#gnbList").style.height = "80px";
})