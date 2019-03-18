const alan = document.querySelector('.site-header__heading');
const content = document.querySelector('.content');

window.addEventListener('scroll', function() {
  alan.style.opacity = '0';
  alan.style.transform = 'scale(.80)';
  alan.style.visibility = 'hidden';
  content.style.opacity = '1';
});
