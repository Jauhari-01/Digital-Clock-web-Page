
let a; // variable for creating date object
let date; // variable for creating date string
let time; // variable for creating time string
setInterval(() => { //creating a interval loop it will update value after given mili - seconds
    a = new Date();
    date = a.toLocaleDateString(); // using this function we can create the date string (current dat)
    time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds(); // here we are creating time string(curren time)
    document.getElementById('time').innerHTML = time + " on " + date;// here we are updating html of dom by using id
}, 1000);

