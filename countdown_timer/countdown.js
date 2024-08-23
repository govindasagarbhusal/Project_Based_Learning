const endDate = "23 August 2024 12:00PM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
    const [day, month, year, time, period] = endDate.split(/[\s:]+/);
    const hours = period === "PM" && time !== "12" ? parseInt(time) + 12 : time;
    const end = new Date(`${month} ${day}, ${year} ${hours}:00:00`);
    const now = new Date();
    const diff = (end - now) / 1000;

    if (diff < 0) return;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) %24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
    
}

clock();

setInterval(
    () => {
        clock()
    },
    1000
)