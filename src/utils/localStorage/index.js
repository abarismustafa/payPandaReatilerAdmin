

export function SaveUserDeatilsLocalStorage(token) {
    window.localStorage.setItem("userToken", token);
    // window.localStorage.setItem("user_id", res?.data._id);
    // window.localStorage.setItem("isLogin", true);
}

export function getUserDetails() {
    return window.localStorage.getItem("userDetails")
}

export function getToken() {
    return window.localStorage.getItem('userToken')
}


