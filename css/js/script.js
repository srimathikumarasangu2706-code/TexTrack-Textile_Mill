
function trackOrder() {
    const orderId = document.getElementById("orderId")
        .value.trim().toUpperCase();

    const result = document.getElementById("trackingResult");

    const orders = {
        TM101: {
            product: "Cotton Fabric",
            status: "In Production",
            className: "in-progress"
        },
        TM102: {
            product: "Dyed Fabric",
            status: "Ready for Dispatch",
            className: "pending"
        },
        TM103: {
            product: "Cotton Yarn",
            status: "Delivered",
            className: "completed"
        }
    };

    if (orderId === "") {
        result.innerHTML = "<p>Please enter an Order ID.</p>";
        return;
    }

    const order = orders[orderId];

    if (order) {
        result.innerHTML = `
            <div class="tracking-result-card">
                <h3>Order Details</h3>
                <p><strong>Order ID:</strong> ${orderId}</p>
                <p><strong>Product:</strong> ${order.product}</p>
                <p><strong>Status:</strong>
                    <span class="status ${order.className}">
                        ${order.status}
                    </span>
                </p>
            </div>
        `;
    } else {
        result.innerHTML =
            "<p>Order not found. Please try TM101, TM102 or TM103.</p>";
    }
}
