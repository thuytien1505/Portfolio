
//--------------------------
function tag_hightlight(){
  var tags_about = document.querySelectorAll(".line-time .tag_about");
  var tags_experience = document.querySelectorAll(".line-time .tag_experience");
  var tags_skills = document.querySelectorAll(".line-time .tag_skills");
  var tags_education = document.querySelectorAll(".line-time .tag_education");
  var tags_project = document.querySelectorAll(".line-time .tag_project");
  var menuTag = document.querySelector(".line-time .menu");
  var menuTagH4 = document.querySelector(".line-time .menu h4");
  let defaultBorder = menuTag.style.border;
  let defaultColor = menuTagH4.style.color;
  for (let i = 0; i < tags_about.length; i++) {
    tags_about[i].addEventListener(
      "mouseover",
      function() {
        menuTag.style.border = ".1px solid green";
        menuTagH4.style.color = "green";
      }
    );
    tags_about[i].addEventListener(
      "mouseout",
      function() {
        menuTag.style.border = defaultBorder;
        menuTagH4.style.color = defaultColor;
      }
    );
  }

  for (let i = 0; i < tags_experience.length; i++) {
    tags_experience[i].addEventListener(
      "mouseover",
      function() {
        menuTag.style.border = ".1px solid red";
        menuTagH4.style.color = "red";
      }
    );
    tags_experience[i].addEventListener(
      "mouseout",
      function() {
        menuTag.style.border = defaultBorder;
        menuTagH4.style.color = defaultColor;
      }
    );
  }

  for (let i = 0; i < tags_skills.length; i++) {
    tags_skills[i].addEventListener(
      "mouseover",
      function() {
        menuTag.style.border = ".1px solid blue";
        menuTagH4.style.color = "blue";
      }
    );
    tags_skills[i].addEventListener(
      "mouseout",
      function() {
        menuTag.style.border = defaultBorder;
        menuTagH4.style.color = defaultColor;
      }
    );
  }

  for (let i = 0; i < tags_education.length; i++) {
    tags_education[i].addEventListener(
      "mouseover",
      function() {
        menuTag.style.border = ".1px solid gray";
        menuTagH4.style.color = "gray";
      }
    );
    tags_education[i].addEventListener(
      "mouseout",
      function() {
        menuTag.style.border = defaultBorder;
        menuTagH4.style.color = defaultColor;
      }
    );
  }

  for (let i = 0; i < tags_project.length; i++) {
    tags_project[i].addEventListener(
      "mouseover",
      function() {
        menuTag.style.border = ".1px solid orange";
        menuTagH4.style.color = "orange";
      }
    );
    tags_project[i].addEventListener(
      "mouseout",
      function() {
        menuTag.style.border = defaultBorder;
        menuTagH4.style.color = defaultColor;
      }
    );
  }
}

tag_hightlight();

function introduce(){
  var intro = document.querySelectorAll(".parallax .introduce");
  var project = document.querySelectorAll(".parallax .para-project");
  for (let i = 0; i< intro.length; i++){
    intro[i].style.display = "inline";
  }
   for (let s = 0; s< project.length; s++){
    project[s].style.display = "none";
  }
}
function myFunctionAbout(){
  var intro = document.querySelectorAll(".parallax .introduce");
  var about = document.querySelectorAll(".parallax .para-about_me");
  var exp = document.querySelectorAll(".parallax .para-experience");
  var skill = document.querySelectorAll(".parallax .para-skills");
  var edu = document.querySelectorAll(".parallax .para-education");
  var project = document.querySelectorAll(".parallax .para-project");
  for (let i = 0; i< intro.length; i++){
    intro[i].style.display = "none";
  }
  for (let n = 0; n< exp.length; n++){
    exp[n].style.display = "none";
  }
  for (let m = 0; m< skill.length; m++){
    skill[m].style.display = "none";
  }
  for (let k = 0; k< edu.length; k++){
    edu[k].style.display = "none";
  }
  for (let s = 0; s< project.length; s++){
    project[s].style.display = "none";
  }
  for (let j = 0; j< about.length; j++){
    about[j].style.display = "inline";
  }
}
function myFunctionExp(){
  var intro = document.querySelectorAll(".parallax .introduce");
  var about = document.querySelectorAll(".parallax .para-about_me");
  var exp = document.querySelectorAll(".parallax .para-experience");
  var skill = document.querySelectorAll(".parallax .para-skills");
  var edu = document.querySelectorAll(".parallax .para-education");
  var project = document.querySelectorAll(".parallax .para-project");
  for (let i = 0; i< intro.length; i++){
    intro[i].style.display = "none";
  }
  for (let n = 0; n< exp.length; n++){
    exp[n].style.display = "inline";
  }
  for (let m = 0; m< skill.length; m++){
    skill[m].style.display = "none";
  }
  for (let k = 0; k< edu.length; k++){
    edu[k].style.display = "none";
  }
  for (let s = 0; s< project.length; s++){
    project[s].style.display = "none";
  }
  for (let j = 0; j< about.length; j++){
    about[j].style.display = "none";
  }
}
function myFunctionSkill(){
  var intro = document.querySelectorAll(".parallax .introduce");
  var about = document.querySelectorAll(".parallax .para-about_me");
  var exp = document.querySelectorAll(".parallax .para-experience");
  var skill = document.querySelectorAll(".parallax .para-skills");
  var edu = document.querySelectorAll(".parallax .para-education");
  var project = document.querySelectorAll(".parallax .para-project");
  for (let i = 0; i< intro.length; i++){
    intro[i].style.display = "none";
  }
  for (let n = 0; n< exp.length; n++){
    exp[n].style.display = "none";
  }
  for (let m = 0; m< skill.length; m++){
    skill[m].style.display = "inline";
  }
  for (let k = 0; k< edu.length; k++){
    edu[k].style.display = "none";
  }
  for (let s = 0; s< project.length; s++){
    project[s].style.display = "none";
  }
  for (let j = 0; j< about.length; j++){
    about[j].style.display = "none";
  }
}
function myFunctionEdu(){
  var intro = document.querySelectorAll(".parallax .introduce");
  var about = document.querySelectorAll(".parallax .para-about_me");
  var exp = document.querySelectorAll(".parallax .para-experience");
  var skill = document.querySelectorAll(".parallax .para-skills");
  var edu = document.querySelectorAll(".parallax .para-education");
  var project = document.querySelectorAll(".parallax .para-project");
  for (let i = 0; i< intro.length; i++){
    intro[i].style.display = "none";
  }
  for (let n = 0; n< exp.length; n++){
    exp[n].style.display = "none";
  }
  for (let m = 0; m< skill.length; m++){
    skill[m].style.display = "none";
  }
  for (let k = 0; k< edu.length; k++){
    edu[k].style.display = "inline";
  }
  for (let s = 0; s< project.length; s++){
    project[s].style.display = "none";
  }
  for (let j = 0; j< about.length; j++){
    about[j].style.display = "none";
  }
}
function myFunctionProject(){
  var intro = document.querySelectorAll(".parallax .introduce");
  var about = document.querySelectorAll(".parallax .para-about_me");
  var exp = document.querySelectorAll(".parallax .para-experience");
  var skill = document.querySelectorAll(".parallax .para-skills");
  var edu = document.querySelectorAll(".parallax .para-education");
  var project = document.querySelectorAll(".parallax .para-project");
  for (let i = 0; i< intro.length; i++){
    intro[i].style.display = "none";
  }
  for (let n = 0; n< exp.length; n++){
    exp[n].style.display = "none";
  }
  for (let m = 0; m< skill.length; m++){
    skill[m].style.display = "none";
  }
  for (let k = 0; k< edu.length; k++){
    edu[k].style.display = "none";
  }
  for (let s = 0; s< project.length; s++){
    project[s].style.display = "inline";
  }
  for (let j = 0; j< about.length; j++){
    about[j].style.display = "none";
  }
}
myFunctionAbout();
myFunctionExp();
myFunctionSkill();
myFunctionEdu();
myFunctionProject();
introduce()

//-change page
function myFunctionTouch(){
  var page1 = document.querySelectorAll(".main .include");
  var page2 = document.querySelectorAll(".main .ct-all");
  for (i = 0; i<page1.length; i++){
    page1[i].style.display = "none";
  }
  for (j = 0; j, page2.length; j++){
    page2[j].style.display = "inline";
  }
}
// myFunctionTouch();

function myFunctionBack(){
  var page1 = document.querySelectorAll(".main .include");
  var page2 = document.querySelectorAll(".main .ct-all");
  for (i = 0; i<page1.length; i++){
    page1[i].style.display = "inline";
  }
  for (j = 0; j< page2.length; j++){
    page2[j].style.display = "none";
  }
}

function myFunctionAll(){
  var all = document.querySelectorAll(".product .all-pro");
  var cover = document.querySelectorAll(".product .cover-pro");
  var singer = document.querySelectorAll(".product .singer-pro");
  var confirmAll = document.querySelectorAll(".bar .line-confirm-all");
  var confirmCover = document.querySelectorAll(".bar .line-confirm-cover");
  var confirmSinger = document.querySelectorAll(".bar .line-confirm-singer");
  for (let i =0; i<all.length;i++){
    all[i].style.display = "inline-grid";
  }
  for (let j =0; j<cover.length;j++){
    cover[j].style.display = "none";
  }
  for (let n =0; n<singer.length;n++){
    singer[n].style.display = "none";
  }
  for (let a=0;a<confirmAll.length;a++){
    confirmAll[a].style.display = "inline";
  }
  for (let b=0;b<confirmCover.length;b++){
    confirmCover[b].style.display = "none";
  }
  for (let c=0;c<confirmSinger.length;c++){
    confirmSinger[c].style.display = "none";
  }
}

function myFunctionCover(){
  var all = document.querySelectorAll(".product .all-pro");
  var cover = document.querySelectorAll(".product .cover-pro");
  var singer = document.querySelectorAll(".product .singer-pro");
  var confirmAll = document.querySelectorAll(".bar .line-confirm-all");
  var confirmCover = document.querySelectorAll(".bar .line-confirm-cover");
  var confirmSinger = document.querySelectorAll(".bar .line-confirm-singer");
  for (let i =0; i<all.length;i++){
    all[i].style.display = "none";
  }
  for (let j =0; j<cover.length;j++){
    cover[j].style.display = "inline-grid";
  }
  for (let n =0; n<singer.length;n++){
    singer[n].style.display = "none";
  }
  for (let a=0;a<confirmAll.length;a++){
    confirmAll[a].style.display = "none";
  }
  for (let b=0;b<confirmCover.length;b++){
    confirmCover[b].style.display = "inline";
  }
  for (let c=0;c<confirmSinger.length;c++){
    confirmSinger[c].style.display = "none";
  }
}

function myFunctionSinger(){
  var all = document.querySelectorAll(".product .all-pro");
  var cover = document.querySelectorAll(".product .cover-pro");
  var singer = document.querySelectorAll(".product .singer-pro");
  var confirmAll = document.querySelectorAll(".bar .line-confirm-all");
  var confirmCover = document.querySelectorAll(".bar .line-confirm-cover");
  var confirmSinger = document.querySelectorAll(".bar .line-confirm-singer");
  for (let i =0; i<all.length;i++){
    all[i].style.display = "none";
  }
  for (let j =0; j<cover.length;j++){
    cover[j].style.display = "none";
  }
  for (let n =0; n<singer.length;n++){
    singer[n].style.display = "inline-grid";
  }
  for (let a=0;a<confirmAll.length;a++){
    confirmAll[a].style.display = "none";
  }
  for (let b=0;b<confirmCover.length;b++){
    confirmCover[b].style.display = "none";
  }
  for (let c=0;c<confirmSinger.length;c++){
    confirmSinger[c].style.display = "inline";
  }
}


//--------------button category
document.addEventListener("DOMContentLoaded",function(){
  var btnCate = document.getElementById('category');
  var content = document.getElementsByClassName('media');
  var calendar = document.getElementById('calendar');
  //goi su kien click
  btnCate.onclick = function(){
    content[0].classList.toggle('show');
    calendar.style.display = "inline";
  }
  
},false);

//----------------calendar

const AVAILABLE_WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const localStorageName = 'calendar-events';

class CALENDAR {
    constructor(options) {
        this.options = options;
        this.elements = {
            days: this.getFirstElementInsideIdByClassName('calendar-days'),
            week: this.getFirstElementInsideIdByClassName('calendar-week'),
            month: this.getFirstElementInsideIdByClassName('calendar-month'),
            year: this.getFirstElementInsideIdByClassName('calendar-current-year'),
            eventList: this.getFirstElementInsideIdByClassName('current-day-events-list'),
            eventField: this.getFirstElementInsideIdByClassName('add-event-day-field'),
            eventAddBtn: this.getFirstElementInsideIdByClassName('add-event-day-field-btn'),
            currentDay: this.getFirstElementInsideIdByClassName('calendar-left-side-day'),
            currentWeekDay: this.getFirstElementInsideIdByClassName('calendar-left-side-day-of-week'),
            prevYear: this.getFirstElementInsideIdByClassName('calendar-change-year-slider-prev'),
            nextYear: this.getFirstElementInsideIdByClassName('calendar-change-year-slider-next')
        };

        this.eventList = JSON.parse(localStorage.getItem(localStorageName)) || {};

        this.date = +new Date();
        this.options.maxDays = 37;
        this.init();
    }

// App methods
    init() {
        if (!this.options.id) return false;
        this.eventsTrigger();
        this.drawAll();
    }

    // draw Methods
    drawAll() {
        this.drawWeekDays();
        this.drawMonths();
        this.drawDays();
        this.drawYearAndCurrentDay();
        this.drawEvents();
    }

    drawEvents() {
        let calendar = this.getCalendar();
        let eventList = this.eventList[calendar.active.formatted] || [`<li>There is not any events</li>`];
        let eventTemplate = "";
        eventList.forEach(item => {
            eventTemplate += `<li style='color:#66F328;'>${item}</li>`;
        });
        this.elements.eventList.innerHTML = eventTemplate;
    }

    drawYearAndCurrentDay() {
        let calendar = this.getCalendar();
        this.elements.year.innerHTML = calendar.active.year;
        this.elements.currentDay.innerHTML = calendar.active.day;
        this.elements.currentWeekDay.innerHTML = AVAILABLE_WEEK_DAYS[calendar.active.week];
    }

    drawDays() {
        let calendar = this.getCalendar();

        let latestDaysInPrevMonth = this.range(calendar.active.startWeek).map((day, idx) => {
            return {
                dayNumber: this.countOfDaysInMonth(calendar.pMonth) - idx,
                month: new Date(calendar.pMonth).getMonth(),
                year: new Date(calendar.pMonth).getFullYear(),
                currentMonth: false
            }
        }).reverse();


        let daysInActiveMonth = this.range(calendar.active.days).map((day, idx) => {
            let dayNumber = idx + 1;
            let today = new Date();
            return {
                dayNumber,
                today: today.getDate() === dayNumber && today.getFullYear() === calendar.active.year && today.getMonth() === calendar.active.month,
                month: calendar.active.month,
                year: calendar.active.year,
                selected: calendar.active.day === dayNumber,
                currentMonth: true
            }
        });


        let countOfDays = this.options.maxDays - (latestDaysInPrevMonth.length + daysInActiveMonth.length);
        let daysInNextMonth = this.range(countOfDays).map((day, idx) => {
            return {
                dayNumber: idx + 1,
                month: new Date(calendar.nMonth).getMonth(),
                year: new Date(calendar.nMonth).getFullYear(),
                currentMonth: false
            }
        });

        let days = [...latestDaysInPrevMonth, ...daysInActiveMonth, ...daysInNextMonth];

        days = days.map(day => {
            let newDayParams = day;
            let formatted = this.getFormattedDate(new Date(`${Number(day.month) + 1}/${day.dayNumber}/${day.year}`));
            newDayParams.hasEvent = this.eventList[formatted];
            return newDayParams;
        });

        let daysTemplate = "";
        days.forEach(day => {
            daysTemplate += `<li class="${day.currentMonth ? '' : 'another-month'}${day.today ? ' active-day ' : ''}${day.selected ? 'selected-day' : ''}${day.hasEvent ? ' event-day' : ''}" data-day="${day.dayNumber}" data-month="${day.month}" data-year="${day.year}"></li>`
        });

        this.elements.days.innerHTML = daysTemplate;
    }

    drawMonths() {
        let availableMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let monthTemplate = "";
        let calendar = this.getCalendar();
        availableMonths.forEach((month, idx) => {
            monthTemplate += `<li class="${idx === calendar.active.month ? 'active' : ''}" data-month="${idx}">${month}</li>`
        });

        this.elements.month.innerHTML = monthTemplate;
    }

    drawWeekDays() {
        let weekTemplate = "";
        AVAILABLE_WEEK_DAYS.forEach(week => {
            weekTemplate += `<li>${week.slice(0, 3)}</li>`
        });

        this.elements.week.innerHTML = weekTemplate;
    }

    // Service methods
    eventsTrigger() {
        this.elements.prevYear.addEventListener('click', e => {
            let calendar = this.getCalendar();
            this.updateTime(calendar.pYear);
            this.drawAll()
        });

        this.elements.nextYear.addEventListener('click', e => {
            let calendar = this.getCalendar();
            this.updateTime(calendar.nYear);
            this.drawAll()
        });

        this.elements.month.addEventListener('click', e => {
            let calendar = this.getCalendar();
            let month = e.srcElement.getAttribute('data-month');
            if (!month || calendar.active.month == month) return false;

            let newMonth = new Date(calendar.active.tm).setMonth(month);
            this.updateTime(newMonth);
            this.drawAll()
        });


        this.elements.days.addEventListener('click', e => {
            let element = e.srcElement;
            let day = element.getAttribute('data-day');
            let month = element.getAttribute('data-month');
            let year = element.getAttribute('data-year');
            if (!day) return false;
            let strDate = `${Number(month) + 1}/${day}/${year}`;
            this.updateTime(strDate);
            this.drawAll()
        });


        this.elements.eventAddBtn.addEventListener('click', e => {
            let fieldValue = this.elements.eventField.value;
            if (!fieldValue) return false;
            let dateFormatted = this.getFormattedDate(new Date(this.date));
            if (!this.eventList[dateFormatted]) this.eventList[dateFormatted] = [];
            this.eventList[dateFormatted].push(fieldValue);
            localStorage.setItem(localStorageName, JSON.stringify(this.eventList));
            this.elements.eventField.value = '';
            this.drawAll()
        });


    }


    updateTime(time) {
        this.date = +new Date(time);
    }

    getCalendar() {
        let time = new Date(this.date);

        return {
            active: {
                days: this.countOfDaysInMonth(time),
                startWeek: this.getStartedDayOfWeekByTime(time),
                day: time.getDate(),
                week: time.getDay(),
                month: time.getMonth(),
                year: time.getFullYear(),
                formatted: this.getFormattedDate(time),
                tm: +time
            },
            pMonth: new Date(time.getFullYear(), time.getMonth() - 1, 1),
            nMonth: new Date(time.getFullYear(), time.getMonth() + 1, 1),
            pYear: new Date(new Date(time).getFullYear() - 1, 0, 1),
            nYear: new Date(new Date(time).getFullYear() + 1, 0, 1)
        }
    }

    countOfDaysInMonth(time) {
        let date = this.getMonthAndYear(time);
        return new Date(date.year, date.month + 1, 0).getDate();
    }

    getStartedDayOfWeekByTime(time) {
        let date = this.getMonthAndYear(time);
        return new Date(date.year, date.month, 1).getDay();
    }

    getMonthAndYear(time) {
        let date = new Date(time);
        return {
            year: date.getFullYear(),
            month: date.getMonth()
        }
    }

    getFormattedDate(date) {
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    }

    range(number) {
        return new Array(number).fill().map((e, i) => i);
    }

    getFirstElementInsideIdByClassName(className) {
        return document.getElementById(this.options.id).getElementsByClassName(className)[0];
    }
    // removeEvent(){
    //   var btnRemove = document.getElementsByClassName('remove-event-day');
    //   for(let i=0;i<btnRemove.length;i++){
    //     btnRemove[0].localStorage.removeItem('calendar-events');
    //   }
    // }
}

(function () {
    new CALENDAR({
        id: "calendar"
    })
})();