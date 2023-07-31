import React from 'react'
import {signInWithGoogle} from "./FireBase"
// import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
// import { auth } from "./FireBase"

function SignIn() {
    // const [num, setNum] = useState();
    // const [otp, setOtp] = useState();

    // console.log(auth.currentUser);

    // const HandleChange = (e) => {
    //     if (e.target.name == "number") {
    //         setNum(e.target.value)
    //     }
    //     else if (e.target.name == "otp") {
    //         setOtp(e.target.value)
    //     }
    // }

    // function onCaptha() {
    //     // const auth = getAuth();
    //     window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
    //         'size': 'invisible',
    //         'callback': (response) => {
    //             // reCAPTCHA solved, allow signInWithPhoneNumber.
    //             onSignInSubmit();
    //         }
    //     })
    // }


    // const sendOtp = async () => {
    //     try {
    //         let recaptchaVerifire = await new RecaptchaVerifier("recaptcha", {}, auth)
    //         let confirmation = await signInWithPhoneNumber(auth, num, recaptchaVerifire)
    //         console.log(confirmation);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }


    // function onSignInSubmit() {
    //     onCaptha()
    //     const appVerify = window.recaptchaVerifier;
    //     const phoneNumber = "+91" + num;
    //     const auth = getAuth();
    //     signInWithPhoneNumber(auth, phoneNumber, appVerify)
    //         .then((confirmationResult) => {
    //             window.confirmationResult = confirmationResult;
    //             console.log("otp send");
    //         })
    // }


    return (
        <div>
            

        <button onClick={signInWithGoogle}>signin</button>
            

        </div>
    )
}

export default SignIn