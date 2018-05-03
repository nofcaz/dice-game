# "Pig" Dice Game

This application allows users to play a browser-based version of "Pig," a simple dice game that allows two people to roll a die, continually increase their score, and the first person to reach 100 wins the game. To actually earn points, the players will roll the die and whatever number it lands on will be added to their "current" score. The player is allowed to roll an infinite number of times but they always have the option of "holding" their current score, which would then be added to their total score. Once the player decides to hold, they pass the die to the other person and the game continues. One important rule is that if the die lands on a 1, the current score of that player who rolled is reset to 0 and the die goes to the other person, but the total score remains in tact. This allows for a safe playstyle, where a player could take frequent, small wins with their current score, slowly working towards the end goal, or a reckless one with constant rolling and very few holds. This application in its current form only allows for two players but in a real-world game, any number of people can play together.

This application achieves its functionality through assigning event listeners to each of the buttons, being "New Game," "Roll Dice," and "Hold," and updating the DOM elements for each of the players' current and global scores as the game progresses. As the page first loads and a new game is already initialized, clicking the "New Game" button achieves the exact same state, resetting all scores to 0 and re-hiding the die, while also indicating that it's player 1's turn to roll with the visual indicators of a darkened background in the panel and a red dot next to the name text. As verbose as the script file is for this application, the practicality is evident in the simplicity of the logic and in that way I learned a great deal about JavaScript in general.

## Main page:

![Main](https://i.imgur.com/wcHAPbv.png?1 'Main')

## Game in progress:

![Game](https://i.imgur.com/qCAXy5G.png?1 'Game')

## End screen with winner:

![Win](https://i.imgur.com/r421Hi3.png?1 'Win')