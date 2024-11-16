function createScrollButton() {
  const button = document.createElement('button');
  button.id = 'scrollTopBtn';
  button.innerHTML = '↑';
  document.body.appendChild(button);
  
  button.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
  
  window.addEventListener('scroll', () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercentage > 30) {
          button.style.display = 'block';
      } else {
          button.style.display = 'none';
      }
  });
}

createScrollButton();