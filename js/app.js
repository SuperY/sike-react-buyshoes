window.onload = function() {
  console.log("page loaded");

  makeCartScrollNicely();
}


window.scroll=
function(){
  makeCartScrollNicely() ;
}
function makeCartScrollNicely() {
    var cart = document.querySelector('.cart');
      Ps.initialize(cart);
}
