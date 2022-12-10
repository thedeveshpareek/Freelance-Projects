import React from "react";

export function* errorCodeChecker(errorCode){
    console.log(errorCode);
    if (errorCode == 1004) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userId");
        localStorage.removeItem("userLoginStatus");
        localStorage.removeItem("user_picture");
        localStorage.removeItem("username");
        localStorage.removeItem("is_frontdesk");
        localStorage.removeItem("login_by");
        localStorage.removeItem("socket");

        setTimeout(function() {
            window.location = "/";
        }, 1000);
    }
}
