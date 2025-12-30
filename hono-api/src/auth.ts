import { expo } from "@better-auth/expo";
import { betterAuth } from "better-auth";
import { expoOriginFix } from "./expo-origin-fix.js";

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true
    },
    plugins: [
        //expoOriginFix(),
        expo()
    ],
    trustedOrigins: [
        // Basic scheme
        "myapp://", 
        
        // Wildcard support for all paths following the scheme
        "myapp://*"
    ]
})