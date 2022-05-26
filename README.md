# GoodBad Server: An App To Gage Public Opinion on Which Things Are Good and Which Are Bad

This application allows users to create an account, decide whether various things are good or bad, and see how other users voted as well. Users can also create suggestions about new things they'd like to vote on.

## Important Links

- [Deployed Client]
- [Client Repo]
- [Deployed API]

## Installation instructions

1. Fork and clone this repo
2. Install dependencies with `npm install`
3. Start the frontend server with `npm start`

## Planning Story

GoodBad started as a party game mocking dichotomy. I would say a thing, my friends would tell me if they thought it was good or bad, and we'd get into fun little arguments about our answers. I decided to borrow some of Tinder's functionality and make it into an app. Users are shown cards with things on them, and can swipe right to say that thing is good or left to say it's bad. Mimicking the game, users can only see who also voted on something and how those people voted *after* the user herself has voted. They can also make suggestions for things that they'd like to see show up on cards in the future.

## Design Process

I started by creating all the component suggestions, so that users could create, read, update, and delete their suggestions. Then I created the swipe cards using an NPM package, and set up the swipes to store the user ID on the object and the object ID on the user. Finally I created components to show data about how other users had voted on given things.

## User stories

 - As a user I'd like to be able to sign up, sign in, sign out, and change my password.
 - As a user, I'll be able to vote "good" or "bad" on things.
 - As a user I'll be able to suggest new things to vote on, and read, update, and delete those suggestions.
 - As a user I'll be able to see how other users voted on things.
 - As a user, I'd like to be able to look at other users' voting history.
 - As a user, I'll be able to vote "I'm not sure" or "In the middle" (Sorry, never getting that one.)

## Technologies Used

- JavaScript
- Express.js
- MongoDb
- Mongoose
- React
- Bootstrap
- HTML/CSS

## Unsolved Problems

- I originally intended for this app to limit users to answering about 5-10 questions per day, so that they can make like Wordle and answer in the morning and then spend the day comparing answers with friends. However, I'm sort of liking users having access to all of the cards off the bat.
- I would like to let users make friends within the app, and show how those friends voted at the top of the voting results. I would also like users to be able to view friends' total voting histories.

## Wireframe

[Wireframe](./Wireframe.jpeg) 
 
## ERD

[ERD](./ERD.jpeg)
