const button = document.querySelector("#projectBtn");
const projects = document.querySelector("#projectList");

button.addEventListener("click", function () {
    if (projects.hidden) {
        projects.hidden = false;
        button.textContent = "Hide Projects";
    } else {
        projects.hidden = true;
        button.textContent = "Show Projects";
    }

    button.setAttribute("aria-expanded", String(!projects.hidden));
});