---
tags:
  - tech
aliases:
  - first-class citizen
  - First-Class Function
---
A **first-class function** (or **first-class citizen**) refers to a function that is **treated like any other variable** in a programming language.
This means that functions can:
- Be assigned to variables.
- Be passed as arguments to other functions.
- Be returned from other functions.
- Be stored in data structures (arrays, objects, etc.).
This feature allows for **functional programming paradigms** and is commonly found in languages like **[[JavaScript]], [[Python]], and [[Lisp]]**.

See also [[Higher-Order Functions]]

# Benefits
- **[[Higher-Order Functions]]**: Enables [[map()|map]], [[filter()|filter]], and [[reduce()|reduce]] operations.
- **Callbacks & Event Handling**: Used in asynchronous programming (e.g., [[JavaScript]]’s event loop).
- **Functional Programming**: Encourages immutability and declarative code.
- **Code Reusability & Composition**: Functions can be composed dynamically.

# Examples
## [[JavaScript]]
### Assigning a Function to a Variable
```js
const greet = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet("Alice")); // Output: Hello, Alice!
```

### Passing a Function as an Argument
```js
function callFunction(fn, value) {
    return fn(value);
}

console.log(callFunction(greet, "Bob")); // Output: Hello, Bob!
```

### Returning a Function from Another Function
```js
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
console.log(double(5)); // Output: 10
```

## [[Python]]
```python
def greet(name):
    return f"Hello, {name}!"

# Assign function to a variable
say_hello = greet
print(say_hello("Alice"))  # Output: Hello, Alice!

# Pass function as argument
def execute_function(fn, value):
    return fn(value)

print(execute_function(greet, "Bob"))  # Output: Hello, Bob!

# Return function from another function
def create_multiplier(factor):
    return lambda x: x * factor

double = create_multiplier(2)
print(double(5))  # Output: 10
```
