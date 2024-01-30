let firstname = prompt("Adınızı giriniz: ");

document.getElementById("myName").innerHTML = firstname;


function showTime() {

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    let day = now.getDay();

    let clock = hours + ":" + minutes + ":" + seconds

    switch (day) {

        case 1:
            day = "Pazartesi"
            break;

        case 2:
            day = "Salı"
            break;

        case 3:
            day = "Çarşamba"
            break;

        case 4:
            day = "Perşembe"
            break;

        case 5:
            day = "Cuma"
            break;

        case 6:
            day = "Cumartesi"
            break;

        case 0:
            day = "Pazar"
            break;
        
    }

    let full_date = clock + " " + day;

    document.getElementById("myClock").innerHTML = full_date;
}

setInterval(showTime, 1000);