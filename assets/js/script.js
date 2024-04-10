document.getElementById("arrow").addEventListener("click", function() {
    window.location.href = "index.html";
});
 
// Recibo //

document.getElementById("agregarItem").addEventListener("click", function() {
    var item = prompt("Ingrese el nombre del producto:");
    var precio = parseFloat(prompt("Ingrese el precio del producto:"));

    if (item && precio) {
        var newItem = document.createElement("div");
        newItem.classList.add("item");
        newItem.textContent = item + " - $" + precio.toFixed(2);

        var eliminarBtn = document.createElement("button");
        eliminarBtn.textContent = "Eliminar";
        eliminarBtn.addEventListener("click", function() {
            newItem.parentNode.removeChild(newItem);
            calcularTotal();
        });

        newItem.appendChild(eliminarBtn);
        document.getElementById("items").appendChild(newItem);
        calcularTotal();
    }
});

function calcularTotal() {
    var total = 0;
    var items = document.querySelectorAll(".item");

    items.forEach(function(item) {
        var precio = parseFloat(item.textContent.split(" - $")[1]);
        total += precio;
    });

    document.getElementById("totalAmount").textContent = total.toFixed(2);
}

