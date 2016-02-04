Super-Powered API Testing
============================
#### How and why to test your API

This code repository accompanies a presentation I gave in Austin, Texas on February 4th, 2016.  Video of the presentation is [available on YouTube](https://youtu.be/bhrg-7f2e8k?t=1800), and the slide deck is [right here](https://docs.google.com/presentation/d/1oZknCWA6M186Pmfx43LVmWwdQvaqFhZLXX-_5lZkpQw/edit?usp=sharing).

#### What's in this repo?
This project contains a [sample REST API](https://documenter.getpostman.com/go?view=Y29sbGVjdGlvbl9pZD01OTE4ZjM2MS0zMjMwLWYzOTUtNzVkNC1kYzFiMTYwNGNhNDYmb3duZXI9MzA1NzU0JnVzZXJfaWQ9MzA1NzU0JmFjY2Vzc190b2tlbj1mZDY2YzNjYmUyZTM1ZTk1ODc1YSZzeW5jX2Vudj1wcmVtaXVt), and a full suites of accompanying tests.  The exact same test suite is repeated four time, in four different API test frameworks.  The intent is to demonstrate the difference between the various frameworks, such as syntax, features, and ease-of-use.

The following API test frameworks are covered:

- [Chai HTTP](https://github.com/chaijs/chai-http)

- [Chakram](https://github.com/dareid/chakram)

- [Postman](http://getpostman.com)

- [Supertest](https://github.com/visionmedia/supertest)


Installation
--------------------------

1. __Install Node.js__<br>
To run the demo, you'll need to have [Node.js 4.0 or greater](https://nodejs.org/en/) installed on your system.

2. __Clone this repo__<br>
`git clone https://github.com/bigstickcarpet/super-powered-api-testing.git`

3. __Install dependencies__<br>
`npm install`


Usage
--------------------------
Once you've installed everything, there are a few commands you can run.

| command                | description
|------------------------|------------------------------------
| `npm run chakram`      | Run the [Chakram](https://github.com/dareid/chakram) test suite*
| `npm run supertest`    | Run the [SuperTest](https://github.com/visionmedia/supertest) test suite*
| `npm run chai-http`    | Run the [Chai-HTTP](https://github.com/chaijs/chai-http) test suite*
| `npm run newman`       | Run the [Postman](http://getpostman.com) test suite in [Newman](https://www.npmjs.com/package/newman)*
| `npm start`            | Start a local web server running the [sample REST API](https://documenter.getpostman.com/go?view=Y29sbGVjdGlvbl9pZD01OTE4ZjM2MS0zMjMwLWYzOTUtNzVkNC1kYzFiMTYwNGNhNDYmb3duZXI9MzA1NzU0JnVzZXJfaWQ9MzA1NzU0JmFjY2Vzc190b2tlbj1mZDY2YzNjYmUyZTM1ZTk1ODc1YSZzeW5jX2Vudj1wcmVtaXVt)
| `npm stop`             | Stop the web server
| `npm restart`          | Stop the web server (if it's running), and then start it

> **Note:**  Commands marked with an asterisk (*) rely on the web server running in the background.  On Mac and Linux systems, the web server will automatically be started beforehand and stopped afterward.  On Windows systems, you need to run the web server yourself in a separate console window via the `npm start` command


License
--------------------------
Super-Powered API Testing is 100% free and open-source, under the [MIT license](LICENSE). Use it however you want.
