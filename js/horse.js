const text = '다그닥다그닥 Gallop Gallop Clip-Clop Dug-dug-dak! paka-paka';
const typingTarget = document.getElementById('typing-text');
let index = 0;

function typeText() {
  if (index < text.length) {
    const span = document.createElement('span');
    span.textContent = text[index];
    typingTarget.appendChild(span);
    index++;
    setTimeout(typeText, 100); // 타이핑 속도 설정 (100ms)
  } else {
    // 모든 텍스트가 출력된 후 초기화하고 다시 시작
    setTimeout(() => {
      typingTarget.innerHTML = ''; // 기존 텍스트 삭제
      index = 0; // 인덱스 초기화
      typeText(); // 다시 시작
    }, 2000); // 대기 시간 (2초)
  }
}

// 타이핑 애니메이션 시작 (4.5초 뒤)
setTimeout(typeText, 4500);

function showPopups() {
  alert('여기까지 온 걸 보니, 당신도 말이 좀 많은 편이군요.');
  window.location.href = 'info.html'; // 페이지 이동
}
