let month = Math.floor(Math.random()*13)
month === 0 ? month++ : month
let day = Math.floor(Math.random()*32)
let dayOfTheWeek = Math.floor(Math.random()*6)
switch (dayOfTheWeek) {
case 1 :
    console.log(`${month}月 ${day}日 (日)`);
    break;
case 2 :
    console.log(`${month}月 ${day}日 (月)`);
    break;
case 3 :
    console.log(`${month}月 ${day}日 (火)`);
    break;
case 4 :
    console.log(`${month}月 ${day}日 (水)`);
    break;
case 5 :
    console.log(`${month}月 ${day}日 (木)`);
    break;
case 6 :
    console.log(`${month}月 ${day}日 (金)`);
    break;
    default :
    console.log(`${month}月 ${day}日 (土)`);
} 
let hour = Math.floor(Math.random()*12)
hour < 10 ? hour = '0' + hour : hour
let min = Math.floor(Math.random()*60)
min < 10 ? min = '0' + min : min
let ampm = Math.floor(Math.random()*10)
ampm % 2 === 0 ? console.log(`ごぜん${hour}:${min}`) : console.log(`ごご${hour}:${min}`)
