window.onload = () => {
    const menu = document.querySelector("#hamburger");
    const mobile = document.querySelector("#mobile");
    const submit = document.getElementById("submit");

    document.addEventListener("click", (e) => {
        if(e.target.id !== "hamburger" && e.target.id !== "mobile") {
            menu.classList.remove("is-active");
            mobile.classList.remove("is-active");
        }
    })

    menu.addEventListener("click", () => {
        menu.classList.toggle("is-active");
        mobile.classList.toggle("is-active");
    });

    submit.addEventListener("submit", (event) => {
        event.preventDefault();
        submit.reset()
    });
}