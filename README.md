# "SEHNSUCHT"
Sehnsucht project developed as a solo project during 2018.

## Table of contents
* [Idea](#idea)
* [Motivation](#motivation)
* [Tech Stack](#tech-stack)
* [Screenshots](#screenshots)
* [Getting started](#getting-started)
* [Additional Features](#additional-features)
* [Author](#author)
* [License](#license)

## Idea
An online platform to track your investments wheter they are in the stock market or in cryptocurrencies.

## Motivation
As a former financial analyst, I was really curious to mix two of my passions and see them working together. At the same time, I really wanted to get familiar with Angular, Material and work with data from an API in order to develop skills that might fit with my previous profile.
That’s how I came up with the idea of Sehnsucht.  After doing some research and some testing of different APIs I found the IEX Developer Platform which even allowed to use data from the stock market and the main cryptocurrencies.
For the back-end I wanted to use Express since it was a really solid technology and for the database I went with MySQL because I had some previous experience with it.
Currently it only supports values from the DOW30 (E.g. Tesla, Microsoft, Disney or Nike) and 10 cryptocurrencies (Bitcoin, Ethereum, Ripple, IOTA, Cardano, Bitcoin Cash, EOS, Stellar Lumens, Litecoin and NEO).
Since it was an educational project supposed to be finish within a week, I wanted to  limit the scope in order to be able to finish everything on time.

## Tech Stack
* [Angular]( https://angular.io/) - The frontend framework used.
* [AngularMaterial]( https://material.angular.io/) - Material Design components for Angular.
* [Express](https://expressjs.com/) The backend framework used.
* [MySQL](https://www.mysql.com/) - The relational database used.
* [MariaDB](https://mariadb.org/) - The server used locally for the project.
* [IEX Trading API](https://iextrading.com/) – The main data source used. At the moment it does NOT require an API Key.
* [VisualChartsJS](https://www.visualchart.com/inicio/) - The charts library.

## Screenshots
![landing page](https://github.com/alvaroha1/sehnsucht/blob/master/assets/screenshot1.JPG)
![adding stocks to our portfolio](https://github.com/alvaroha1/sehnsucht/blob/master/assets/screenshot2.JPG)
![reviewing our current investments](https://github.com/alvaroha1/sehnsucht/blob/master/assets/screenshot3.JPG)

## Getting Started
### Prerequisites
* Node
* Npm
* MySQL 

### To start
Clone or download this repository in your computer.

### Front-End
```
$ npm install
$ npm start
```
### Back-End
Run a MySQL server for the database (I recommend using MariaDB).
```
$ npm install
$ npm start
```

## Additional Features
* Tests
* User Management system
* More relevant metrics
* Visual Charts 

## Author
* Alvaro Hernandez Assens [GitHub](https://github.com/alvaroha1) - [Linkedin](https://www.linkedin.com/in/alvaroha/)

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/marcoantonioghiani01/xest-client/blob/master/LICENSE) file for details
