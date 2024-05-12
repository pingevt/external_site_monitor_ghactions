const pa11y = require('pa11y');
const fs = require('fs-extra');
const htmlReporter = require('pa11y/lib/reporters/html');
const jsonReporter = require('pa11y/lib/reporters/json');

let url = "https://peteinge.com";

console.log(process.env);

// let default_options = {
//   runners: [
//     'axe',
//     'htmlcs'
//   ],
//   wait: 500
// };


// pa11y(url, default_options).then((results) => {
//   console.log(results);

//   fs.writeJson('./jsonReport.json', results, err => {
//     if (err) {
//       console.error(err);
//     } else {
//       // file written successfully
//     }
//   });


//   const html = htmlReporter.results(results);
//   // const json = jsonReporter.results(results);

//   // console.log([html, json]);
//   Promise.all([html]).then((values) => {
//     console.log(values[1]);

//     fs.writeFile('./htmlReport.html', values[0], err => {
//       if (err) {
//         console.error(err);
//       } else {
//         // file written successfully
//       }
//     });
//   });
// });
