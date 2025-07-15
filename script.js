const picker = document.getElementById("colorPicker");

picker.addEventListener("input", ()=> {
    document.body.style.backgroundColor= picker.value;
});