

export function SaveUserDeatilsLocalStorage(token, userIdToken) {
    console.log(userIdToken);
    window.localStorage.setItem("userToken", token);
    window.localStorage.setItem("userIdToken", token);
    // window.localStorage.setItem("user_id", res?.data._id);
    // window.localStorage.setItem("isLogin", true);
}

export function getUserDetails(id) {
    console.log(id);
    return window.localStorage.setItem("userId", id)
}

export function getToken() {
    return window.localStorage.getItem('userToken')
}


