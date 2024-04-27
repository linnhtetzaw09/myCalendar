//get ui

const getcurrmonth = document.getElementById("curmonth");
const getcuryear = document.getElementById("curyear");
const getdays = document.getElementById("caldays");
const getuimonths = document.getElementById("months");
const getuiyears = document.getElementById("years");
const getyearbtn = document.querySelector(".year-btn");
const getmonthbtn = document.querySelector(".month-btn");

const months = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
let startyear = 2020;
let endyear = 2030;

let month,year;

window.addEventListener('load',function(){

    let getday = new Date();
        month = getday.getMonth();
        year = getday.getFullYear();

    getcurrmonth.textContent = months[month];
    getcuryear.textContent = year;

    initmonths();
    inityears();
    initdays();
});


function initmonths(){

    getuimonths.innerHTML = "";

    for(let x = 0;x < months.length; x++){

        const newdiv = document.createElement("div");
        newdiv.textContent = months[x];
        newdiv.classList.add("dropdown-item");

        newdiv.addEventListener("click",function(){

            month = x;
            getcurrmonth.textContent = months[x];
            initdays();

        });

        // console.log(newdiv);
        getuimonths.appendChild(newdiv);
    }
}


function inityears(){
    // console.log("i am year");

    getuiyears.innerHTML = "";

    for(let x = startyear; x <= endyear; x++){
        // console.log(x); 

        const newdiv = document.createElement("div");
        newdiv.textContent = x;
        newdiv.classList.add("dropdown-item");

        newdiv.onclick = (function (selectedYear) {
            return function () {
                year = selectedYear;
                getcuryear.textContent = year;
                initdays();
            };
        })(x);

        getuiyears.appendChild(newdiv);
    }
}


function initdays(){

    getdays.innerHTML = "";
     
    let tmpdays = new Date(year, month, 0);
    let getalldays = alldays(year, month);
    let getendday = tmpdays.getDay();
    let getprevendday = tmpdays.getDay();

    for(let x=0; x <= getprevendday; x++){

        let newlabel = document.createElement("label");
        newlabel.className = "day blank";

        getdays.appendChild(newlabel);
    }

    for(let y=0; y < getalldays; y++){

        let addday = y + 1;

        let newlabel = document.createElement("label");
        newlabel.textContent = addday;
        newlabel.classList.add("day");

        getdays.appendChild(newlabel);
    }

}


function alldays(year,month){

    let curalldays = new Date(year,month+1,0);  
    curalldays = curalldays.getDate();
    return curalldays;
}


getyearbtn.addEventListener('click',function(){

    if(this.lastElementChild.classList.contains('show')){
        this.lastElementChild.classList.remove('show');
    }else{
        this.lastElementChild.classList.add('show');
    }

});






