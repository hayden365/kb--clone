# kb국민은행 클론코딩

원본사이트 : https://www.kbstar.com/
클론사이트 : https://kbstar-clone.netlify.app/

## 구현한 것들

---

- 기존에 사용한 float대신 flex와 grid사용
- 상단메뉴바의 드롭다운메뉴
- swiper를 사용해 slide구현
- footer의 드롭다운메뉴
- 이외에 hover시 css부여

## 구현하지 못한것들 & 아쉬운 점

---

1. 상단메뉴의 search 구현못함.
2. 메인비주얼의 slide 구현하지 못했음.
3. 중단 slide에서의 버튼 배치 못함.
4. 위의 내용들은 시간이 더 필요할 것 같습니다.
5. SCSS 나 javascript를 활용하지 못한 점.
6. 반응형으로 구현하지 못한 점.

## 궁금한 점 & 피드백해주셨으면 하는 점

1. html, css에서 class사용이 지저분한것 같은데 피드백 부탁드립니다.

   css에서 class 표현 중 > 을 과도하게 썼는지 궁금합니다!
2. navbar2 메뉴의 div사용이 과다하게 사용한건지 궁금합니다.

   flex 를 사용하다보니 div로 묶음이 많아졌는데 시맨틱태그에서 멀어지는 걸까요?
3. 중단 slide

   위에서 언급한것처럼 prev, next, pause, play버튼을 별도로 block과 같이 영역을 주고 정렬하고 싶었는데 display: block, position: absolute, diplay:flex 모두 먹히지가 않습니다. 해결책이 궁금합니다!
   추가로 slide 에서 swiper 사용으로 slidewPerView:3 으로 지정하였으나 슬라이드가 짤려서 나옵니다. margin으로 조정했지만 해결책이 있을까요?
4. flex나 grid에서 margin, padding

   space-around/between/evenly등 을 사용하여 정렬,배치 했지만 몇군데 불가피하게 padding과 margin으로 직접 조정했는데 이부분은 '괜찮은'css사용 인지 궁금합니다!
5. footer의 두번째 드롭다운메뉴

   해당 메뉴는 dl,dt,dd태그의 사용으로 dt와 dd를 수평으로 배치하기 위해서 flex대신 grid를 사용하였는데 괜찮은 선택이었는지 궁금합니다!
6. 사용자 편의성

   마지막으로 기존의 웹사이트에서
   ```
   <h2 class="read">빠른메뉴</h2>
   ```
   처럼 사용자의 눈에 보이지 않는 태그를 사용해서 접근성을 높이는 부분은 실무에서 강조되는 부분인지 궁금합니다!
