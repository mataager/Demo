// // Email and Password Sign-In or Sign-Up Prompt

// function emailPasswordSignIn() {
//   // Swal.fire({
//   //   title:
//   //     '<div class="flex center mb-10"><img width="30px" src="./assets/images/matager-bag.svg" alt="Matager Logo"></div> Sign in with Matager',
//   //   html: `
//   //     <input type="email" id="email" class="swal2-input" placeholder="Enter your email">
//   //     <input type="password" id="password" class="swal2-input" placeholder="Enter your password">
//   //     <p style="margin-top: 10px;">Don't have an account? <a href="#" id="signup-link" class=" mt-10">Sign up here</a></p>
//   //   `,
//   //   showCancelButton: true,
//   //   confirmButtonText: "Sign In",
//   //   didOpen: () => {
//   //     document.getElementById("signup-link").addEventListener("click", () => {
//   //       Swal.close(); // Close the sign-in prompt and open the sign-up prompt
//   //       emailPasswordSignUp();
//   //     });
//   //   },
//   //   preConfirm: () => {
//   //     const email = Swal.getPopup().querySelector("#email").value;
//   //     const password = Swal.getPopup().querySelector("#password").value;

//   //     if (!email || !password) {
//   //       Swal.showValidationMessage("Please enter both email and password");
//   //       return false;
//   //     }
//   //     return { email, password };
//   //   },
//   // }).then((result) => {
//   //   if (result.isConfirmed) {
//   //     const { email, password } = result.value;
//   //     auth
//   //       .signInWithEmailAndPassword(email, password)
//   //       .then((userCredential) => {
//   //         Swal.fire({
//   //           icon: "success",
//   //           title: "Signed In Successfully",
//   //           text: `Welcome, ${userCredential.user.email}`,
//   //         });

//   //         // Hide the email sign-in button on success
//   //         document.getElementById("email-signin-btn").style.display = "none";
//   //       })
//   //       .catch((error) => {
//   //         Swal.fire({
//   //           icon: "error",
//   //           title: "Sign In Failed",
//   //           text: error.message,
//   //         });
//   //       });
//   //   }
//   // });
// }

// function emailPasswordSignUp() {
//   Swal.fire({
//     title:
//       '<div class="flex center mb-10"><img width="30px" src="./assets/images/matager-bag.svg" alt="Matager Logo"></div> Create a New Matager Account',
//     html: `<input type="email" id="new-email" class="swal2-input width-available" placeholder="Enter your email">
//       <input type="text" id="first-name" class="swal2-input width-available" placeholder="Enter your first name">
//       <input type="text" id="last-name" class="swal2-input width-available" placeholder="Enter your last name">
//       <input type="password" id="new-password" class="swal2-input width-available" placeholder="Enter your password">
//       <input type="text" id="phone" class="swal2-input width-available" placeholder="Enter your primary phone number">
//       <input type="text" id="phone2" class="swal2-input width-available" placeholder="Enter your secondary phone number (optional)">
//       <input type="text" id="profile-pic" class="swal2-input width-available" placeholder="Enter your profile picture URL (optional)">
//       <select id="governorate" class="swal2-input select-governorate width-available">
//         <option value="" disabled selected>Select your governorate</option>
//         <option value="Cairo">Cairo</option>
//         <option value="Giza">Giza</option>
//         <option value="Alexandria">Alexandria</option>
//         <option value="Port Said">Port Said</option>
//         <option value="Suez">Suez</option>
//         <option value="Damietta">Damietta</option>
//         <option value="Dakahlia">Dakahlia</option>
//         <option value="Sharqia">Sharqia</option>
//         <option value="Qalyubia">Qalyubia</option>
//         <option value="Kafr El Sheikh">Kafr El Sheikh</option>
//         <option value="Gharbia">Gharbia</option>
//         <option value="Monufia">Monufia</option>
//         <option value="Beheira">Beheira</option>
//         <option value="Ismailia">Ismailia</option>
//         <option value="Aswan">Aswan</option>
//         <option value="Asyut">Asyut</option>
//         <option value="Beni Suef">Beni Suef</option>
//         <option value="Fayoum">Fayoum</option>
//         <option value="Minya">Minya</option>
//         <option value="Qena">Qena</option>
//         <option value="Sohag">Sohag</option>
//         <option value="Red Sea">Red Sea</option>
//         <option value="New Valley">New Valley</option>
//         <option value="Matruh">Matruh</option>
//         <option value="North Sinai">North Sinai</option>
//         <option value="South Sinai">South Sinai</option>
//         <option value="Luxor">Luxor</option>
//       </select>
//       <input type="text" id="city" class="swal2-input width-available" placeholder="Enter your city/state">
//       <input type="text" id="area" class="swal2-input width-available" placeholder="Enter your area">
//       <input type="text" id="house-number" class="swal2-input width-available" placeholder="Enter your house number">
//       <textarea id="address" class="swal2-textarea width-available" placeholder="Enter your full address"></textarea>
//     `, // The same HTML as before
//     showCancelButton: true,
//     confirmButtonText: "Sign Up",
//     preConfirm: () => {
//       const email = Swal.getPopup().querySelector("#new-email").value;
//       const firstName = Swal.getPopup().querySelector("#first-name").value;
//       const lastName = Swal.getPopup().querySelector("#last-name").value;
//       const password = Swal.getPopup().querySelector("#new-password").value;
//       const phone = Swal.getPopup().querySelector("#phone").value;
//       const phone2 = Swal.getPopup().querySelector("#phone2").value;
//       const profilePic = Swal.getPopup().querySelector("#profile-pic").value;
//       const governorate = Swal.getPopup().querySelector("#governorate").value;
//       const city = Swal.getPopup().querySelector("#city").value;
//       const area = Swal.getPopup().querySelector("#area").value;
//       const houseNumber = Swal.getPopup().querySelector("#house-number").value;
//       const fullAddress = Swal.getPopup().querySelector("#address").value;

//       if (
//         !email ||
//         !password ||
//         !firstName ||
//         !lastName ||
//         !phone ||
//         !governorate ||
//         !city ||
//         !area ||
//         !houseNumber ||
//         !fullAddress
//       ) {
//         Swal.showValidationMessage("Please fill in all required fields.");
//         return false;
//       }
//       return {
//         email,
//         password,
//         firstName,
//         lastName,
//         phone,
//         phone2,
//         profilePic,
//         governorate,
//         city,
//         area,
//         houseNumber,
//         fullAddress,
//       };
//     },
//   }).then((result) => {
//     if (result.isConfirmed) {
//       const {
//         email,
//         password,
//         firstName,
//         lastName,
//         phone,
//         phone2,
//         profilePic,
//         governorate,
//         city,
//         area,
//         houseNumber,
//         fullAddress,
//       } = result.value;

//       auth
//         .createUserWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//           const user = userCredential.user;

//           // Update user profile with display name and photo
//           return user
//             .updateProfile({
//               displayName: "Customer",
//               photoURL: profilePic || null,
//             })
//             .then(() => user.reload())
//             .then(() => user.getIdToken())
//             .then((idToken) => ({ user, idToken }));
//         })
//         .then(({ user, idToken }) => {
//           const uid = user.uid;

//           // Personal Info
//           const userData = {
//             personalInfo: {
//               email: user.email,
//               firstName,
//               lastName,
//               phone: phone,
//               phone2: phone2 || null,
//               photoURL: profilePic || null,
//             },
//             orders: [],
//             favorites: [],
//           };

//           // Address Data
//           const addressData = {
//             governorate,
//             city,
//             area,
//             houseNumber,
//             fullAddress,
//           };

//           // Save personal info and address data
//           return Promise.all([
//             fetch(
//               `https://matager-f1f00-default-rtdb.firebaseio.com/users/${uid}/personalInfo.json?auth=${idToken}`,
//               {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(userData.personalInfo),
//               }
//             ),
//             fetch(
//               `https://matager-f1f00-default-rtdb.firebaseio.com/users/${uid}/address.json?auth=${idToken}`,
//               {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(addressData),
//               }
//             ),
//           ]).then(() => user); // Return user object for UI update
//         })
//         .then((user) => {
//           // Update the UI once the data is saved
//           updateUI(user);
//           Swal.fire({
//             icon: "success",
//             title: "Account Created and Signed In",
//             text: "Welcome! You are now signed in.",
//           });
//         })
//         .catch((error) => {
//           Swal.fire({
//             icon: "error",
//             title: "Sign Up Failed",
//             text: error.message,
//           });
//         });
//     }
//   });
// }

//new
function emailPasswordSignIn() {
  const body = document.body;
  const modal = document.getElementById("signinmodal");
  const modalContent = document.getElementById("signinmodalcontent");

  // Set the modal content with both forms (initially hidden)
  modalContent.innerHTML = `
    <div class="guestmodalarea">
      <!-- Sign In Form -->
      <div id="signin-form" class="form-container active">
        <h2>Sign in for better experience</h2>
        <div class="mt-30 mb-30 signinupinbutarea04392">
          <input type="email" id="email" class="swal2-input" placeholder="Enter your email">
          <input type="password" id="password" class="swal2-input" placeholder="Enter your password">
          <button id="continueGuest" class="modal-btn signinupbtn04392">Sign in</button>
        </div>
        <p style="margin-top: 10px;">Don't have an account? <a href="#" id="signup-link" class="mt-10">Sign up here</a></p>
      </div>

      <!-- Sign Up Form -->
      <div id="signup-form" class="form-container">
        <h2>Create a New Account</h2>
        <div class="mt-30 mb-30 signinupinbutarea04392">
          <input type="email" id="new-email" class="swal2-input width-available" placeholder="Enter your email">
          <input type="text" id="first-name" class="swal2-input width-available" placeholder="Enter your first name">
          <input type="text" id="last-name" class="swal2-input width-available" placeholder="Enter your last name">
          <input type="password" id="new-password" class="swal2-input width-available" placeholder="Enter your password">
          <input type="text" id="phone" class="swal2-input width-available" placeholder="Enter your primary phone number">
          <input type="text" id="phone2" class="swal2-input width-available" placeholder="Enter your secondary phone number (optional)">
          <input type="text" id="profile-pic" class="swal2-input width-available" placeholder="Enter your profile picture URL (optional)">
          <select id="governorate" class="swal2-input select-governorate width-available">
            <option value="" disabled selected>Select your governorate</option>
            <option value="Cairo">Cairo</option>
            <option value="Giza">Giza</option>
            <!-- Other governorate options -->
          </select>
          <input type="text" id="city" class="swal2-input width-available" placeholder="Enter your city/state">
          <input type="text" id="area" class="swal2-input width-available" placeholder="Enter your area">
          <input type="text" id="house-number" class="swal2-input width-available" placeholder="Enter your house number">
          <textarea id="address" class="swal2-textarea width-available" placeholder="Enter your full address"></textarea>
          <button id="signup-btn" class="modal-btn signinupbtn04392">Sign Up</button>
        </div>
        <p style="margin-top: 10px;">Already have an account? <a href="#" id="signin-link" class="mt-10">Sign in here</a></p>
      </div>
    </div>
  `;

  // Show the modal
  body.classList.add("modal-open");
  modal.classList.add("show");

  // Add event listeners
  document
    .getElementById("continueGuest")
    .addEventListener("click", handleSignIn);
  document.getElementById("signup-btn").addEventListener("click", handleSignUp);
  document
    .getElementById("signup-link")
    .addEventListener("click", switchToSignUp);
  document
    .getElementById("signin-link")
    .addEventListener("click", switchToSignIn);

  // Handle Enter key press for both forms
  modalContent.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const activeForm = modalContent.querySelector(".form-container.active");
      if (activeForm.id === "signin-form") {
        handleSignIn();
      } else {
        handleSignUp();
      }
    }
  });

  function switchToSignUp(e) {
    e.preventDefault();
    document.getElementById("signin-form").classList.remove("active");
    document.getElementById("signup-form").classList.add("active");
  }

  function switchToSignIn(e) {
    e.preventDefault();
    document.getElementById("signup-form").classList.remove("active");
    document.getElementById("signin-form").classList.add("active");
  }

  function handleSignIn() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Hide the modal on success
        body.classList.remove("modal-open");
        modal.classList.remove("show");

        alert(`Signed In Successfully\nWelcome, ${userCredential.user.email}`);
        document.getElementById("email-signin-btn").style.display = "none";
      })
      .catch((error) => {
        alert(`Sign In Failed\n${error.message}`);
      });
  }

  function handleSignUp() {
    const email = document.getElementById("new-email").value;
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const password = document.getElementById("new-password").value;
    const phone = document.getElementById("phone").value;
    const phone2 = document.getElementById("phone2").value;
    const profilePic = document.getElementById("profile-pic").value;
    const governorate = document.getElementById("governorate").value;
    const city = document.getElementById("city").value;
    const area = document.getElementById("area").value;
    const houseNumber = document.getElementById("house-number").value;
    const fullAddress = document.getElementById("address").value;

    if (
      !email ||
      !password ||
      !firstName ||
      !lastName ||
      !phone ||
      !governorate ||
      !city ||
      !area ||
      !houseNumber ||
      !fullAddress
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        return user
          .updateProfile({
            displayName: "Customer",
            photoURL: profilePic || null,
          })
          .then(() => user.reload())
          .then(() => user.getIdToken())
          .then((idToken) => ({ user, idToken }));
      })
      .then(({ user, idToken }) => {
        const uid = user.uid;

        const userData = {
          personalInfo: {
            email: user.email,
            firstName,
            lastName,
            phone: phone,
            phone2: phone2 || null,
            photoURL: profilePic || null,
          },
          orders: [],
          favorites: [],
        };

        const addressData = {
          governorate,
          city,
          area,
          houseNumber,
          fullAddress,
        };

        return Promise.all([
          fetch(
            `https://matager-f1f00-default-rtdb.firebaseio.com/users/${uid}/personalInfo.json?auth=${idToken}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(userData.personalInfo),
            }
          ),
          fetch(
            `https://matager-f1f00-default-rtdb.firebaseio.com/users/${uid}/address.json?auth=${idToken}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(addressData),
            }
          ),
        ]).then(() => user);
      })
      .then((user) => {
        // Hide the modal on success
        body.classList.remove("modal-open");
        modal.classList.remove("show");

        alert("Account Created and Signed In\nWelcome! You are now signed in.");
        document.getElementById("email-signin-btn").style.display = "none";
      })
      .catch((error) => {
        alert(`Sign Up Failed\n${error.message}`);
      });
  }
}
