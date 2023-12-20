import {getPhotos} from '$lib/index'

export async function load({params}){
	const theme = params.slug

	const paramters = params.slug
	let a = paramters.split('x')[0]
	let b = paramters.split('x')[1]
	let c = paramters.split('x')[2]
	//console.log(a, b, c)
	const photos = getPhotos()
	console.log("photos: " + photos)
	return {photos, theme}
}