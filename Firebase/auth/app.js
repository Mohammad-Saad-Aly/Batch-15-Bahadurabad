import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyDhaUmKif03IsvPX21GRn-CP7q7FuDmP14",
    authDomain: "batch-15-faf8a.firebaseapp.com",
    projectId: "batch-15-faf8a",
    storageBucket: "batch-15-faf8a.firebasestorage.app",
    messagingSenderId: "811608530523",
    appId: "1:811608530523:web:49e379276ba26db99fa97e",
    measurementId: "G-TMB1MXCD71"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let getSbtn = document.querySelector('#sbtn')

if (getSbtn) {

    getSbtn.addEventListener('click', () => {
        let email = document.querySelector("#semail").value.trim()
        let password = document.querySelector("#spass").value.trim()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user.email)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    })


}


let lbtn = document.querySelector("#lbtn")

if (lbtn) {

    lbtn.addEventListener('click', () => {
        let email = document.querySelector("#lemail").value.trim()
        let password = document.querySelector("#lpass").value.trim()

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(`${user.email} login success`)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    })

}



// function signup(){
//     console.log('check')
// }
// window.signup = signup