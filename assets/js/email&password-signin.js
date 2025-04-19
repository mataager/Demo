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
//       <input type="text" id="first-name-log" class="swal2-input width-available" placeholder="Enter your first name">
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
//       const firstName = Swal.getPopup().querySelector("#first-name-log").value;
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

//v2
// function emailPasswordSignIn() {
//   const body = document.body;
//   const modal = document.getElementById("signinmodal");
//   const modalContent = document.getElementById("signinmodalcontent");

//   // Set the modal content with both forms (initially hidden)
//   modalContent.innerHTML = `
//     <div class="guestmodalarea">
//       <!-- Sign In Form -->
//       <div id="signin-form" class="form-container active">
//         <h2>Sign in for better experience</h2>
//         <div class="mt-30 mb-30 signinupinbutarea04392">
//           <input type="email" id="email" class="swal2-input" placeholder="Enter your email">
//           <input type="password" id="password" class="swal2-input" placeholder="Enter your password">
//           <button id="continueGuest" class="modal-btn signinupbtn04392">Sign in</button>
//         </div>
//         <p style="margin-top: 10px;">Don't have an account? <a href="#" id="signup-link" class="mt-10">Sign up here</a></p>
//       </div>

//       <!-- Sign Up Form -->
//       <div id="signup-form" class="form-container">
//         <h2>Create a New Account</h2>
//         <div class="mt-30 mb-30 signinupinbutarea04392">
//           <input type="email" id="new-email" class="swal2-input width-available" placeholder="Enter your email">
//           <input type="text" id="first-name-log" class="swal2-input width-available" placeholder="Enter your first name">
//           <input type="text" id="last-name" class="swal2-input width-available" placeholder="Enter your last name">
//           <input type="password" id="new-password" class="swal2-input width-available" placeholder="Enter your password">
//           <input type="text" id="phone" class="swal2-input width-available" placeholder="Enter your primary phone number">
//           <input type="text" id="phone2" class="swal2-input width-available" placeholder="Enter your secondary phone number (optional)">
//           <select id="governorate" class="swal2-input select-governorate width-available">
//             <option value="" disabled selected>Select your governorate</option>
//             <option value="Cairo">Cairo</option>
//             <option value="Giza">Giza</option>
//             <!-- Other governorate options -->
//           </select>
//           <input type="text" id="city" class="swal2-input width-available" placeholder="Enter your city/state">
//           <input type="text" id="area" class="swal2-input width-available" placeholder="Enter your area">
//           <input type="text" id="house-number" class="swal2-input width-available" placeholder="Enter your house number">
//           <textarea id="address" class="swal2-textarea width-available" placeholder="Enter your full address"></textarea>
//           <button id="signup-btn" class="modal-btn signinupbtn04392">Sign Up</button>
//         </div>
//         <p style="margin-top: 10px;">Already have an account? <a href="#" id="signin-link" class="mt-10">Sign in here</a></p>
//       </div>
//     </div>
//   `;

//   // Show the modal
//   body.classList.add("modal-open");
//   modal.classList.add("show");

//   // Add event listeners
//   document
//     .getElementById("continueGuest")
//     .addEventListener("click", handleSignIn);
//   document.getElementById("signup-btn").addEventListener("click", handleSignUp);
//   document
//     .getElementById("signup-link")
//     .addEventListener("click", switchToSignUp);
//   document
//     .getElementById("signin-link")
//     .addEventListener("click", switchToSignIn);

//   // Handle Enter key press for both forms
//   modalContent.addEventListener("keypress", function (e) {
//     if (e.key === "Enter") {
//       const activeForm = modalContent.querySelector(".form-container.active");
//       if (activeForm.id === "signin-form") {
//         handleSignIn();
//       } else {
//         handleSignUp();
//       }
//     }
//   });

//   function switchToSignUp(e) {
//     e.preventDefault();
//     document.getElementById("signin-form").classList.remove("active");
//     document.getElementById("signup-form").classList.add("active");
//   }

//   function switchToSignIn(e) {
//     e.preventDefault();
//     document.getElementById("signup-form").classList.remove("active");
//     document.getElementById("signin-form").classList.add("active");
//   }

//   function handleSignIn() {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     if (!email || !password) {
//       alert("Please enter both email and password");
//       return;
//     }

//     auth
//       .signInWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Hide the modal on success
//         body.classList.remove("modal-open");
//         modal.classList.remove("show");

//         alert(`Signed In Successfully\nWelcome, ${userCredential.user.email}`);
//         document.getElementById("email-signin-btn").style.display = "none";
//       })
//       .catch((error) => {
//         alert(`Sign In Failed\n${error.message}`);
//       });
//   }

//   function handleSignUp() {
//     const email = document.getElementById("new-email").value;
//     const firstName = document.getElementById("first-name-log").value;
//     const lastName = document.getElementById("last-name").value;
//     const password = document.getElementById("new-password").value;
//     const phone = document.getElementById("phone").value;
//     const phone2 = document.getElementById("phone2").value;
//     const profilePic = document.getElementById("profile-pic").value;
//     const governorate = document.getElementById("governorate").value;
//     const city = document.getElementById("city").value;
//     const area = document.getElementById("area").value;
//     const houseNumber = document.getElementById("house-number").value;
//     const fullAddress = document.getElementById("address").value;

//     if (
//       !email ||
//       !password ||
//       !firstName ||
//       !lastName ||
//       !phone ||
//       !governorate ||
//       !city ||
//       !area ||
//       !houseNumber ||
//       !fullAddress
//     ) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     auth
//       .createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;

//         return user
//           .updateProfile({
//             displayName: "Customer",
//             photoURL: profilePic || null,
//           })
//           .then(() => user.reload())
//           .then(() => user.getIdToken())
//           .then((idToken) => ({ user, idToken }));
//       })
//       .then(({ user, idToken }) => {
//         const uid = user.uid;

//         const userData = {
//           personalInfo: {
//             email: user.email,
//             firstName,
//             lastName,
//             phone: phone,
//             phone2: phone2 || null,
//             photoURL: profilePic || null,
//           },
//           orders: [],
//           favorites: [],
//         };

//         const addressData = {
//           governorate,
//           city,
//           area,
//           houseNumber,
//           fullAddress,
//         };

//         return Promise.all([
//           fetch(
//             `https://matager-f1f00-default-rtdb.firebaseio.com/users/${uid}/personalInfo.json?auth=${idToken}`,
//             {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify(userData.personalInfo),
//             }
//           ),
//           fetch(
//             `https://matager-f1f00-default-rtdb.firebaseio.com/users/${uid}/address.json?auth=${idToken}`,
//             {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify(addressData),
//             }
//           ),
//         ]).then(() => user);
//       })
//       .then((user) => {
//         // Hide the modal on success
//         body.classList.remove("modal-open");
//         modal.classList.remove("show");

//         alert("Account Created and Signed In\nWelcome! You are now signed in.");
//         document.getElementById("email-signin-btn").style.display = "none";
//       })
//       .catch((error) => {
//         alert(`Sign Up Failed\n${error.message}`);
//       });
//   }
// }

//v3
// function emailPasswordSignIn() {
//   const body = document.body;
//   const modal = document.getElementById("signinmodal");
//   const modalContent = document.getElementById("signinmodalcontent");

//   // Set the modal content with both forms (initially hidden)
//   modalContent.innerHTML = `
//     <div class="guestmodalarea">
//       <!-- Sign In Form -->
//       <div id="signin-form" class="form-container active">
//         <h2>Sign in for better experience</h2>
//         <div class="mt-30 mb-30 signinupinbutarea04392">
//           <input type="email" id="email" class="swal2-input" placeholder="Enter your email">
//           <input type="password" id="password" class="swal2-input" placeholder="Enter your password">
//           <button id="continueGuest" class="modal-btn signinupbtn04392">Sign in</button>
//         </div>
//         <p style="margin-top: 10px;">Don't have an account? <a href="#" id="signup-link" class="mt-10">Sign up here</a></p>
//       </div>

//       <!-- Sign Up Form -->
//       <div id="signup-form" class="form-container">
//         <div class="progress-container">
//           <div class="progress-bar">
//             <div class="progress-step" id="step1" data-step="1">Basic Info</div>
//             <div class="progress-step" id="step2" data-step="2">Security</div>
//             <div class="progress-step" id="step3" data-step="3">Details</div>
//           </div>
//           <div class="progress-line">
//             <div class="progress-fill" id="progress-fill"></div>
//           </div>
//         </div>

//         <!-- Step 1: Basic Info -->
//         <div id="signup-step1" class="signup-step active">
//           <h2>Create a New Account</h2>
//           <div class="mt-30 mb-30 signinupinbutarea04392">
//             <input type="text" id="first-name-log" class="swal2-input width-available" placeholder="Enter your first name" required>
//             <input type="text" id="last-name-log" class="swal2-input width-available" placeholder="Enter your last name" required>
//             <input type="email" id="new-email" class="swal2-input width-available" placeholder="Enter your email" required>
//              <input type="text" id="phone" class="swal2-input width-available" placeholder="Enter your primary phone number" required>
//             <input type="text" id="phone2" class="swal2-input width-available" placeholder="Enter your secondary phone number (optional)">
//             <button id="next-to-step2" class="modal-btn signinupbtn04392">Next</button>
//           </div>
//         </div>

//         <!-- Step 2: Password -->
//         <div id="signup-step2" class="signup-step">
//           <h2>Create a Secure Password</h2>
//           <div class="mt-30 mb-30 signinupinbutarea04392">
//             <input type="password" id="new-password" class="swal2-input width-available" placeholder="Enter your password" required>
//             <input type="password" id="confirm-password" class="swal2-input width-available" placeholder="Confirm your password" required>
//             <div class="password-strength">
//               <div class="strength-meter">
//                 <div class="strength-fill" id="strength-fill"></div>
//               </div>
//               <span id="strength-text">Password Strength: Weak</span>
//             </div>
//             <div class="form-navigation">
//               <button id="back-to-step1" class="modal-btn back-btn">Back</button>
//               <button id="next-to-step3" class="modal-btn signinupbtn04392">Next</button>
//             </div>
//           </div>
//         </div>

//         <!-- Step 3: Additional Details -->
//         <div id="signup-step3" class="signup-step">
//           <h2>Additional Information</h2>
//           <div class="mt-30 mb-30 signinupinbutarea04392">
//             <select id="governorate" class="swal2-input select-governorate width-available" required>
//               <option value="" disabled selected>Select your governorate</option>
//               <option value="Cairo">Cairo</option>
//               <option value="Giza">Giza</option>
//               <!-- Other governorate options -->
//             </select>
//             <input type="text" id="city" class="swal2-input width-available" placeholder="Enter your city/state" required>
//             <input type="text" id="area" class="swal2-input width-available" placeholder="Enter your area" required>
//             <input type="text" id="house-number" class="swal2-input width-available" placeholder="Enter your house number" required>
//             <textarea id="address" class="swal2-textarea width-available" placeholder="Enter your full address" required></textarea>
//             <div class="form-navigation">
//               <button id="back-to-step2" class="modal-btn back-btn">Back</button>
//               <button id="signup-btn" class="modal-btn signinupbtn04392">Complete Sign Up</button>
//             </div>
//           </div>
//         </div>

//         <p style="margin-top: 10px;">Already have an account? <a href="#" id="signin-link" class="mt-10">Sign in here</a></p>
//       </div>
//     </div>
//   `;

//   // Show the modal
//   body.classList.add("modal-open");
//   modal.classList.add("show");

//   // Add event listeners
//   document
//     .getElementById("continueGuest")
//     .addEventListener("click", handleSignIn);
//   document.getElementById("signup-btn").addEventListener("click", handleSignUp);
//   document
//     .getElementById("signup-link")
//     .addEventListener("click", switchToSignUp);
//   document
//     .getElementById("signin-link")
//     .addEventListener("click", switchToSignIn);

//   // Step navigation listeners
//   document
//     .getElementById("next-to-step2")
//     .addEventListener("click", () => goToStep(2));
//   document
//     .getElementById("next-to-step3")
//     .addEventListener("click", () => goToStep(3));
//   document
//     .getElementById("back-to-step1")
//     .addEventListener("click", () => goToStep(1));
//   document
//     .getElementById("back-to-step2")
//     .addEventListener("click", () => goToStep(2));

//   // Password strength checker
//   document
//     .getElementById("new-password")
//     .addEventListener("input", checkPasswordStrength);

//   // Handle Enter key press for both forms
//   modalContent.addEventListener("keypress", function (e) {
//     if (e.key === "Enter") {
//       const activeForm = modalContent.querySelector(".form-container.active");
//       if (activeForm.id === "signin-form") {
//         handleSignIn();
//       } else {
//         const currentStep = modalContent.querySelector(".signup-step.active");
//         if (currentStep.id === "signup-step1") {
//           goToStep(2);
//         } else if (currentStep.id === "signup-step2") {
//           goToStep(3);
//         } else {
//           handleSignUp();
//         }
//       }
//     }
//   });

//   function switchToSignUp(e) {
//     e.preventDefault();
//     document.getElementById("signin-form").classList.remove("active");
//     document.getElementById("signup-form").classList.add("active");
//     goToStep(1); // Start at step 1
//   }

//   function switchToSignIn(e) {
//     e.preventDefault();
//     document.getElementById("signup-form").classList.remove("active");
//     document.getElementById("signin-form").classList.add("active");
//   }

//   function goToStep(stepNumber) {
//     // Validate current step before proceeding
//     if (stepNumber > 1 && !validateStep(stepNumber - 1)) {
//       return;
//     }

//     // Hide all steps
//     document.querySelectorAll(".signup-step").forEach((step) => {
//       step.classList.remove("active");
//     });

//     // Show current step
//     document.getElementById(`signup-step${stepNumber}`).classList.add("active");

//     // Update progress bar
//     updateProgressBar(stepNumber);

//     // Update active step indicator
//     document.querySelectorAll(".progress-step").forEach((step) => {
//       step.classList.remove("active");
//       if (parseInt(step.dataset.step) <= stepNumber) {
//         step.classList.add("active");
//       }
//     });
//   }

//   function validateStep(stepNumber) {
//     if (stepNumber === 1) {
//       const firstName = document.getElementById("first-name-log").value.trim();
//       const lastName = document.getElementById("last-name-log").value.trim();
//       const email = document.getElementById("new-email").value.trim();

//       if (!firstName || !lastName || !email) {
//         alert("Please fill in all required fields");
//         return false;
//       }

//       if (!/^\S+@\S+\.\S+$/.test(email)) {
//         alert("Please enter a valid email address");
//         return false;
//       }

//       return true;
//     } else if (stepNumber === 2) {
//       const password = document.getElementById("new-password").value;
//       const confirmPassword = document.getElementById("confirm-password").value;

//       if (!password || !confirmPassword) {
//         alert("Please enter and confirm your password");
//         return false;
//       }

//       if (password !== confirmPassword) {
//         alert("Passwords do not match");
//         return false;
//       }

//       if (password.length < 8) {
//         alert("Password must be at least 8 characters long");
//         return false;
//       }

//       return true;
//     }
//     return true;
//   }

//   function updateProgressBar(stepNumber) {
//     const percentage = (stepNumber / 3) * 100;
//     document.getElementById("progress-fill").style.width = `${percentage}%`;
//   }

//   function checkPasswordStrength() {
//     const password = document.getElementById("new-password").value;
//     const strengthFill = document.getElementById("strength-fill");
//     const strengthText = document.getElementById("strength-text");

//     // Calculate strength
//     let strength = 0;
//     if (password.length >= 8) strength += 1;
//     if (/[A-Z]/.test(password)) strength += 1;
//     if (/[0-9]/.test(password)) strength += 1;
//     if (/[^A-Za-z0-9]/.test(password)) strength += 1;

//     // Update UI
//     // Update UI
//     const colors = ["#ff4d4d", "#ffa64d", "#66cc66", "#339933", "#006600"];
//     const texts = [
//       "Very Weak",
//       "Weak",
//       "Strong",
//       "Very Strong",
//       "Extremely Strong",
//     ];

//     strengthFill.style.width = `${(strength / 4) * 100}%`;
//     strengthFill.style.backgroundColor = colors[strength];
//     strengthText.textContent = `Password Strength: ${texts[strength]}`;
//     strengthText.style.color = colors[strength];
//   }

//   function handleSignIn() {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     if (!email || !password) {
//       alert("Please enter both email and password");
//       return;
//     }

//     auth
//       .signInWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Hide the modal on success
//         body.classList.remove("modal-open");
//         modal.classList.remove("show");

//         alert(`Signed In Successfully\nWelcome, ${userCredential.user.email}`);
//         document.getElementById("email-signin-btn").style.display = "none";
//       })
//       .catch((error) => {
//         alert(`Sign In Failed\n${error.message}`);
//       });
//   }

//   function handleSignUp() {
//     // Validate step 3
//     const phone = document.getElementById("phone").value;
//     const governorate = document.getElementById("governorate").value;
//     const city = document.getElementById("city").value;
//     const area = document.getElementById("area").value;
//     const houseNumber = document.getElementById("house-number").value;
//     const fullAddress = document.getElementById("address").value;

//     if (
//       !phone ||
//       !governorate ||
//       !city ||
//       !area ||
//       !houseNumber ||
//       !fullAddress
//     ) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     // Get values from all steps
//     const email = document.getElementById("new-email").value;
//     const firstName = document.getElementById("first-name-log").value;
//     const lastName = document.getElementById("last-name-log").value;
//     const password = document.getElementById("new-password").value;
//     const phone2 = document.getElementById("phone2").value;

//     auth
//       .createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;

//         return user
//           .updateProfile({
//             displayName: "Customer",
//             photoURL: null, // You can add profile pic upload later
//           })
//           .then(() => user.reload())
//           .then(() => user.getIdToken())
//           .then((idToken) => ({ user, idToken }));
//       })
//       .then(({ user, idToken }) => {
//         const uid = user.uid;

//         const userData = {
//           personalInfo: {
//             email: user.email,
//             firstName,
//             lastName,
//             phone: phone,
//             phone2: phone2 || null,
//             photoURL: null,
//           },
//           orders: [],
//           favorites: [],
//         };

//         const addressData = {
//           governorate,
//           city,
//           area,
//           houseNumber,
//           fullAddress,
//         };

//         return Promise.all([
//           fetch(
//             `https://matager-f1f00-default-rtdb.firebaseio.com/users/${uid}/personalInfo.json?auth=${idToken}`,
//             {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify(userData.personalInfo),
//             }
//           ),
//           fetch(
//             `https://matager-f1f00-default-rtdb.firebaseio.com/users/${uid}/address.json?auth=${idToken}`,
//             {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify(addressData),
//             }
//           ),
//         ]).then(() => user);
//       })
//       .then((user) => {
//         // Hide the modal on success
//         body.classList.remove("modal-open");
//         modal.classList.remove("show");

//         alert("Account Created and Signed In\nWelcome! You are now signed in.");
//         document.getElementById("email-signin-btn").style.display = "none";
//       })
//       .catch((error) => {
//         alert(`Sign Up Failed\n${error.message}`);
//       });
//   }
// }

//v4
// function emailPasswordSignIn() {
//   const body = document.body;
//   const modal = document.getElementById("signinmodal");
//   const modalContent = document.getElementById("signinmodalcontent");

//   // Set the modal content with both forms (initially hidden)
//   modalContent.innerHTML = `
//     <div class="guestmodalarea">
//       <!-- Sign In Form -->
//       <div id="signin-form" class="form-container active">
//         <h2>Sign in for better experience</h2>
//         <div class="mt-30 mb-30 signinupinbutarea04392">
//           <input type="email" id="email" class="swal2-input" placeholder="Enter your email">
//           <input type="password" id="password" class="swal2-input" placeholder="Enter your password">
//           <button id="continueGuest" class="modal-btn signinupbtn04392">Sign in</button>
//         </div>
//         <p style="margin-top: 10px;">Don't have an account? <a href="#" id="signup-link" class="mt-10">Sign up here</a></p>
//       </div>

//       <!-- Sign Up Form -->
//       <div id="signup-form" class="form-container">
//         <div class="progress-container">
//           <div class="progress-bar">
//             <div class="progress-step" id="step1" data-step="1">Basic Info</div>
//             <div class="progress-step" id="step2" data-step="2">Security</div>
//             <div class="progress-step" id="step3" data-step="3">Details</div>
//           </div>
//           <div class="progress-line">
//             <div class="progress-fill" id="progress-fill"></div>
//           </div>
//         </div>

//         <!-- Step 1: Basic Info -->
//         <div id="signup-step1" class="signup-step active">
//           <h2>Create a New Account</h2>
//           <div class="mt-30 mb-30 signinupinbutarea04392">
//             <input type="text" id="first-name-log" class="swal2-input width-available" placeholder="Enter your first name" required>
//             <input type="text" id="last-name-log" class="swal2-input width-available" placeholder="Enter your last name" required>
//             <input type="email" id="new-email" class="swal2-input width-available" placeholder="Enter your email" required>
//              <input type="text" id="phone" class="swal2-input width-available" placeholder="Enter your primary phone number" required>
//             <input type="text" id="phone2" class="swal2-input width-available" placeholder="Enter your secondary phone number (optional)">
//             <button id="next-to-step2" class="modal-btn signinupbtn04392">Next</button>
//           </div>
//         </div>

//         <!-- Step 2: Password -->
//         <div id="signup-step2" class="signup-step">
//           <h2>Create a Secure Password</h2>
//           <div class="mt-30 mb-30 signinupinbutarea04392">
//             <input type="password" id="new-password" class="swal2-input width-available" placeholder="Enter your password" required>
//             <input type="password" id="confirm-password" class="swal2-input width-available" placeholder="Confirm your password" required>
//             <div class="password-strength">
//               <div class="strength-meter">
//                 <div class="strength-fill" id="strength-fill"></div>
//               </div>
//               <span id="strength-text">Password Strength: Weak</span>
//             </div>
//             <div class="form-navigation">
//               <button id="back-to-step1" class="modal-btn back-btn"><i class="bi bi-arrow-left"></i></button>
//               <button id="next-to-step3" class="modal-btn signinupbtn04392">Next</button>
//             </div>
//           </div>
//         </div>

//         <!-- Step 3: Additional Details -->
//         <div id="signup-step3" class="signup-step">
//           <h2>Additional Information</h2>
//           <div class="mt-30 mb-30 signinupinbutarea04392">
//             <select id="governorate" class="swal2-input select-governorate width-available" required>
//               <option value="" disabled selected>Select your governorate</option>
//               <option value="Cairo">Cairo</option>
//               <option value="Giza">Giza</option>
//               <!-- Other governorate options -->
//             </select>
//             <input type="text" id="city" class="swal2-input width-available" placeholder="Enter your city/state" required>
//             <input type="text" id="area" class="swal2-input width-available" placeholder="Enter your area" required>
//             <input type="text" id="house-number" class="swal2-input width-available" placeholder="Enter your house number" required>
//             <textarea id="address" class="swal2-textarea width-available" placeholder="Enter your full address" required></textarea>
//             <div class="form-navigation">
//               <button id="back-to-step2" class="modal-btn back-btn"><i class="bi bi-arrow-left"></i></button>
//               <button id="signup-btn" class="modal-btn signinupbtn04392">Complete Sign Up</button>
//             </div>
//           </div>
//         </div>

//         <p style="margin-top: 10px;">Already have an account? <a href="#" id="signin-link" class="mt-10">Sign in here</a></p>
//       </div>
//     </div>
//   `;

//   // Show the modal
//   body.classList.add("modal-open");
//   modal.classList.add("show");

//   // Add event listeners
//   document
//     .getElementById("continueGuest")
//     .addEventListener("click", handleSignIn);
//   document.getElementById("signup-btn").addEventListener("click", handleSignUp);
//   document
//     .getElementById("signup-link")
//     .addEventListener("click", switchToSignUp);
//   document
//     .getElementById("signin-link")
//     .addEventListener("click", switchToSignIn);

//   // Step navigation listeners
//   document
//     .getElementById("next-to-step2")
//     .addEventListener("click", () => goToStep(2));
//   document
//     .getElementById("next-to-step3")
//     .addEventListener("click", () => goToStep(3));
//   document
//     .getElementById("back-to-step1")
//     .addEventListener("click", () => goToStep(1));
//   document
//     .getElementById("back-to-step2")
//     .addEventListener("click", () => goToStep(2));

//   // Password strength checker
//   document
//     .getElementById("new-password")
//     .addEventListener("input", checkPasswordStrength);

//   // Handle Enter key press for both forms
//   modalContent.addEventListener("keypress", function (e) {
//     if (e.key === "Enter") {
//       const activeForm = modalContent.querySelector(".form-container.active");
//       if (activeForm.id === "signin-form") {
//         handleSignIn();
//       } else {
//         const currentStep = modalContent.querySelector(".signup-step.active");
//         if (currentStep.id === "signup-step1") {
//           goToStep(2);
//         } else if (currentStep.id === "signup-step2") {
//           goToStep(3);
//         } else {
//           handleSignUp();
//         }
//       }
//     }
//   });

//   function switchToSignUp(e) {
//     e.preventDefault();
//     document.getElementById("signin-form").classList.remove("active");
//     document.getElementById("signup-form").classList.add("active");
//     goToStep(1); // Start at step 1
//   }

//   function switchToSignIn(e) {
//     e.preventDefault();
//     document.getElementById("signup-form").classList.remove("active");
//     document.getElementById("signin-form").classList.add("active");
//   }

//   function goToStep(stepNumber) {
//     // Validate current step before proceeding
//     if (stepNumber > 1 && !validateStep(stepNumber - 1)) {
//       return;
//     }

//     // Hide all steps
//     document.querySelectorAll(".signup-step").forEach((step) => {
//       step.classList.remove("active");
//     });

//     // Show current step
//     document.getElementById(`signup-step${stepNumber}`).classList.add("active");

//     // Update progress bar
//     updateProgressBar(stepNumber);

//     // Update active step indicator
//     document.querySelectorAll(".progress-step").forEach((step) => {
//       step.classList.remove("active");
//       if (parseInt(step.dataset.step) <= stepNumber) {
//         step.classList.add("active");
//       }
//     });
//   }

//   function validateStep(stepNumber) {
//     if (stepNumber === 1) {
//       const firstName = document.getElementById("first-name-log").value.trim();
//       const lastName = document.getElementById("last-name-log").value.trim();
//       const email = document.getElementById("new-email").value.trim();
//       const phone = document.getElementById("phone").value.trim();

//       if (!firstName || !lastName || !email || !phone) {
//         Swal.fire({
//           toast: true,
//           position: "top-end",
//           icon: "error",
//           title: "Please fill in all required fields",
//           showConfirmButton: false,
//           timer: 3000,
//         });
//         return false;
//       }

//       if (!/^\S+@\S+\.\S+$/.test(email)) {
//         Swal.fire({
//           toast: true,
//           position: "top-end",
//           icon: "error",
//           title: "Please enter a valid email address",
//           showConfirmButton: false,
//           timer: 3000,
//         });
//         return false;
//       }

//       // Phone number validation - Egyptian format
//       // if (!/^01[0125][0-9]{8}$/.test(phone)) {
//       //   Swal.fire({
//       //     toast: true,
//       //     position: 'top-end',
//       //     icon: 'error',
//       //     title: 'Please enter a valid Egyptian phone number (e.g. 01123456789)',
//       //     showConfirmButton: false,
//       //     timer: 3000
//       //   });
//       //   return false;
//       // }

//       return true;
//     } else if (stepNumber === 2) {
//       const password = document.getElementById("new-password").value;
//       const confirmPassword = document.getElementById("confirm-password").value;

//       if (!password || !confirmPassword) {
//         Swal.fire({
//           toast: true,
//           position: "top-end",
//           icon: "error",
//           title: "Please enter and confirm your password",
//           showConfirmButton: false,
//           timer: 3000,
//         });
//         return false;
//       }

//       if (password !== confirmPassword) {
//         Swal.fire({
//           toast: true,
//           position: "top-end",
//           icon: "error",
//           title: "Passwords do not match",
//           showConfirmButton: false,
//           timer: 3000,
//         });
//         return false;
//       }

//       if (password.length < 8) {
//         Swal.fire({
//           toast: true,
//           position: "top-end",
//           icon: "error",
//           title: "Password must be at least 8 characters long",
//           showConfirmButton: false,
//           timer: 3000,
//         });
//         return false;
//       }

//       return true;
//     }
//     return true;
//   }

//   function updateProgressBar(stepNumber) {
//     const percentage = (stepNumber / 3) * 100;
//     document.getElementById("progress-fill").style.width = `${percentage}%`;
//   }

//   function checkPasswordStrength() {
//     const password = document.getElementById("new-password").value;
//     const strengthFill = document.getElementById("strength-fill");
//     const strengthText = document.getElementById("strength-text");

//     // Calculate strength
//     let strength = 0;
//     if (password.length >= 8) strength += 1;
//     if (/[A-Z]/.test(password)) strength += 1;
//     if (/[0-9]/.test(password)) strength += 1;
//     if (/[^A-Za-z0-9]/.test(password)) strength += 1;

//     // Update UI
//     // Update UI
//     const colors = ["#ff4d4d", "#ffa64d", "#66cc66", "#339933", "#006600"];
//     const texts = [
//       "Very Weak",
//       "Weak",
//       "Strong",
//       "Very Strong",
//       "Extremely Strong",
//     ];

//     strengthFill.style.width = `${(strength / 4) * 100}%`;
//     strengthFill.style.backgroundColor = colors[strength];
//     strengthText.textContent = `Password Strength: ${texts[strength]}`;
//     strengthText.style.color = colors[strength];
//   }

//   function handleSignIn() {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     if (!email || !password) {
//       alert("Please enter both email and password");
//       return;
//     }

//     auth
//       .signInWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Hide the modal on success
//         body.classList.remove("modal-open");
//         modal.classList.remove("show");

//         alert(`Signed In Successfully\nWelcome, ${userCredential.user.email}`);
//         document.getElementById("email-signin-btn").style.display = "none";
//       })
//       .catch((error) => {
//         alert(`Sign In Failed\n${error.message}`);
//       });
//   }

//   function handleSignUp() {
//     // Validate step 3
//     const phone = document.getElementById("phone").value;
//     const governorate = document.getElementById("governorate").value;
//     const city = document.getElementById("city").value;
//     const area = document.getElementById("area").value;
//     const houseNumber = document.getElementById("house-number").value;
//     const fullAddress = document.getElementById("address").value;

//     if (
//       !phone ||
//       !governorate ||
//       !city ||
//       !area ||
//       !houseNumber ||
//       !fullAddress
//     ) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     // Get values from all steps
//     const email = document.getElementById("new-email").value;
//     const firstName = document.getElementById("first-name-log").value;
//     const lastName = document.getElementById("last-name-log").value;
//     const password = document.getElementById("new-password").value;
//     const phone2 = document.getElementById("phone2").value;

//     auth
//       .createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;

//         return user
//           .updateProfile({
//             displayName: "Customer",
//             photoURL: null, // You can add profile pic upload later
//           })
//           .then(() => user.reload())
//           .then(() => user.getIdToken())
//           .then((idToken) => ({ user, idToken }));
//       })
//       .then(({ user, idToken }) => {
//         const uid = user.uid;

//         const userData = {
//           personalInfo: {
//             email: user.email,
//             firstName,
//             lastName,
//             phone: phone,
//             phone2: phone2 || null,
//             photoURL: null,
//           },
//           orders: [],
//           favorites: [],
//         };

//         const addressData = {
//           governorate,
//           city,
//           area,
//           houseNumber,
//           fullAddress,
//         };

//         return Promise.all([
//           fetch(
//             `https://matager-f1f00-default-rtdb.firebaseio.com/users/${uid}/personalInfo.json?auth=${idToken}`,
//             {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify(userData.personalInfo),
//             }
//           ),
//           fetch(
//             `https://matager-f1f00-default-rtdb.firebaseio.com/users/${uid}/address.json?auth=${idToken}`,
//             {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify(addressData),
//             }
//           ),
//         ]).then(() => user);
//       })
//       .then((user) => {
//         // Hide the modal on success
//         body.classList.remove("modal-open");
//         modal.classList.remove("show");

//         alert("Account Created and Signed In\nWelcome! You are now signed in.");
//         document.getElementById("email-signin-btn").style.display = "none";
//       })
//       .catch((error) => {
//         alert(`Sign Up Failed\n${error.message}`);
//       });
//   }
// }

// v5
// function emailPasswordSignIn() {
//   const body = document.body;
//   const modal = document.getElementById("signinmodal");
//   const modalContent = document.getElementById("signinmodalcontent");

//   // Set the modal content with both forms (initially hidden)
//   modalContent.innerHTML = `
//     <div class="guestmodalarea">
//       <!-- Sign In Form -->
//       <div id="signin-form" class="form-container active">
//         <h2>Sign in for better experience</h2>
//         <div class="mt-30 mb-30 signinupinbutarea04392">
//           <input type="email" id="email" class="swal2-input" placeholder="Enter your email">
//           <div id="email-error" class="error-hint"></div>
//           <input type="password" id="password" class="swal2-input" placeholder="Enter your password">
//           <div id="password-error" class="error-hint"></div>
//           <button id="continueGuest" class="modal-btn signinupbtn04392">Sign in</button>
//         </div>
//         <p style="margin-top: 10px;">Don't have an account? <a href="#" id="signup-link" class="mt-10">Sign up here</a></p>
//       </div>

//       <!-- Sign Up Form -->
//       <div id="signup-form" class="form-container">
//         <div class="progress-container">
//           <div class="progress-bar">
//             <div class="progress-step" id="step1" data-step="1">Basic Info</div>
//             <div class="progress-step" id="step2" data-step="2">Security</div>
//             <div class="progress-step" id="step3" data-step="3">Details</div>
//           </div>
//           <div class="progress-line">
//             <div class="progress-fill" id="progress-fill"></div>
//           </div>
//         </div>

//         <!-- Step 1: Basic Info -->
//         <div id="signup-step1" class="signup-step active">
//           <h2>Create a New Account</h2>
//           <div class="mt-30 mb-30 signinupinbutarea04392">
//             <input type="text" id="first-name-log" class="swal2-input width-available" placeholder="Enter your first name" required>
//             <div id="first-name-error" class="error-hint"></div>
//             <input type="text" id="last-name-log" class="swal2-input width-available" placeholder="Enter your last name" required>
//             <div id="last-name-error" class="error-hint"></div>
//             <input type="email" id="new-email" class="swal2-input width-available" placeholder="Enter your email" required>
//             <div id="new-email-error" class="error-hint"></div>
//             <input type="text" id="phone" class="swal2-input width-available" placeholder="Enter your primary phone number" required>
//             <div id="phone-error" class="error-hint"></div>
//             <input type="text" id="phone2" class="swal2-input width-available" placeholder="Enter your secondary phone number (optional)">
//             <div id="phone2-error" class="error-hint"></div>
//             <button id="next-to-step2" class="modal-btn signinupbtn04392">Next</button>
//           </div>
//         </div>

//         <!-- Step 2: Password -->
//         <div id="signup-step2" class="signup-step">
//           <h2>Create a Secure Password</h2>
//           <div class="mt-30 mb-30 signinupinbutarea04392">
//             <input type="password" id="new-password" class="swal2-input width-available" placeholder="Enter your password" required>
//             <div id="new-password-error" class="error-hint"></div>
//             <input type="password" id="confirm-password" class="swal2-input width-available" placeholder="Confirm your password" required>
//             <div id="confirm-password-error" class="error-hint"></div>
//             <div class="password-strength">
//               <div class="strength-meter">
//                 <div class="strength-fill" id="strength-fill"></div>
//               </div>
//               <span id="strength-text">Password Strength: Weak</span>
//             </div>
//             <div class="form-navigation">
//               <button id="back-to-step1" class="modal-btn back-btn"><i class="bi bi-arrow-left"></i></button>
//               <button id="next-to-step3" class="modal-btn signinupbtn04392">Next</button>
//             </div>
//           </div>
//         </div>

//         <!-- Step 3: Additional Details -->
//         <div id="signup-step3" class="signup-step">
//           <h2>Additional Information</h2>
//           <div class="mt-30 mb-30 signinupinbutarea04392">
//             <select id="governorate" class="swal2-input select-governorate width-available" required>
//               <option value="" disabled selected>Select your governorate</option>
//               <option value="Cairo">Cairo</option>
//               <option value="Giza">Giza</option>
//               <!-- Other governorate options -->
//             </select>
//             <div id="governorate-error" class="error-hint"></div>
//             <input type="text" id="city" class="swal2-input width-available" placeholder="Enter your city/state" required>
//             <div id="city-error" class="error-hint"></div>
//             <input type="text" id="area" class="swal2-input width-available" placeholder="Enter your area" required>
//             <div id="area-error" class="error-hint"></div>
//             <input type="text" id="house-number" class="swal2-input width-available" placeholder="Enter your house number" required>
//             <div id="house-number-error" class="error-hint"></div>
//             <textarea id="address" class="swal2-textarea width-available" placeholder="Enter your full address" required></textarea>
//             <div id="address-error" class="error-hint"></div>
//             <div class="form-navigation">
//               <button id="back-to-step2" class="modal-btn back-btn"><i class="bi bi-arrow-left"></i></button>
//               <button id="signup-btn" class="modal-btn signinupbtn04392">Complete Sign Up</button>
//             </div>
//           </div>
//         </div>

//         <p style="margin-top: 10px;">Already have an account? <a href="#" id="signin-link" class="mt-10">Sign in here</a></p>
//       </div>
//     </div>
//   `;

//   // Show the modal
//   body.classList.add("modal-open");
//   modal.classList.add("show");

//   // Add event listeners
//   document
//     .getElementById("continueGuest")
//     .addEventListener("click", handleSignIn);
//   document.getElementById("signup-btn").addEventListener("click", handleSignUp);
//   document
//     .getElementById("signup-link")
//     .addEventListener("click", switchToSignUp);
//   document
//     .getElementById("signin-link")
//     .addEventListener("click", switchToSignIn);

//   // Step navigation listeners
//   document
//     .getElementById("next-to-step2")
//     .addEventListener("click", () => goToStep(2));
//   document
//     .getElementById("next-to-step3")
//     .addEventListener("click", () => goToStep(3));
//   document
//     .getElementById("back-to-step1")
//     .addEventListener("click", () => goToStep(1));
//   document
//     .getElementById("back-to-step2")
//     .addEventListener("click", () => goToStep(2));

//   // Password strength checker
//   document
//     .getElementById("new-password")
//     .addEventListener("input", checkPasswordStrength);

//   // Handle Enter key press for both forms
//   modalContent.addEventListener("keypress", function (e) {
//     if (e.key === "Enter") {
//       const activeForm = modalContent.querySelector(".form-container.active");
//       if (activeForm.id === "signin-form") {
//         handleSignIn();
//       } else {
//         const currentStep = modalContent.querySelector(".signup-step.active");
//         if (currentStep.id === "signup-step1") {
//           goToStep(2);
//         } else if (currentStep.id === "signup-step2") {
//           goToStep(3);
//         } else {
//           handleSignUp();
//         }
//       }
//     }
//   });

//   function showError(fieldId, message) {
//     const errorElement = document.getElementById(`${fieldId}-error`);
//     if (errorElement) {
//       errorElement.textContent = message;
//       errorElement.style.display = "block";
//     }
//   }

//   function clearError(fieldId) {
//     const errorElement = document.getElementById(`${fieldId}-error`);
//     if (errorElement) {
//       errorElement.textContent = "";
//       errorElement.style.display = "none";
//     }
//   }

//   function switchToSignUp(e) {
//     e.preventDefault();
//     document.getElementById("signin-form").classList.remove("active");
//     document.getElementById("signup-form").classList.add("active");
//     goToStep(1); // Start at step 1
//   }

//   function switchToSignIn(e) {
//     e.preventDefault();
//     document.getElementById("signup-form").classList.remove("active");
//     document.getElementById("signin-form").classList.add("active");
//   }

//   function goToStep(stepNumber) {
//     // Validate current step before proceeding
//     if (stepNumber > 1 && !validateStep(stepNumber - 1)) {
//       return;
//     }

//     // Hide all steps
//     document.querySelectorAll(".signup-step").forEach((step) => {
//       step.classList.remove("active");
//     });

//     // Show current step
//     document.getElementById(`signup-step${stepNumber}`).classList.add("active");

//     // Update progress bar
//     updateProgressBar(stepNumber);

//     // Update active step indicator
//     document.querySelectorAll(".progress-step").forEach((step) => {
//       step.classList.remove("active");
//       if (parseInt(step.dataset.step) <= stepNumber) {
//         step.classList.add("active");
//       }
//     });
//   }

//   function validateStep(stepNumber) {
//     let isValid = true;

//     if (stepNumber === 1) {
//       const firstName = document.getElementById("first-name-log").value.trim();
//       const lastName = document.getElementById("last-name-log").value.trim();
//       const email = document.getElementById("new-email").value.trim();
//       const phone = document.getElementById("phone").value.trim();

//       // Clear previous errors
//       clearError("first-name-log");
//       clearError("last-name-log");
//       clearError("new-email");
//       clearError("phone");

//       if (!firstName) {
//         showError("first-name-log", "First name is required");
//         isValid = false;
//       }

//       if (!lastName) {
//         showError("last-name-log", "Last name is required");
//         isValid = false;
//       }

//       if (!email) {
//         showError("new-email", "Email is required");
//         isValid = false;
//       } else if (!/^\S+@\S+\.\S+$/.test(email)) {
//         showError("new-email", "Please enter a valid email address");
//         isValid = false;
//       }

//       if (!phone) {
//         showError("phone", "Phone number is required");
//         isValid = false;
//       }
//       // You can add phone validation here if needed

//       return isValid;
//     } else if (stepNumber === 2) {
//       const password = document.getElementById("new-password").value;
//       const confirmPassword = document.getElementById("confirm-password").value;

//       // Clear previous errors
//       clearError("new-password");
//       clearError("confirm-password");

//       if (!password) {
//         showError("new-password", "Password is required");
//         isValid = false;
//       } else if (password.length < 8) {
//         showError(
//           "new-password",
//           "Password must be at least 8 characters long"
//         );
//         isValid = false;
//       }

//       if (!confirmPassword) {
//         showError("confirm-password", "Please confirm your password");
//         isValid = false;
//       } else if (password !== confirmPassword) {
//         showError("confirm-password", "Passwords do not match");
//         isValid = false;
//       }

//       return isValid;
//     }
//     return true;
//   }

//   function updateProgressBar(stepNumber) {
//     const percentage = (stepNumber / 3) * 100;
//     document.getElementById("progress-fill").style.width = `${percentage}%`;
//   }

//   function checkPasswordStrength() {
//     const password = document.getElementById("new-password").value;
//     const strengthFill = document.getElementById("strength-fill");
//     const strengthText = document.getElementById("strength-text");

//     // Calculate strength
//     let strength = 0;
//     if (password.length >= 8) strength += 1;
//     if (/[A-Z]/.test(password)) strength += 1;
//     if (/[0-9]/.test(password)) strength += 1;
//     if (/[^A-Za-z0-9]/.test(password)) strength += 1;

//     // Update UI
//     const colors = ["#ff4d4d", "#ffa64d", "#66cc66", "#339933", "#006600"];
//     const texts = [
//       "Very Weak",
//       "Weak",
//       "Strong",
//       "Very Strong",
//       "Extremely Strong",
//     ];

//     strengthFill.style.width = `${(strength / 4) * 100}%`;
//     strengthFill.style.backgroundColor = colors[strength];
//     strengthText.textContent = `Password Strength: ${texts[strength]}`;
//     strengthText.style.color = colors[strength];
//   }

//   function handleSignIn() {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     // Clear previous errors
//     clearError("email");
//     clearError("password");

//     if (!email) {
//       showError("email", "Email is required");
//       return;
//     }

//     if (!password) {
//       showError("password", "Password is required");
//       return;
//     }

//     auth
//       .signInWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Hide the modal on success
//         body.classList.remove("modal-open");
//         modal.classList.remove("show");

//         // Show success message (you can modify this to show in the modal if you prefer)
//         Swal.fire({
//           toast: true,
//           position: "top-end",
//           icon: "success",
//           title: `Signed In Successfully\nWelcome, ${userCredential.user.email}`,
//           showConfirmButton: false,
//           timer: 3000,
//         });

//         document.getElementById("email-signin-btn").style.display = "none";
//       })
//       .catch((error) => {
//         // Show error under the appropriate field
//         if (
//           error.code === "auth/user-not-found" ||
//           error.code === "auth/invalid-email"
//         ) {
//           showError("email", error.message);
//         } else if (error.code === "auth/wrong-password") {
//           showError("password", error.message);
//         } else {
//           showError("email", error.message);
//           showError("password", error.message);
//         }
//       });
//   }

//   function handleSignUp() {
//     // Validate step 3
//     const governorate = document.getElementById("governorate").value;
//     const city = document.getElementById("city").value.trim();
//     const area = document.getElementById("area").value.trim();
//     const houseNumber = document.getElementById("house-number").value.trim();
//     const fullAddress = document.getElementById("address").value.trim();

//     // Clear previous errors
//     clearError("governorate");
//     clearError("city");
//     clearError("area");
//     clearError("house-number");
//     clearError("address");

//     let isValid = true;

//     if (!governorate) {
//       showError("governorate", "Governorate is required");
//       isValid = false;
//     }

//     if (!city) {
//       showError("city", "City is required");
//       isValid = false;
//     }

//     if (!area) {
//       showError("area", "Area is required");
//       isValid = false;
//     }

//     if (!houseNumber) {
//       showError("house-number", "House number is required");
//       isValid = false;
//     }

//     if (!fullAddress) {
//       showError("address", "Full address is required");
//       isValid = false;
//     }

//     if (!isValid) return;

//     // Get values from all steps
//     const email = document.getElementById("new-email").value;
//     const firstName = document.getElementById("first-name-log").value;
//     const lastName = document.getElementById("last-name-log").value;
//     const password = document.getElementById("new-password").value;
//     const phone = document.getElementById("phone").value;
//     const phone2 = document.getElementById("phone2").value;

//     auth
//       .createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;

//         return user
//           .updateProfile({
//             displayName: "Customer",
//             photoURL: null,
//           })
//           .then(() => user.reload())
//           .then(() => user.getIdToken())
//           .then((idToken) => ({ user, idToken }));
//       })
//       .then(({ user, idToken }) => {
//         const uid = user.uid;

//         const userData = {
//           personalInfo: {
//             email: user.email,
//             firstName,
//             lastName,
//             phone: phone,
//             phone2: phone2 || null,
//             photoURL: null,
//           },
//           orders: [],
//           favorites: [],
//         };

//         const addressData = {
//           governorate,
//           city,
//           area,
//           houseNumber,
//           fullAddress,
//         };

//         return Promise.all([
//           fetch(
//             `https://matager-f1f00-default-rtdb.firebaseio.com/users/${uid}/personalInfo.json?auth=${idToken}`,
//             {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify(userData.personalInfo),
//             }
//           ),
//           fetch(
//             `https://matager-f1f00-default-rtdb.firebaseio.com/users/${uid}/address.json?auth=${idToken}`,
//             {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify(addressData),
//             }
//           ),
//         ]).then(() => user);
//       })
//       .then((user) => {
//         // Hide the modal on success
//         body.classList.remove("modal-open");
//         modal.classList.remove("show");

//         // Show success message
//         Swal.fire({
//           toast: true,
//           position: "top-end",
//           icon: "success",
//           title:
//             "Account Created and Signed In\nWelcome! You are now signed in.",
//           showConfirmButton: false,
//           timer: 3000,
//         });

//         document.getElementById("email-signin-btn").style.display = "none";
//       })
//       .catch((error) => {
//         // Show error under the appropriate field
//         if (error.code === "auth/email-already-in-use") {
//           showError("new-email", error.message);
//         } else if (error.code === "auth/weak-password") {
//           showError("new-password", error.message);
//         } else if (error.code === "auth/invalid-email") {
//           showError("new-email", error.message);
//         } else {
//           // Show general error
//           Swal.fire({
//             toast: true,
//             position: "top-end",
//             icon: "error",
//             title: error.message,
//             showConfirmButton: false,
//             timer: 3000,
//           });
//         }
//       });
//   }
// }

// v6
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
          <div id="email-error" class="error-hint"></div>
          <input type="password" id="password" class="swal2-input" placeholder="Enter your password">
          <div id="password-error" class="error-hint"></div>
          <button id="continueGuest" class="modal-btn signinupbtn04392">Sign in</button>
        </div>
        <p style="margin-top: 10px;">Don't have an account? <a href="#" id="signup-link" class="mt-10">Sign up here</a></p>
      </div>

      <!-- Sign Up Form -->
      <div id="signup-form" class="form-container">
        <div class="progress-container">
          <div class="progress-bar">
            <div class="progress-step" id="step1" data-step="1">Basic Info</div>
            <div class="progress-step" id="step2" data-step="2">Security</div>
            <div class="progress-step" id="step3" data-step="3">Details</div>
          </div>
          <div class="progress-line">
            <div class="progress-fill" id="progress-fill"></div>
          </div>
        </div>

        <!-- Step 1: Basic Info -->
        <div id="signup-step1" class="signup-step active">
          <h2>Create a New Account</h2>
          <div class="mt-30 mb-30 signinupinbutarea04392">
            <input type="text" id="first-name-log" class="swal2-input width-available" placeholder="Enter your first name" required>
            <div id="first-name-error" class="error-hint"></div>
            <input type="text" id="last-name-log" class="swal2-input width-available" placeholder="Enter your last name" required>
            <div id="last-name-error" class="error-hint"></div>
            <input type="email" id="new-email" class="swal2-input width-available" placeholder="Enter your email" required>
            <div id="new-email-error" class="error-hint"></div>
            <input type="text" id="phone" class="swal2-input width-available" placeholder="Enter your primary phone number" required>
            <div id="phone-error" class="error-hint"></div>
            <input type="text" id="phone2" class="swal2-input width-available" placeholder="Enter your secondary phone number (optional)">
            <div id="phone2-error" class="error-hint"></div>
            <button id="next-to-step2" class="modal-btn signinupbtn04392">Next</button>
          </div>
        </div>

        <!-- Step 2: Password -->
        <div id="signup-step2" class="signup-step">
          <h2>Create a Secure Password</h2>
          <div class="mt-30 mb-30 signinupinbutarea04392">
            <input type="password" id="new-password" class="swal2-input width-available" placeholder="Enter your password" required>
            <div id="new-password-error" class="error-hint"></div>
            <input type="password" id="confirm-password" class="swal2-input width-available" placeholder="Confirm your password" required>
            <div id="confirm-password-error" class="error-hint"></div>
            <div class="password-strength">
              <div class="strength-meter">
                <div class="strength-fill" id="strength-fill"></div>
              </div>
              <span id="strength-text">Password Strength: Weak</span>
            </div>
            <div class="form-navigation">
              <button id="back-to-step1" class="modal-btn back-btn"><i class="bi bi-arrow-left"></i></button>
              <button id="next-to-step3" class="modal-btn signinupbtn04392">Next</button>
            </div>
          </div>
        </div>

        <!-- Step 3: Additional Details -->
        <div id="signup-step3" class="signup-step">
          <h2>Additional Information</h2>
          <div class="mt-30 mb-30 signinupinbutarea04392">
            <select id="governorate" class="swal2-input select-governorate width-available" required>
              <option value="" disabled selected>Select your governorate</option>
              <option value="Cairo">Cairo</option>
              <option value="Giza">Giza</option>
              <!-- Other governorate options -->
            </select>
            <div id="governorate-error" class="error-hint"></div>
            <input type="text" id="city" class="swal2-input width-available" placeholder="Enter your city/state" required>
            <div id="city-error" class="error-hint"></div>
            <input type="text" id="area" class="swal2-input width-available" placeholder="Enter your area" required>
            <div id="area-error" class="error-hint"></div>
            <input type="text" id="house-number" class="swal2-input width-available" placeholder="Enter your house number" required>
            <div id="house-number-error" class="error-hint"></div>
            <textarea id="address" class="swal2-textarea width-available" placeholder="Enter your full address" required></textarea>
            <div id="address-error" class="error-hint"></div>
            <div class="form-navigation">
              <button id="back-to-step2" class="modal-btn back-btn"><i class="bi bi-arrow-left"></i></button>
              <button id="signup-btn" class="modal-btn signinupbtn04392">Complete Sign Up</button>
            </div>
          </div>
        </div>

        <p class="guestmodalareabottom-p">Already have an account? <a href="#" id="signin-link" class="mt-10">Sign in here</a></p>
      </div>
    </div>
  `;

  // Add CSS for smooth transitions
  const style = document.createElement("style");
  style.textContent = `
    .error-hint {
      max-height: 0;
      overflow: hidden;
      color: #ff4d4d;
      font-size: 0.875rem;
      margin-top: 0.25rem;
      transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
      opacity: 0;
    }
    .error-hint.show {
      max-height: 50px;
      opacity: 1;
    }
    .form-container {
      transition: height 0.3s ease-out;
      overflow: hidden;
    }
  `;
  document.head.appendChild(style);

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

  // Step navigation listeners
  document
    .getElementById("next-to-step2")
    .addEventListener("click", () => goToStep(2));
  document
    .getElementById("next-to-step3")
    .addEventListener("click", () => goToStep(3));
  document
    .getElementById("back-to-step1")
    .addEventListener("click", () => goToStep(1));
  document
    .getElementById("back-to-step2")
    .addEventListener("click", () => goToStep(2));

  // Password strength checker
  document
    .getElementById("new-password")
    .addEventListener("input", checkPasswordStrength);

  // Add input event listeners to all fields to clear errors when typing
  const allInputs = modalContent.querySelectorAll("input, textarea, select");
  allInputs.forEach((input) => {
    input.addEventListener("input", function () {
      const errorId = this.id + "-error";
      const errorElement = document.getElementById(errorId);
      if (errorElement && errorElement.textContent) {
        clearError(this.id);
      }
    });
  });

  // Handle Enter key press for both forms
  modalContent.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const activeForm = modalContent.querySelector(".form-container.active");
      if (activeForm.id === "signin-form") {
        handleSignIn();
      } else {
        const currentStep = modalContent.querySelector(".signup-step.active");
        if (currentStep.id === "signup-step1") {
          goToStep(2);
        } else if (currentStep.id === "signup-step2") {
          goToStep(3);
        } else {
          handleSignUp();
        }
      }
    }
  });

  function showError(fieldId, message) {
    const errorElement = document.getElementById(`${fieldId}-error`);
    if (errorElement) {
      errorElement.textContent = message;
      // Force reflow to ensure transition works
      void errorElement.offsetHeight;
      errorElement.classList.add("show");

      // Adjust form container height smoothly
      const formContainer = errorElement.closest(
        ".form-container, .signup-step"
      );
      if (formContainer) {
        formContainer.style.height = "auto";
        const newHeight =
          formContainer.offsetHeight + errorElement.offsetHeight;
        formContainer.style.height = formContainer.offsetHeight + "px";
        void formContainer.offsetHeight; // Force reflow
        formContainer.style.height = newHeight + "px";
      }
    }
  }

  function clearError(fieldId) {
    const errorElement = document.getElementById(`${fieldId}-error`);
    if (errorElement && errorElement.textContent) {
      // Start transition
      errorElement.classList.remove("show");

      // Adjust form container height smoothly after transition
      const formContainer = errorElement.closest(
        ".form-container, .signup-step"
      );
      if (formContainer) {
        const currentHeight = formContainer.offsetHeight;
        formContainer.style.height = currentHeight + "px";

        setTimeout(() => {
          formContainer.style.height = "auto";
          const newHeight = formContainer.offsetHeight;
          formContainer.style.height = currentHeight + "px";
          void formContainer.offsetHeight; // Force reflow
          formContainer.style.height = newHeight + "px";
        }, 300); // Match this with your CSS transition duration
      }

      // Clear text after transition completes
      setTimeout(() => {
        errorElement.textContent = "";
      }, 300);
    }
  }

  function switchToSignUp(e) {
    e.preventDefault();
    document.getElementById("signin-form").classList.remove("active");
    document.getElementById("signup-form").classList.add("active");
    goToStep(1); // Start at step 1
  }

  function switchToSignIn(e) {
    e.preventDefault();
    document.getElementById("signup-form").classList.remove("active");
    document.getElementById("signin-form").classList.add("active");
  }

  function goToStep(stepNumber) {
    // Validate current step before proceeding
    if (stepNumber > 1 && !validateStep(stepNumber - 1)) {
      return;
    }

    // Hide all steps
    document.querySelectorAll(".signup-step").forEach((step) => {
      step.classList.remove("active");
    });

    // Show current step
    document.getElementById(`signup-step${stepNumber}`).classList.add("active");

    // Update progress bar
    updateProgressBar(stepNumber);

    // Update active step indicator
    document.querySelectorAll(".progress-step").forEach((step) => {
      step.classList.remove("active");
      if (parseInt(step.dataset.step) <= stepNumber) {
        step.classList.add("active");
      }
    });
  }

  function validateStep(stepNumber) {
    let isValid = true;

    if (stepNumber === 1) {
      const firstName = document.getElementById("first-name-log").value.trim();
      const lastName = document.getElementById("last-name-log").value.trim();
      const email = document.getElementById("new-email").value.trim();
      const phone = document.getElementById("phone").value.trim();

      // Clear previous errors
      clearError("first-name-log");
      clearError("last-name-log");
      clearError("new-email");
      clearError("phone");

      if (!firstName) {
        showError("first-name-log", "First name is required");
        isValid = false;
      }

      if (!lastName) {
        showError("last-name-log", "Last name is required");
        isValid = false;
      }

      if (!email) {
        showError("new-email", "Email is required");
        isValid = false;
      } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        showError("new-email", "Please enter a valid email address");
        isValid = false;
      }

      if (!phone) {
        showError("phone", "Phone number is required");
        isValid = false;
      }
      // You can add phone validation here if needed

      return isValid;
    } else if (stepNumber === 2) {
      const password = document.getElementById("new-password").value;
      const confirmPassword = document.getElementById("confirm-password").value;

      // Clear previous errors
      clearError("new-password");
      clearError("confirm-password");

      if (!password) {
        showError("new-password", "Password is required");
        isValid = false;
      } else if (password.length < 8) {
        showError(
          "new-password",
          "Password must be at least 8 characters long"
        );
        isValid = false;
      }

      if (!confirmPassword) {
        showError("confirm-password", "Please confirm your password");
        isValid = false;
      } else if (password !== confirmPassword) {
        showError("confirm-password", "Passwords do not match");
        isValid = false;
      }

      return isValid;
    }
    return true;
  }

  function updateProgressBar(stepNumber) {
    const percentage = (stepNumber / 3) * 100;
    document.getElementById("progress-fill").style.width = `${percentage}%`;
  }

  function checkPasswordStrength() {
    const password = document.getElementById("new-password").value;
    const strengthFill = document.getElementById("strength-fill");
    const strengthText = document.getElementById("strength-text");

    // Calculate strength
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    // Update UI
    const colors = ["#000000", "#000000", "#000000", "#000000", "#000000"];
    const texts = [
      "Very Weak",
      "Weak",
      "Strong",
      "Very Strong",
      "Extremely Strong",
    ];

    strengthFill.style.width = `${(strength / 4) * 100}%`;
    strengthFill.style.backgroundColor = colors[strength];
    strengthText.textContent = `Password Strength: ${texts[strength]}`;
    strengthText.style.color = colors[strength];
  }

  function handleSignIn() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Clear previous errors
    clearError("email");
    clearError("password");

    if (!email) {
      showError("email", "Email is required");
      return;
    }

    if (!password) {
      showError("password", "Password is required");
      return;
    }

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Hide the modal on success
        body.classList.remove("modal-open");
        modal.classList.remove("show");

        // Show success message (you can modify this to show in the modal if you prefer)
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: `Signed In Successfully\nWelcome, ${userCredential.user.email}`,
          showConfirmButton: false,
          timer: 3000,
        });

        document.getElementById("email-signin-btn").style.display = "none";
      })
      .catch((error) => {
        // Show error under the appropriate field
        if (
          error.code === "auth/user-not-found" ||
          error.code === "auth/invalid-email"
        ) {
          showError("email", error.message);
        } else if (error.code === "auth/wrong-password") {
          showError("password", error.message);
        } else {
          showError("email", error.message);
          showError("password", error.message);
        }
      });
  }

  function handleSignUp() {
    // Validate step 3
    const governorate = document.getElementById("governorate").value;
    const city = document.getElementById("city").value.trim();
    const area = document.getElementById("area").value.trim();
    const houseNumber = document.getElementById("house-number").value.trim();
    const fullAddress = document.getElementById("address").value.trim();

    // Clear previous errors
    clearError("governorate");
    clearError("city");
    clearError("area");
    clearError("house-number");
    clearError("address");

    let isValid = true;

    if (!governorate) {
      showError("governorate", "Governorate is required");
      isValid = false;
    }

    if (!city) {
      showError("city", "City is required");
      isValid = false;
    }

    if (!area) {
      showError("area", "Area is required");
      isValid = false;
    }

    if (!houseNumber) {
      showError("house-number", "House number is required");
      isValid = false;
    }

    if (!fullAddress) {
      showError("address", "Full address is required");
      isValid = false;
    }

    if (!isValid) return;

    // Get values from all steps
    const email = document.getElementById("new-email").value;
    const firstName = document.getElementById("first-name-log").value;
    const lastName = document.getElementById("last-name-log").value;
    const password = document.getElementById("new-password").value;
    const phone = document.getElementById("phone").value;
    const phone2 = document.getElementById("phone2").value;

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        return user
          .updateProfile({
            displayName: "Customer",
            photoURL: null,
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
            photoURL: null,
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

        // Show success message
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title:
            "Account Created and Signed In\nWelcome! You are now signed in.",
          showConfirmButton: false,
          timer: 3000,
        });

        document.getElementById("email-signin-btn").style.display = "none";
      })
      .catch((error) => {
        // Show error under the appropriate field
        if (error.code === "auth/email-already-in-use") {
          showError("new-email", error.message);
        } else if (error.code === "auth/weak-password") {
          showError("new-password", error.message);
        } else if (error.code === "auth/invalid-email") {
          showError("new-email", error.message);
        } else {
          // Show general error
          Swal.fire({
            toast: true,
            position: "top-end",
            icon: "error",
            title: error.message,
            showConfirmButton: false,
            timer: 3000,
          });
        }
      });
  }
}
