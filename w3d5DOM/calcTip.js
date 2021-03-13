function calcTip() {
  const button = document.getElementById("btn").onclick = function(){
  const subtotalElem = document.getElementById("subtotal").value;
  const tipElem = document.getElementById("tip").value;

  var totalElem = document.getElementById('total');
  const tip = subtotalElem * (tipElem / 100);
  const total = tip;
  totalElem.innerHTML = '$' + total.toFixed(2);
}
}
window.onload = calcTip;