let topic = [
    "課程介紹",
    "不上課",
    "不上課",
    "亂數選擇、自動排課",
    "不上課",
    "心理測驗"
];

let startDate = new Date();

function setDate(month, day) {
    startDate.setMonth(month-1, day);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
};

setDate(2, 23);