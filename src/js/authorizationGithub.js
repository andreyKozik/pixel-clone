
// //authorization github
// export function authorizationGithub() {
// 	const anchorTag = document.getElementById("login-github");
// 	const outputText = document.getElementById("output");
// 	let tokenUsers;
// 	anchorTag.addEventListener("click", e => {
// 		e.preventDefault();
// 		const authenticator = new netlify.default({});
// 		authenticator.authenticate(
// 			{ provider: "github", scope: "user" },
// 			async (err, data) => {
// 				tokenUsers = data.token;
// 				err
// 					? (outputText.innerText = "Error Authenticating with GitHub: " + err)
// 					: (outputText.innerText =
// 							"Authenticated with GitHub. Access Token: " + tokenUsers);
// 				const res = await fetch("https://api.github.com/user", {
// 					method: "GET",
// 					headers: {
// 						Authorization: "token " + tokenUsers
// 					}
// 				});
// 				const date = await res.json();
// 				document.getElementById("user-login").innerText = date.login;
// 				document.getElementById("user-avatar").style.backgroundImage =
// 					"url(" + date.avatar_url + ")";
// 				document.getElementById("login-github").style.display = "none";
// 			}
// 		);
// 	});
// }
