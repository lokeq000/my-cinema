

export default function server(url, settings={}){
    const defaultPath ='https://api.themoviedb.org/3/movie'; // /popular'
   // const imagePath = 'https://image.tmdb.org/t/p/w500/'
    const API_KEY  = '3d443aa4cf7777bb16b68b2da9b40f93'
    console.log(settings)
    const _url =`${defaultPath}/${url}?api_key=${API_KEY}&language=ru-RU&region=ru` 
    return fetch(_url).then(res => {
        return res.json()
    })
} 