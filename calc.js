document.addEventListener('DOMContentLoaded', () => {
  const display = document.querySelector('.display');
  const keys = document.querySelector('.keys');

  keys.addEventListener('click', (event) => {
    const button = event.target;
    const buttonText = button.textContent;
    const displayText = display.textContent;

    switch (button.id) {
      case 'equal':
        try {
          display.textContent = eval(displayText);
        } catch {
          display.textContent = 'Error';
        }
        break;

      case 'del':
        // Remove the last character from the display
        display.textContent = displayText.slice(0, -1);
        break;

      case 'alt':
        // Clear everything on the display
        display.textContent = '';
        break;

      default:
        display.textContent += buttonText;
    }
  });
});




  


