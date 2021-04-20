const date = {
  get now() {
    return new Date();
  },
  get nowDayOfWeek() {
    return this;
  },
  get nowDay() {
    return this.now.getDate();
  },
  get nowMonth() {
    return this.now.getMonth();
  },
  get nowYear() {
    return this.now.getFullYear();
  },
};

console.log(date.now);
console.log(date.nowDayOfWeek);
console.log(date.nowDay);
console.log(date.nowMonth);
console.log(date.nowYear);