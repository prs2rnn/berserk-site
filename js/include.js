(function () {
  async function loadComponent(id, file) {
    const response = await fetch(file);

    const html = await response.text();

    document.getElementById(id).innerHTML = html;
  }

  loadComponent("navbar-container", "./components/navbar.html").then(() => {
    let currentPage = window.location.pathname.split("/").pop();
    if (currentPage === "") {
      currentPage = "index.html";
    }
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
      const linkPage = link.getAttribute("href").split("/").at(-1);

      if (currentPage === linkPage) {
        link.classList.add("active");
      }
    });
  });
  loadComponent("footer-container", "./components/footer.html");
})();
