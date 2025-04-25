
var allProducts = document.querySelectorAll(".unorderflist li ")
var btn1 = document.querySelector(".btnShow")
var btn2 = document.querySelector(".btnRest")
var book = document.querySelector(".btn btn-primary")

var total_Price_Div = document.querySelector(".total")

var totalPrice = 0

allProducts.forEach(function (item) {
    item.onclick = function () {
        totalPrice += +(item.getAttribute("price"))



    }
})

btn1.onclick = function () {
    total_Price_Div.innerHTML = (" Total = ") + totalPrice

}
btn2.onclick = function () {
    totalPrice = 0
    total_Price_Div.innerHTML = (" Total = ") + 0


}

