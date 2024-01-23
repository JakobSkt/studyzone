import { kindeAuthClient, type SessionManager } from "@kinde-oss/kinde-auth-sveltekit"
import type { RequestEvent } from "@sveltejs/kit"
import { premiumAccount } from "$lib/store"

export async function load({request}: RequestEvent) {
    const isAuthenticated = await kindeAuthClient.isAuthenticated(
        request as unknown as SessionManager 
    )
    if (isAuthenticated) {
        console.log("You are authenticated")
        const user = await kindeAuthClient.getUser(request as unknown as SessionManager)
        console.log(user)
        const premium = await kindeAuthClient.getPermission(request as unknown as SessionManager, "premium")
        // const chatbot = await kindeAuthClient.getPermission(request as unknown as SessionManager, "chatbot")
        const featureflag = await kindeAuthClient.getFlag(request as unknown as SessionManager, "custom-zones")
        const featureflag2 = await kindeAuthClient.getFlag(request as unknown as SessionManager, "theme")

        premiumAccount.set(premium.isGranted)
        return { user, premium, featureflag, featureflag2 }
    } else {
        console.log("You are not authenticated")
    }

    return {
        isAuthenticated
    }
}