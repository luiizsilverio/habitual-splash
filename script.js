const { body } = document;

function changeBackground(number) {
  // check if background alreading showing
  let previousBackground;

  if (body.className) {
    previousBackground = body.className;
  }

  body.className = "";

  switch (number) {
    case '1':
      if (previousBackground === 'background-1') {
        return false
      } else {
        return body.classList.add('background-1');
      }
    case '2':
      if (previousBackground === 'background-2') {
        return false
      } else {
        return body.classList.add('background-2');
      }
    case '3':
      if (previousBackground === 'background-3') {
        return false
      } else {
        return body.classList.add('background-3');
      }
    case '4':
      if (previousBackground === 'background-4') {
        return false
      } else {
        return body.classList.add('background-4');
      }
    default:
      break;
  }
}