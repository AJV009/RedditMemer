const title = document.getElementsByClassName('title')[0]
const image = document.getElementsByClassName('image')[0]
const next = document.getElementById('next')

meme_loader()

next.addEventListener('click',(e) => {
    meme_loader()
})

function meme_loader(){
    title.innerHTML = "Loading..."
    // Credits for API to https://github.com/D3vd/Meme_Api
    fetch("https://meme-api.herokuapp.com/gimme")
        .then((response) =>{
            return response.json()
        })
        .then((res) => {
            title.innerHTML = `<h2>${res.title}</h2>`
            image.innerHTML = `<img src="${res.url}" id="img" alt="A Reddit Meme">`
        })
}

