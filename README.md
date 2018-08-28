# SSR-react
SSR-react for Carousel POC 

npm start for kickon the project

npm test for kickon the test

As soon as run the application hit this url "http://localhost:8080" it will redirect to carousel page

1) There are no any plugin used of making this carousel - completely hand written code
2) Carousel is styled as per given design in test
3) Carousel is responsive as per media device 
4) used media query and scss
5) used webpack for ES6 transpiling
6) Used Jest for component testing
7) Code is moved into in git

Approach-
------------

As soon as app start it hits a service from backend and get the complete response from https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo

Once we recive the response ,our react SSR component came into the picture and create the carousel.

there two button Next and Previous, which is manaing the movement as per where user want to navigate, nad the basic logic is written as per node movement of DOM.

How to check DOM Movement - 

1) open the carousel DOM in dev tool, each slide has own unique ID. click on next and previous and see the how DOM is moving as a carousel.

Test
--------
I have written basic test fodthis App:

1) Test for check App is loading without crash
2) Carousel is genrating slides as per response object coming from endpoint 