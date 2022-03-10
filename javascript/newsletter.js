
document.addEventListener("DOMContentLoaded", function(event) {

    document.querySelector('#ny-m5-submit').addEventListener("click", async function () {
        const res = await fetch('https://phpapi.nibyou.com/mailinglist-client/api.php', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({email:document.querySelector("#email").value})
        }).catch(formErrorMessage)

        if (res.ok) formSuccessMessage()
        else formErrorMessage()

        let json = await res.json()
        console.log(json)

    });

    let formSuccessMessage = function () {
        document.querySelector("#email").style.display = none;
        document.querySelector("#ny-m5-submit").style.display = none;
        document.querySelector("#ny-m5-success").style.display = block;
    };

    let formErrorMessage = function () {
        document.querySelector("#email").style.display = none;
        document.querySelector("#ny-m5-submit").style.display = none;
        document.querySelector("#ny-m5-error").style.display = block;
    }
});