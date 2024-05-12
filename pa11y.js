const pa11y = require('pa11y');
const fs = require('fs-extra');
const htmlReporter = require('pa11y/lib/reporters/html');
const jsonReporter = require('pa11y/lib/reporters/json');

console.log(process.env);

// let urls = process.env.urls;
// console.log(urls);
// console.log(urls[0]);

let inputUrls = process.env.inputUrls;
let defaultUrls = process.env.defaultUrls;
let urls = [];

if (process.env.inputUrls) {
  urls = inputUrls.split(",");

}
else {
  urls = defaultUrls.split(",");
}
console.log(urls);
console.log(urls[0]);



let default_options = {
  runners: [
    'axe',
    'htmlcs'
  ],
  wait: 500
};

pa11y(urls[0], default_options).then((results) => {
  console.log(results);

  fs.writeJson('./jsonReport.json', results, err => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
    }
  });


  const html = htmlReporter.results(results);
  // const json = jsonReporter.results(results);

  // console.log([html, json]);
  Promise.all([html]).then((values) => {
    // console.log(values[1]);

    fs.writeFile('./htmlReport.html', values[0], err => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
      }
    });
  });
});
