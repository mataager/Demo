// function checkUserAuthentication() {
//   firebase.auth().onAuthStateChanged((user) => {
//     if (!user) {
//       Swal.fire({
//         icon: "warning",
//         title: "You must sign in first",
//         text: "Please sign in to complete your order.",
//         confirmButtonText: "Go to Account",
//         allowOutsideClick: false, // Prevent closing by clicking outside
//         allowEscapeKey: false, // Prevent closing with Escape key
//       }).then((result) => {
//         if (result.isConfirmed) {
//           window.location.href = "./account.html"; // Redirect user to account page
//         }
//       });
//     }
//   });
// }

// // Call the function when the page loads
// document.addEventListener("DOMContentLoaded", checkUserAuthentication);

// check auth in cart
function checkUserAuthentication() {
  firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Sign in for better experience",
        text: "You can sign in to save your details or continue as guest.",
        showDenyButton: true,
        confirmButtonText: "Go to Account",
        denyButtonText: "Continue as Guest",
        allowOutsideClick: false,
        allowEscapeKey: false,
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "./account.html"; // Redirect to account page
        } else if (result.isDenied) {
          // User chose to continue as guest
          // You might want to set a flag in localStorage/sessionStorage
          sessionStorage.setItem("isGuest", "true");
          // Or proceed with guest checkout logic
          removeaddressarea();
          prepareguestbtn();
        }
      });
    } else {
      // User is signed in, clear any guest flags if needed
      sessionStorage.removeItem("isGuest");
    }
  });
}
function removeaddressarea() {
  const addressarea = document.getElementById("address-sec");
  addressarea.remove();
}
function prepareguestbtn() {
  const removedbtn = document.getElementById("checkoutByAccount");
  const addedbtn = document.getElementById("checkoutWithoutAccount");
  addedbtn.classList.remove("hidden");

  if (removedbtn) removedbtn.remove();

  if (addedbtn) {
    addedbtn.innerHTML = `
      <button id="guestSubmitorderbtn" class="Add-to-Cart">
        Order Now As Guest
        <i class="bi bi-check2-all"></i>
      </button>
    `;

    // Add event listener properly
    document
      .getElementById("guestSubmitorderbtn")
      .addEventListener("click", guestSubmitorder);
  }
}
// Call the function when the page loads
document.addEventListener("DOMContentLoaded", checkUserAuthentication);
