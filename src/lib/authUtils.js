// const { authenticateRequest, clerkClient } = await import(
//   "@clerk/nextjs/server"
// );
// export async function verifyClerkUser(req) {
//   try {
//     // Authenticate request and get userId
//     const { userId } = await authenticateRequest({ request: req });

//     if (!userId) {
//       throw new Error("No user ID found in request");
//     }

//     // Fetch user data from Clerk
//     const user = await clerkClient.users.getUser(userId);

//     console.log("User ID from Clerk:", userId);
//     console.log("User data:", user);

//     return {
//       clerkId: user.id,
//       email: user.emailAddresses?.[0]?.emailAddress,
//       username: user.username,
//     };
//   } catch (error) {
//     console.error("Auth failed:", error);
//     throw new Error("Authentication failed");
//   }
// }
