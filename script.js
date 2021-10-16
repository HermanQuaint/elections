const deadline = '2024-03-17';

console.log(new Date());

const getTimeRemaining = endtime => {
  const t = Date.parse(endtime) - Date.parse(new Date());
  const years =   Math.floor((t / (1000 * 60 * 60 * 24 * 30 * 12)));
  const months =  Math.floor((t / (1000 * 60 * 60 * 24 * (365.25/12))) % 12);
  const days =    Math.floor((t / (1000 * 60 * 60 * 24)) % (365.25/12));
  const hours =   Math.floor((t / (1000 * 60 * 60)) % 24) - 3;
  const minutes = Math.floor((t / (1000 * 60)) % 60);
  const seconds = Math.floor((t / 1000) % 60);

  return {
    'total': t,
    'years': years,
    'months': months,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
};

const getZero = num => {
  if (num >= 0 && num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
};

const setClock = (selector, endtime) => {

  const timer = document.querySelector(selector);
  const years = timer.querySelector('.years');
  const months = timer.querySelector('.months');
  const days = timer.querySelector('.days');
  const hours = timer.querySelector('.hours');
  const minutes = timer.querySelector('.minutes');
  const seconds = timer.querySelector('.seconds');
  const timeInterval = setInterval(updateClock, 1000);

  updateClock();

  function updateClock() {
    const t = getTimeRemaining(endtime);

    years.textContent = getZero(t.years);
    months.textContent = getZero(t.months);
    days.textContent = getZero(t.days);
    hours.textContent = getZero(t.hours);
    minutes.textContent = getZero(t.minutes);
    seconds.textContent = getZero(t.seconds);

    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }
};

setClock('.timer', deadline);
