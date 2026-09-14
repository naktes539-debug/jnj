/* =========================
   WELCOME SCREEN
========================= */

function enterDashboard() {

    const welcome = document.getElementById("welcomeScreen");

    welcome.style.transition = "1s ease";
    welcome.style.opacity = "0";
    welcome.style.transform = "scale(1.05)";

    setTimeout(() => {
        welcome.style.display = "none";
    }, 1000);
}


/* =========================
   INTEREST CALCULATOR
========================= */

function calculateInterest() {

    const principal =
        Number(document.getElementById("principal").value);

    const rate =
        Number(document.getElementById("rate").value);

    const years =
        Number(document.getElementById("years").value);


    if (
        principal <= 0 ||
        rate < 0 ||
        years <= 0
    ) {

        alert("Please enter valid financial values.");

        return;
    }


    /*
        Simple Interest Formula

        I = P × R × T

        P = Principal
        R = Interest Rate / 100
        T = Time in years
    */

    const interest =
        principal * (rate / 100) * years;

    const total =
        principal + interest;


    document.getElementById("interestResult")
        .textContent =
        "$" + interest.toLocaleString(
            "en-US",
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }
        );


    document.getElementById("resultPrincipal")
        .textContent =
        "$" + principal.toLocaleString(
            "en-US",
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }
        );


    document.getElementById("totalBalance")
        .textContent =
        "$" + total.toLocaleString(
            "en-US",
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }
        );
}


/* =========================
   ACTIVE NAVIGATION
========================= */

const navLinks =
    document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


/* =========================
   NUMBER INPUT ANIMATION
========================= */

document.querySelectorAll("input").forEach(input => {

    input.addEventListener("focus", () => {

        input.parentElement.style.borderColor =
            "#b58a45";

        input.parentElement.style.boxShadow =
            "0 0 0 3px rgba(181,138,69,.08)";
    });


    input.addEventListener("blur", () => {

        input.parentElement.style.borderColor =
            "#dfe3e8";

        input.parentElement.style.boxShadow =
            "none";
    });

});
