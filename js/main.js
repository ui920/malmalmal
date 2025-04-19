// 페이지 로드 시 iframe-body1으로 스크롤 이동
window.addEventListener('load', function () {
  const container = document.getElementById('iframes');
  const firstFrame = document.querySelector('.iframe-body1');

  // 초기 스크롤 위치를 iframe-body1로 설정
  container.scrollTo({
    left: firstFrame.offsetLeft,
    behavior: 'auto', // 즉시 이동
  });
});

document.querySelectorAll('.rist, .obs, .sample').forEach((link) => {
  link.addEventListener('click', function () {
    document
      .querySelectorAll('nav a')
      .forEach((el) => el.classList.remove('active'));
    this.classList.add('active');

    const index = parseInt(this.dataset.target);
    const frames = document.querySelectorAll('#iframes-inner > div');
    const targetFrame = frames[index];
    const container = document.getElementById('iframes');

    // pointer-events 활성화 (스크롤 가능)
    container.style.pointerEvents = 'auto';

    container.scrollTo({
      left: targetFrame.offsetLeft,
      behavior: 'smooth',
    });

    // 스크롤 완료 후 다시 pointer-events 비활성화
    setTimeout(() => {
      container.style.pointerEvents = 'none';
    }, 800); // 애니메이션 시간에 맞춰 설정
  });
});

document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    document.getElementById('iframes').style.opacity = '1';
  }
};

const frames = document.querySelectorAll(
  '#iframes-inner > .iframe-body1, .iframe-body2, .iframe-body3, .iframe-body4'
);
let offset = 0;
for (let i = 0; i < index; i++) {
  offset += frames[i].offsetWidth;
}
container.scrollTo({ left: offset, behavior: 'smooth' });
