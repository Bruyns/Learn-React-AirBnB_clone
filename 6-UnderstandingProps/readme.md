# title

## short description














### scrimba short pop quiz
1. What do props help us accomplish?
- makes adding multiple tags that use the same text but use different 
  information
- makes a component more reusable


1. How do you pass a prop into a component?
- <myAwesomeHeader title="{}" />


3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
- No, because the JSX we use to describe native DOM elements will
be turned into REAL DOM elements by React. And real DOM elements
only have the prooperties/attributes specified in the HTML specification.
(Which doesn't include properties like `blahblahblah`)


4. How do I receive props in a component?
function Navbar() {
    return (
        <header>
            ...
        </header>
    )
}
- use the {prop.} javascipt syntax and the object syntax to point to the correct label/tag
- 

5. What data type is `props` when the component receives it?
6. - an object