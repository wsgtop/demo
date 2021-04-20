
// 获取当前时间市本年第几周
function getWeek1(date){
  // const date = new Date();
  console.log('时间：',date)
  const time = date.getTime();
  date.setDate(date.getDate() + 4 - (date.getDay() || 7));
  date.setMonth(0);
  date.setDate(1);
  return Math.floor(Math.round((time - date) / 86400000) / 7) + 1;
}



function getWeek (date) {
  let temptTime = date
  //周几
  let weekday = temptTime.getDay() || 7
  //周1+5天=周六
  temptTime.setDate(temptTime.getDate() - weekday + 1 + 5)
  let firstDay = new Date(temptTime.getFullYear(), 0, 1)
  let dayOfWeek = firstDay.getDay()
  let spendDay = 1
  if (dayOfWeek != 0) {
    spendDay = 7 - dayOfWeek + 1
  }
  firstDay = new Date(temptTime.getFullYear(), 0, 1 + spendDay)
  let d = Math.ceil((temptTime.valueOf() - firstDay.valueOf()) / 86400000)
  let result = Math.ceil(d / 7)
  return result + 1
}
console.log('第几周:',getWeek(new Date()));
console.log('第几周:',getWeek(new Date('2021-03-25')));
console.log('第几周:',getWeek(new Date('2021-03-24')));
console.log('第几周:',getWeek(new Date('2021-03-23')));
console.log('第几周:',getWeek(new Date('2021-01-01')));
console.log('第几周:',getWeek(new Date('2021-03-22')));
console.log('第几周:',getWeek(new Date('2021-01-04')));
console.log('第几周:',getWeek(new Date('2021-03-21')));
console.log('第几周:',getWeek(new Date('2021-01-04')));
console.log('第几周:',getWeek(new Date('2021-03-20')));
console.log('第几周:',getWeek(new Date('2021-01-03')));