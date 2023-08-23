// Подключение файла JavaScript к HTML
// Обычно вы можете разместить следующую строку в конце вашего HTML перед закрывающим тегом </body>
// <script src="путь_к_вашему_файлу.js"></script>

// Код JavaScript
document.addEventListener('DOMContentLoaded', function() {
  let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.menu');

  menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
  });
});
