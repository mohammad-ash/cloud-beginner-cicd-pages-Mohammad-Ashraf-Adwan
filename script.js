
const changeNameBtn = document.getElementById("changeNameBtn");

if (changeNameBtn) {
    changeNameBtn.addEventListener("click", () => {
        const display = document.getElementById("displayName");
        if (display) {
            display.textContent = "Mohammad Ashraf";
        }
    });
}
