// const KEY = `USER_${Math.floor(Math.random() * 10)}`
// //gets user from local storage
// export function loadUser() {
//   try {
//     const serializedUser = JSON.parse( localStorage.getItem(KEY))
//     return serializedUser;
//   } catch (e) {
//     return undefined;
//   }
// }

// //loads user in local storage
// export async function saveUser(user,data) {
//   try {
//     const Data = JSON.stringify(data);
//     localStorage.setItem(user, Data);
//   } catch (e) {
//     return null
//   }
// }