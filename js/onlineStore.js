const mainCards = document.getElementById('mainCards')
const timer = document.getElementById('timer')
const hoursLeft = document.getElementById('hours')
const minutesLeft = document.getElementById('minutes')
const secondsLeft = document.getElementById('seconds')

const bar = document.getElementById('bar')
const content = document.getElementById('content')

// nav bar
bar.addEventListener('click', ()=> {
    if(content.style.display == 'none'){
        content.style.display = 'block'
    } else {
        content.style.display = 'none'
    }
})

// timer
var countDownDate = new Date("Mar 10, 2024 00:00:00").getTime();

var x = setInterval(function() { // Update the countdown every 1 second

    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the time remaining
    var distance = countDownDate - now;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown in the element with id="countdown"
    hoursLeft.innerHTML = hours
    minutesLeft.innerHTML = minutes
    secondsLeft.innerHTML = seconds

    if (distance < 0) { // If the countdown is over, display a message
        clearInterval(x);
        timer.innerHTML = "EXPIRED";
    }
}, 1000);

console.log(window.location.pathname)

// fetch data
async function fetchData() {
    try {
        const response = await fetch('js/data.json');
        const data = await response.json();
        // Process the JSON data here
        console.log(data); // Example: Log the data to the console

        data.forEach((el, index) => {
            
            mainCards.innerHTML += `
            <div class="card" id="card">
                <img src="${data[index].image}" alt="" width="90%">
                <div class="detials">
                    <h2>${data[index].name}</h2>
                    <p>${data[index].details}</p>
                    <p>${data[index].reviews}</p>
                    <p>${data[index].price}</p>
                </div>
                <button>Add to Cart</button>
            </div>
            `
        });

    } catch (error) {
        console.error('Error fetching JSON:', error);
    }
}
  
fetchData();