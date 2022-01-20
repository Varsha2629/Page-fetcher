const request = require("request");
const fs = require("fs");
const readline = require("readline");

// Create interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

request(process.argv[2], (error, response, body) => {
  if (!error) {
    fs.writeFile(process.argv[3], body, err => {
      if (err) {
        rl.output.write("file not found!");
        return;
      }
      rl.output.write(`Downloaded and saved ${body.length} bytes to ${process.argv[3]}`);
      process.exit();
    });
  }
});