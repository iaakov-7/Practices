// 1
function createLogger() {
  return () => console.log("hallo");
}
const say_hello = createLogger();
say_hello();
say_hello();
say_hello();

// 2
function createGreeting(name) {
  function inner() {
    return console.log("hello", name);
  }
  return inner;
}
const greet = createGreeting("yaakov");
greet();

// 3
function createCounter() {
  let count = 0;
  return () => count++;
}

const increment = createCounter();
console.log(increment());
console.log(increment());
console.log(increment());

// 4
// יודפס 10 כי הוא זוכר אותו

// 5
function createMultiplier(x) {
  return (num) => num * x;
}
const double = createMultiplier(2);
console.log(double(7));

// 6
function createAdder(num) {
  return (num2) => num + num2;
}
const add5 = createAdder(5);
console.log(add5(3));
console.log(add5(8));

// 7
function createSecret() {
  let secret = 145;
  return {
    getSecret: function () {
      return secret;
    },
    setSecret: function (newVal) {
      secret = newVal;
    },
  };
}
const manageSecret = createSecret();
console.log(manageSecret.getSecret());
manageSecret.setSecret(120);
console.log(manageSecret.getSecret());

// 8

function once(fn) {
  let count = 1;
  const inner = () => {
    if (count === 1) {
      fn();
    }
    count++;
  };
  return inner;
}
const one = once(say_hello);
one();
one();
one();
