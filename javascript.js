var counter = 10; 

setInterval( function() {
counter--;

if (counter >= 0) {
    document.getElementById("count").innerHTML = counter;
    }
}, 1000);

function showNotification() {
    const notification = new Notification("New message", {
        body: "oiiii",
    });
}

console.log(Notification.permission);

if (Notification.permission == "granted" && counter <= 0) {
    showNotification();
}
else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
        console.log(permission);
    });
}