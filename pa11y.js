const pa11y = require('pa11y');
const fs = require('fs-extra');
const htmlReporter = require('pa11y/lib/reporters/html');
const jsonReporter = require('pa11y/lib/reporters/json');

let inputUrls = process.env.inputUrls;
let defaultUrls = process.env.defaultUrls;
let urls = [];

if (process.env.inputUrls) {
  urls = inputUrls.split(",");

}
else {
  urls = defaultUrls.split(",");
}

let default_options = {
  runners: [
    'axe',
    'htmlcs'
  ],
  wait: 500
};

pa11y(urls[0], default_options).then((results) => {
  console.log(results);

  fs.writeJson('./pa11y/results/jsonReport.json', results, err => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
      console.log("jsonReport.json success");
    }
  });

  const html = htmlReporter.results(results);

  Promise.all([html]).then((values) => {

    fs.writeFile('./pa11y/results/htmlReport.html', values[0], err => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
        console.log("htmlReport.html success");
      }
    });
  });
});
