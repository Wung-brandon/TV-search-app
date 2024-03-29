const form = document.querySelector("#searchForm")

form.addEventListener("submit", async function(e){
    e.preventDefault()
    var searchValues = form.elements.query.value
    // console.log(inputValues)
    const parameters = {
        params : {
            q : searchValues
        }
    }
    const url = "https://api.tvmaze.com/search/shows"

    // alternatively
    // const url = `https://api.tvmaze.com/search/shows?q=${searchValues}`

    const res = await axios.get(url, parameters)
    makeShows(res.data)
    form.elements.query.value = ""

})

function makeShows(images){
    for (let imgs of images){
        if (imgs.show.image){
            const img = document.createElement("IMG")
            img.src = imgs.show.image.medium
            document.body.append(img)
        }
        else{
            alert("there is no image available")
        }

    }
}