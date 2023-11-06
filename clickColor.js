const icons = document.querySelectorAll("#clickColor");

        icons.forEach((icon) => {
            icon.addEventListener("click", () => {
                icon.classList.toggle("icon-color-change");
            });
        });