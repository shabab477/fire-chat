
// Initialize Firebase
var config = {
apiKey: "AIzaSyCvZ7MSuMmJt5P-eJMYXiZmjNO2RSjjXxE",
authDomain: "my-real-time-chat-6d4c2.firebaseapp.com",
databaseURL: "https://my-real-time-chat-6d4c2.firebaseio.com",
projectId: "my-real-time-chat-6d4c2",
storageBucket: "my-real-time-chat-6d4c2.appspot.com",
messagingSenderId: "757077712606"
}

var firebase = firebase.initializeApp(config)

var database = firebase.database()

// function writeMessage() {
//     database.ref("Messages").set({
//         message: "Hi Sadna <3 Shabab!"
//     })
// }
let times = 1

database.ref("Messages").on('child_added', function(data) {
    var dom = document.getElementById("show")
    dom.innerHTML += "Message: " + data.val().message + "<br />"
})

function writeMessage(message) {
    var newMessageKey = database.ref("Messages").push()
    newMessageKey.set({
        message: message
    })
}

function goGoButton() {
    var dom = document.getElementById("message")
    var message = dom.value
    writeMessage(message)
}

function success(userName) {
    var userRef = database.ref("users").push()
    userRef.set({
        name: userName,
        messages: 0
    })
}