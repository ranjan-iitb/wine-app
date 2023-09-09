This is a web app which gives mean median mode from the wine-Data.json.
As per the assignement you can see 2 tables one for "Flavanoids" and one for "Gamma"
I have calculated gamma and updated the data json.
As the size of data json is big, I use useState and useEffect hooks to update the data and insert into new updated data json.
Using new updated data to show Gamma table as it is a new calculated attribute using given formula
Gamma = (Ash \* Hue) / Magnesium.

Flow of webApp
Index.js > App.js > Homepage.js > StatisticsTable.js -> 1. Table for Flavanoids and Gamma as given by props.

The statisticsTable can be used to make mean median mode table of any given attributes.
Given simple css to make it comfy to eye.

Steps to run this:

1. Install yarn as per your OS
2. open terminal on the project folder
3. cd wine-app
4. yarn install
5. yarn start ( to run this web app) - by default it opens on port 3000
