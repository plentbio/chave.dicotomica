# dichotomousKey 1.1.2
An HTML, JavaScript, and CSS app to show a dichotomous key.

The data from the dichotomous key is in a .js file because I had trouble parsing a JSON file.

To run the app, simply go to [`index.html`](https://gacrestani.github.io/).

The app is responsive and prints a single line from the key to the user. The user then chooses which option to take. The app writes the path to a list that may be retrieved by the user later. By reaching a result, the user sees a link to the respective Wikipedia page and the main Wikipedia image for the group.

Currently, the key is just sample steps. I will add a proper key soon, but most are proprietary.

You can fork this and add your key, following the logic on the [`data.js`](data.js) and [`results.js`](results.js) files.
