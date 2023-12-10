import { SECRET_API_KEY } from '$env/static/private'

export async function getPhotos(c, q, o) {

    const res = await fetch("https://api.unsplash.com/photos/random?client_id=" + SECRET_API_KEY + "&count=1" + "&query=" + q + "&orientation=" + (o != "nopref" ? o : ""))
    const data = await res.json()

    return data
}