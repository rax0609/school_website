window.addEventListener('load', function() {
  const splashScreen = document.getElementById('splash-screen');
  
  // 加快文字出現的時間
  setTimeout(function() {
    splashScreen.classList.add('show');
  }, 300);
  
  setTimeout(function() {
    // 添加 fade-out 類，使其慢慢退出並往上離開
    splashScreen.classList.add('fade-out');
    
    setTimeout(function() {
      let newUrl = 'main.html';
      // 完全退出後，跳轉到新頁面，保留參數
      window.location.href = newUrl;
    }, 800);
  }, 2000);
});
