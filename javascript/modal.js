
document.addEventListener("DOMContentLoaded", function(event) {
    let btn = document.querySelectorAll("a.ny-modal-button");
    let modals = document.querySelectorAll('.ny-modal');

    for (let i = 0; i < btn.length; i++) {
        btn[i].onclick = function (e) {
            e.preventDefault();
            modal = document.querySelector(e.target.getAttribute("href"));
            modal.style.display = "flex";

            return;
        }
    }

    window.onclick = function (event) {
        if (event.target.classList.contains('ny-modal-button') === false) {
            for (let index in modals) {
                if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
            }
        }

    }

    document.onkeyup = function (e) {
        if (e.key === 'Escape') {
            for (let index in modals) {
                if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
            }
        }
    };
});