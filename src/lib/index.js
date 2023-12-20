import { SECRET_API_KEY } from '$env/static/private'

export async function getPhotos(theme) {

    const res = await fetch("https://api.unsplash.com/photos/random?client_id=" + SECRET_API_KEY + "&count=2" + "&query=" + theme + "&orientation=landscape")
    const data = await res.json()

    console.log(data)

    return data
}
