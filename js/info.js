const definitions = [
  '말 – 사람의 생각을 전달하는 음성 기호',
  '말 – 네 다리 달린 초식 동물',
  '말 – 윷놀이에서 움직이는 패',
  '말 – 내가 했는 줄 알았는데 네가 했던 그 말',
  '말 – 말 많으면 말썽',
  '말 – 고삐 풀린 자동차처럼 멈추지 않음',
  '말 – 머리 위로 떨어진 단어 하나',
  '말 – 말이 말을 물고 늘어지는 시간',
  '말 – 다시는 듣고 싶지 않았던 말',
  '말 – 한순간에 사라지는 말장난',
];

let currentIndex = 0;
const definitionElement = document.getElementById('malDefinition');
const toggleBtn = document.getElementById('malToggle');

toggleBtn.addEventListener('click', (e) => {
  e.preventDefault();
  currentIndex = (currentIndex + 1) % definitions.length;
  definitionElement.classList.add('fade-out');

  setTimeout(() => {
    definitionElement.textContent = definitions[currentIndex];
    definitionElement.classList.remove('fade-out');
    definitionElement.classList.add('fade-in');

    setTimeout(() => {
      definitionElement.classList.remove('fade-in');
    }, 400);
  }, 300);
});
