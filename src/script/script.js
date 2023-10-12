import './style.css'

let dialog = document.createElement('div')
dialog.classList.add('blanker')

dialog.textContent = "👁️👁️"
dialog.style.display = "none"
document.body.appendChild(dialog)


setInterval(() => {
    dialog.style.display = "flex"
    console.log(dialog);
    // document.body.appendChild(dialog)
    setTimeout(() => {
        dialog.style.display = "none"
        console.log(dialog);
        // document.body.removeChild(dialog)
    }, 150);
       
    console.log("Blip!");
}, 5000);


