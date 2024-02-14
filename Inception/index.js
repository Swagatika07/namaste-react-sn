// Like the way we createElement in Javascript by document.createElement(),
// Similarly we use createElement in React to create an element by using React.createElement(),
// But the only difference is in JS it takes one parameter, while in React it takes us 3 parameters.
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello JavaScript Hiiii!!"
);
//How to create nested divs using React.createElement?
//How to create sibling element? What if we want to create more nested child to parent?
//Answer is simply we have to put array of children to it. But in case of complex nesting the code will be more clumsy,
// that's the reason JSX is a life savior.

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "I am an h1 tag"),React.createElement("h2",{},"I am an h2 tag")]
  )
);
console.log(parent); //parent is just an object.

//Remember one thing that the heading, we have created using React.createElement is nothing but a js object.
//The {} in createElement() is the place(or object), where we will define attributes for the tag such as id, className etc.
//   To create root , its a core concept of ReactDOM not React, thus we use ReactDOM.createRoot()
const root = ReactDOM.createRoot(document.getElementById("root"));
//   Finally to show up the desired output in the root div, we use render method
root.render(parent);
