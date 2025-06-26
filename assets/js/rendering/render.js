document.addEventListener("DOMContentLoaded", () => {
  // Handle scroll behavior for header and go-top-btn
  const header = document.querySelector("[data-header]");

  const goTopBtnHTML = `
    <a href="#top" class="go-top-btn" data-go-top>
      <ion-icon name="arrow-up-outline" role="img" class="arrow-icon"></ion-icon>
    </a>
  `;
  document.body.insertAdjacentHTML("beforeend", goTopBtnHTML);

  const goTopBtn = document.querySelector(".go-top-btn");

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 80) {
      header?.classList.add("active");
      goTopBtn.classList.add("active");
    } else {
      header?.classList.remove("active");
      goTopBtn.classList.remove("active");
    }
  });

  // Only render the scroll-to-checkout button if on cart page
  const isCartPage =
    window.location.pathname.includes("cart") ||
    document.body.classList.contains("cart-page") ||
    document.querySelector("#cart-items");

  if (isCartPage) {
    const scrollToCheckoutHTML = `
      <a class="scrolltocheckout">
        <span>Scroll To Check Out</span>
        <ion-icon name="arrow-down-outline" role="img" class="md hydrated godownicon" aria-label="arrow down outline"></ion-icon>
      </a>
    `;
    document.body.insertAdjacentHTML("beforeend", scrollToCheckoutHTML);
  }
});
