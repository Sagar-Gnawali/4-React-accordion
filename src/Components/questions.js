const questions = [
    {
        id: 1,
        title: 'List down the components of Redux.',
        info:
            'Action , Reducer , Store and View.',
    },
    {
        id: 2,
        title: ' What is React Router?',
        info:
            'React Router is a powerful routing library built on top of React, which helps in adding new screens and flows to the application. This keeps the URL in sync with data that’s being displayed on the web page. It maintains a standardized structure and behavior and is used for developing single page web applications. React Router has a simple API.',
    },
    {
        id: 3,
        title: 'What is Props ?',
        info:
            'Props is the shorthand for Properties in React. They are read-only components which must be kept pure i.e. immutable. They are always passed down from the parent to the child components throughout the application. A child component can never send a prop back to the parent component. This help in maintaining the unidirectional data flow and are generally used to render the dynamically generated data.',
    },
    {
        id: 4,
        title: 'What is the purpose of render() in React ?',
        info:
            'Each React component must have a render() mandatorily. It returns a single React element which is the representation of the native DOM component. If more than one HTML element needs to be rendered, then they must be grouped together inside one enclosing tag such as <form>, <group>,<div> etc. This function must be kept pure i.e., it must return the same result each time it is invoked.',
    },
    {
        id: 5,
        title: 'In React, everything is a component.” Explain.',
        info:
            'Components are the building blocks of a React application’s UI. These components split up the entire UI into small independent and reusable pieces. Then it renders each of these components independent of each other without affecting the rest of the UI.',
    },
    {
        id: 6,
        title: 'Why can’t browsers read JSX?',
        info: 'Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.'
    }
]
export default questions;