# SOCIAL NETWORK API
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## Table of Contents
- [Description](#Description)
- [Links](#Links)
- [Technologies](#Technologies)
- [Installation Instructions](#Installation-Instructions)
- [User Instructions](#User-Instructions)
- [License](#License)
- [Contribution](#Contribution)
- [Questions](#Questions)

## Description
**Social Network API** is a back-end application that was created for social network applications.

## Technologies Used
![JavaScript Logo](./assets/images/javascript-logo.png)
![NodeJS Logo](./assets/images/nodejs-logo.png)
![MongoDB Logo](./assets/images/mongoDB-logo.png)
![Mongoose Logo](./assets/images/mongoose-logo.png)

## Links
- ### [URL to Github Repository](https://github.com/inklein1997/Social-Network-API)
| Video Walkthrough |
| ----------- |
| [Part 1 -- Products Route](https://drive.google.com/file/d/1slU3bNGSanfno8tYApuIn5UCH7V6yxkn/view) |
| [Part 2 -- Categories Route](https://drive.google.com/file/d/10GCLVyWpLqB-82z_nAqUkS7__7w5-FTb/view) |

## Installation Instructions
Since **Social Network API** is primarily a NodeJS application, you must have NodeJS downloaded. Please download [here](https://nodejs.org/en/download/) if you have not done so previously.

<br>

To create and seed the database, you must have MongoDB installed.  Please download [here](https://www.mongodb.com/try/download/community) if you have not done so previously. 
<br>

Because this application is, as of right now, strictly backend, all routes are ran on **Insomnia**.  Please click [here](https://insomnia.rest/download) to download.

<br>

You must install the following dependencies to run this application
1. [Express package](https://www.npmjs.com/package/express)
2. [Mongoose package](https://www.npmjs.com/package/sequelize)
3. [find-config package](https://www.npmjs.com/package/find-config)

You can install these quickly by entering the following command in the command-line.  Please make sure you are navigated to the root of the repository.

```
npm i
```

## User Instructions
1. Because this is using a local database, please create the __Social_Network_API__ database.  You can do this by entering the following command into the command-line...

```
npm run seed
```

| Method | Routes | Description |
| ----------- | ----------- | ----------- |
| GET | http://localhost:3001/api/users/ | Displays all users |
| GET | http://localhost:3001/api/users/:id | Displays user matching with inputted id |
| POST | http://localhost:3001/api/users/ | Creates a new user |
| PUT | http://localhost:3001/api/users/:id | Updates user with matching inputted id |
| DELETE | http://localhost:3001/api/users/:id | Deletes user with matching inputted id |
| POST | http://localhost:3001/:userId/friends/:friendId | Assigns a friend to a user |
| DELETE | http://localhost:3001/:userId/friends/:friendId | Removes a friend from the user's friend list |
| GET | http://localhost:3001/api/thoughts/ | Displays all thoughts |
| GET | http://localhost:3001/api/thoughts/:id | Displays thought matching with inputted id |
| POST | http://localhost:3001/api/thoughts/ | Creates a new thought |
| PUT | http://localhost:3001/api/thoughts/:id | Updates thought with matching inputted id |
| DELETE | http://localhost:3001/api/thoughts/:id | Deletes thought with matching inputted id |
| POST | http://localhost:3001/thoughts/:thoughtid/reactions | Assigns a reaction to a thought |
| DELETE | http://localhost:3001/thoughts/:thoughtid/reactions | Removes a reaction from its thought |

If you would like to watch a video runthrough of each of the routes, please click on the following below...
| Video Walkthrough |
| ----------- |
| [Part 2 -- Products Route](https://drive.google.com/file/d/1slU3bNGSanfno8tYApuIn5UCH7V6yxkn/view) |
| [Part 3 -- Categories Route](https://drive.google.com/file/d/10GCLVyWpLqB-82z_nAqUkS7__7w5-FTb/view) |
| [Part 4 -- Tags Route](https://drive.google.com/file/d/11O5aBYezHO-L8uxhiiFtwFJ20hxdrig-/view) |

## License
This project is licensed under the terms of [MIT](https://opensource.org/licenses/MIT).
  
## Contribution
Before contributing to **Social Network API**, please read this [code of conduct](code_of_conduct.md)[^1].<br>
Here's how you can contribute...
1. Add issue or recommendation for improvement to Issues tab on Github.
2. Submit pull request for review.

## Questions
If you have any questions, please contact me via:
1. GitHub -- [@inklein1997](https://github.com/inklein1997)
2. Email -- michaelklein1997@gmail.com

[^1]: Code of Conduct provided by [Contributor Covenant](https://www.contributor-covenant.org/)