// Global

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

// Register form for radio buttons to
// stop them all being clicked
document.getElementById("age-range").checked = true;

// Alerts
function alerts() {
    alert("Sucess")
}

// Notification Menu


// beginner (all for modal scripts)
var modal = document.getElementById('beginner-leg');
var modal = document.getElementById('beginner-arms');
var modal = document.getElementById('beginner-chest');

// Intermediate
var modal = document.getElementById('intermediate-legs');
var modal = document.getElementById('intermediate-arms');
var modal = document.getElementById('intermediate-chest');

// Advanced
var modal = document.getElementById('advanced-legs');
var modal = document.getElementById('advanced-arms');
var modal = document.getElementById('advanced-chest');

// Other
var modal = document.getElementById('custom');
var modal = document.getElementById('id01');
// End of modal scripts

      
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

