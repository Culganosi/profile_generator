const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question(`What's your name? Nicknames are also acceptable :) ` , (answer) => {
    console.log(`Nice to meet you, ${answer}!`);
    rl.question(`What's an activity you like doing? `, (answer) => {
      console.log(`Oh ${answer} sounds great!`);
      rl.question(`Which sport is your absolute favourite? `, (answer) => {
        console.log(`${answer}? Nice!`);
        rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (answer) => {
          console.log(`${answer} eh? I don't like to brag but I can totally fly.`);
          rl.close();
        });
      });
    });
  });
});
