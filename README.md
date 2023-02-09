# Ayaura

### Ayaura is an Ai Image generator app built on DALL-E with the help of chat-GPT, You need to only imagine and let the magic happens 😉.
### It's a funny app where you enter text and the Ai transforms it into a pic, there's a gallery where you can find all of the others' imaginations, fortunately the name of the artist is not takken so have fun 😂.

## How to try the App

You can install "expo client" from the app store and try the hosted version here : https://expo.dev/@momen_gharib/Ayaura?serviceType=classic&distribution=expo-go.

## How to install it locally
- This project uses node.js so if you don't have it yet, you can install node.js from here first : [Node.js](https://nodejs.org/en/)

- Then head to the directory you want to store the app, open the terminal and follow these instructions
```
git clone https://github.com/MomenGharib1/Ayaura.git.
cd client
npm install
npm start
Enter "a" to open it in android studio simulator.
Enter "w" to open it as a web application (not recommended)
```
- open a new terminal

```
cd server
npm install
npm start
```
- Now your default browser will open and you wiil see home page.
- It may takes max 20s to generate the pic, max 30s to load all the pics in the gallery.
- any violated prompts are not accepted and the Ai won't generate the pic.

![image](https://user-images.githubusercontent.com/94765709/217947578-7d04fa13-8ce0-45c6-8122-cd306851ed83.png)


## tools used

- React Native
- openAi
- chat-GPT
- DALL-E
- expo
- express
- node.js
- mongoDB for storing pics urls and prompts.
- cloudinary for storing pics.

## Important

unfortunately, if you wanted to try the app in your local machine, you will not have the access to the original database of the app as it uses my personal account, so you should make a mongoDB account and link that account to the project in the index.js file in server directory.
