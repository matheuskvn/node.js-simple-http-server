# Node.js Simple HTTP Server

A very simple HTTP server built with Node.js, ideal for learning and testing basic server concepts.

## Features

- Responds with a simple HTML message on every request.
- Uses the port defined in the `.env` file (via `process.env.PORT`).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed

### Installation

1. Clone this repository and navigate to the project folder.

2. Install dependencies (if any):
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node simpleServer.js
   ```

4. Open your browser and go to `http://localhost:8000` (or the port you set).

## Example Response

```
Hello, this is my first Node.js server and it's currently running on port 8000
```

## License

ISC
```
