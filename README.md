Assignment Overview

This assignment 13 is an extension of the UI Component Library created in Coding Assignment 12. The purpose of this assignment is to improve the assignment workflow by integrating code quality checks, continuous integration, and a production ready Docker deployment.

Assignment Features
React Component Library
TypeScript
Storybook
ESLint
Prettier
Husky Git Hooks
GitHub Actions
Docker
Nginx
Prerequisites

Before running this project, install the following software:

Node.js (Version 20 or newer)
npm
Docker Desktop (or Docker Engine)
Git
Installing Dependencies

Clone the repository:

git clone https://github.com/ttaylor45/coding_assignment_13.git

Enter the project folder:

cd coding_assignment_13

Install the project dependencies:

npm install
Running the Application

Start the React development server:

npm start

The application will be available at:

http://localhost:3000
Running Storybook

To view the UI components individually:

npm run storybook

Storybook will run on:

http://localhost:6006
Code Quality Checks
Format the Project

Automatically format the source code:

npm run format

Check formatting without making changes:

npm run format:check
ESLint

Run ESLint:

npm run lint
Automated Tests

Run all Jest tests:

npm run test:ci
Run All Quality Checks

Run every code quality check with a single command:

npm run quality

This command executes:

Prettier
ESLint
Jest Tests

If any of these checks fail, the command exits with an error.

Husky Pre-Commit Hook

Husky has been configured to automatically execute:

npm run quality

before every Git commit.

This ensures:

Code formatting follows the project standard.
ESLint detects code-quality issues.
All tests pass.

If any of these checks fail, Git prevents the commit until the problems are corrected.

GitHub Actions (Continuous Integration)

GitHub Actions has been configured to automatically run on every push and pull request.

The workflow performs the following steps:

Install dependencies
Run Prettier formatting checks
Run ESLint
Run automated tests
Build the production React application

This guarantees that all submitted code satisfies the same quality requirements enforced locally by Husky.

Building the Docker Image

Build the production Docker image:

docker build -t taylor_trent_ui_garden_assignment13 .
Running the Docker Container

Run the container:

docker run -d --name taylor_trent_coding_assignment13 -p 8018:8018 taylor_trent_ui_garden_assignment13

Open the application:

http://127.0.0.1:8018
Docker Commands
Stop the container
docker stop taylor_trent_coding_assignment13
Start the container
docker start taylor_trent_coding_assignment13
Restart the container
docker restart taylor_trent_coding_assignment13
Remove the container
docker rm -f taylor_trent_coding_assignment13
View running containers
docker ps
View all containers
docker ps -a
View Docker images
docker images
View container logs
docker logs taylor_trent_coding_assignment13
Rebuild the Docker image without using the cache
docker build --no-cache -t taylor_trent_ui_garden_assignment13 .
CI/CD Summary

This assignment demonstrates a Continuous Integration (CI) workflow by combining local and remote quality checks.

During development, Husky automatically verifies formatting, linting, and testing before allowing commits.

After code is pushed to GitHub, GitHub Actions repeats the same validation steps to ensure that only code meeting the project's quality standards is accepted.

Finally, Docker creates a production-ready React build that is served by Nginx on port 8018, providing a consistent deployment environment.

Technologies Used
React
TypeScript
Storybook
Jest
React Testing Library
ESLint
Prettier
Husky
GitHub Actions
Docker
Nginx
