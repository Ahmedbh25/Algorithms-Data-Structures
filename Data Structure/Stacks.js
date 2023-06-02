/*
=> (STACKS) in english & (Pile) in frensh.

-In JavaScript, a stack is a data structure that follows the Last-In-First-Out (LIFO) principle.
It's similar to a stack of plates where the last plate placed on top is the first one to be removed.

-A stack has two primary operations:
    Push: This operation adds an element to the top of the stack.
    Pop: This operation removes and returns the topmost element from the stack.

- Stacks can be implemented in JavaScript using arrays or linked lists.

-Stacks are useful in various scenarios, including:
    -Function Call Stack: JavaScript uses a call stack to keep track of function calls. When a function is called, it is pushed onto the call stack, and when a function finishes executing, it is popped from the stack.
    -Undo/Redo Operations: Stacks can be used to implement undo/redo functionality, where the most recent state or action is on top of the stack, allowing you to undo or redo operations in a sequential manner.
    -Expression Evaluation: Stacks can be used to evaluate expressions, particularly infix expressions, by converting them onto postfix or prefix form and then evaluating them using stacks.
    -Backtracking: Stacks can be utilized in backtracking algorithms to keep track of states and make decisions based on previous choices.
*/