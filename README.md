# Cyberpunk Memory

[Visit the Cyberpunk Memory website here](https://thepyth0nkid.github.io/pp2Memory/)

![Multi-mockup view](assets/doc/techsiniMemory.png)

About the Project

Cyberpunk Memory is an interactive memory game set in a dystopian cyberpunk world on the brink of destruction. In this dark and futuristic environment, the fate of the world hangs by a thread, and the only hope lies in your memory skills.

### Features

- ## Immerse yourself in a cyberpunk-themed memory game

- ## Challenge your memory with a variety of cyberpunk-inspired cards

- ## Test your skills and save the world, one card pair at a time

This website is made up of the following sections:

1. Header
2. Game-area
3. Game controls

## Header

I've kept the header simple, featuring only a background image without any added functionalities. I created the initial background image using Dalle-3 and later enhanced it with Photoshop 2024. Finally, to optimize performance and achieve the visual look you see now, I converted the image to an SVG format.

![Header-image-final](assets/doc/header.png)

## Game-area

Within the game area, you'll encounter a 4x3 memory card game. It's a straightforward game where the objective is to find matching card pairs. By clicking on the start button, the game commences and a 60-second timer begins its countdown. A card will flip over when clicked. Clicking another card will reveal that card as well. If both cards match, they remain face up. Once all the cards have been matched, you win the game. However, if the second card selected doesn't match the first, you'll lose one of your five lives. Should your lives count reach zero or the timer runs out, it's game over. Additionally, when the game is either won or lost, an alert is triggered to notify the player.

![Game-area-image](assets/doc/gameAreaFinal.png)

## Game controls

A well-defined game control area that includes a Start button and a display for critical game elements. Here’s an overview:

- Start Button: Initiate your game with a simple click on the Start button. This action triggers the beginning of the gameplay.
- Timer Display: A 60-second countdown is prominently shown. The game's challenge is to complete your task within this time frame. If the timer runs out, the game ends, and it's considered a loss.
- Life Indicator: Players begin the game with five lives. Every time you flip over two cards that don't match, you lose one life. The game is also lost if your life count drops to zero.

![Game controls-image](assets/doc/gameControls.png)

---

### Strategy

Considering the core UX principles, I began by contemplating the strategy for this website, defining the target users and the features/technologies they would desire.

Target Users for Cyberpunk Memory:

- Aged 18-99
- Gamers and puzzle enthusiasts looking for a unique challenge

Key Expectations of the Users:

- Clarity and Simplicity: Users should easily find their way around the game interface.
- Immersive Visuals: Engaging cyberpunk-themed graphics that draw players into the dystopian world.
- Challenging Gameplay: Memory puzzles that provide both entertainment and mental stimulation.

### Structure

This is a single-page website to allow for desired flow; the navigation bar at the top allows for users to easily move to whatever section of the site they are interested in or they can simply scroll through the information as it is displayed.

---

## Technologies Used

I have used several technologies that have enabled this design to work:

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
  - Used as the basic building block for the project and to structure the content.
- [CSS](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
  - Used to style all the web content across the project.
- [JavaScript](https://www.javascript.com/)
  - Used to make the website fuctional
- [Google Developer Tools](https://developers.google.com/web/tools/chrome-devtools)
  - Used as a primary method of fixing spacing issues, finding bugs, and testing responsiveness across the project.
- [GitHub](https://github.com/)
  - Used to store code for the project after being pushed.
- [Git](https://git-scm.com/)
  - Used for version control by utilising the Gitpod terminal to commit to Git and Push to GitHub.
- [Dall-E3](https://chat.openai.com/)
  - for image creation and inspiration
- [ChatGPT4](https://chat.openai.com/)
  - for text, inspiration and problem solving
- [Youtube](<https://www.youtube.com/watch?v=eMhiMsEC9Uk&list=PLLX1I3KXZ-YH-woTgiCfONMya39-Ty8qw>)
  - for basic structure of the memory game
  
---

## Testing

### User Stories**

I recently shared a preliminary version of "Cyberpunk Memory" in our Slack channel and received invaluable feedback from a fellow student. Their insights were comprehensive, covering a range of improvements and suggestions.

![Slack massage](assets/doc/slackMessage.png)

First of all, I tested all the functions myself. Then I validated and tested everything as standard using all the means listed.

### Lighthouse**

Lighthouse is a feature of Google Chrome developer tools and is used to assess the performance of the website and its features.

![Lighthouse testing](assets/doc/lightHouse.png)

### HTML and CSS Validation**

I validated both my HTML and CSS. At first I had a few errors but they were easy to find and fix

![HTML Error1](assets/doc/htmlErrors.png)

So that in the end there were no more errors.

![HTML](assets/doc/htmlFinal.png)

![css](assets/doc/cssVali.png)

### JavaSkript

#### JSHint Validation Summary

Our JavaScript code for the memory card game has been rigorously validated using JSHint, a popular static analysis tool for JavaScript. The primary aim of this validation was to ensure code quality, adherence to coding standards, and to identify potential errors or code smells.

Key Insights from JSHint Validation

![JSHint](assets/doc/javaWarnings.png)

Use of ES6 Features: The validation process identified 26 warnings, all related to the usage of ES6 (ECMAScript 2015) syntax and features. These warnings are not indicative of code problems but reflect the modern JavaScript standards we've adopted. Our codebase leverages ES6 features such as const and let for variable declarations, arrow functions, template literals, and other advanced functionalities. This approach aligns with contemporary JavaScript practices, offering enhanced readability, efficiency, and scope management.

![JSHintMetrics](assets/doc/metricsJava.png)

- Total Number of Functions: There are 21 functions in the file, showcasing a modular approach to our game logic. This modularity aids in maintaining and scaling the code.

- Function Signatures: The largest function signature takes 2 arguments, while the median number of arguments across all functions is 0. This indicates a predominance of functions with specific, targeted responsibilities, reducing the likelihood of side-effects and enhancing testability.

- Function Size and Complexity:
  - The largest function contains 15 statements, implying a comprehensive implementation of a particular feature. However, the median      number of statements per function is just 2, highlighting that most functions are concise and focused.
  - The most complex function has a cyclomatic complexity value of 6, which is within a reasonable range for JavaScript functions, ensuring    maintainability and readability. The median complexity value is 1, reflecting the straightforward nature of most functions.

- Conclusion
  - The JSHint validation confirms that our JavaScript codebase for the memory card game is well-structured, adheres to modern coding standards, and maintains a balance between functionality and simplicity. Our use of ES6 features underscores our commitment to leveraging current JavaScript capabilities to create an engaging and efficient gaming experience.

---

## Deployment

I deployed this website by using GitPages and following the below steps:

### GitHub pages deployment

1. Log in to GitHub
2. In your Repository section, select the project repository that you want to deploy
3. In the menu located at the top of this section, click 'Settings'
4. Select 'Pages' on the left-hand menu - this is around halfway down
5. In the source section, select branch 'Master' and save
6. The page is then given a site URL which you will see above the source section, it will look like the following:

Please note it can take a while for this link to become fully active.

### Forking the GitHub Repository

If you want to make changes to your repository without affecting it, you can make a copy of it by 'Forking' it. This ensures your original repository remains unchanged.

1. Find the relevant GitHub repository
2. In the top right corner of the page, click the Fork button (under your account)
3. Your repository has now been 'Forked' and you have a copy to work on

### Cloning the GitHub Repository

Cloning your repository will allow you to download a local version of the repository to be worked on. Cloning can also be a great way to backup your work.

1. Find the relevant GitHub repository
2. Press the arrow on the Code button
3. Copy the link that is shown in the drop-down
4. Now open Gitpod & select the directory location where you would like the clone created
5. In the terminal type 'git clone' & then paste the link you copied in GitHub
6. Press enter and your local clone will be created.

---

## Credits

The following websites/articles were used for research and guidance:

- [Learn Vanilla Javascript: Memory Game Tutorial ] (<https://www.youtube.com/watch?v=eMhiMsEC9Uk&list=PLLX1I3KXZ-YH-woTgiCfONMya39-Ty8qw>)

- [Love Running walkthrough project, that always accompanied me on my first project] (<https://learn.codeinstitute.net>)

- [Troubleshooting] (<https://chat.openai.com/>)

- [Readme Tips and Structure] (<https://github.com/daisygunn/la-petite-traveller/blob/master/README.md?plain=1>)

---

## Acknowledgements

This project has been a delightful experience for me, and working with JavaScript to create impressive visuals was incredibly enjoyable and has left me eager for more. I would also like to extend my thanks to Code Sketch for their tutorial on JavaScript memory management, which was extremely helpful. Additionally, my gratitude goes to the Code Institute for their excellent educational materials and superb support. Finally, I want to thank all my fellow students for every piece of advice and for the great conversations.

---
