# Nelson Development - Junior Developer Challenge

This repository contains my submission for the junior developer technical challenge. It includes a server-side API endpoint and a simple front-end for testing and validation.

## Features

-   **Backend API**: A Node.js/Express serverless function deployed on Vercel. It receives a string, sorts its characters alphabetically, and returns the result.
-   **Frontend Tester**: A clean, user-friendly HTML/CSS/JS interface to test the validation endpoint provided in the challenge instructions.

## Tech Stack

-   **Backend**: Node.js, Express.js
-   **Frontend**: HTML, CSS (Pico.css), Vanilla JavaScript
-   **Deployment**: Vercel

---

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

---

### Live Demo

The complete, deployed project with the front-end tester can be accessed here:

[Your Vercel Deployment URL]


fetch('https://nelson-dev-challenge.vercel.app/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    data: 'testing'
  })
})
.then(response => response.json())
.then(data => console.log('SUCCESS:', data))
.catch(error => console.error('ERROR:', error));