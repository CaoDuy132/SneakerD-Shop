function soluong() {
    var cart = JSON.parse(localStorage.getItem("cart"));
    if(cart){
      var total = 0;
      for (var soluong of cart) {
        total += soluong.quantity;
      }
      document.querySelector("#soluong").innerText = total;
    }
  }
  soluong();