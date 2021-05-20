function benvenuto() {

    alert('Benvenuti al mio hotel!!');
}

function save() {

    var username = document.getElementById('username').value;

    localStorage.setItem('username', username);
}


function check() {

   

    var getUsername = localStorage.getItem('username');
    
    
    return getUsername;
}

function disabled() {

    var submit = document.getElementById('submit').disabled = true;

}

function enabled (){

    var submit = document.getElementById('submit').disabled = false;

}

function redirect() {

    location.href = "HomePage";

}

function logout() {

    localStorage.clear();
    location.href = "Login.html";

}