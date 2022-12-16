
let submitButton = document.getElementById("submit_btn")

submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    const getPetData = { petName, url, price }
    fetch("http://localhost:3000/pets"), {
        mathod: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(getPetData)
    }

})


function petData() {
    fetch("http://localhost:3000/pets")
        .then(res => res.json())
        .then(data => fetchPets(data))
}

function fetchPets(data) {
    console.log(data)
    data.map((pet) => {
        let card = document.getElementById('pestcards')
        let div = document.createElement("div")
        div.setAttribute("id", "card")
        let image = document.createElement("img")
        let h4 = document.createElement("h4")
        let p = document.createElement("p")
        h4.innerHTML = `Name:${pet.petName}`
        image.src = `${pet.url}`
        card.appendChild(div)
        div.appendChild(image)
        div.appendChild(h4)
        div.appendChild(p)
    })




}
petData()