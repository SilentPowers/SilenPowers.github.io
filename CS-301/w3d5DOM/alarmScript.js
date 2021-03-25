

window.onload = function startAlarm(){
  document.getElementById("go").onclick = function(){
    const min = Number(document.getElementById("min").value);
    const sec = Number(document.getElementById("sec").value);
    const totalTime = (min * 60) + sec;
    const toMS = (totalTime) * 1000;
    setTimeout(time, toMS);
  }

  function time(){
      const body = document.body;
      body.style.color = "red";
      body.style.background = "red";
      document.getElementById("min").textContent = "";
      document.getElementById("sec").textContent = "";
  }
    
}; 