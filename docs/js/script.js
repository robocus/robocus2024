document.addEventListener("DOMContentLoaded", function() {
    const headerLinks = document.querySelectorAll("header a");

    headerLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                event.preventDefault();

                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            } else {
                // If the target element does not exist, navigate to the new page
                window.location.href = this.getAttribute("href");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const dropdownButton = document.getElementById("dropdown-button");
    const dropdownContent = document.getElementById("dropdown-content");
    const selectedOption = document.getElementById("selected-option");
    const contentTableA = document.getElementById("content-table-A");
    const contentTableB = document.getElementById("content-table-B");
  
    // Lắng nghe sự kiện khi người dùng click vào dropdown button
    dropdownButton.addEventListener("click", function () {
      dropdownContent.classList.toggle("hidden");
    });
  
    // Lắng nghe sự kiện khi người dùng chọn từ dropdown menu
    dropdownContent.addEventListener("click", function (event) {
      const selectedTable = event.target.getAttribute("data-table");
      if (selectedTable === "A") {
        contentTableA.classList.remove("hidden");
        contentTableB.classList.add("hidden");
        selectedOption.textContent = "BẢNG A - WEDO 2.0";
      } else if (selectedTable === "B") {
        contentTableA.classList.add("hidden");
        contentTableB.classList.remove("hidden");
        selectedOption.textContent = "BẢNG B - EV3";
      }
      dropdownContent.classList.add("hidden");
    });
  });
  