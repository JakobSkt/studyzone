import { page } from '$app/stores';

export async function load({params}){
	const theme = params.slug
	
	return {theme}
}
