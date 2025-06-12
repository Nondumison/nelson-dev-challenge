# Nelson Development - Junior Developer Challenge

This project provides a serverless API endpoint that processes strings and a frontend tester to validate API functionality. The API accepts POST requests containing a string, sorts its characters alphabetically, and returns the sorted array as a word.

### Live Demo

[Demo](https://nelson-dev-challenge.vercel.app/)

## Features

- POST API endpoint that accepts string input
- Converts strings to sorted character arrays
- Frontend interface for testing the API
- Support for local and remote API testing
- CORS enabled
- Error handling

## API Endpoint

### POST /api

Accepts JSON data in the following format:

```json
{
  "data": "string"
}
```

Returns:

```json
{
  "word": ["sorted", "characters", "array"]
}
```

### Technical Implementation

Backend: Node.js with Vercel serverless functions
Frontend: HTML, CSS, JavaScript
Deployment: Vercel

### How to Run Locally

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Nondumison/nelson-dev-challenge.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd nelson-dev-challenge
    ```
3.  **Install dependencies:**
    ```sh
    npm install
    ```
4.  **Start the local development server (optional, for Vercel):**
    You can use the Vercel CLI to run a local instance that mirrors the production environment.
    ```bash
    vercel dev
    ```
