import { SECRET_API_KEY } from '$env/static/private'

export async function getPhotos(theme) {

    let query = ''

    switch(theme) {
        case 'vibrantlofi':
            query = 'calm landscape'
            break;

        case 'darkasthetics':
            query = 'dark moody'
            break;

        case 'classicalchristmas':
            query = 'snowy christmas'
            break;
    }

    const res = await fetch("https://api.unsplash.com/photos/random?client_id=" + SECRET_API_KEY + "&count=2" + "&query=" + query + "&orientation=landscape")
    const data = await res.json()

    console.log(data)

    return data
}
