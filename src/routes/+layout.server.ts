import { kindeAuthClient, type SessionManager } from "@kinde-oss/kinde-auth-sveltekit"
import type { RequestEvent } from "@sveltejs/kit"

export async function load({request}: RequestEvent) {
    const isAuthenticated = await kindeAuthClient.isAuthenticated(
        request as unknown as SessionManager 
    )
    if (isAuthenticated) {
        console.log("You are authenticated")
        const user = await kindeAuthClient.getUser(request as unknown as SessionManager)
        const feature = await kindeAuthClient.getPermissions(request as unknown as SessionManager)
        return { user, feature }
    } else {
        console.log("You are not authenticated")
    }

    return {
        isAuthenticated
    }
}