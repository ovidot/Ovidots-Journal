import React from "react";

var firebase = require('firebase');
var firebaseui = require('firebaseui');

//Configure FirebaseUI.
const uiConfig = {
    // Redirect to / after sign in is successful. Alternatively you can provide a callback 
    signInSuccessUrl: "/",
    // We will display GitHub as auth providers.
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID,firebase.auth.EmailAuthProvider.PROVIDER_ID]
};

function SignInScreen() {
    return (
        <>
        <div
        style={{
            maxWidth: "320px",
            display: "flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
        }}>
            <h1>Login to Journal</h1>
            <p>Please sign-in:</p>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
        </>
    );
}

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

export default SignInScreen