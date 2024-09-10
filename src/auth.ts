import NextAuth, { NextAuthResult } from "next-auth";
import Entra from "next-auth/providers/microsoft-entra-id";

let accountInfoProcessed = false;

export const { handlers, auth, signIn, signOut }: NextAuthResult = NextAuth({
    secret: process.env.AUTH_SECRET,
    providers: [
        Entra({
            clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_CLIENT_ID,
            clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
            tenantId: process.env.AUTH_MICROSOFT_ENTRA_ID_TENANT_ID,
            authorization: {
                prompt: "select-account",
                params: {
                    scope: "openid profile email User.Read offline_access",
                },
            },
        }),
    ],
    callbacks: {
        async jwt({ token, account }) {
            // Persist the OAuth access_token to the token right after signin

            // Process account info only if it hasn't been processed before
            if (account && !accountInfoProcessed) {
                token.accessToken = account.access_token;
                token.refreshToken = account.refresh_token;
                accountInfoProcessed = true;
            }
            return token;
        },
        async session({ session, token }) {
            // Send properties to the client, like an access_token and user id from a provider.

            const profilePicture = await fetch(
                `https://graph.microsoft.com/v1.0/me/photos/648x648/$value`,
                {
                    headers: {
                        Authorization: `Bearer ${token.accessToken}`,
                    },
                },
            );

            if (profilePicture.ok) {
                const pictureBuffer = await profilePicture.arrayBuffer();
                const pictureBase64 = Buffer.from(pictureBuffer).toString("base64");
                session.user.image = `data:image/jpeg;base64, ${pictureBase64} `;
            }

            session.user.token = token.accessToken as string;
            return session;
        },
    },
});
