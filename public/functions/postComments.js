    // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1g_p-6Xf61QjzMBCcHG30xO51XXCOLvs",
    authDomain: "fifthwebassignment-2a5e9.firebaseapp.com",
    projectId: "fifthwebassignment-2a5e9",
    storageBucket: "fifthwebassignment-2a5e9.appspot.com",
    messagingSenderId: "541962157952",
    appId: "1:541962157952:web:a55bcecc16c24d23888b65"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
//init firestore
const db = getFirestore(app);

//posting comments to firebase
var postButton = document.getElementById('submitBtn');
postButton.addEventListener('click', e => {
    var contentOfComment = document.getElementById('comment').value;
    addDoc(collection(db, "comments"), {
        comment: contentOfComment,
        date_created: new Date().valueOf()
    })
    addComment()
    formReset()
});

//defining a function to add comment
function addComment() {
    //getting values comment fields
    var comment = document.getElementById("comment").value;
    //checking if comment is empty. Changing colour if empty
    if (comment == "") {
        document.getElementById("comment").placeholder = "Please enter your comment";
        document.getElementById("comment").style.borderColor = "red";
    }
    //Adding comment to array
    else 
    {
        // Adding those comments to html page
        document.getElementById('commentTable').insertAdjacentHTML('afterbegin','<tr><td><b>Comment</b> : ' + comment + '</td></tr>');
    }
}



