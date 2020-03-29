# t11tasks (On Hold)
Working directly with Materialize CSS was quite cumbersome; it was designed for static pages. Material UI is the most popular MD framework for React, and it seems to be fine. Flow is lagging behind TypeScript, and is not relly integrated with React workflow. VS Code has brilliant built-in support for TypeScript. So, I'll redo this project on React/Redux/Material-UI/TypeScript/PWA.

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

## Materialize CSS vs Material Components for React (MDC React)
I've spent quite a lot of time on Materialize CSS (npm install materialize-css). I have even bought the $20 admin template/theme package, but I had to realize that the nifty features are available via heavy JQuery programming. This is not a library for React. So eventually I decided to start working on Google's official https://github.com/material-components/material-components-web-react It is far less popular than the Material UI, and actually there are no examples at all, really challenging.
The other component library I am thinking of are Material UI, which is really popular and a number of excellent examples are available. The other one is Reactstrap, which is Bootstrap 4 library. Creative Tim is selling excellent looking templates/themes for these libraries.

## Giving a Try to MDC React
The getting started guide starts with this: npm install @material/react-button, whch is really weird, no need to install the entire library, hmm.
I followed the instructions and wanted to create an icon button, after I've added the link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" to the index.htm header:

```
import Button from "@material/react-button"
import "@material/react-button/dist/button.min.css"
...
<Button raised className="button-alternate" icon="favorite"  
onClick={() => console.log('clicked!')}>Click Me!</Button>
```
But it crashed. The only way I was able to create an icon button was when I combined scripst from 
https://github.com/material-components/material-components-web/tree/master/packages/mdc-button

```
<Button raised className="button-alternate"
onClick={() => console.log('clicked!')}>
<i class="material-icons mdc-button__icon" aria-hidden="true">favorite</i>
Click Me!
</Button>
```

I have even joined the https://discordapp.com/channels/259087343246508035/468946502623166485 community, but it didn't seem very promising.
Then I've installed another two packages npm install @material/react-icon-button @material/react-material-icon
Eventually, I gave up; it's hell very complex to use this MDC React library: for every component you have to explicitly (NPM) install and then import the compoenet as well as import explicitly the correspoding CSS file(s), too. I tried to make an Icon Toggle Button; I spent two hours, and found no information. Maybe MDC React is the best performing Material Design implementation for React, but because of the total lack of documentation, the non-existent community, no real examples, it's only for experimental projects where you have a hell lot of time to research. My goal is to find an easy to use MD library: so far materialize CSS and MDC React both failed.
So, have silently uninstalled these MDC React packages: npm uninstall @material/react-icon-button @material/react-material-icon @material/react-button 
I am really on the point of going back to Flutter: with the brilliantly typed language of Dart, it contained everything. For server side I've learned enough JavaScript to be able to implement practically any complex server side business logic including Firebase Functions. I don't really need desktop functionality. Anyhow, let me give a try to Material UI. 

--------------

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
