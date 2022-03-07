
document.addEventListener("DOMContentLoaded", function(event) {
    let btn = document.querySelectorAll("a.ny-modal-button");
    let modals = document.querySelectorAll('.ny-modal');

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click",function (e) {
            e.preventDefault();
            let modal = document.querySelector(e.target.getAttribute("href"));
            modal.style.display = "flex";

            return;
        });
    }

    function closeModals() {
        for (let index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
    }

    window.addEventListener("click", function (event) {
        if (event.target.classList.contains('ny-modal-button') === false) {
            closeModals();
        }
    });

    document.addEventListener("keyup", function (e) {
        if (e.key === 'Escape') {
            closeModals();
        }
    });



});