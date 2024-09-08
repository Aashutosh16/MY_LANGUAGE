

# Simple JavaScript Compiler

This repository contains a simple JavaScript compiler built with JavaScript itself. The compiler performs basic operations like tokenization (lexer), parsing, abstract syntax tree (AST) generation, code generation, and execution. The custom syntax includes keywords like `ye` for variable declarations and `bol` for printing values.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Example](#example)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project demonstrates the fundamentals of compiler construction using a simple, custom syntax. It translates this custom syntax into JavaScript and executes it. The project is designed for educational purposes, helping developers understand the steps involved in building a compiler.

## Features

- **Lexer**: Tokenizes input code into a stream of tokens.
- **Parser**: Converts tokens into an Abstract Syntax Tree (AST).
- **Code Generator**: Transforms the AST into executable JavaScript code.
- **Runner**: Executes the generated JavaScript code using `eval`.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Aashutosh16/simple-js-compiler.git
   ```

2. Navigate to the project directory:

   ```bash
   cd simple-js-compiler
   ```

3. Run the project using Node.js:

   ```bash
   node compiler.js
   ```

## Usage

You can modify the code inside the `code` variable in the `compiler.js` file to test different expressions with the custom syntax.

### Syntax

- `ye <identifier> = <expression>`: Declares a variable and assigns it a value.
- `bol <identifier>`: Prints the value of the specified identifier to the console.

## Example

Here's an example of how the compiler works:

### Input Code:

```javascript
ye x = 10
ye y = 20

ye sum = x + y
bol sum
```

### Generated JavaScript:

```javascript
const x = 10;
const y = 20;
const sum = x + y;
console.log(sum);
```

### Output:

```
30
```

## Project Structure

- **compiler.js**: Contains the main logic for the lexer, parser, code generator, and runner.
- **README.md**: Detailed documentation of the project.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to create an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
