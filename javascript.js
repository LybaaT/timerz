var counter = 1800; 

function showNotification() {
    const notification = new Notification("2COOL4U ALERT!!!!", {
        body: "Laiba wishes to remind u that she is always 2 cool 4 u. ur my favorite loser. see u in 15 minutes :)",
        icon: "icon.png"
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
    counter = 1800
}
else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
        console.log(permission);
    });
}
}, 1000);
