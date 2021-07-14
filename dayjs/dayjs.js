import dayjs from "dayjs";

const date = dayjs(new Date("2121-11-11")).format("YYYY-M");
console.log(date);

const date1 = dayjs(new Date()).add(24, "hour").format("YYYY-MM-DD") + " 23:59";
console.log(date1);
console.log(new Date(dayjs(new Date()).add(24, "hour").format("YYYY-MM-DD") + " 23:59"));

const date2 = dayjs(new Date()).add(7, "day").format("YYYY-MM-DD") + " 23:59";
console.log(date2);