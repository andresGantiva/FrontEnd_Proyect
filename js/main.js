document.addEventListener("DOMContentLoaded", () => {
    const metodoPagoSelect = document.getElementById("metodo-pago");
    const tarjetaInfoDiv = document.getElementById("tarjeta-info");

    metodoPagoSelect.addEventListener("change", () => {
        if (metodoPagoSelect.value === "tarjeta") {
            tarjetaInfoDiv.classList.remove("hidden");
        } else {
            tarjetaInfoDiv.classList.add("hidden");
        }
    });

    const paymentForm = document.getElementById("payment-form");
    paymentForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Pago enviado!");
    });
});
