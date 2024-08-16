let string = "", memory = 0;
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      try {
        // Attempt to evaluate the expression
        string = eval(string);
        if (string === undefined || string === Infinity || string === -Infinity) {
          throw new Error('Invalid calculation');
        }
        document.querySelector('input').value = string;
      } catch (error) {
        // Display 'error' in the input box if there's an exception
        document.querySelector('input').value = error.message;
        // error is an exception object.
        string = ""; // Clear the string after showing the error
      }
    } else if (e.target.innerHTML == 'C') {
      string = "";
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == 'M+') {
      try {
        let result = eval(string);
        memory += parseFloat(result) || 0;
        string = "";
        document.querySelector('input').value = string;
      } catch (error) {
        document.querySelector('input').value = error.message;
        string = "";
      }
    } else if (e.target.innerHTML == 'M-') {
      try {
        let result = eval(string);
        memory -= parseFloat(result) || 0;
        string = "";
        document.querySelector('input').value = string;
      } catch (error) {
        document.querySelector('input').value = error.message;
        string = "";
      }
    } else if (e.target.innerHTML == 'MR') {
      string = memory.toString();
      document.querySelector('input').value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});
