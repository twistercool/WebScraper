const puppeteer = require('puppeteer');

const username = 'pierrebrassart80@hotmail.fr'; //do not upload to github!!!
const password = 'luckyone'; //do not upload to github!!!
const message = 'hello';


const login_url = 'https://twitter.com/login';
const composeTweet_url = 'https://twitter.com/compose/tweet';
const home_url = 'https://twitter.com/home';

let browser;
let page;

(async() => {
  browser = await puppeteer.launch({
    headless: false,
  });
  

  const pages = await browser.pages();

  page = pages[0];

  await login();

  await page.waitFor('*');

  await page.goto(composeTweet_url);

  await page.keyboard.type(message, {delay:34});

  await page.waitFor(500);

  await page
    .click('div[class="css-18t94o4 css-1dbjc4n r-urgr8i r-42olwf r-sdzlij r-1phboty r-rs99b7 r-1w2pmg r-1n0xq6e r-1vuscfd r-1dhvaqw r-1ny4l3l r-1fneopy r-o7ynqc r-6416eg r-lrvibr"]');


  
})();


async function login(){
  await page.goto(login_url);

  await page
    .waitFor('input[name="session[username_or_email]"]');

  await page.type('form[class="r-13qz1uu"] input[name="session[username_or_email]"]', 
    username, {delay:26});
    

  await page.waitFor(483);

  await page
    .waitFor('input[name="session[password]"]');

  await page.type('form[class="r-13qz1uu"] input[name="session[password]"]', 
    password, {delay:32});

  await page.waitFor(631);

  await page
    .click('div[class="css-18t94o4 css-1dbjc4n r-urgr8i r-42olwf r-sdzlij r-1phboty r-rs99b7 r-1w2pmg r-vlx1xi r-zg41ew r-1jayybb r-17bavie r-1ny4l3l r-15bsvpr r-o7ynqc r-6416eg r-lrvibr"]');

}

async function sendTweet(inputMessage){
  await page.goto(composeTweet_url);

  
  await page.keyboard.type(message, {delay:34});

  await page.waitFor(500);

  await page
    .click('div[class="css-18t94o4 css-1dbjc4n r-urgr8i r-42olwf r-sdzlij r-1phboty r-rs99b7 r-1w2pmg r-1n0xq6e r-1vuscfd r-1dhvaqw r-1ny4l3l r-1fneopy r-o7ynqc r-6416eg r-lrvibr"]');

}

