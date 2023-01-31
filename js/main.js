window.onload = function () {
  setTimeout(function () {
    scrollTo(0, 0);
  }, 100);
};

window.addEventListener("load", () => {
  const grid = new Isotope("section", {
    // 배치할 요소를 감싸고 있는 부모요소명
    itemSelector: "article", // 배치할 요소명
    columnWidth: "article", //넓이 값을 구할 요소명
    transitionDuration: "0.5s", // 화면 배치 시 요소가 움직이는 속도
  });

  // 클릭할 모든 버튼요소 변수에 저장
  const btns = document.querySelectorAll("main ul li");

  for (let el of btns) {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      // 클릭한 대상의 자식인 a요소의 href 속성값을 변수 'sort'에 저장
      const sort = e.currentTarget.querySelector("a").getAttribute("href");

      //sort에 저장된 결과값을 불러와 재정렬
      grid.arrange({ filter: sort });

      // 다시 모든 버튼의 개수만큼 반복
      for (let el of btns) {
        //각 버튼의 클래스명에 on을 제거
        el.classList.remove("on");
      }

      //클릭한 대상만 선택하여 클래스명 on 추가
      e.currentTarget.classList.add("on");
    });
  }
});

setTimeout(() => {
  document.querySelector(".fullscreen").className += " hide";
  document.querySelector("body").className = "";
}, 2000);
