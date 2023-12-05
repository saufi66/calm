function show() {
    var x = document.getElementById("myinput");
    if (x.type === "password") {
        x.type = "text";
    }else {
        x.type = "password";
    }
    var closed = document.getElementById("closed");
    if (closed.style.display === "none") {
        closed.style.display = "block";
    }else {
        closed.style.display = "none";
    }
    var aye = document.getElementById("eye");
    if (aye.style.display === "block") {
        aye.style.display = "none";
    }else {
        aye.style.display = "block";
    }
}
