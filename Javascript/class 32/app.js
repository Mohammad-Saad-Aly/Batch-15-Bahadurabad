// localStorage.setItem('name', 'Ali')
// sessionStorage.setItem('id', '01')

// var getUser = localStorage.getItem('Name')
// document.writeln(getUser)


function signup() {
    var getfullName = document.getElementById('fullName')
    var getemail = document.getElementById('emailAddress')
    var getpassword = document.getElementById('password1')

    localStorage.setItem('full name', getfullName.value)
    localStorage.setItem('email', getemail.value)
    localStorage.setItem('password', getpassword.value)

    location.href = './login.html'
}

function login() {
    var getEmail = document.querySelector('#emailAddress1')
    var getpassword = document.querySelector('#password2')

    if (getEmail.value == localStorage.getItem('email') && getpassword.value == localStorage.getItem('password')) {
        Swal.fire({
            title: "Login Success",
            text: "You can go to Dashboard",
            icon: "success"
        }).then(() => {
            location.href = './welcome.html'
        })
    }
    else {
        Swal.fire({
            title: "Login Failed",
            text: "Go to Sign up",
            icon: "error"
        });
    }

}