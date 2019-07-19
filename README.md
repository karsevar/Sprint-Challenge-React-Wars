# Sprint Challenge: React - Star Wars

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored ReactJS, Function Components, component state and side effects. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that uses ReactJS to consume live data retrieved from the World Wide Web and style that data nicely on the page.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency ReactJS Fundamentals and your command of the concepts and techniques in the Function Components and Class Components.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager.

## Description

In this challenge, create a web page that presents a styled list of Star Wars characters. Being able to render out data to a web page is a large part of what JavaScript developers do, this challenge assesses your ability to achieve such a task.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

Simply put, React JS can defined as a component library that is used to build out and render User Interfaces to the DOM in a very efficient and easy to program manner. Within the React ecosystem, unlike similar libraries and frameworks, decisions such as data structure and file structure are left up to the individual developer as well as user interface structure is divided into individual file blocks called components. 

React's inherent eccentricities are a product of the creators' desire to bridge the gap between the different languages needed for frontend development and the performance deficit of having to continually rerender the DOM with every addition of a new html element. Hence through React, developers are now able to create HTML tags (written in JSX) and program event handlers in a single computer language (JavaScript) and thanks to the advent of the virtual DOM (which is hard baked into the React library) the performance hit for rendering new html elements to the DOM has been greatly reduced. 

The following is an example of React's ease of use compared to the basic DOM
API: 

React Example:  
```
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <ButtonCounter count={count} incrementCount={() => setCount(count + 1)} />
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

This example shows that what was once a two language project (the need to first code the html and use the querySelector() command to find the html element you want to add the event listener to and then add the event listener) has been transformed into a single JavaScript program.

- [ ] What does it mean to _think_ in react?

According to this link https://reactjs.org/docs/thinking-in-react.html, think in react is a three step process that allows you to reason about your project and refactor it into a react UI framework that uses components.

Quoting from the article:

 Step one you are supposed to look through the UI mock up and start drawing around elements that could be individual components.

 Step two start building a static version of the UI using only props (the data that you pass into the application, which should be considered immutable) with no interactivity (namely event listeners and state data, data that changes with user input).

 Step three create the interactivity components and structure appearance of the state data. 

- [ ] Describe state.

To begin, state can be described as variable data (like props) that is initialized and managed by a component. In addition, a state can be initialized by a prop variable and hence props and state are regularly confused but the main difference is that props remain the same with each user interaction while state changes.

Example of state being used in a component function: 
```
function ButtonCounter(props) {
  return (
    <div>
      <h1>{props.count}</h1>
      <button onClick={props.incrementCount}>Click Me!</button>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <ButtonCounter count={count} incrementCount={() => setCount(count + 1)} />
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
```

In this example count can be considered a state variable because it's being changed by a user onClick event. 

- [ ] Describe props.

To begin, props are variables passed to a child component by its parent component.

Example of a props being passed to child components (Following example is from the training kit Composing React Components and Passing Data Via Props):
```
const simpsonData = [
  {
    name: "Orville Simpson",
    spouse: "Yuma Hickman",
    children: [
      {
        name: "Abraham Simpson",
        spouse: "Mona",
        children: [
          {
            name: "Homer Simpson",
            spouse: "Marge Bouvier",
            children: [
              {
                name: "Bart Simpson"
              },
              {
                name: "Lisa Simpson"
              },
              {
                name: "Maggie Simpson"
              }
            ]
          }
        ]
      }
    ]
  }
];

const GrandChild = props => {
  return (
    <div>
      <h3>Grand Child: {props.name}</h3>
    </div>
  );
};

const Child = props => {
  console.log(props);
  return (
    <div>
      <h2>Child: {props.name}</h2>
      <GrandChild name={props.grandChildName} />
    </div>
  );
};

const Parent = props => {
  return (
    <div>
      <h1>Parent: {props.name}</h1>
      <Child name={props.childName} grandChildName={props.grandChildName} />
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <h2>Simpsons Lineage</h2>
      <Parent
        name={simpsonData[0].name}
        childName={simpsonData[0].children[0].name}
        grandChildName={simpsonData[0].children[0].children[0].name}
      />
    </div>
  );
};
```
As you can see the App component passes simpsonData to the Parent component as props and the Parent component passes the same data down to the Child component as props. 

- [ ] What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is anything that affects something outside of the scope of the function being executed. Within the React library you can control side effects of a particular function through the useEffect command. 

You can sync effects in a React component through the dependency array argument.

useEffect syntax and arguments:
```
useEffect(callback function, dependency array) 

dependency array commands:
useEffect(fn) // rerun if anything changes in the function. 
useEffect(fn, []) // run only once (during mounting).
useEffect(fn, [these, states, props]) // run only if specified props or states change. 
```




## Project Set Up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add PM as collaborator on Github.
- [ ] Clone your OWN version of Repo. **(Not Lambda's by mistake!)**
- [ ] Create a new Branch locally: `git checkout -b <firstName-lastName>`.
- [ ] Change directories into `./starwars` (`cd starwars`) and run `yarn install` or `npm install` to retrieve all needed dependencies.
- [ ] Once you have installed the _node_modules_, run `yarn start` or `npm start` to get your server up and running.
- [ ] With the server up and running, open Chrome and head over to `localhost:3000` and view your beautiful app. Maybe it's not _that_ pretty... _yet_, your goal is to ensure this project becomes a thing of beauty.
Follow these steps for completing your project.
- [ ] Implement the project on this Branch, **committing progress & changes often.**
- [ ] Push commits: `git push origin <firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request.
- [ ] PM then will count the HW as done by merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

- [ ] Fetch a list of Star Wars characters from the [Star Wars API (or SWAPI)](https://swapi.co/) and render them to the screen. 
- [ ] Follow the documentation to learn how to fetch a list of "people". However, don't spend _too_ long on this. Here is a link for you to follow if you've looked around the docs for about 15 minutes or so and haven't found where to go - [Secret Link to Awesomeness 🤫](https://swapi.co/documentation#people).
- [ ] Set the data you fetch to state.
- [ ] Map over the list and render a component for each character on the page.
- [ ] You must have at least one element for each star wars character in the data set.
- [ ] The elements must be styled with either SemanticUI or styled-components - don't rely on browser default styles.

#### Required best practices:

- [ ] Consistent naming. Examples: variables, functions, Components, and file/folder organization.
- [ ] Consistent spacing. Examples: line breaks, around arguments and before/after functions.
- [ ] Consistent quotation usage.
- [ ] Spell-check.
- [ ] Schedule time to review, refine and reassess your work.


It is better to submit a challenge that meets [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) than one that attempts too much and fails.

## Stretch Problems

- [ ] Add at least one test using a testing tool:
  - [react-testing-library](https://github.com/testing-library/react-testing-library#basic-example)
  - [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html)

- [ ] Build a pagination system that will allow you to load the next page of data.
  - `console.log()` the data coming back from the server.
  - Notice that there are `next` and `previous` fields that give you a URL.
  - You can build a function that will get characters called `getCharacters` that you can use dynamically to get the next or previous set of characters. You would need to supply it with the proper fields, and you'll need to set up more state to do this.

<!--
- [ ] Build another app from scratch that looks very similar to this one. Inside of your main `App` component fetch some data in this same fashion from this url `https://dog.ceo/dog-api/#all` you'll have to follow the documentation at that website and figure out how to change up the code you've seen here in this Star Wars app in order to properly fetch the data and store it on Component State.
-->
