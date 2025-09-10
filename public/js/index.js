document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        const termo = document.querySelector('input[name="search"]').value.toLowerCase();
        const selectCategoria = document.querySelector('select[name="category"]').value;
        const itens = document.querySelectorAll("#div-receita .p-6");
        itens.forEach((item) => {
          const texto = item.textContent.toLowerCase();
          const categoria = item.getAttribute("data-category");
          if (
            (termo === "" || texto.includes(termo)) &&
            (selectCategoria === "Todas" || categoria === selectCategoria)
          ) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });