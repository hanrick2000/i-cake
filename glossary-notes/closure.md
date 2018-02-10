# Closure Notes (JavaScript)

A **closure** is a function that accesses a variable outside of itself:

```javascript
var message = 'The British are coming.';

function sayMessage(){
  alert(message); // here we have access to the message even though it's declared outside of this function
}
```

The variable defined outside of the function is considered to be "closed over"
by the function.

Closure can be used to create something that's similar to an "instance variable"
that can change over time and affect the function's behavior
