var config = {
	apiKey: "AIzaSyDxdjK7jPsmeh_f6ybpnnNhjZ-BBXMQEGg",
    authDomain: "choochootrain-ef481.firebaseapp.com",
    databaseURL: "https://choochootrain-ef481.firebaseio.com",
    storageBucket: "choochootrain-ef481.appspot.com",
    messagingSenderId: "459235811155"
};
firebase.initializeApp(config);

var name = "";
var destination = "";
var time = "";
var frequency = 0;

$("#add-train").on("click", function(event){
	event.preventDefault();

	name = $("#name-input").val().trim();
	destination = $("#destination-input").val().trim();
	time = $("#time-input").val().trim();
	frequency = $("#frequency-input").val().trim();

	firebase.database().ref().push({
		trainName: name,
		destination: destination,
		firstTrain: time,
		frequency: frequency
		trainAdded: firebase.database.ServerValue.TIMESTAMP 
	});

	console.log(firebase.database().ref().push());

});

firebase.database().ref().on("child_added", function(childSnapshot, prevChildKey){

	$("#train-table > tbody").append("<tr><td>" + newName + "</td><td>" + newDestination + "</td><td>" + newFrequency + "</td><td>" + newNext + "</td><td>" + newAway + "</td></tr>");
});