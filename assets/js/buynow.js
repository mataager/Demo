async function handleBuyNowClick() {
  const buyNowButton = document.getElementById("BuyNowButton");
  const itemQty = parseInt(buyNowButton.getAttribute("data-qty")) || 1;

  showUserForm(itemQty);
}

//v1
// Function to show the user form
function showUserForm(itemQty) {
  console.log(itemQty);
  // Smoothly scroll to the top of the page
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  // Create a form element
  const form = document.createElement("form");
  form.classList.add("BuyItNowForm");

  // Get product details
  const productImage = document.getElementById("productImage").src;
  const productSize = document.getElementById("product-Size").innerText;
  const productColor = document.getElementById("product-color").innerText;
  const productPrice = document.getElementById("productPrice").innerText;

  // Create close button
  const closeButton = document.createElement("div");
  closeButton.innerHTML = '<i class="bi bi-x"></i>'; // X symbol
  closeButton.style.position = "absolute";
  closeButton.style.top = "10px";
  closeButton.style.right = "10px";
  closeButton.style.background = "none";
  closeButton.style.border = "none";
  closeButton.style.fontSize = "20px";
  closeButton.style.cursor = "pointer";
  closeButton.style.padding = "5px 10px";

  // Add hover effect
  closeButton.onmouseover = function () {
    this.style.color = "red";
  };
  closeButton.onmouseout = function () {
    this.style.color = "black";
  };
  closeButton.onclick = function () {
    form.remove();
  };
  const productSummary = document.createElement("div");
  productSummary.classList.add("buynow-summary-container");

  // Create and style the product image
  const productImageElement = document.createElement("img");
  productImageElement.src = productImage;
  productImageElement.classList.add("buynow-productimage");

  // Create container for size, color, and price
  const detailsContainer = document.createElement("div");
  detailsContainer.classList.add("buynow-details-container");

  // Create and style the size element
  const sizeBadge = document.createElement("p");
  sizeBadge.innerText = `Size: ${productSize}`;
  sizeBadge.classList.add("buynow-sizetext");
  detailsContainer.appendChild(sizeBadge);

  // Create and style the color element
  const colorText = document.createElement("p");
  colorText.innerText = `Color: ${productColor}`;
  colorText.classList.add("buynow-colortext");
  detailsContainer.appendChild(colorText);

  // Create and style the price element
  const priceText = document.createElement("h3");
  priceText.innerText = `Price: ${productPrice}`;
  priceText.classList.add("buynow-pricetext");
  detailsContainer.appendChild(priceText);

  // Create quantity selector
  const quantityContainer = document.createElement("div");
  quantityContainer.classList.add("buynow-quantity-container");

  const quantityLabel = document.createElement("span");
  quantityLabel.innerText = "Qty:";
  quantityLabel.classList.add("buynow-quantity-label");

  const minusBtn = document.createElement("button");
  minusBtn.innerHTML = '<i class="bi bi-dash"></i>';
  minusBtn.classList.add("buynow-quantity-btn");
  minusBtn.type = "button";

  const quantityInput = document.createElement("input");
  quantityInput.type = "number";
  quantityInput.value = "1";
  quantityInput.min = "1";
  quantityInput.classList.add("buynow-quantity-input");

  const plusBtn = document.createElement("button");
  plusBtn.innerHTML = '<i class="bi bi-plus"></i>';
  plusBtn.classList.add("buynow-quantity-btn");
  plusBtn.setAttribute("maxqty", itemQty);
  plusBtn.type = "button";

  // Get the max quantity from the button's attribute
  const maxQty = parseInt(plusBtn.getAttribute("maxqty")) || 99; // Default to 99 if not set

  minusBtn.addEventListener("click", () => {
    const currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  });

  plusBtn.addEventListener("click", () => {
    const currentValue = parseInt(quantityInput.value);
    if (currentValue < maxQty) {
      quantityInput.value = currentValue + 1;
    } else {
      // Optional: Show a message when hitting max quantity
      Swal.fire({
        icon: "info",
        title: "Maximum Quantity Reached",
        text: `You can order maximum ${maxQty} items`,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  });

  // Also validate direct input
  quantityInput.addEventListener("change", () => {
    let value = parseInt(quantityInput.value) || 1; // Default to 1 if invalid

    // Ensure value stays between 1 and maxQty
    if (value < 1) {
      value = 1;
    } else if (value > maxQty) {
      value = maxQty;
      Swal.fire({
        icon: "info",
        title: "Quantity Adjusted",
        text: `Maximum available quantity is ${maxQty}`,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
      });
    }

    quantityInput.value = value;
  });

  quantityContainer.appendChild(quantityLabel);
  quantityContainer.appendChild(minusBtn);
  quantityContainer.appendChild(quantityInput);
  quantityContainer.appendChild(plusBtn);
  detailsContainer.appendChild(quantityContainer);

  // Append image and details container to product summary
  productSummary.appendChild(productImageElement);
  productSummary.appendChild(detailsContainer);

  // Append the product summary to the form
  form.appendChild(productSummary);

  // Add input fields
  const nameInput = createInput("text", "name", "Enter your name");
  const phoneInput = createInput("tel", "phone", "Enter your phone number");
  const secondPhoneInput = createInput(
    "tel",
    "secondPhone",
    "Enter a second phone number (optional)"
  );
  // Create the select element
  const Gityandgovernment = createSelect(
    "Gityandgovernment",
    "Select your Government",
    cityOptions
  );

  // Add a textarea for the address
  const addressTextArea = createTextArea("address", "Enter your address");

  // Add a textarea for order notes (optional)
  const orderNotesTextArea = createTextArea(
    "orderNotes",
    "Add any additional notes or special instructions (optional)"
  );
  orderNotesTextArea.classList.add("hidden");
  orderNotesTextArea.style.height = "0";
  orderNotesTextArea.style.opacity = "0";
  orderNotesTextArea.style.overflow = "hidden";
  orderNotesTextArea.style.transition = "all 0.3s ease";
  orderNotesTextArea.style.marginBottom = "0";

  const Addnotesbtn = document.createElement("div");
  Addnotesbtn.classList.add("Addnotesbtn");
  Addnotesbtn.id = "Addnotesbtn";
  Addnotesbtn.innerHTML = 'Add Notes <i class="bi bi-journal-plus"></i>';

  Addnotesbtn.addEventListener("click", function () {
    // Toggle the notes textarea visibility with smooth animation
    if (orderNotesTextArea.classList.contains("hidden")) {
      // Show the notes field
      orderNotesTextArea.classList.remove("hidden");
      orderNotesTextArea.style.height = "0";
      orderNotesTextArea.style.opacity = "0";
      orderNotesTextArea.style.overflow = "hidden";
      orderNotesTextArea.style.transition = "all 0.3s ease";

      // Force reflow to enable transition
      void orderNotesTextArea.offsetHeight;

      // Animate to full height
      orderNotesTextArea.style.height = "100px";
      orderNotesTextArea.style.opacity = "1";
      orderNotesTextArea.style.marginBottom = "15px";

      // Change button text/icon
      this.innerHTML = 'Hide Notes <i class="bi bi-journal-minus"></i>';
    } else {
      // Hide the notes field
      // orderNotesTextArea.style.height = "0";
      orderNotesTextArea.style.opacity = "0";
      orderNotesTextArea.style.marginBottom = "0";

      // After animation completes, add hidden class
      setTimeout(() => {
        orderNotesTextArea.classList.add("hidden");
      }, 300);

      // Change button text/icon
      this.innerHTML = 'Add Notes <i class="bi bi-journal-plus"></i>';
    }
  });

  // Create shipping fees display
  const shippingFeesDisplay = document.createElement("div");
  shippingFeesDisplay.style.margin = "10px 0";
  shippingFeesDisplay.style.padding = "10px";
  shippingFeesDisplay.style.backgroundColor = "#f5f5f5";
  shippingFeesDisplay.style.borderRadius = "5px";

  // Visible shipping message
  const shippingText = document.createElement("p");
  shippingText.id = "shippingText";
  shippingText.innerText =
    "Please select your government to calculate shipping fees";
  shippingText.classList.add("BuyItNowForm-shipping-message");
  shippingText.style.margin = "0";
  shippingText.style.fontSize = "14px";
  shippingText.style.color = "#666";

  // Hidden shipping fee storage (added this element)
  const shippingFeeValue = document.createElement("p");
  shippingFeeValue.id = "shippingFeeValue";
  shippingFeeValue.style.display = "none"; // Hidden but accessible
  shippingFeeValue.dataset.fee = "0"; // Store numeric value

  shippingFeesDisplay.appendChild(shippingText);
  shippingFeesDisplay.appendChild(shippingFeeValue); // Add hidden element

  // Insert shipping fees display before the submit button
  // Function to update shipping fees display
  function updateShippingFees() {
    const selectedCity = Gityandgovernment.value;
    const productPriceText = document.getElementById("productPrice").innerText;
    const productPrice = parseFloat(productPriceText.replace(/[^0-9.]/g, ""));

    if (!selectedCity) {
      shippingText.innerText =
        "Please select your government to calculate shipping fees";
      shippingFeeValue.dataset.fee = "0";
      shippingFeeValue.innerText = "";
      return;
    }

    let shippingFee = maincities.includes(selectedCity)
      ? minshipping
      : maxshipping;

    if (productPrice >= parseFloat(freeshipping)) {
      shippingText.innerHTML = `<span class="BuyItNowForm-shipping-message">You've got free shipping!</span> (Order amount exceeds ${freeshipping} EGP)`;
      shippingFee = 0;
    } else {
      shippingText.innerText = `Shipping fees: ${shippingFee} EGP`;
    }

    // Update both the hidden element and maxshipping variable
    shippingFeeValue.dataset.fee = shippingFee;
    shippingFeeValue.innerText =
      shippingFee === 0 ? "free" : `${shippingFee} EGP`;
    maxshipping = shippingFee;
  }
  // Add event listener to the city select
  Gityandgovernment.addEventListener("change", updateShippingFees);
  // Also update when the form loads in case there's a default selected city
  updateShippingFees();

  // Add a submit button
  const submitButton = document.createElement("button");
  submitButton.classList.add("placeorderbtn");
  submitButton.type = "submit";
  submitButton.innerText = "Place order";

  // Append inputs and buttons to the form
  form.appendChild(nameInput);
  form.appendChild(phoneInput);
  form.appendChild(secondPhoneInput);
  form.appendChild(Gityandgovernment);
  form.appendChild(addressTextArea);
  form.appendChild(Addnotesbtn);
  form.appendChild(orderNotesTextArea);
  form.appendChild(shippingFeesDisplay);
  form.appendChild(closeButton);
  form.appendChild(submitButton);

  form.onsubmit = async function (event) {
    event.preventDefault(); // Prevent form submission

    // Check if required fields are filled
    if (
      !nameInput.value ||
      !phoneInput.value ||
      !addressTextArea.value ||
      !Gityandgovernment.value
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill out all required fields: Name, Phone, and Address.",
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    }

    // Show preloader in the button
    submitButton.innerHTML = `<div class="preloader" id="preloader"> <div class="loader"></div></div>`;
    submitButton.disabled = true;

    // Get form data
    const formData = {
      name: nameInput.value,
      phone: phoneInput.value,
      secondPhone: secondPhoneInput.value || "N/A",
      address: addressTextArea.value,
      city: Gityandgovernment.value,
      orderNotes: orderNotesTextArea.value || "N/A",
    };

    // Get product details
    const brandName = document.getElementById("BrandName").innerText;
    const productTitle = document.getElementById("productTitle").innerText;
    const productPrice = document.getElementById("productPrice").innerText;
    const productSize = document.getElementById("product-Size").innerText;
    const productColor = document.getElementById("product-color").innerText;
    const productID = document.getElementById("productID").innerText;
    const productImage = document.getElementById("productImage").src;
    const shippingFeeValue =
      document.getElementById("shippingFeeValue").dataset.fee;

    try {
      // Sign in the guest user programmatically
      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(GuestEmail, GuestEmail);
      const idToken = await userCredential.user.getIdToken();

      // Check product availability and stock
      const productResponse = await fetch(
        `${url}/Stores/${uid}/Products/${productID}.json?auth=${idToken}`
      );
      const productData = await productResponse.json();

      if (!productData) {
        throw new Error("Product no longer available");
      }
      const requestedQty = 1; // Since this is single product order
      if (vanishedstock) {
        // Check stock quantity
        const stockQty =
          productData.sizes?.[productSize]?.[productColor]?.qty || 0;

        if (stockQty < requestedQty) {
          Swal.fire({
            icon: "warning",
            title: "Product Unavailable",
            html: `
            <div style="text-align: center;">
              <img src="${productImage}" alt="${productTitle}" style="width: 100px; height: 100px; margin-bottom: 15px;">
              <p><strong>${productTitle}</strong></p>
              <p>Requested quantity (${requestedQty}) exceeds available stock (${stockQty}).</p>
            </div>
          `,
            confirmButtonText: "OK",
          });
          return;
        }

        // Update stock in Firebase
        const newStockQty = stockQty - requestedQty;
        if (newStockQty > 0) {
          await fetch(
            `${url}/Stores/${uid}/Products/${productID}/sizes/${productSize}/${productColor}.json?auth=${idToken}`,
            {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ qty: newStockQty }),
            }
          );
        } else {
          // Delete the size/color if stock is depleted
          await fetch(
            `${url}/Stores/${uid}/Products/${productID}/sizes/${productSize}/${productColor}.json?auth=${idToken}`,
            {
              method: "DELETE",
            }
          );
        }
      }

      // Prepare order data
      const order = {
        Customeruid: "Guest User",
        Date: new Date().toISOString(),
        cart: [
          {
            brand: brandName,
            id: productID,
            photourl: productImage,
            price: productPrice,
            productColor: productColor,
            productSize: productSize,
            quantity: requestedQty,
            title: productTitle,
          },
        ],
        payment: "N/A",
        personal_info: {
          address: formData.address,
          name: formData.name,
          email: "Guest",
          phone: formData.phone,
          phone2: formData.secondPhone,
          city: formData.city,
          notes: formData.orderNotes,
        },
        shippingFees: parseInt(shippingFeeValue),
        isGuest: true,
      };

      // Push order data to the server
      const orderResponse = await fetch(
        `${url}/Stores/${uid}/orders.json?auth=${idToken}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(order),
        }
      );

      if (!orderResponse.ok) {
        throw new Error("Failed to place the order.");
      }

      // Show success message
      Swal.fire({
        icon: "success",
        title: "Order Placed!",
        html: `
          <div style="display: flex;text-align: center;flex-direction: column;align-items: center;">
            <img src="${productImage}" alt="${productTitle}" style="width: 100px; height: 100px; margin-bottom: 15px;">
            <p><strong>${productTitle}</strong></p>
            <p>Your order has been placed successfully.</p>
          </div>
        `,
        showConfirmButton: false,
        timer: 3000,
      });

      // Remove the form from the DOM
      form.remove();
    } catch (error) {
      console.error("Error:", error);

      let errorMessage =
        "An error occurred while placing the order. Please try again.";
      if (error.message === "Product no longer available") {
        errorMessage =
          "This product is no longer available. Please refresh the page.";
      }

      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
      });
    } finally {
      // Reset the button text and enable it
      submitButton.innerHTML = "Place order";
      submitButton.disabled = false;

      // Log out the guest user
      try {
        await firebase.auth().signOut();
      } catch (error) {
        console.error("Error signing out guest user:", error);
      }
    }
  };

  // Append the form to the body
  document.body.appendChild(form);
}

// Function to create an input field
function createInput(type, id, placeholder) {
  const input = document.createElement("input");
  input.type = type;
  input.id = id;
  input.placeholder = placeholder;
  input.style.padding = "10px";
  input.style.border = "1px solid #ccc";
  input.style.borderRadius = "5px";
  return input;
}

function createSelect(
  id = "city-select",
  placeholder = "Select your city/government",
  options = []
) {
  const select = document.createElement("select");
  select.id = id;
  select.style.padding = "10px";
  select.style.border = "1px solid #ccc";
  select.style.borderRadius = "5px";
  select.style.width = "100%";
  select.style.margin = "5px 0";

  // Add placeholder option
  const placeholderOption = document.createElement("option");
  placeholderOption.value = "";
  placeholderOption.textContent = placeholder;
  placeholderOption.selected = true;
  placeholderOption.disabled = true;
  select.appendChild(placeholderOption);

  // Add all options
  options.forEach((option) => {
    const opt = document.createElement("option");
    opt.value = option;
    opt.textContent = option;
    select.appendChild(opt);
  });

  return select;
}
// Define the city options
const cityOptions = [
  "Cairo",
  "Giza",
  "Alexandria",
  "Port Said",
  "Suez",
  "Damietta",
  "Fayoum",
  "Dakahlia",
  "Sharqia",
  "Qalyubia",
  "Kafr El Sheikh",
  "Gharbia",
  "Monufia",
  "Beheira",
  "Ismailia",
  "Other",
];

// Function to create a textarea field
function createTextArea(id, placeholder) {
  const textarea = document.createElement("textarea");
  textarea.classList.add("input");
  textarea.id = id;
  textarea.placeholder = placeholder;
  textarea.style.maxWidth = "375px";
  textarea.style.width = "-webkit-fill-available";
  textarea.style.background = "none";
  textarea.style.color = "inherit";
  textarea.style.fontFamily = "inherit";
  textarea.style.fontSize = "medium";
  textarea.style.padding = "10px";
  textarea.style.border = "1px solid #ccc";
  textarea.style.borderRadius = "5px";
  textarea.style.resize = "vertical"; // Allow vertical resizing
  textarea.style.minHeight = "100px"; // Set a minimum height
  return textarea;
}
