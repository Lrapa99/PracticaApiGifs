
const apiKey = "iPSU4xim4przrvaM2bNTbf4MbEf4qF84"

function getGifs({keyword = "cat"} = {}) {

    
const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

   return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const {data = []} = response
      if (Array.isArray(data)){
        const gifs = data.map(image => {
            const {images,title, id} =  image
            const {url} = images.original
            return {title, id , url}
        })

        return gifs
    }
    })

}

export default getGifs;

