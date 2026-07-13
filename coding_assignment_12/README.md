# coding_assignment_12
This is an assignment for building testing

# Create an React TypeScript app

So for this assignment we need to create an React Typescript app folder, So below will be the code on to get this.

use this in the terminal in vscode

npx create-react-app taylor_trent_ui_garden --template typescript

simply press y to say yes when it wants to proceed. Then simply wait for it to finish downloading. Then commit the changes to githup to save.

Then simply be in the folder that you created to make things easier. use this to be in the folder.

cd taylor_trent_ui_garden

# Install storybook

Now we are the next step to install storybook.

Please make sure in the folder you created for this step. use the code below to install it.

npm create storybook@latest

this will create to most recent storybook installation.

it will ask the samething like before simply say yes to install.

after installing, itll create two folders, .storybook and a src folder for you to look through.

# Docker build and container set up

Make sure the dockerfile is in the root of the project to prevent any issues. So now create a dockerfile.

the code below builds the container.

docker build -t coding_assignment12 .

then we can use this code after to run the contianer just make sure that your port is the same from the docker file.

docker run --name taylor_trent_coding_assignment12 -p 8083:80 coding_assignment12

now you when you run this you can go to the localhost to see the changes in the react app.

# File Structure

when creating the componements you can follow the same structures for everytype of things were about to create, which are Button, Card, Dropdown, HeroImg, Img, Label, RadioButton, Text.

As for the Table that is to be annouced??? Ill update later.

# Steps on how to run storybook, test, build, then check Docker

To run the react site we use npmm start then we can check here http://localhost:3000

next run storybook open port 6006 .

Then we run some tests we need to use this in the command line

npm test

Thirdly we got the run the production build

npm run build

Now we can check with docker
this build it
docker build -t coding_assignment12 .

then
docker run --name taylor_trent_coding_assignment12 -p 8083:80 coding_assignment12

Now we can check in the browser http://127.0.0.1:8083

if we need to as a last resort we can remove it

docker rm -f taylor_trent_coding_assignment12

