function check() {
    /*Back end integration: Place here code to fetch status.*/
    status = status;
};

function display() {
    if (status == "in") {
        $("#sign_out_gear").delay(500).fadeIn(500);
    }
    if (status == "out") {
        $("#sign_in_gear").delay(500).fadeIn(500);
    }   
};

$(document).ready(function(){
    $("#loading_gear").fadeOut(500);
    status = "in";
    check();
    display();
    $("#sign_out_gear").click(function(){
        $("#sign_out_gear").fadeOut(500);
        status = "out"; /*Replace with code to sign out*/
        check();
        display();
    });
    $("#sign_in_gear").click(function(){
        $("#sign_in_gear").fadeOut(500);
        status = "in"; /*Replace with code to sign in*/
        check();
        display();
    });
});
