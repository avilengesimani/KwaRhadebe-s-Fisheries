document.addEventListener("DOMContentLoaded", function () {

    /*
        ========================================
        SHOPPING CART
        ========================================
    */

    const addButtons =
        document.querySelectorAll(".add-to-cart");

    const cartList =
        document.querySelector("#cart-list");

    const cartTotal =
        document.querySelector("#cart-total");


    let cart =
        JSON.parse(
            localStorage.getItem("kwarhadebeCart")
        ) || [];


    function displayCart() {

        if (!cartList) {
            return;
        }

        cartList.innerHTML = "";

        let total = 0;


        if (cart.length === 0) {

            const emptyMessage =
                document.createElement("li");

            emptyMessage.textContent =
                "Your cart is empty.";

            cartList.appendChild(
                emptyMessage
            );

        }


        cart.forEach(function (item, index) {

            total += item.price;

            const listItem =
                document.createElement("li");

            listItem.innerHTML = `
                ${item.name} -
                R${item.price}

                <button
                    class="remove-item"
                    data-index="${index}">
                    Remove
                </button>
            `;

            cartList.appendChild(
                listItem
            );

        });


        if (cartTotal) {

            cartTotal.textContent =
                total.toFixed(2);

        }


        localStorage.setItem(
            "kwarhadebeCart",
            JSON.stringify(cart)
        );


        /*
            Remove item buttons
        */

        const removeButtons =
            document.querySelectorAll(
                ".remove-item"
            );


        removeButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const index =
                            Number(
                                this.dataset.index
                            );

                        cart.splice(index, 1);

                        displayCart();

                    }
                );

            }
        );

    }


    /*
        Add item to cart
    */

    addButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const item = {

                        name:
                            this.dataset.item,

                        price:
                            Number(
                                this.dataset.price
                            )

                    };


                    cart.push(item);

                    displayCart();


                    alert(
                        item.name +
                        " has been added to your cart."
                    );

                }
            );

        }
    );


    displayCart();


    /*
        ========================================
        CHECKOUT FORM
        ========================================
    */

    const checkoutForm =
        document.querySelector(
            "#checkout-form"
        );


    if (checkoutForm) {

        checkoutForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const message =
                    document.querySelector(
                        "#checkout-message"
                    );


                message.textContent =
                    "Order submitted successfully! " +
                    "Your order number is #5002.";


                cart = [];

                localStorage.removeItem(
                    "kwarhadebeCart"
                );

            }
        );

    }


    /*
        ========================================
        LOGIN FORM
        ========================================
    */

    const loginForm =
        document.querySelector(
            "#login-form"
        );


    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const message =
                    document.querySelector(
                        "#login-message"
                    );


                message.textContent =
                    "Login successful. " +
                    "Welcome to KwaRhadebe's Fisheries.";

            }
        );

    }


    /*
        ========================================
        TRACKING FORM
        ========================================
    */

    const trackingForm =
        document.querySelector(
            "#tracking-form"
        );


    if (trackingForm) {

        trackingForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const result =
                    document.querySelector(
                        "#tracking-result"
                    );


                result.hidden = false;

            }
        );

    }

});