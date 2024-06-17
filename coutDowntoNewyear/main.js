const nextYearElement = document.querySelector("#year");
const daysEl = document.querySelector('#days')
const hoursEl = document.querySelector('#hours')
const minutesEl = document.querySelector('#mins')
const secondsEl = document.querySelector('#secs')


var date = new Date(); 
upDate()
function isLeapyear(year)
{
    return (year%4 === 0) ? true : false;
}    
function daysofMon(mon, year)
    {
        switch(mon)
        {
            case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                {
                    return 31;
                    break;
                }
            case 4: case 6: case 9: case 11:
                {
                    return 30;
                    break;
                }
            case 2:
                return (isLeapyear(year)) ? 29 : 28;
        }
    }

function upDate()
{
    date = new Date()
    getDays = (day, mon, year) =>
    {
        let outPut = 0;
        for(var i = 1; i < mon; i ++) outPut += daysofMon(i, year);
        return outPut+day
    }

    var nextYear = date.getFullYear() + 1
    nextYearElement.textContent = nextYear.toString()

    let d = getDays(date.getDate(), date.getMonth() +1, date.getFullYear())

    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()


    let coutdownSec = 59 - ss;
    let coutdownMin = 59-mm;
    let coutdownHour = 23-hh;

    let daysofYear = (isLeapyear(date.getFullYear())) ? 366 : 365;
    let coutdownDay = daysofYear - d

    setTimeout(upDate, 1000);

    daysEl.textContent = coutdownDay.toString()
    minutesEl.textContent = coutdownMin.toString()
    hoursEl.textContent = coutdownHour.toString()
    secondsEl.textContent = coutdownSec.toString()

}
const dateEl = document.querySelector('#date-String')
const dateTableEl = document.querySelector('#date-table')
const weekEls = document.querySelectorAll(".week-bar")

var weekDay = date.getDay()
const weekDays =
[
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
]

var month = date.getMonth()
const Months = 
[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
var dayofWeek = weekDays[weekDay]
var monthofYear = Months[month]

var dateString = `- ${dayofWeek} ${date.getDate()} ${monthofYear} ${date.getFullYear()} -`
dateEl.textContent = dateString
var firstDay = new Date(date.getFullYear(),date.getMonth(),1);
var firstDayofWeek = firstDay.getDay()

var daysNumeber = 1;
weekEls.forEach((week, index)=>
{
    checktoDay = (toDay, element)=>
    { 
        if(toDay == date.getDate() - 1)
        {
            element.classList.add('active');
        }
    }
    let daysofweekEl =  week.querySelectorAll('.date')
    if(index === 0)
    {
        daysofweekEl[firstDayofWeek].textContent = daysNumeber.toString()
        daysofweekEl.forEach((dayofweekEl, i)=>{
            checktoDay(daysNumeber, dayofWeek)
            if(i>firstDayofWeek)
            {
                daysNumeber++;
                dayofweekEl.textContent = daysNumeber.toString()
            } 
        })
    }
    if(index>0 )
    {
        daysofweekEl.forEach((dayofWeek, i) =>
        {
            checktoDay(daysNumeber, dayofWeek)

        
        if(daysNumeber < daysofMon(date.getMonth() + 1, date.getFullYear()))    {    daysNumeber++;
            dayofWeek.textContent = daysNumeber.toString()}
        })
    }
})
