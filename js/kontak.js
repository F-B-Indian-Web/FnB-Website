//  Deklarasi
const scriptURL = "https://script.google.com/macros/s/AKfycbyn-eqpPNP004XVfXCv_r4AQIKGGv1gRM9cYfgjhGp8Wrh4NDKJe2rrDlgCeNZ0-On4/exec";
const form = document.forms["bhajang-bali-kontak"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const alert = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // Reset Form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
