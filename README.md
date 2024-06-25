# Algocode-problem-solving

Algocode-problem-solving is an online platform designed for coding interview preparation. It leverages microservices architecture to handle various aspects of coding problem submission, evaluation, and administration.
<img width="1431" alt="image" src="https://github.com/AngelinSneha/AlgoCode-problem-solving/assets/66509492/4b33c7fc-1938-402a-8599-1bce71d38b75">

---

## Features

- **Admin Dashboard**: Allows administrators to enter coding questions securely through a portal. Input sanitization ensures that no malicious code is accepted.

- **Error Logging**: Utilizes the `winston` package for comprehensive error logging, ensuring easy tracking and resolution of issues.

---

## Project Structure

- **Frontend Repository**: The frontend code for Algocode is available at [Algocode-Frontend](https://github.com/AngelinSneha/AlgoCode-Frontend).

- **Evaluation Service**: The code evaluation service responsible for assessing submitted code is hosted at [Algocode-Evaluate-Service](https://github.com/AngelinSneha/Algocode-Evaluate-Service).

- **Submission Service**: Manages the submission of user code to the queue using [Algocode-Submission-Service](https://github.com/AngelinSneha/Algocode-Submission-Service), allowing the evaluation service to process it through BullMQ.

---

## How to Start the Service

To run the Algocode-problem-solving service locally, follow these steps:

   ```bash
   npm install
   npm run dev
