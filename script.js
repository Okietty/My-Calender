//Tiggle button for sidebar navigation
function openNav() {
    document.getElementById('sidebar').classList.toggle('active');
}
function closeNav() {
    document.getElementById('sidebar').classList.toggle('active');
}

const allMonthInCal = document.querySelectorAll(".monthContainer");
let calenderWrap = document.querySelector(".calenderWrapper");
let monthNav = document.querySelector("#sidebar");
let year2023T = document.querySelector(".yearTitle2023");
let year2024T = document.querySelector(".yearTitle2024");
let obtainedMonthID;
let obtainedMonth;
let monthIsObtained = false;

//Returns user to the front page by erasing everything and pulling down the front page
function frontPageToggle() {
    for(month of allMonthInCal) {
        if (month.classList.contains('appear')) {
            month.classList.remove('appear');
        }
    }
    year2023T.classList.remove("appear");
    year2024T.classList.remove("appear")
    document.querySelector(".frontPage").classList.remove('frontPageToggle');
    if(monthIsObtained) {
        calenderWrap.classList.remove("addFullHeight");
        monthIsObtained = false;
    }
    return;
}

function showMonth(){
    monthNav.addEventListener('click', function(event){
        //If the selected navigation is one of the months reveal the calender wrapper and remove front page.
        if(event.target.classList.contains("yearNav")) {
            calenderWrap.classList.add("addFullHeight");
            return;
        } else if (event.target.classList.contains("monthNav")){
            calenderWrap.classList.add("addFullHeight");
            document.querySelector(".frontPage").classList.add('frontPageToggle');
            for(month of allMonthInCal) {
                month.classList.remove("appear");
            }
            year2023T.classList.remove("appear");
            year2024T.classList.remove("appear");
        }
        //Gets the id of the clicked on selected months and reveal that month while making everything else disappear
        obtainedMonthID = event.target.getAttribute('id');
        if(obtainedMonthID.indexOf('23') != -1) {
            year2023T.classList.add('appear');
            year2024T.classList.remove('appear');
        } else if (obtainedMonthID.indexOf('24') != -1) {
            year2024T.classList.add('appear');
            year2023T.classList.remove('appear');
        }
        obtainedMonth = document.querySelector(obtainedMonthID);
        obtainedMonth.classList.add("appear");
        monthIsObtained = true;

        // if(previousMonth != undefined && previousMonth != obtainedMonth) {
        //     previousMonth.classList.remove("appear");
        // }
        // previousMonth = obtainedMonth;
    })
}

//Display every month of the 2023 year by removing the front page and the 
//2023 title. Then making the 2024 title and every month with "23" in it's 
//class name appear, else if if doesn't have that number, it disappears.
function display2023() {
    monthIsObtained = true;
    document.querySelector(".frontPage").classList.add('frontPageToggle');
    year2023T.classList.add("appear");
    year2024T.classList.remove("appear");
    for(month of allMonthInCal) {
        if(month.id.indexOf('23') != -1) {
            month.classList.add('appear');
        } else {
            month.classList.remove('appear');
        }
    }
}

//Display every month of the 2024 year by removing the front page and the 
//2024 title. Then making the 2024 title and every month with "24" in it's 
//class name appear, else if if doesn't have that number, it disappears.
function display2024() {
    monthIsObtained = true;
    document.querySelector(".frontPage").classList.add('frontPageToggle');
    year2024T.classList.add("appear");
    year2023T.classList.remove("appear");
    for(month of allMonthInCal) {
        if(month.id.indexOf('24') != -1) {
            month.classList.add('appear');
        } else {
            month.classList.remove('appear');
        }
    }
}

showMonth()
