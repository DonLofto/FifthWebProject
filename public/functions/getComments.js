//Creating arrays comments

    
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, getDocs, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

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
const getComments = () => getDocs(collection(db, "comments"));
document.getElementById('commentTable').innerHTML = 'Loading Data'
//display comments/data after browser is refreshed or loaded
const arrData = []
window.addEventListener("DOMContentLoaded", async (event) => {
    const querySnapshot = await getComments();
    console.info(querySnapshot)
    document.getElementById('commentTable').innerHTML = ''
    //loops through querySnapshot for documents 
    //checks if comment is empty or not
    //If comment is empty then it will not be displayed
    querySnapshot.forEach((doc) => {
        var constComment = {comment: doc.data().comment, date_created: doc.data().date_created }
        if(constComment.comment == '' || constComment.comment == undefined){
            console.log('Don not include empty comment ')
        }else{
            arrData.push(constComment)
        }
    });
    //This will sort the array based on date_created
    arrData.sort(function(a,b){
        return new Date(b.date_created) - new Date(a.date_created);
    });
    //arrDara holds the data that we will get from the firebase database
    arrData.forEach(function(item) {
        document.getElementById('commentTable').innerHTML += '<tr><td><b>Comment</b> : ' + item.comment + '</td></tr>';
    })

})