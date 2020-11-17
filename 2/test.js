// Original
// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// ES6
// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

var print = function (i) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
};
for (var i = 0; i < 5; i++) {
  print(i);
}
