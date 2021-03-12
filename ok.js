// document.getElementById("ok").onclick = okClick; // null
// function okClick()
// {alert(" You clicked ok!! " ) };

//called when page loads; sets up event handlers
function pageLoad() {
  document.getElementById("ok").onclick = okClick;
  }
  function okClick() {
    const okButton = document.getElementById("ok");
    okButton.className = "fancy";
  alert(" You clicked ok!!");
  }

//annoymous fcn

  // window.onload = function(){
  //   document.getElementById("ok").onclick = function(){
  //     const okButton = document.getElementById("ok");
  //     okButton.className = "fancy";
  //     alert("You clicked ok!");

  //   }
  // }
  
  window.onload = pageLoad; // onload is a browser event


