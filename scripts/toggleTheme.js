document.addEventListener("DOMContentLoaded", function () {
    const TOGGLE_SWITCH = document.getElementById("theme-toggle");
    const THEME_ICON = document.querySelector(".bi-moon-fill");
    
    if (localStorage.getItem("theme") === "dark") 
    {
        document.body.classList.add("dark-theme");
        TOGGLE_SWITCH.checked = true;
        THEME_ICON.classList.replace("bi-moon-fill", "bi-sun-fill");
    }

    TOGGLE_SWITCH.addEventListener("change", () => {
        if (TOGGLE_SWITCH.checked) 
        {
            document.body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark");
            THEME_ICON.classList.replace("bi-moon-fill", "bi-sun-fill");
        } 
        else 
        {
            document.body.classList.remove("dark-theme");
            localStorage.setItem("theme", "light");
            THEME_ICON.classList.replace("bi-sun-fill", "bi-moon-fill");
        }
    });
});
