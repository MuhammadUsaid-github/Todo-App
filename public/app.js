//   Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChLmSKR6TqKhW-u2aX-1eqRFQJHslw0_w",
    authDomain: "todo-app-f39f0.firebaseapp.com",
    projectId: "todo-app-f39f0",
    storageBucket: "todo-app-f39f0.appspot.com",
    messagingSenderId: "311988570663",
    appId: "1:311988570663:web:527af03514251cf6291c02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();

var inputVal = document.getElementById("inputVal")
var listData = document.getElementById("listData")
window.add = function () {
    // console.log(inputVal.value);
    var IdRef = ref(database, "todo-app/");
    var id = push(IdRef).key;
    console.log(id);


    var obj = {
        todo: inputVal.value,
        id: id,
    };

    var refrence = ref(database, `todo/${id}`);
    set(refrence, obj)

    console.log(obj);
};

 // create li tag with text node
 var li = document.createElement('li')
 var liText = document.createTextNode(inputVal.value)
 li.appendChild(liText)

 // create delete button
 var delBtn = document.createElement("button")
 var delText = document.createTextNode("DELETE")
 delBtn.setAttribute("class", "btn")
 delBtn.setAttribute("onclick", "deleteItem(this)")
 delBtn.appendChild(delText)

 // create edit button
 var editBtn = document.createElement("button");
 var editText = document.createTextNode("EDIT")
 editBtn.appendChild(editText)
 editBtn.setAttribute("onclick", "editItem(this)")



















