
function checkUserAuthentication() {
  firebase.auth().onAuthStateChanged((user) => {
    const modal = document.querySelector(".modal");
    const modalContent = document.querySelector(".modal-content");
    const body = document.body;

    if (!user) {
      // Set the modal content for non-authenticated users
      modalContent.innerHTML = `
      <div class="guestmodalarea">
        <h2>Sign in for better experience</h2>
        <p>You can sign in to save your details,track your order,add items to favourite etc.</p>
        <div class="modal-buttons">
          <button id="goToAccount" class="modal-btn Gotoaccountbtn">Go to Account</button>
        </div>
        <h2 class="mt-40">OR</h2>
        <p>Continue as guest for quick and easy checkout</p>
        <div class="modal-buttons">
          <button id="continueGuest" class="modal-btn continueasguest">Continue as Guest</button>
        </div>
      </div>
      `;

      // Show the modal and disable background interactions
      body.classList.add("modal-open");
      modal.classList.add("show");

      // Add event listeners to the buttons
      document.getElementById("goToAccount").addEventListener("click", () => {
        window.location.href = "./account.html";
        closeModal();
      });

      document.getElementById("continueGuest").addEventListener("click", () => {
        sessionStorage.setItem("isGuest", "true");
        removeaddressarea();
        prepareguestbtn();
        closeModal();
      });

      // Close modal when clicking outside content (optional)
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          closeModal();
        }
      });
    } else {
      // User is signed in, clear any guest flags if needed
      sessionStorage.removeItem("isGuest");
      closeModal();
    }

    function closeModal() {
      modal.classList.remove("show");
      body.classList.remove("modal-open");
    }
  });
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", checkUserAuthentication);
