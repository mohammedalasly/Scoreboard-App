# Scoreboard App README

## Overview

The Scoreboard App is a simple JavaScript-based web application that allows you to keep track of scores for a **HOME** team and a **GUEST** team. The app provides buttons to increment the scores for each team and a "Rematch" button to reset the scores to zero.

## Getting Started

To use the Scoreboard App, follow these steps:

1. Clone the repository or download the `index.html` and `script.js` files to your local machine.

2. Open the `index.html` file in your preferred web browser.

## How to Use

Once the Scoreboard App is loaded in your web browser, you can interact with it using the following features:

### Score Tracking

- **Home Team**: Use the following buttons to increment the home team's score:

  - **Home +1**: Adds 1 point to the home team's score.
  - **Home +2**: Adds 2 points to the home team's score.
  - **Home +3**: Adds 3 points to the home team's score.

- **Guest Team**: Use the following buttons to increment the guest team's score:
  - **Guest +1**: Adds 1 point to the guest team's score.
  - **Guest +2**: Adds 2 points to the guest team's score.
  - **Guest +3**: Adds 3 points to the guest team's score.

The updated scores for both teams will be displayed on the screen.

### Rematch

If you want to start a new game or reset the scores to zero, click the "Rematch" button. This will reset both the home team's and guest team's scores to zero.

## Code Overview

The main JavaScript code in `script.js` contains the following elements:

- **Score Variables**: The `homeScore` and `guestScore` variables hold the current scores for the home team and guest team, respectively.

- **Score Element Retrieval**: The `homeEl` and `guestEl` variables represent the HTML elements with the IDs "home-score" and "guest-score," which are used to display the scores for the home team and guest team, respectively.

- **Functions to Increment Scores**: The following functions are used to update the scores for each team and reflect the changes in the corresponding HTML elements:

  - `home1()`, `home2()`, `home3()`: Increment the home team's score by 1, 2, and 3 points, respectively.
  - `guest1()`, `guest2()`, `guest3()`: Increment the guest team's score by 1, 2, and 3 points, respectively.

- **Rematch Function**: The `rematch()` function resets both the home team's and guest team's scores to zero.

## Contribution

If you encounter any issues with the Scoreboard App or have suggestions for improvements, feel free to open an issue or submit a pull request in the repository. We welcome and appreciate your contributions!

Enjoy tracking scores with the Scoreboard App! 🏀🏆 [app.netlify.com](https://capable-klepon-41fa68.netlify.app/)

![Scoreboard](/Scoreboard.png)
