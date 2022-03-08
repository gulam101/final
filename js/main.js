// Global
var begginer = "Train begginer ";
// Correct spelling for this below later
var intermediate = "Train intermediate ";
var advanced = "Train advanced ";

// navbar function
function openNav(x) {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    // x.style.display = 'none';
    console.log('Open NavBar!');
}
function closeNav(x) {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
    console.log('Closed NavBar!')
}

// Alerts
function alerts() {
    alert("Sucess")
}

// Notification Menu

// Cookie consent

// Modal script
var modal = document.getElementById('id01');
      
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Google Captcha
function onSubmit(token) {
    document.getElementById("demo-form").submit();
}

