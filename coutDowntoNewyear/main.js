// const window = document.querySelector('#popUp')

const nextYearElement = document.querySelector("#year");
const daysEl = document.querySelector('#days')
const hoursEl = document.querySelector('#hours')
const minutesEl = document.querySelector('#mins')
const secondsEl = document.querySelector('#secs')



upDate()


function upDate()
{
    isLeapyear = (year) =>  (year % 4 == 0)? true : false;  
    daysofMon = (mon, year) =>
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
    getDays = (day, mon, year) =>
    {
        let outPut = 0;
        for(var i = 1; i < mon; i ++) outPut += daysofMon(i, year);
        return outPut+day
    }

    var date = new Date(); 
    // date: Sat Jun 17 2023 12:19:01 GMT+0700 (Indochina Time)



    var nextYear = date.getFullYear() + 1
    nextYearElement.textContent = nextYear.toString()

    

    var newYear = new Date(`${nextYear.toString()}-1-1`)
    // newYear: Mon Jan 01 2024 00:00:00 GMT+0700 (Indochina Time)
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
