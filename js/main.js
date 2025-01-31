
const test = document.querySelector('.companyIntro h2');
const updownAni = document.querySelectorAll('.aside-box span');
const maxTranslateX = 400;

// 팔도스타그램


// 회사 섹션
window.addEventListener('scroll', () => {
    const testOffsetTop = test.offsetTop; // 기준 위치
    const windowScrollY = window.scrollY; // 현재 스크롤 위치
    const windowHeight = window.innerHeight; // 창 높이

    // 스크롤 비율 계산
    const scrollProgress = Math.min(
        Math.max((windowScrollY - (testOffsetTop - windowHeight)) / windowHeight, 0),
        1
    );

    // 비율에 따라 요소 이동
    updownAni.forEach((aside) => {
        const translateXValue = (1 - scrollProgress) * maxTranslateX; // 비율 기반 이동값
        aside.style.transform = `translateX(${translateXValue}%)`;
    });
});



// 지도





// 회사소개 서서히 나타나는 이벤트

const comps = document.querySelectorAll(".companyIntroWrapper article");

// 스크롤 이벤트 한 번만 등록
window.addEventListener("scroll", () => {
  comps.forEach((comp) => {
    const rect = comp.getBoundingClientRect(); // 요소의 화면상 위치 정보
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0; // 요소가 보이는지 확인

    if (isVisible) {
      comp.classList.add("visible"); // 보일 때 클래스 추가
    }
  });
});

var mapContainer = document.getElementById("map"), // 지도를 표시할 div
mapOption = {
  center: new kakao.maps.LatLng(37.513384, 127.019785), // 지도의 중심좌표
  level: 3, // 지도의 확대 레벨
  mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
};

// 지도를 생성한다
var map = new kakao.maps.Map(mapContainer, mapOption);

// 지도에 마커를 생성하고 표시한다
var marker = new kakao.maps.Marker({
position: new kakao.maps.LatLng(37.513333, 127.019774), // 마커의 좌표
map: map, // 마커를 표시할 지도 객체
});

// 커스텀 오버레이를 생성하고 지도에 표시한다
var customOverlay = new kakao.maps.CustomOverlay({
map: map,
content:
  '<div style="padding:0 5px;background:#fff;">(주) 팔도</div>',
position: new kakao.maps.LatLng(37.513333, 127.019774), // 커스텀 오버레이를 표시할 좌표
xAnchor: 0.5, // 컨텐츠의 x 위치
yAnchor: 0, // 컨텐츠의 y 위치
});
