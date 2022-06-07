var counter = 10; 

function showNotification() {
    const notification = new Notification("New message", {
        body: "oiiii",
    });
}

console.log(Notification.permission);

setInterval( function() {
counter--;

if (counter >= 0) {
    document.getElementById("count").innerHTML = counter;
    }

if (Notification.permission == "granted" && counter <= 0) {
    showNotification();
}
else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
        console.log(permission);
    });
}
}, 1000);
