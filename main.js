const display = document.getElementById("clock");
const timeFormat12 = document.getElementById("time-format-12");
const timeFormat24 = document.getElementById("time-format-24");
display.textContent = "00:00:00 XX";

const refresh = setInterval(() => {
  clock = new Date();
  if (timeFormat12.checked) {
    const hoursArray = hourFormat12(clock.getHours());
    const hours = hoursArray[0];
    const AMPM = hoursArray[1];
    const minutes = zeropad(clock.getMinutes());
    const seconds = zeropad(clock.getSeconds());
    display.textContent = `${hours}:${minutes}:${seconds} ${AMPM}`;
  } else {
    const hours = zeropad(clock.getHours());
    const minutes = zeropad(clock.getMinutes());
    const seconds = zeropad(clock.getSeconds());
    display.textContent = `${hours}:${minutes}:${seconds}`;
  }
}, 200);

const zeropad = (number) => {
  if (number < 10) return `0${number}`;
  return number;
};

const hourFormat12 = (hour) => {
  if (hour > 12) return [`${hour - 12}`, "PM"];
  return [zeropad(hour), "AM"];
};
const hourFormat24 = (hour) => {
  zeropad(hour);
};
