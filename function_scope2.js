// 1
const triple = (num) => num * 3;

// 2
const lengthString = (string) => string.length;

// 3
const isPositive = (num) =>
  num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";

// 4
const bigger = (a, b) => Math.max(a, b);

// 5
const lengthArray = (array) => array.length;

// 6
// יודפס 7 כי סקופ עובד שאפשקר להשפיע מבפנים החוצה

// 7
// יופיע שגיאה כי מחוץ לבפנים הוא לא יכול לגשת

// 8
// זה קוד תקין ככה אין השפעה חיצונית כי אני מגדיר את המשתנה בתוך הסקופ שלו
// אבל אם הכוונה של המשורר הייתה לשנות את המשתנה שבחוץ אז צריך להוריד את הקידומת של ההשמה ולהפעיל את הפונקצייה

// 9
// 4 יודפס

// 10

function print(message) {
  console.log(message);
}

// 11
const lowest = (nums) => {
  let low = nums[0];
  for (const num of nums) {
    if (num < low) {
      low = num;
    }
  }
  return low;
};

// 12
const isDivided = (a, b) => a % b == 0;

// 13
const stringJoin = (array) => {
  let joined = "";
  for (const s of array) {
    joined += s;
  }
  return joined;
};

// 14
// יודפס 5 ו 15

// 15
const range = (n) => {
  for (let i = 1; i < n + 1; i++) {
    console.log(i);
  }
};
range(10);
