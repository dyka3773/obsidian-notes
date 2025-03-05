---
tags:
  - tech
aliases:
  - call-by-need
  - delayed evaluation
---
In programming language theory, lazy evaluation, or call-by-need, is an evaluation strategy which delays the evaluation of an expression until its value is needed (non-strict evaluation) and which avoids repeated evaluations (by the use of sharing).

The benefits of lazy evaluation include:
- The ability to define control flow (structures) as abstractions instead of primitives.
- The ability to define potentially infinite data structures. This allows for more straightforward implementation of some algorithms.
- The ability to define partly-defined data structures where some elements are errors. This allows for rapid prototyping.

Lazy evaluation is often combined with [[memoization]].
After a function's value is computed for that parameter or set of parameters, the result is stored in a [[lookup table]] that is [[Database Index|indexed]] by the values of those parameters. 
The next time the function is called, the table is consulted to determine whether the result for that combination of parameter values is already available.
If so, the stored result is simply returned.
If not, the function is evaluated, and another entry is added to the lookup table for reuse.

Lazy evaluation is difficult to combine with [[imperative programming|imperative]] features such as exception handling and input/output, because the order of operations becomes indeterminate.

The opposite of lazy evaluation is [[eager evaluation]], sometimes known as strict evaluation. 
Eager evaluation is the evaluation strategy employed in most programming languages.

## Examples
### [[Java]]
The `Supplier` interface and its `get()` method in the `java.util.function` library provide a lazy evaluation functionality.

### [[JavaScript]]
In [[JavaScript]], lazy evaluation can be simulated by using a generator.
For example, the stream of all Fibonacci numbers can be written, using [[memoization]], as:
```javascript
/**
 * Generator functions return generator objects, which reify lazy evaluation.
 * @return {!Generator<bigint>} A non-null generator of integers.
 */
function* fibonacciNumbers() {
    let memo = [1n, -1n]; // create the initial state (e.g. a vector of "negafibonacci" numbers)
    while (true) { // repeat indefinitely
        memo = [memo[0] + memo[1], memo[0]]; // update the state on each evaluation
        yield memo[0]; // yield the next value and suspend execution until resumed
    }
}

let stream = fibonacciNumbers(); // create a lazy evaluated stream of numbers
let first10 = Array.from(new Array(10), () => stream.next().value); // evaluate only the first 10 numbers
console.log(first10); // the output is [0n, 1n, 1n, 2n, 3n, 5n, 8n, 13n, 21n, 34n]
```

### [[Python]]
In [[Python]] 3 the `range()` function returns a [[Generators|generator]] which computes elements of the list on demand.
Elements are only generated when they are needed (e.g., when `print(r[3])` is evaluated in the following example), so this is an example of lazy or deferred evaluation:
```python repl
>>> r = range(10)
>>> print(r)
range(0, 10)
>>> print(r[3])
3
```
