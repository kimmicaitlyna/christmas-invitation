
// ==================================
// GUEST PERSONALIZATION
// ==================================

const urlParams = new URLSearchParams(window.location.search);
const guestId = urlParams.get("id");

const guestNameElement = document.getElementById("guest-name");

async function loadGuest() {
    try {
        const response = await fetch("data/guest.json");

        if (!response.ok) {
            throw new Error("Gagal mengambil data tamu");
        }

        const guests = await response.json();

        const guest = guests.find(
            item => item.id === Number(guestId)
        );

        guestNameElement.textContent = guest
            ? guest.name
            : "Bapak/Ibu";

    } catch (error) {
        guestNameElement.textContent = "Bapak/Ibu";
        console.error("Error:", error);
    }
}

loadGuest();


// ==================================
// OPEN INVITATION
// ==================================

const openButton = document.getElementById("open-invitation");
const bgMusic = document.getElementById("bg-music");
const openingPage = document.getElementById("opening");
const mainContent = document.getElementById("main-content");

openButton.addEventListener("click", function () {
    bgMusic.play();
});

const musicButton = document.getElementById("music-toggle");

musicButton.addEventListener("click", function () {
    if (bgMusic.paused) {
        bgMusic.play();
        musicButton.innerHTML = '<i class="bi bi-volume-up-fill"></i>';
    } else {
        bgMusic.pause();
        musicButton.innerHTML = '<i class="bi bi-volume-mute-fill"></i>';
    }
});

openButton.addEventListener("click", function () {

    openingPage.style.display = "none";

    mainContent.hidden = false;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
