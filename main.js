function detectmob() {
    if(window.innerWidth <= 800 || window.innerHeight <= 600) {
      return true;
    } else {
      return false;
    }
 }
 
window.addEventListener('load', (event) => {
    if (detectmob()){
        top.location.href="https://lengua.ai/mobile.html";
     }
});
