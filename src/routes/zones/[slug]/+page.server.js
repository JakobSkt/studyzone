import {getPhotos} from '$lib/index'

export async function load({params}){
	const theme = params.slug

	const parameters = params.slug
	console.log(parameters)
	
	const photos = getPhotos(parameters)

	return {photos, theme}
}