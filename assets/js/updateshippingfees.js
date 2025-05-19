function handleAddressClick(city, fullAddress, governorate) {
  // Save selected city to localStorage
  localStorage.setItem("City", city);
  // Save the full address to localStorage
  localStorage.setItem("Address", fullAddress);
  // Save the governorate to localStorage
  localStorage.setItem("Governorate", governorate);

  // Trigger the shipping logic
  updateShippingFees();

  // Highlight the clicked card and remove border from others
  highlightSelectedCard();
}

function highlightSelectedCard() {
  const addressCards = document.querySelectorAll(".address-card"); // Select all address cards

  // Remove the border from all other cards
  addressCards.forEach((card) => {
    card.style.border = ""; // Clear the border
  });

  // Add border to the clicked card
  const clickedCard = event.currentTarget;
  clickedCard.style.border = "1px solid #838383";
}

function updateShippingFees() {
  const shippingFeesElement = document.getElementById("shipping-fees"); // Get the shipping fees element
  const shippingFeesElementtotal = document.getElementById(
    "shipping-fees-total"
  );
  const cartTotalElement = document.getElementById("cart-total");
  const totalCartAmountElement = document.getElementById("total-cart-amount");
  const savedGovernorate = localStorage.getItem("Governorate"); // Retrieve the saved city from localStorage

  // Parse cart total and total cart amount
  const cartTotal = cartTotalElement
    ? parseFloat(cartTotalElement.innerText) || 0
    : 0;
  const totalCartAmount = totalCartAmountElement
    ? parseFloat(totalCartAmountElement.innerText) || 0
    : 0;

  // Check if free shipping threshold is met
  if (cartTotal > freeshipping || totalCartAmount > freeshipping) {
    if (shippingFeesElement) shippingFeesElement.innerText = "0 EGP";
    if (shippingFeesElementtotal)
      shippingFeesElementtotal.innerText = "Free Shipping";
    localStorage.setItem("shippingFees", "0");
    return; // Exit early since no further calculation is needed
  }

  // If free shipping is not applicable, use the old logic
  // if (shippingFeesElement) {
  //   if (savedGovernorate) {
  //     if (
  //       [
  //         "Cairo",
  //         "Giza",
  //         "Alexandria",
  //         "Port Said",
  //         "Suez",
  //         "Damietta",
  //         "Fayoum",
  //         "Dakahlia",
  //         "Sharqia",
  //         "Qalyubia",
  //         "Kafr El Sheikh",
  //         "Gharbia",
  //         "Monufia",
  //         "Beheira",
  //         "Ismailia",
  //       ].includes(savedGovernorate)
  //     ) {
  //       shippingFeesElement.innerText = "65 EGP";
  //       shippingFeesElementtotal.innerText = "65 EGP";
  //       localStorage.setItem("shippingFees", "65");
  //     } else {
  //       shippingFeesElement.innerText = "100 EGP";
  //       shippingFeesElementtotal.innerText = "100 EGP";
  //       localStorage.setItem("shippingFees", "100");
  //     }
  //   } else {
  //     console.log("Saved City from localStorage:", savedGovernorate);
  //   }
  // }

  // if (shippingFeesElement) {
  //   if (savedGovernorate) {
  //     // Check if governorate exists in our city options
  //     if (cityOptions.includes(savedGovernorate)) {
  //       // Determine shipping fee based on city tier
  //       const shippingFee = maincities.includes(savedGovernorate)
  //         ? minshipping
  //         : maxshipping;

  //       // Update UI and storage
  //       shippingFeesElement.innerText = `${shippingFee} EGP`;
  //       shippingFeesElementtotal.innerText = `${shippingFee} EGP`;
  //       localStorage.setItem("shippingFees", shippingFee.toString());
  //     } else {
  //       console.log("Unknown city in localStorage:", savedGovernorate);
  //       // Optional: handle unknown cities here
  //     }
  //   } else {
  //     console.log("No saved city in localStorage");
  //   }
  // }

  if (shippingFeesElement) {
    // Check if user is authenticated (replace with your actual auth check)
    const isAuthenticated = checkUserAuth(); // Implement this function based on your auth system

    if (!isAuthenticated) {
      // Unauthenticated user - free shipping
      shippingFeesElement.innerText = "0 EGP";
      shippingFeesElementtotal.innerText = "0 EGP";
      localStorage.setItem("shippingFees", "0");
    } else if (savedGovernorate) {
      // Authenticated user with saved city
      if (cityOptions.includes(savedGovernorate)) {
        const shippingFee = maincities.includes(savedGovernorate)
          ? minshipping
          : maxshipping;

        shippingFeesElement.innerText = `${shippingFee} EGP`;
        shippingFeesElementtotal.innerText = `${shippingFee} EGP`;
        localStorage.setItem("shippingFees", shippingFee.toString());
      } else {
        console.log("Unknown city in localStorage:", savedGovernorate);
        // Default to max shipping for unknown cities
        shippingFeesElement.innerText = `${maxshipping} EGP`;
        shippingFeesElementtotal.innerText = `${maxshipping} EGP`;
        localStorage.setItem("shippingFees", maxshipping.toString());
      }
    } else {
      // Authenticated user with no saved city
      console.log("No saved city in localStorage");
      shippingFeesElement.innerText = `${maxshipping} EGP`;
      shippingFeesElementtotal.innerText = `${maxshipping} EGP`;
      localStorage.setItem("shippingFees", maxshipping.toString());
    }
  }
}

// Ensure this runs on DOM ready
document.addEventListener("DOMContentLoaded", function () {
  updateShippingFees(); // Ensure the initial logic sets up the UI
});

function calculateCartTotal(cartItems) {
  return cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace(" EGP", "").trim()) || 0;
    return total + price * item.quantity;
  }, 0);
}

// Function to dynamically calculate & append the shipping fees div
// function appendShippingFeeDiv(city, cartItems) {
//   const freeShippingThreshold = 200; // Free shipping threshold
//   const cartTotal = calculateCartTotal(cartItems); // Calculate cart total dynamically

//   let shippingFees = 100; // Default shipping fee
//   if (["Cairo", "Giza", "Alexandria"].includes(city)) {
//     shippingFees = 65; // Discounted shipping fee for specific cities
//   }

//   // Logic for free shipping based on cart amount
//   if (cartTotal >= freeShippingThreshold) {
//     shippingFees = 0; // Free shipping
//   }

//   // Update or create shipping fees container
//   let shippingFeesContainer = document.getElementById(
//     "shipping-fees-container"
//   );
//   if (!shippingFeesContainer) {
//     shippingFeesContainer = document.createElement("div");
//     shippingFeesContainer.id = "shipping-fees-container";
//     document.body.appendChild(shippingFeesContainer);
//   }

//   // Clear and update content
//   shippingFeesContainer.innerHTML = `
//     <p>Cart Total: ${cartTotal.toFixed(2)} EGP</p>
//     <p>Shipping Fees: ${shippingFees.toFixed(2)} EGP</p>
//   `;

//   console.log(`Cart Total: ${cartTotal.toFixed(2)} EGP`);
//   console.log(`Shipping Fee: ${shippingFees.toFixed(2)} EGP`);
// }
