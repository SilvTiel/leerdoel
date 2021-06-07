// document.getElementsByClassName("block").addEventListener("click", blocktoggle);

// function blocktoggle(){
//     console.log("test")
// }

document.querySelectorAll('.block').forEach(item => {
    item.addEventListener('click', event => {
        var x = item.nextElementSibling;
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none"
        }
    })
  })