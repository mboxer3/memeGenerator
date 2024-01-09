document.addEventListener("DOMContentLoaded", function () {
    let memeForm = document.querySelector("#meme-steps")
    let memeGallery = document.querySelector(".exhibit")

    memeForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let memeLi = document.createElement("li")
        memeLi.classList.add("meme-img")

        let topText = document.querySelector("#text-top")
        var urlInput = document.getElementById('uploading-pics').value,
            src = urlInput,
            img = document.createElement('img');
        img.src = src;

        let topTextDiv = document.createElement('div')
        topTextDiv.classList.add("text", "top")
        topTextDiv.innerText = document.querySelector("#text-top").value;

        let bottomTextDiv = document.createElement('div')
        bottomTextDiv.classList.add("text", "bottom")
        bottomTextDiv.innerText = document.querySelector("#text-bottom").value;

        let removeDiv = document.createElement("div")
        removeDiv.classList.add("red-cross")
        removeDiv.innerText = "X"
        removeDiv.style.color = "red"

        memeGallery.appendChild(memeLi)
        memeLi.appendChild(img)
        memeLi.appendChild(topTextDiv)
        memeLi.appendChild(bottomTextDiv)
        memeLi.appendChild(removeDiv)

        memeForm.reset();
    })
    function remove(event) {
        event.target.parentNode.remove()
    }
    memeGallery.addEventListener("click", remove, false)
})