document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.getElementById("search-btn");
  const searchBox = document.getElementById("search-box");
  const searchInput = document.getElementById("search-input");
  const suggestionsBox = document.getElementById("suggestions");
  const searchOverlay = document.getElementById("search-overlay");

  // Toggle search box visibility
  searchBtn.addEventListener("click", function () {
    searchBox.classList.toggle("hidden-search-box");
    if (!searchBox.classList.contains("hidden-search-box")) {
      searchInput.focus();
      searchOverlay.style.display = "block";
      document.body.classList.add("search-active");
    } else {
      searchOverlay.style.display = "none";
      document.body.classList.remove("search-active");
    }
  });

  // Close search box when clicking outside
  // window.addEventListener("click", function (e) {
  //   if (!searchBox.contains(e.target) && !searchBtn.contains(e.target)) {
  //     searchBox.classList.add("hidden-search-box");
  //     suggestionsBox.classList.remove("show");
  //   }
  // });
  // Close search box when clicking outside or on overlay

  window.addEventListener("click", function (e) {
    if (!searchBox.contains(e.target) && !searchBtn.contains(e.target)) {
      searchBox.classList.add("hidden-search-box");
      suggestionsBox.classList.remove("show");
      searchOverlay.style.display = "none";
      document.body.classList.remove("search-active");
    }
  });
  searchOverlay.addEventListener("click", function () {
    searchBox.classList.add("hidden-search-box");
    suggestionsBox.classList.remove("show");
    searchOverlay.style.display = "none";
    document.body.classList.remove("search-active");
  });

  // Search when pressing Enter
  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      performSearch(searchInput.value.trim());
    }
  });

  // Search when clicking the search button
  const innerSearchBtn = document.querySelector(".search-btn");
  innerSearchBtn.addEventListener("click", function (e) {
    e.preventDefault();
    performSearch(searchInput.value.trim());
  });

  // Real-time suggestions
  searchInput.addEventListener("input", function () {
    const searchValue = searchInput.value.trim().toLowerCase();
    suggestionsBox.innerHTML = "";
    suggestionsBox.classList.remove("show");

    if (searchValue.length > 0) {
      showSuggestions(searchValue);
    }
  });

  function showSuggestions(searchTerm) {
    const searchIndex = JSON.parse(
      localStorage.getItem("productSearchIndex") || {}
    );

    // Clear previous suggestions
    suggestionsBox.innerHTML = "";

    // Get matching products
    const matchingProducts = [];

    for (const productId in searchIndex) {
      const product = searchIndex[productId];

      if (product.title.toLowerCase().includes(searchTerm)) {
        // Added missing parenthesis
        matchingProducts.push(product);
      }
    }

    // Display product suggestions
    if (matchingProducts.length > 0) {
      suggestionsBox.classList.add("show");

      matchingProducts.forEach((product) => {
        const suggestionItem = document.createElement("div");
        suggestionItem.classList.add("product-suggestion-item");

        // Create product photo element
        const productPhoto = document.createElement("img");
        productPhoto.src = product.photo;
        productPhoto.alt = product.title;
        productPhoto.classList.add("suggestion-product-photo");

        // Create product title element
        const productTitle = document.createElement("span");
        productTitle.textContent = product.title;
        productTitle.classList.add("suggestion-product-title");

        // Add click handler
        suggestionItem.addEventListener("click", function () {
          productDetails(product.id);
        });

        // Append elements to suggestion item
        suggestionItem.appendChild(productPhoto);
        suggestionItem.appendChild(productTitle);

        suggestionsBox.appendChild(suggestionItem);
      });
    } else {
      // Fallback to original suggestions if no products match
      const suggestions = new Set();

      // Get suggestions from product categories and types
      for (const productId in searchIndex) {
        const product = searchIndex[productId];

        if (product.category.toLowerCase().includes(searchTerm)) {
          suggestions.add(product.category);
        }
        if (product.type.toLowerCase().includes(searchTerm)) {
          suggestions.add(product.type);
        }
      }

      // Add static pieces suggestions
      // const pieces = {
      //   men: ["T-shirt", "Polo-shirt", "Shirt" /* ... */],
      //   women: ["T-shirt", "Tank-top", "Shirt" /* ... */],
      //   kids: ["Coming soon"],
      // };

      for (const category in pieces) {
        pieces[category].forEach((item) => {
          if (item.toLowerCase().includes(searchTerm)) {
            suggestions.add(item);
          }
        });
      }

      // Display text-only suggestions
      if (suggestions.size > 0) {
        suggestionsBox.classList.add("show");
        suggestions.forEach((suggestion) => {
          const suggestionItem = document.createElement("li");
          suggestionItem.classList.add("suggestion-item");
          suggestionItem.textContent = suggestion;
          suggestionItem.addEventListener("click", function () {
            searchInput.value = suggestion;
            performSearch(suggestion);
          });
          suggestionsBox.appendChild(suggestionItem);
        });
      }
    }
  }

  function performSearch(query) {
    const searchTerm = query.trim().toLowerCase();
    if (!searchTerm) {
      searchInput.classList.add("shake");
      setTimeout(() => searchInput.classList.remove("shake"), 1000);
      return;
    }

    const searchIndex = JSON.parse(
      localStorage.getItem("productSearchIndex") || {}
    );
    const results = [];

    // Search in product data
    for (const productId in searchIndex) {
      const product = searchIndex[productId];
      if (
        product.title.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.type.toLowerCase().includes(searchTerm)
      ) {
        results.push(product);
      }
    }

    // Check static pieces
    let pieceMatch = false;
    const pieces = {
      men: ["T-shirt", "Polo-shirt", "Shirt" /* ... */],
      women: ["T-shirt", "Tank-top", "Shirt" /* ... */],
      kids: ["Coming soon"],
    };

    for (const category in pieces) {
      if (pieces[category].some((p) => p.toLowerCase() === searchTerm)) {
        pieceMatch = true;
        const formattedPiece = searchTerm
          .split("-")
          .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
          .join("-");
        window.location.href = `./Category.html?piece=${encodeURIComponent(
          formattedPiece
        )}`;
        return;
      }
    }

    if (results.length > 0) {
      // Store results in localStorage to display on search results page
      localStorage.setItem("searchResults", JSON.stringify(results));
      window.location.href = `./search-results.html?query=${encodeURIComponent(
        searchTerm
      )}`;
    } else {
      Swal.fire({
        icon: "error",
        title: "No results found",
        text: "We couldn't find any matching products",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
});

// This function should be defined in your global scope
