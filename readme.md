# 🪨📄✂️ Stone Paper Scissors Pro

A sleek, interactive, and modern web-based Rock Paper Scissors game. This project features a high-end "Glassmorphism" UI, dynamic AI logic, and custom CSS animations for an engaging user experience.

## 🚀 Features

* **Modern Glassmorphism UI**: A vibrant blue gradient background with semi-transparent "glass" containers and backdrop-blur effects.
* **Animated Battle Stage**: Dedicated display area where the user and computer moves are revealed with smooth transitions.
* **Suspenseful Gameplay**: Features a "shaking" hand animation during the AI's "thinking" phase to build excitement.
* **Result Feedback**: Custom CSS animations (Bounce for Victory, Wobble for Defeat) triggered based on the game outcome.
* **Real-time Scoreboard**: Tracks and displays user and computer scores dynamically throughout the session.
* **Responsive Design**: Fully functional and visually appealing across different screen sizes.

## 🕹️ How to Play

1.  **Select Your Move**: Click on one of the circular icons (Rock, Paper, or Scissors) at the bottom.
2.  **Wait for the AI**: The battle stage will show shaking hands while the computer "decides" its move.
3.  **Check the Result**: After 1 second, the moves are revealed.
    * **Victory**: The message bar turns green and bounces.
    * **Defeat**: The message bar turns red and wobbles.
    * **Tie**: The message bar stays neutral for a rematch.
4.  **Score**: Watch your score increase as you defeat the computer!

## 🛠️ Technology Stack

* **HTML5**: Semantic structure for the game interface.
* **CSS3**: Advanced styling using Flexbox, CSS Variables, and Keyframe animations.
* **JavaScript (ES6+)**: Core game engine handling randomized AI logic, DOM manipulation, and asynchronous reveal timing.

## 📂 Project Structure

```text
├── index.html      # Main game structure & Battle Stage
├── style.css       # Animations, Glassmorphism UI, & Layout
├── app.js          # AI logic, score tracking, & event handling
├── Rock.png        # Game asset
├── Paper.png       # Game asset
└── Scissor.png     # Game asset
