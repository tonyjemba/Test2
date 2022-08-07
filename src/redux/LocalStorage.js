const KEY = "messages";
//gets user from local storage
export function loadUser() {
  try {
    const serializedUser = localStorage.getItem(KEY);
    if (!serializedUser) return "";
    return serializedUser;
  } catch (e) {
    return undefined;
  }
}

//loads user in local storage
export async function saveUser(state) {
  try {
    const serializedstate = JSON.stringify(state);
    localStorage.setItem(KEY, serializedstate);
  } catch (e) {
    return null
  }
}