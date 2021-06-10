/* Helpfull variables */

const row = {
    'first': document.querySelectorAll('[row1]'),
    'second': document.querySelectorAll('[row2]'),
    'third': document.querySelectorAll('[row3]'),
    'fourth': document.querySelectorAll('[row4]'),
    'fifth': document.querySelectorAll('[row5]'),
    'sixth': document.querySelectorAll('[row6]'),
    'seventh': document.querySelectorAll('[row7]'),
    'eighth': document.querySelectorAll('[row8]'),
    'ninth': document.querySelectorAll('[row9]'),
    'tenth': document.querySelectorAll('[row10]')
};

const rowInput = {
    'first': document.querySelectorAll('[row1-input]'),
    'second': document.querySelectorAll('[row2-input]'),
    'third': document.querySelectorAll('[row3-input]'),
    'fourth': document.querySelectorAll('[row4-input]'),
    'fifth': document.querySelectorAll('[row5-input]'),
    'sixth': document.querySelectorAll('[row6-input]'),
    'seventh': document.querySelectorAll('[row7-input]'),
    'eighth': document.querySelectorAll('[row8-input]'),
    'ninth': document.querySelectorAll('[row9-input]'),
    'tenth': document.querySelectorAll('[row10-input]')
}

const boxes = document.getElementsByClassName('box');

const squares = document.getElementsByClassName('square');

const password = {
  0: squares[6],
  1: squares[20],
  2: squares[34],
  3: squares[48],
  4: squares[62],
  5: squares[76],
  6: squares[90],
  7: squares[104],
  8: squares[118],
  9: squares[132]
};


/* Here, we add Eventlisteners for each box. */

Array.from(boxes).forEach(box => {

    let rowNumber = whichRow(box);
    let whichBox = box;

    box.addEventListener('input', () => {

        handleLetter(rowNumber);
        selectNextBox(whichBox);
    });
});


/* This function on input, select next box */

function selectNextBox(box) {

    let currentLetter = box.getAttribute('letter');

    if(box.value) {
        currentLetter++;

        const nextBox = document.querySelector('[letter="'+currentLetter+'"]');
        nextBox.focus();
    }
}

/* This function validates if word is correct */

function handleLetter(row1) {

    switch(row1) {

        case "row1-input": {

            let word = '';

            rowInput.first.forEach(input => {
                word+=input.value;
            });

            if(word=='django') {
                correct('first');
            }
            else {
                mistake('first');
            }

            break;
        }

        case "row2-input": {

            let word = '';

            rowInput.second.forEach(input => {
                word+=input.value;
            });

            if(word=='ascii') {
                correct('second');
            }
            else {
                mistake('second');
            }

            break;
        }

        case "row3-input": {

            let word = '';

            rowInput.third.forEach(input => {
                word+=input.value;
            });

            if(word=='java') {
                correct('third');
            }
            else {
                mistake('third');
            }

            break;
        }

        case "row4-input": {

            let word = '';

            rowInput.fourth.forEach(input => {
                word+=input.value;
            });

            if(word=='tablica') {
                correct('fourth');
            }
            else {
                mistake('fourth');
            }

            break;
        }

        case "row5-input": {

            let word = '';

            rowInput.fifth.forEach(input => {
                word+=input.value;
            });

            if(word=='case') {
                correct('fifth');
            }
            else {
                mistake('fifth');
            }

            break;
        }

        case "row6-input": {

            let word = '';

            rowInput.sixth.forEach(input => {
                word+=input.value;
            });

            if(word=='c++') {
                correct('sixth');
            }
            else {
                mistake('sixth');
            }

            break;
        }

        case "row7-input": {

            let word = '';

            rowInput.seventh.forEach(input => {
                word+=input.value;
            });

            if(word=='react.js') {
                correct('seventh');
            }
            else {
                mistake('seventh');
            }

            break;
        }

        case "row8-input": {

            let word = '';

            rowInput.eighth.forEach(input => {
                word+=input.value;
            });

            if(word=='api') {
                correct('eighth');
            }
            else {
                mistake('eighth');
            }

            break;
        }

        case "row9-input": {

            let word = '';

            rowInput.ninth.forEach(input => {
                word+=input.value;
            });

            if(word=='skrypt') {
                correct('ninth');
            }
            else {
                mistake('ninth');
            }

            break;
        }

        case "row10-input": {

            let word = '';

            rowInput.tenth.forEach(input => {
                word+=input.value;
            });

            if(word=='this') {
                correct('tenth');
            }
            else {
                mistake('tenth');
            }

            break;
        }

    }

}

// Remove green background, anwser is incorrect

function mistake(which) {
    row[which].forEach(cell => {
        cell.classList.remove('correct');
    });
}

// Adds green background, anwser is correct

function correct(which) {
    row[which].forEach(cell => {
        cell.classList.add('correct');
    });

    if(crossSolved()) {
      let i = 0;
      setInterval(() => {
        if(i>=10) {
          clearInterval();
          return;
        }
        password[i].classList.add('special');
        i++;
      }, 200);
    }
}

// This function defines in which row, letter is. It allows to compare whole speel from row with correct asnwer

function whichRow(box) {

    let rowNumber = undefined;

    if(box.getAttribute('letter')>=1 && box.getAttribute('letter')<=6) {
        rowNumber = 'row1-input';
    }

    if(box.getAttribute('letter')>=7 && box.getAttribute('letter')<=11) {
        rowNumber = 'row2-input';
    }

    if(box.getAttribute('letter')>=12 && box.getAttribute('letter')<=15) {
        rowNumber = 'row3-input';
    }

    if(box.getAttribute('letter')>=16 && box.getAttribute('letter')<=22) {
        rowNumber = 'row4-input';
    }

    if(box.getAttribute('letter')>=23 && box.getAttribute('letter')<=26) {
        rowNumber = 'row5-input';
    }

    if(box.getAttribute('letter')>=27 && box.getAttribute('letter')<=29) {
        rowNumber = 'row6-input';
    }

    if(box.getAttribute('letter')>=30 && box.getAttribute('letter')<=37) {
        rowNumber = 'row7-input';
    }

    if(box.getAttribute('letter')>=38 && box.getAttribute('letter')<=40) {
        rowNumber = 'row8-input';
    }

    if(box.getAttribute('letter')>=41 && box.getAttribute('letter')<=46) {
        rowNumber = 'row9-input';
    }

    if(box.getAttribute('letter')>=47 && box.getAttribute('letter')<=50) {
        rowNumber = 'row10-input';
    }

    return rowNumber;
}

//function responsible for checking if crossword is solved. If so, then it prints out 'Thanks for playing!';

function crossSolved() {
  let solved = true;

  for(const i in row) {
    row[i].forEach(row => {

      if(!(row.classList.contains('correct'))) {
        solved = false;
      }
    });

  }

  return solved;
}
