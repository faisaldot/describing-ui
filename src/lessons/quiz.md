## QUESTION 1

### Which of the following are benefits of HTML? Select all that apply.

1. It is declarative
2. It has semantic structure
3. It gives us tools fo managing application complexity
4. It has a robust module system

- Ans:
  HTML is great for declaratively structuring a document, but it lacks the power and expressivity of JavaScript. React components bring these together to give us a "more powerful HTML".

## QUESTION 2

### Is this a valid React component?

```
export default function search() {
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input id="search" placeholder="Enter some text" />
    </div>
  );
}

```

1. True
2. False

- Ans:
  No, it is not. The function (component) name needs to be capitalized in order for React (JSX) to understand the difference between an HTML element and a component.

## QUESTION 3

### As a rule, every React component must follow the Single Responsibility Principle.

1. True
2. False

- Ans:
  There is no rule stating that every React component must follow the single responsibility principle. However, it is a good guideline to follow.

## QUESTION 4

### What's wrong with this React component?

```
import Authors from "./Authors";

export default function About() {
  localStorage.setItem("viewed_about", true);

  return (
    <main>
      <h1>About Us</h1>
      <p>We write JavaScript and words about JavaScript.</p>
      <Authors />
    </main>
  );
}

```

1. Nothing
2. main should be capitalized
3. React components must be pure function

- Ans:
  React embraces pure functions and, as a rule, you need to make sure your components are always pure – localStorage.setItem makes it impure.

  We'll learn how to handle these situations later in the course, but for now, remember that "React’s rendering process must always be pure."
