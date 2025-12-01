const scriptURL = 'https://script.google.com/macros/s/AKfycbyKZVMsOPn2TJ16BNUUeuUzE3Naqq3A6FDVRgD_HNuDwwrxZvELXiOEkUaEJzxAisd1bA/exec'
const form = document.forms['submit-to-google-sheet']
const pesan = document.getElementById("pesan")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            pesan.innerHTML = "Form sent!"
            setTimeout(function () {
                pesan.innerHTML = ""
            }, 2000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})