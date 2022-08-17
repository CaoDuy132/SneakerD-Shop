function tongsoluong(id) {
    var cart = JSON.parse(localStorage.getItem("cart"));
    let item = cart.find(item => item.id === id);
    tongsoluong = 0;

    for (let i = 0; i < cart.length; i++) {
        item = cart[i];
        
        soluong = item.quantity;
        tongsoluong += soluong;
    }
   
    // document.getElementById("soluong").innerText = tongsoluong;
    


}
tongsoluong();
function tinhtongtien(id) {
    var cart = JSON.parse(localStorage.getItem("cart"));
    let item = cart.find(item => item.id === id);
    tongtien = 0;

    for (let i = 0; i < cart.length; i++) {
        item = cart[i];
        tien = item.price * item.quantity;
        tongtien += tien;
    }
          tongtien =tongtien.toLocaleString('vi-VN', {
         style: 'currency',
        currency: 'VND'
        })
    document.getElementById("tongtien").innerText = tongtien;
}
tinhtongtien();
