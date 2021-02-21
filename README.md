# Workout Tracker
![Last Commit](https://img.shields.io/github/last-commit/macz-norton/workout-tracker)

## Description

The Team Profile Generator is a Node.js command-line application that takes in information about employees and generates an HTML webpage that displays summaries for each person.

```
As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.
```

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Credits](#credits)
* [License](#license)

## Installation

1. Open your integrated terminal 
2. Clone this repository into a local directory (via SSH) with this command in your terminal: `git clone git@github.com:macz-norton/team-profile-generator.git`
3. Install Node.js by running `npm i` in your terminal

## Usage

To run the command-line application following installation, run `node app.js` in your terminal.

You will be prompted with questions about your team and your answers will be used to build the `team.html` file generated in the `output` folder:
* Video that demonstrates the application's functionality: [watch video](https://user-images.githubusercontent.com/71162422/103465483-ae982280-4cf0-11eb-96a0-132fafe022b9.mp4)
* Inquirer prompt questions in the user's terminal: ![Terminal screenshot](https://user-images.githubusercontent.com/71162422/103465488-c1125c00-4cf0-11eb-9dd0-9492d6a5b99a.png)
* Output HTML file from prompted questions: ![Team profile HTML page](https://user-images.githubusercontent.com/71162422/103465494-cbccf100-4cf0-11eb-9173-57e90530b7d5.png)

## Tests

1. Add exercises to a previous workout plan.
2. Add new exercises to a new workout plan.
3. View the combined weight of multiple exercises on the stats page.

## Credits

* [Express](https://expressjs.com/)
* [Morgan npm package](https://www.npmjs.com/package/morgan)
* [Mongoose](https://mongoosejs.com/)
* [mongoDB](https://www.mongodb.com/)
* [Heroku](https://www.heroku.com/)
* [Semantic UI](https://semantic-ui.com/)

## License

[MIT](https://choosealicense.com/licenses/mit/)