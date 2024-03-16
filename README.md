# Scissor
Scissors is a URL Shortening App that empowers businesses to tailor their shortened URLs according to their brand identity.

# Table of contents

- [Overview](#overview)
  - [Features of Scissor](#features-of-scissor)
  - [Demo](#demo)
  - [Screenshots](#screenshots)
- [My process](#my-process)
  - [Technologies used](#technologies-used)
  - [Setting up the repository](#setting-up-the-repository)
  - [Getting started with Scissor App](#getting-started-with-scissor-app)
  - [Testing](#testing)
  - [Deployment](#deployment)
- [Author](#author)

# Features of Scissor

### Url Shortening: 
Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.

### QR Code:
Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.

# Demo

- Here's a live preview of the app: https://scissor-app.vercel.app/

# Screenshots
Here are some screenshots of the Scissor App:
![](/src/assets/home.PNG)
![](/src/assets/signup.PNG)
![](/src/assets/login.PNG)
![](/src/assets/dashboard.PNG)

The `Screenshots` section provides screenshots of various pages in the project. These examples would help potential users get a better understanding of what the project looks like and how it works.

# My process

## Technologies used

| Technology | Version |
| ---------- | ------- |
| React | v18.2.0 |
| Firebase | v10.8.1 |
| React Router | v6.22.3 |
| React Toastify | v10.0.4 |
| React Copy to Clipboard | v5.1.0 |
| Font Awesome Icon | v0.2.0 |

In this project, we used `React v18.2.0` as the main front-end library to build the user interface. We also used `React Router v6.22.3` to handle client-side routing and navigation.

`Firebase v10.8.1` was used as the backend and database provider. We leveraged Firebase Authentication, Cloud Firestore, and Cloud Functions to handle user authentication, data storage, and serverless functions.

# Setting up the repository

To set up the repository, follow these steps:

- Create the React App with Vite
```
npx create-vite@latest scissor-app --template react
```

- Change directory to the Scissor folder using 
```
 cd scissor-app
```

- Download project dependencies 
```
npm install
```

- Start the developement server
```
npm run dev
```

- Open `http://localhost:3000` to view the app in the browser.


# Getting started with Scissor App

1. Get API token and GUID from [Bitly](bitly.com)

2. Clone the repo 

        git clone https://github.com/adetutudeborah/scissor-app

3. Install NPM packages 

        npm install

4. Create `.env` in root folder.

5. Enter Token and guid in `.env`

        VITE_REACT_APP_BITLY_TOKEN = 'enter your token key'
        VITE_REACT_APP_GUID = 'enter guid here'

6. Start development Server

        npm run dev

7. - Open `http://localhost:3000` to view the app in the browser.


# Testing
To run the tests locally, follow these steps:

- Clone the repository
- Install dependencies by running `npm install`
- Run `npm test` to start the test suite

The tests are run using `Jest`, a popular testing framework for React apps.


# Deployment
The Scissor App has been deployed on `Vercel`, and it can be accessed at the following URL: https://scissor-app.vercel.app/.


# Author

- GitHub - [@adetutudeborah](https://github.com/adetutudeborah)
- Twitter - [@adetutuoluwa](https://twitter.com/adetutuoluwa2)
