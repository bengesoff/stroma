function login(UserId) {
    localStorage.setItem("userId", UserId);
    localStorage.setItem("status", "in");
    window.location.href = "index.html" ;
    return false;
}