const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

function openPage() {
    var x = document.getElementById('search').value;
    if (x === "Customers") {
        window.open("../Customers Page/Customers.html");
    }

    if (x === "Orders") {
        window.open("../Orders Page/orders.html")
    }

    if (x === "Analytics") {
        window.open("../Analytics Page/analytics.html")
    }

    if (x === "Messages") {
        window.open("../Messages Page/messages.html")
    }

    if (x === "Products") {
        window.open("../Product Page/product.html")
    }

    if (x === "Reports") {
        window.open("../Reports Page/report.html")
    }

    if (x === "Settings") {
        window.open("../Settings Page/setting.html")
    }

    if (x === "Add Product") {
        window.open("../AddProduct Page/addproduct.html")
    }
}

// Print
function myfun() {
    window.print();
}

// show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

// close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

// change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

// fill orders in table
Orders.forEach (order => {
    const tr = document.createElement('tr');
    const trContent = `
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${order.shipping === 'Declined' ? 'danger'  : order.shipping === 'pending' ? 'warning' : 'primary'}">${order.shipping}</td>
                        <td class="primary">Details</td>
                    `
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})