# t11tasks
## Motivation and Initial Ptoject Scope Deinition
A proof of concept regular (CRA) React applications for B1 Activity Tasks via SL
I have made a nice progress with my other project with Meteor B1, but I wasn't completely convinced that Meteor is really the right way to start application development in 2019. Here are couple of points:
Deploying Meteor is limited, it requires special support from the hosting provider. Firestore and firebase has realtime database solutions, too, that are readily available; but my applications mightn't really need real-time data handling. Running Meteor in test mode is really slow, likewise running Meteor and Flow is really slow. It was a joy to work with Meteor, and whenever I need its services, I wouldn't hesitate to jump back.
This new project is about to login to a B1 system as an employee, list and create tasks, report them completed, and delete unwanted ones. I want to experiment with dynamic loading, which was so excellently supported on Android SDK, I wonder if React/Redux has similar toolset. This version is going to perform SAP B1 SL transactions directly from the browser. 
I'll give a try to use React Context, and I'll experiment with implementing a multilanguage support, where the translation data is stored in Firestore database tables.

## Tools and Modules Installed
<ul>
<li>npm install react-router-dom redux react-redux
<li>npm install -g flow flow-typed
<li>npm install flow-bin --save-dev
<li>flow init
<li>flow-typed install --libdefDir .flow-typed
<li>npm install -g firebase-tools
<li>firebase init
<li>firebase deploy
</ul>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
