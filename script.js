const buttons = document.querySelectorAll(".order-btn");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        const coffeeName = this.getAttribute("data-coffee");

        window.location.href = "order.html?coffee=" + encodeURIComponent(coffeeName);
    });
});