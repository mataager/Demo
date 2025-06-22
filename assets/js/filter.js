// document.addEventListener("DOMContentLoaded", function () {
//   const filterBtn = document.getElementById("filterBtn");
//   const sidebar = document.getElementById("sidebar");
//   const closeBtn = document.getElementById("closeBtn");
//   const seeSelectionBtn = document.getElementById("seeSelection");
//   const clearFiltersBtn = document.querySelector(".clear-btn");
//   const sortOptions = document.querySelectorAll(".sort-options button");
//   const genderOptions = document.querySelectorAll(".gender-options button");
//   const sizeOptions = document.querySelectorAll(".size-options button");
//   const footwearOptions = document.querySelectorAll(".footwear-options button");
//   const colorOptions = document.querySelectorAll(".color-circle"); // Sidebar color options
//   const productList = document.querySelector(".product-list");

//   let selectedFilters = {
//     sort: "Price low to high",
//     gender: "",
//     sizes: [],
//     footwearSizes: [],
//     colors: [], // Track selected colors
//   };

//   // Function to get the URL parameters
//   function getUrlParameter(name) {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get(name);
//   }

//   // Detect category from URL
//   const detectedCategory = getUrlParameter("category");

//   // Hide gender options based on the detected category
//   function hideOtherGenderOptions() {
//     if (detectedCategory) {
//       const category = detectedCategory.toLowerCase();

//       // Hide gender options that don't match the detected category
//       genderOptions.forEach((option) => {
//         const genderText = option.innerText.toLowerCase();
//         if (genderText !== category) {
//           option.style.display = "none";
//         } else {
//           option.style.display = "block"; // Ensure matching category is shown
//           option.classList.add("active-selection"); // Auto-select the detected category
//           selectedFilters.gender = genderText; // Set the detected category as the selected gender
//         }
//       });
//     }
//   }

//   // Call the function to hide other gender options
//   hideOtherGenderOptions();

//   // Open Sidebar
//   filterBtn.addEventListener("click", () => {
//     sidebar.style.left = "0";
//   });

//   // Close Sidebar
//   closeBtn.addEventListener("click", () => {
//     sidebar.style.left = "-350px";
//   });

//   // Handle Sort Options
//   sortOptions.forEach((option) => {
//     option.addEventListener("click", () => {
//       sortOptions.forEach((btn) => btn.classList.remove("active-selection"));
//       option.classList.add("active-selection");
//       selectedFilters.sort = option.innerText;
//     });
//   });

//   // Handle Gender Selection
//   genderOptions.forEach((option) => {
//     option.addEventListener("click", () => {
//       genderOptions.forEach((btn) => btn.classList.remove("active-selection"));
//       option.classList.add("active-selection");
//       selectedFilters.gender = option.innerText;
//     });
//   });

//   // Handle Clothing Size Selection
//   sizeOptions.forEach((option) => {
//     option.addEventListener("click", () => {
//       option.classList.toggle("active-selection");
//       const size = option.innerText;
//       if (option.classList.contains("active-selection")) {
//         selectedFilters.sizes.push(size);
//       } else {
//         selectedFilters.sizes = selectedFilters.sizes.filter((s) => s !== size);
//       }
//     });
//   });

//   // Handle Footwear Size Selection
//   footwearOptions.forEach((option) => {
//     option.addEventListener("click", () => {
//       option.classList.toggle("active-selection");
//       const footwearSize = option.innerText;
//       if (option.classList.contains("active-selection")) {
//         selectedFilters.footwearSizes.push(footwearSize);
//       } else {
//         selectedFilters.footwearSizes = selectedFilters.footwearSizes.filter(
//           (size) => size !== footwearSize
//         );
//       }
//     });
//   });

//   // Handle Color Selection from Sidebar
//   colorOptions.forEach((option) => {
//     option.addEventListener("click", () => {
//       option.classList.toggle("selected-color");
//       const color = option.getAttribute("data-color-name");

//       if (option.classList.contains("selected-color")) {
//         selectedFilters.colors.push(color);
//       } else {
//         selectedFilters.colors = selectedFilters.colors.filter(
//           (c) => c !== color
//         );
//       }
//     });
//   });

//   // Apply Filters Button
//   seeSelectionBtn.addEventListener("click", () => {
//     sidebar.style.left = "-350px"; // Close the sidebar after applying filters
//     updateProductDisplay();
//   });

//   // Clear Filters Button
//   clearFiltersBtn.addEventListener("click", () => {
//     clearFilters();
//   });

//   function clearFilters() {
//     // Reset filters
//     selectedFilters = {
//       sort: "Price low to high",
//       gender: "",
//       sizes: [],
//       footwearSizes: [],
//       colors: [],
//     };

//     // Remove all active selections
//     sortOptions.forEach((btn) => btn.classList.remove("active-selection"));
//     sortOptions[0].classList.add("active-selection"); // Default sorting option
//     genderOptions.forEach((btn) => btn.classList.remove("active-selection"));
//     sizeOptions.forEach((btn) => btn.classList.remove("active-selection"));
//     footwearOptions.forEach((btn) => btn.classList.remove("active-selection"));
//     colorOptions.forEach((circle) => circle.classList.remove("selected-color"));

//     // Reset the product display
//     updateProductDisplay();
//   }

//   // Function to update product display based on selected filters
//   function updateProductDisplay() {
//     const products = document.querySelectorAll(".product-item");

//     products.forEach((product) => {
//       let isVisible = true;

//       const category = product
//         .querySelector("[data-category]")
//         .getAttribute("data-category");
//       const sizes = product
//         .querySelector("[data-sizes]")
//         .getAttribute("data-sizes")
//         .split(",");
//       const productColors = Array.from(
//         product.querySelectorAll(".color-option2")
//       ).map((colorOption) =>
//         colorOption.getAttribute("data-color-name").toLowerCase()
//       ); // Get all colors of the product

//       // Filter by gender
//       if (
//         selectedFilters.gender &&
//         category !== selectedFilters.gender.toLowerCase()
//       ) {
//         isVisible = false;
//       }

//       // Filter by clothing size OR footwear size (show products that match either one)
//       const matchesClothingSize =
//         selectedFilters.sizes.length > 0 &&
//         selectedFilters.sizes.some((size) =>
//           sizes.includes(size.toLowerCase())
//         );

//       const matchesFootwearSize =
//         selectedFilters.footwearSizes.length > 0 &&
//         selectedFilters.footwearSizes.some((size) =>
//           sizes.includes(size.toLowerCase())
//         );

//       if (
//         (selectedFilters.sizes.length > 0 ||
//           selectedFilters.footwearSizes.length > 0) &&
//         !(matchesClothingSize || matchesFootwearSize)
//       ) {
//         isVisible = false;
//       }

//       // Filter by color (check if the product has any of the selected colors)
//       if (
//         selectedFilters.colors.length > 0 &&
//         !selectedFilters.colors.some((color) => productColors.includes(color))
//       ) {
//         isVisible = false;
//       }

//       // Apply the visibility based on filters
//       product.style.display = isVisible ? "block" : "none";
//     });

//     // Sort products based on the selected sorting option
//     sortProducts();
//   }

//   // Function to sort products based on price and selected filters
//   function sortProducts() {
//     const productsArray = Array.from(
//       document.querySelectorAll(".product-item")
//     );

//     productsArray.sort((a, b) => {
//       const priceA = parseFloat(
//         a.querySelector(".card-price-animation").innerText.replace(" EGP", "")
//       );
//       const priceB = parseFloat(
//         b.querySelector(".card-price-animation").innerText.replace(" EGP", "")
//       );

//       if (selectedFilters.sort === "Price low to high") {
//         return priceA - priceB;
//       } else if (selectedFilters.sort === "Price high to low") {
//         return priceB - priceA;
//       } else if (selectedFilters.sort === "New Arrival") {
//         // Sorting logic for New Arrivals can be implemented here
//         return 0; // Placeholder
//       }
//     });

//     // Reattach sorted products to the product list
//     productsArray.forEach((product) => productList.appendChild(product));
//   }

//   // Initial product display
//   updateProductDisplay();
// });

///

// Function to update the active filters bar

//333

document.addEventListener("DOMContentLoaded", function () {
  const filterBtn = document.getElementById("filterBtn");
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("closeBtn");
  const seeSelectionBtn = document.getElementById("seeSelection");
  const clearFiltersBtn = document.querySelector(".clear-btn");
  const sortOptions = document.querySelectorAll(".sort-options button");
  const genderOptions = document.querySelectorAll(".gender-options button");
  const sizeOptions = document.querySelectorAll(".size-options button");
  const footwearOptions = document.querySelectorAll(".footwear-options button");
  const colorOptions = document.querySelectorAll(".color-circle");
  const productList = document.querySelector(".product-list");

  let selectedFilters = {
    sort: "Price low to high",
    gender: "",
    sizes: [],
    footwearSizes: [],
    colors: [],
  };

  function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  const detectedCategory = getUrlParameter("category");

  function hideOtherGenderOptions() {
    if (detectedCategory) {
      const category = detectedCategory.toLowerCase();
      genderOptions.forEach((option) => {
        const genderText = option.innerText.toLowerCase();
        if (genderText !== category) {
          option.style.display = "none";
        } else {
          option.style.display = "block";
          option.classList.add("active-selection");
          selectedFilters.gender = genderText;
        }
      });
    }
  }

  hideOtherGenderOptions();

  filterBtn.addEventListener("click", () => {
    sidebar.style.left = "0";
  });

  closeBtn.addEventListener("click", () => {
    sidebar.style.left = "-350px";
  });

  sortOptions.forEach((option) => {
    option.addEventListener("click", () => {
      sortOptions.forEach((btn) => btn.classList.remove("active-selection"));
      option.classList.add("active-selection");
      selectedFilters.sort = option.innerText;
      updateProductDisplay();
      updateActiveFiltersBar();
    });
  });

  genderOptions.forEach((option) => {
    option.addEventListener("click", () => {
      genderOptions.forEach((btn) => btn.classList.remove("active-selection"));
      option.classList.add("active-selection");
      selectedFilters.gender = option.innerText;
    });
  });

  sizeOptions.forEach((option) => {
    option.addEventListener("click", () => {
      option.classList.toggle("active-selection");
      const size = option.innerText;
      if (option.classList.contains("active-selection")) {
        selectedFilters.sizes.push(size);
      } else {
        selectedFilters.sizes = selectedFilters.sizes.filter((s) => s !== size);
      }
    });
  });

  footwearOptions.forEach((option) => {
    option.addEventListener("click", () => {
      option.classList.toggle("active-selection");
      const footwearSize = option.innerText;
      if (option.classList.contains("active-selection")) {
        selectedFilters.footwearSizes.push(footwearSize);
      } else {
        selectedFilters.footwearSizes = selectedFilters.footwearSizes.filter(
          (size) => size !== footwearSize
        );
      }
    });
  });

  colorOptions.forEach((option) => {
    option.addEventListener("click", () => {
      option.classList.toggle("selected-color");
      const color = option.getAttribute("data-color-name");
      if (option.classList.contains("selected-color")) {
        selectedFilters.colors.push(color);
      } else {
        selectedFilters.colors = selectedFilters.colors.filter(
          (c) => c !== color
        );
      }
    });
  });

  seeSelectionBtn.addEventListener("click", () => {
    sidebar.style.left = "-350px";
    updateProductDisplay();
    updateActiveFiltersBar();
  });

  clearFiltersBtn.addEventListener("click", () => {
    clearFilters();
  });

  function clearFilters() {
    selectedFilters = {
      sort: "Price low to high",
      gender: "",
      sizes: [],
      footwearSizes: [],
      colors: [],
    };

    sortOptions.forEach((btn) => btn.classList.remove("active-selection"));
    sortOptions[0].classList.add("active-selection");

    genderOptions.forEach((btn) => btn.classList.remove("active-selection"));
    sizeOptions.forEach((btn) => btn.classList.remove("active-selection"));
    footwearOptions.forEach((btn) => btn.classList.remove("active-selection"));
    colorOptions.forEach((circle) => circle.classList.remove("selected-color"));

    updateProductDisplay();
    updateActiveFiltersBar();
  }

  function updateProductDisplay() {
    const products = document.querySelectorAll(".product-item");

    products.forEach((product) => {
      let isVisible = true;

      const category = product
        .querySelector("[data-category]")
        ?.getAttribute("data-category");
      const sizes =
        product
          .querySelector("[data-sizes]")
          ?.getAttribute("data-sizes")
          ?.split(",") || [];
      const productColors = Array.from(
        product.querySelectorAll(".color-option2")
      ).map((el) => el.getAttribute("data-color-name").toLowerCase());

      if (
        selectedFilters.gender &&
        category !== selectedFilters.gender.toLowerCase()
      ) {
        isVisible = false;
      }

      const matchesClothingSize =
        selectedFilters.sizes.length > 0 &&
        selectedFilters.sizes.some((size) =>
          sizes.includes(size.toLowerCase())
        );

      const matchesFootwearSize =
        selectedFilters.footwearSizes.length > 0 &&
        selectedFilters.footwearSizes.some((size) =>
          sizes.includes(size.toLowerCase())
        );

      if (
        (selectedFilters.sizes.length > 0 ||
          selectedFilters.footwearSizes.length > 0) &&
        !(matchesClothingSize || matchesFootwearSize)
      ) {
        isVisible = false;
      }

      if (
        selectedFilters.colors.length > 0 &&
        !selectedFilters.colors.some((color) => productColors.includes(color))
      ) {
        isVisible = false;
      }

      product.style.display = isVisible ? "block" : "none";
    });

    sortProducts();
  }

  function sortProducts() {
    const productsArray = Array.from(
      document.querySelectorAll(".product-item")
    );

    productsArray.sort((a, b) => {
      const priceA = parseFloat(
        a.querySelector(".card-price-animation").innerText.replace(" EGP", "")
      );
      const priceB = parseFloat(
        b.querySelector(".card-price-animation").innerText.replace(" EGP", "")
      );
      const dateA = new Date(a.getAttribute("data-upload-date") || 0);
      const dateB = new Date(b.getAttribute("data-upload-date") || 0);

      switch (selectedFilters.sort) {
        case "Price low to high":
          return priceA - priceB;
        case "Price high to low":
          return priceB - priceA;
        case "New Arrival":
          return dateB - dateA;
        default:
          return 0;
      }
    });

    productList.innerHTML = "";
    productsArray.forEach((product) => productList.appendChild(product));
  }

  function updateActiveFiltersBar() {
    const activeFiltersContainer = document.getElementById(
      "active-filters-container"
    );
    if (!activeFiltersContainer) return;

    activeFiltersContainer.innerHTML = "";

    if (selectedFilters.sort && selectedFilters.sort !== "Price low to high") {
      const sortChip = createFilterChip(selectedFilters.sort, "sort");
      activeFiltersContainer.appendChild(sortChip);
    }

    if (selectedFilters.gender) {
      const genderChip = createFilterChip(selectedFilters.gender, "gender");
      activeFiltersContainer.appendChild(genderChip);
    }

    selectedFilters.sizes.forEach((size) => {
      const sizeChip = createFilterChip(size, "size");
      activeFiltersContainer.appendChild(sizeChip);
    });

    selectedFilters.footwearSizes.forEach((size) => {
      const fwChip = createFilterChip(size, "footwearSize");
      activeFiltersContainer.appendChild(fwChip);
    });

    selectedFilters.colors.forEach((color) => {
      const colorChip = createFilterChip(color, "color");
      activeFiltersContainer.appendChild(colorChip);
    });
  }

  function createFilterChip(label, type) {
    const chip = document.createElement("div");
    chip.className = "active-filter-chip";
    chip.dataset.type = type;
    chip.dataset.value = label;

    chip.innerHTML = `
      ${label}
      <span class="close-icon">×</span>
    `;

    chip.querySelector(".close-icon").addEventListener("click", () => {
      removeFilter(type, label);
    });

    return chip;
  }

  function removeFilter(type, value) {
    switch (type) {
      case "sort":
        selectedFilters.sort = "Price low to high";
        sortOptions.forEach((btn) => {
          btn.classList.remove("active-selection");
          if (btn.innerText === "Price low to high")
            btn.classList.add("active-selection");
        });
        break;
      case "gender":
        selectedFilters.gender = "";
        genderOptions.forEach((btn) =>
          btn.classList.remove("active-selection")
        );
        break;
      case "size":
        selectedFilters.sizes = selectedFilters.sizes.filter(
          (s) => s !== value
        );
        sizeOptions.forEach((btn) => {
          if (btn.innerText === value) btn.classList.remove("active-selection");
        });
        break;
      case "footwearSize":
        selectedFilters.footwearSizes = selectedFilters.footwearSizes.filter(
          (s) => s !== value
        );
        footwearOptions.forEach((btn) => {
          if (btn.innerText === value) btn.classList.remove("active-selection");
        });
        break;
      case "color":
        selectedFilters.colors = selectedFilters.colors.filter(
          (c) => c !== value
        );
        colorOptions.forEach((circle) => {
          if (circle.getAttribute("data-color-name") === value) {
            circle.classList.remove("selected-color");
          }
        });
        break;
    }

    updateProductDisplay();
    updateActiveFiltersBar();
  }

  // Initial setup
  updateProductDisplay();
  updateActiveFiltersBar();
});
