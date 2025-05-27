## Explanation

This project simulates a download progress bar for a file called "Song.mp3". When the user clicks the **Download Free** button, a progress bar fills up from 0% to 100%, and the percentage is displayed. After the download completes, the button text changes to "Downloaded" and becomes semi-transparent.

---

## Methods and Concepts Used

### 1. **DOM Selection**
- `document.querySelector('button')`: Selects the first `<button>` element.
- `document.querySelector('#percent')`: Selects the element with id `percent`.
- `document.querySelector('#growth')`: Selects the element with id `growth`.

### 2. **Event Handling**
- `btn.addEventListener('click', function(){ ... })`: Adds a click event listener to the button, triggering the download simulation.

### 3. **setInterval()**
- `setInterval(function(){ ... }, 50)`: Repeatedly executes the function every 50 milliseconds, incrementing the progress.

### 4. **setTimeout()**
- `setTimeout(function(){ ... }, 5000)`: Executes the function once after 5 seconds, stopping the progress and updating the button.

### 5. **clearInterval()**
- `clearInterval(pause)`: Stops the interval set by `setInterval` after 5 seconds.

### 6. **DOM Manipulation**
- `percent.innerHTML = grow + '%'`: Updates the percentage text.
- `growth.style.width = grow + '%'`: Visually increases the width of the progress bar.
- `btn.innerHTML = 'Downloaded'`: Changes the button text.
- `btn.style.opacity = 0.5`: Makes the button semi-transparent to indicate it’s disabled.

---

## Summary

The code uses JavaScript’s DOM manipulation and timing functions (`setInterval`, `setTimeout`) to create a simple, animated download progress bar that updates both visually and textually when the user interacts with the button.
