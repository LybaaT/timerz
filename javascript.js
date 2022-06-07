var counter = 1000; 

function showNotification() {
    const notification = new Notification("Laiba says", {
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
    counter = 1000
}
else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
        console.log(permission);
    });
}
}, 1000);
