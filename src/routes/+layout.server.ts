import { kindeAuthClient, type SessionManager } from "@kinde-oss/kinde-auth-sveltekit"
import type { RequestEvent } from "@sveltejs/kit"
import { premiumAccount } from "../lib/store"

export async function load({request}: RequestEvent) {
    const isAuthenticated = await kindeAuthClient.isAuthenticated(
        request as unknown as SessionManager 
    )
    if (isAuthenticated) {
        console.log("You are authenticated")
        const user = await kindeAuthClient.getUser(request as unknown as SessionManager)
        console.log(user)
        const org = await kindeAuthClient.getOrganization(request as unknown as SessionManager);

        const premium = await kindeAuthClient.getPermission(request as unknown as SessionManager, "premium:account")
        console.log(await kindeAuthClient.getPermissions(request as unknown as SessionManager))

        premiumAccount.set(premium.isGranted)
        return { user, premium, org}
    } else {
        console.log("You are not authenticated")
    }

    return {
        isAuthenticated
    }
}