var target = null;
var userId = localStorage.getItem("userId");
function check() {
    var status = localStorage.getItem("status");
    if (status == "in") {
        return true;
    }
    else if (status == "out") {
        return false;
    }
    else {
        return "error";
    }
    return true;
}
function fadeOut(element) {
    element.className = "gear hidden";
}
function fadeIn(element) {
    element.className = "gear visible";
}
function loadGear() {
    var checkResult = check();
    if (checkResult == true) {
        target = document.getElementById("signedIn");
    }
    else if (checkResult == false) {
        target = document.getElementById("signedOut");
    }
    else {
        target = document.getElementById("errorGear");
    }
    fadeIn(target);
}
function loadXMLDoc()
{
}
function signOut() {
    var xmlhttp;
    xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4)
        {
            if (xmlhttp.status==200) {
                localStorage.setItem("status", "out");
            }
            else {
                localStorage.setItem("status", "error");
            }
            loadGear();
        }
    }
    xmlhttp.open("GET","http://10.0.1.17/signout/success.txt?id=" + userId,true);
    xmlhttp.send();
}
function signIn() {
    var xmlhttp;
    xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4)
        {
            if (xmlhttp.status==200) {
                localStorage.setItem("status", "in");
            }
            else {
                localStorage.setItem("status", "error");
            }
            loadGear();
        }
    }
    xmlhttp.open("GET","http://10.0.1.17/signin/success.txt?id=" + userId,true);
    xmlhttp.setRequestHeader("ID", userId);
    xmlhttp.send();
}
function retrieveStatus() {
    var xmlhttp;
    xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4)
        {
            if (xmlhttp.status==200) {
                localStorage.setItem("status", xmlhttp.responseText);
            }
            else {
                localStorage.setItem("status", "error");
            }
            loadGear();
        }
    }
    xmlhttp.open("GET","http://10.0.1.17/check/currentstatus.txt?id=" + userId,true);
    xmlhttp.setRequestHeader("ID", userId)
    xmlhttp.send();
}