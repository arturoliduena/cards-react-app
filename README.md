<!-- PROJECT -->
<h2 align="center">Cards manager app</h2>

<!-- ABOUT THE PROJECT -->
## About The Project

typescript/react web application that allows us to add, edit, delete and sort "cards" with very basic information (title, description and image).
feture: 
* Button that shows a modal with a simple form to enter the data of the new card:
  - Title (required).
  - Description (required).
  - Image (optional and only the url).
* Each card display the image at the top, if none has been indicated, it must show a predetermined image, the title and the description. When hovering the mouse over the card it show some buttons that allow you to edit or delete the card.
* As we add cards they should be viewed directly in the app
* The cards are stored in localstorage so that they are not lost if we close or reload the application.
* there are buttons that allow us to sort the cards by title asc/desc or by creation asc/desc
* it is displayed correctly on mobile and desktop.

### Demo
* Add a new card and check the required fields <br/>
![](gif/demo_add_card.gif)

* Edit a card and remove a card <br/>
![](gif/demo_edit_and_remove_card.gif)

* Ordering cards <br/>
![](gif/demo_sorting_cards.gif)

* Responsive <br/>
![](gif/demo_reponsive.gif)

* Persistent data in Redux and localhost <br/>
![](gif/demo_persist_data.gif)

### Built With
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
list of major frameworks and library that was used to built this project.
* [react](https://reactjs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [Redux](https://redux.js.org/)
* [react-redux-hooks](https://react-redux.js.org/next/api/hooks)
* [react-hooks](https://reactjs.org/docs/hooks-intro.html)
* [jest](https://jestjs.io/docs/en/getting-started.html)
* [react testing library](https://testing-library.com/docs/react-testing-library/intro/)
* [Flexbox css](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [css grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
* [localstorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

### Testing
This project has tests on components, reducer, functions/utils and actions.

<!-- GETTING STARTED -->
## Getting Started

To clone and run this application.

### Prerequisites

you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

### Installation

1. Clone this repo
```sh
git clone https://github.com/arturoliduena/cards-react-app.git
```

2. Go into the repository
```sh
cd cards-react-app
```

3. install package
```sh
npm install
```

4. Starting the development server
```sh
npm start
```

5. this project will run in http://localhost:3000/

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
