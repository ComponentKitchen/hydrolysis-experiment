// Server.js
var hydrolysis = require('hydrolysis');

function main() {
  hydrolysis.Analyzer.analyze('./bower_components/iron-autogrow-textarea/iron-autogrow-textarea.html')
  .then(function(analyzer) {
    console.dir(analyzer);
    process.exit(1);
  })
  .catch(function(error) {
    console.log('error: ' + error);
    process.exit(0);
  });
}

main();
