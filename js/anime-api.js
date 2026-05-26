(function () {
  const button = document.getElementById("loadAnimeBtn");
  const container = document.getElementById("animeContainer");
  const spinner = document.getElementById("loadingSpinner");

  button.addEventListener("click", async () => {
    spinner.classList.remove("d-done");
    container.innerHTML = "";

    try {
      // Fetch
      const response = await fetch("https://api.jikan.moe/v4/anime?q=berserk");
      const data = await response.json();

      const anime = data.data[1];

      container.innerHTML = `
              <div
        class="card bg-dark text-white mx-auto border-danger shadow-lg"
        style="max-width: 800px;"
      >

        <img
          src="${anime.images.jpg.large_image_url}"
          class="card-img-top"
          alt="${anime.title}"
        >

        <div class="card-body">

          <h2 class="card-title mb-3">
            ${anime.title}
          </h2>

          <p>
            <strong>Episodes:</strong>
            ${anime.episodes}
          </p>

          <p>
            <strong>Score:</strong>
            ${anime.score}
          </p>

          <p>
            <strong>Status:</strong>
            ${anime.status}
          </p>

          <p>
            <strong>Year:</strong>
            ${anime.year}
          </p>

          <p class="card-text mt-4">
            ${anime.synopsis}
          </p>

        </div>

      </div>
      `;
    } catch (error) {
      container.innerHTML = `
        <div class="alert alert-danger">
          Failed to load anime data.
        </div>
      `;
      console.error(error);
    } finally {
      spinner.classList.add("d-none");
    }
  });
})();
