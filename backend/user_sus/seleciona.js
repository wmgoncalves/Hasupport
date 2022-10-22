function selecionarUserSus(userSus){
    let cartSus = userSus.value;
    // console.log(cartSus);
    localStorage.setItem('cart_sus', cartSus);
    window.location = "../pages/menu1.html";
}