window.addEventListener(
  'touchstart',
  function (e) {
    if (e.touches.length > 1) return; // 멀티 터치 무시
    startX = e.touches[0].clientX;
  },
  { passive: false }
);

window.addEventListener(
  'touchmove',
  function (e) {
    const diffX = e.touches[0].clientX - startX;

    // 좌우로 스와이프 중이면 기본 동작 막기
    if (Math.abs(diffX) > 10) {
      e.preventDefault();
    }
  },
  { passive: false }
);
