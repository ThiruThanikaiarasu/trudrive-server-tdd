# Trudrive

**Trudrive** is a robust backend application built using Express and MongoDB, following Test-Driven Development (TDD) principles. It ensures high-quality code, comprehensive testing, and seamless documentation generation.

---

## Table of Contents
1. [Installation](#installation)
2. [Running the Application](#running-the-application)
3. [Testing](#testing)
4. [Building Documentation](#building-documentation)
5. [License](#license)

---

## Installation

To set up the project locally, ensure you have [Node.js](https://nodejs.org/) installed. Then, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd trudrive-server-tdd
   ```

2. Installing Dependencies: 
    ```bash
    npm install
    ```

---

## Running the Application

To start the server run the command below, which uses **node --watch <entry_file>** to automatically reload the server upon detecting code changes.

```bash 
npm start
```

---

## Testing 

To ensure code quality and verify functionality, Trudrive uses [Jest](https://jestjs.io/docs/getting-started) for testing. The project includes the jest --verbose script to provide detailed output during testing. 

Verbose to get detailed information about each test, including the names of test suites and individual tests, and their execution status (e.g., passed, failed, or skipped).

```bash 
npm test
```

--- 

## Building Documentation

To generate project documentation, Trudrive uses [JSDoc](https://jsdoc.app/). This script automatically scans your codebase, reads JSDoc comments, and creates an organized documentation site.

```bash
npm doc
```
---

## License

MIT License

Copyright (c) [year] [your name or organization]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.