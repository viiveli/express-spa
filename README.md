# Express/vanilla js SPA "framework"
Not really a framework but a way to create a quick "SPA" with express and vanilla js for prototyping etc

Very much a rip-off of the [dcode](https://github.com/dcode-youtube/single-page-app-vanilla-js) example combined with express-generator generated express app

including [W3.css](https://www.w3schools.com/w3css/default.asp) for styling

## Structure
- [app.js](app.js) - express app
- [bin/www](bin/www) - express server
- [spa/index.html](spa/index.html) - main html page with "app" div
- [spa/login.html](spa/login.html) - login page
- [spa/static](spa/static/) - static content like css, js, images etc
- [spa/static/js/views/](spa/static/js/views/) - js files for different "views"


## Usage
1. clone repo
2. `npm install`
3. `npm start` OR `npm run dev` for nodemon
4. open browser at `localhost:3000`
