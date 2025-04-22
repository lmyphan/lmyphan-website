document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.toggle-button');
  buttons.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target.style.display === 'block') {
        target.style.display = 'none';
      } else {
        target.style.display = 'block';
      }
    });
  });
});
