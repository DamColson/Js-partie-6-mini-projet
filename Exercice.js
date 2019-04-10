//Tableau initial comprenant 10 strings, elles même contenant les questions et réponses possibles du quizz

var questions = ['Question 1 :, Réponse 1, Réponse 2, Réponse 3, Réponse 4',
  'Question 2 :, Réponse 1.2, Réponse 2.2, Réponse 3.2, Réponse 4.2',
  'Question 3 :, Réponse 1.3, Réponse 2.3, Réponse 3.3, Réponse 4.3',
  'Question 4 :, Réponse 1.4, Réponse 2.4, Réponse 3.4, Réponse 4.4',
  'Question 5 :, Réponse 1.5, Réponse 2.5, Réponse 3.5, Réponse 4.5',
  'Question 6 :, Réponse 1.6, Réponse 2.6, Réponse 3.6, Réponse 4.6',
  'Question 7 :, Réponse 1.7, Réponse 2.7, Réponse 3.7, Réponse 4.7',
  'Question 8 :, Réponse 1.8, Réponse 2.8, Réponse 3.8, Réponse 4.8',
  'Question 9 :, Réponse 1.9, Réponse 2.9, Réponse 3.9, Réponse 4.9',
  'Question 10 :, Réponse 1.10, Réponse 2.10, Réponse 3.10, Réponse 4.10'
];

//Tableau comprenant les bonnes réponses pour chaque question et qui servira lors de la comparaison réponses données/réponses attendues

var answers = ['answer2', 'answer4', 'answer3', 'answer4', 'answer1', 'answer1', 'answer2', 'answer3', 'answer1', 'answer4'];

//Initialisation d'un tableau vide qui servira afin de stocker les couleur de background des réponses choisies

var choiceColor = [];

//Initialisation d'un tableau vide qui servira afin de stocker les id des réponses choisies

var choiceAnswer = [];

//Initialisation d'un index servant a parcourir le tableau questions ainsi que les autres tableaux

var indexQuestions = 0;

//initialisation d'un compteurs de bonnes réponses

var goodAnswers = 0;

//Appel de l'evenement click lors du click sur le bouton dont l'id est Next

document.getElementById('Next').addEventListener('click', next);

//Appel de l'evenement click lors du click sur le bouton dont l'id est Previous

document.getElementById('Previous').addEventListener('click', prev);

//Appel de l'evenement click lors du click sur le bouton dont l'id est answer1 et execution de la fonction checkAnswer(this)

document.getElementById('answer1').addEventListener('click', function() {
  checkAnswer(this);
});

//Appel de l'evenement click lors du click sur le bouton dont l'id est answer2 et execution de la fonction checkAnswer(this)

document.getElementById('answer2').addEventListener('click', function() {
  checkAnswer(this);
});

//Appel de l'evenement click lors du click sur le bouton dont l'id est answer3 et execution de la fonction checkAnswer(this)

document.getElementById('answer3').addEventListener('click', function() {
  checkAnswer(this);
});

//Appel de l'evenement click lors du click sur le bouton dont l'id est answer4 et execution de la fonction checkAnswer(this)

document.getElementById('answer4').addEventListener('click', function() {
  checkAnswer(this);
});

// function enableClick() {
//   document.getElementById('answer1').addEventListener('click', function() {
//     checkAnswer(this);
//   });
//   document.getElementById('answer2').addEventListener('click', function() {
//     checkAnswer(this);
//   });
//   document.getElementById('answer3').addEventListener('click', function() {
//     checkAnswer(this);
//   });
//   document.getElementById('answer4').addEventListener('click', function() {
//     checkAnswer(this);
//   });
// }

// function disableClick() {
//   document.getElementById('answer1').removeEventListener('click', function() {
//     checkAnswer(this);
//   });
//   document.getElementById('answer2').removeEventListener('click', function() {
//     checkAnswer(this);
//   });
//   document.getElementById('answer3').removeEventListener('click', function() {
//     checkAnswer(this);
//   });
//   document.getElementById('answer4').removeEventListener('click', function() {
//     checkAnswer(this);
//   });
// }

function resetStyle() {
  document.getElementById('answer1').style = '';
  document.getElementById('answer2').style = '';
  document.getElementById('answer3').style = '';
  document.getElementById('answer4').style = '';
}

function quizz() {
  question = questions[indexQuestions].split(',');
  document.getElementById('question').textContent = question[0];
  document.getElementById('answer1').textContent = question[1];
  document.getElementById('answer2').textContent = question[2];
  document.getElementById('answer3').textContent = question[3];
  document.getElementById('answer4').textContent = question[4];

}

function next() {
  if (indexQuestions == 8) {
    indexQuestions++;
    document.getElementById('Next').textContent = 'Fin';
    if ((choiceColor[indexQuestions] != null)) {
      resetStyle();
      document.getElementById(choiceAnswer[indexQuestions]).style.backgroundColor = choiceColor[indexQuestions];
      quizz();
      document.getElementById('answer1').removeEventListener('click', function() {
        checkAnswer(this);
      });
      document.getElementById('answer2').removeEventListener('click', function() {
        checkAnswer(this);
      });
      document.getElementById('answer3').removeEventListener('click', function() {
        checkAnswer(this);
      });
      document.getElementById('answer4').removeEventListener('click', function() {
        checkAnswer(this);
      });
      console.log('question répondue')
    } else {
      console.log('question non répondue')
      resetStyle();
      quizz();
      document.getElementById('answer1').addEventListener('click', function() {
        checkAnswer(this);
      });
      document.getElementById('answer2').addEventListener('click', function() {
        checkAnswer(this);
      });
      document.getElementById('answer3').addEventListener('click', function() {
        checkAnswer(this);
      });
      document.getElementById('answer4').addEventListener('click', function() {
        checkAnswer(this);
      });
    }
  } else if (indexQuestions == 9) {
    alert('il n\'y a pas d\'autre question');
    document.getElementById('score').textContent=goodAnswers;
  } else {
    indexQuestions++;
    if ((choiceColor[indexQuestions] != null)) {
      resetStyle();
      document.getElementById(choiceAnswer[indexQuestions]).style.backgroundColor = choiceColor[indexQuestions];
      document.getElementById('answer1').removeEventListener('click', function() {
        checkAnswer(this);
      });
      document.getElementById('answer2').removeEventListener('click', function() {
        checkAnswer(this);
      });
      document.getElementById('answer3').removeEventListener('click', function() {
        checkAnswer(this);
      });
      document.getElementById('answer4').removeEventListener('click', function() {
        checkAnswer(this);
      });
      console.log('question répondue')
    } else {
      console.log('question non répondue')
      resetStyle();
      quizz();
      document.getElementById('answer1').addEventListener('click', function() {
        checkAnswer(this);
      });
      document.getElementById('answer2').addEventListener('click', function() {
        checkAnswer(this);
      });
      document.getElementById('answer3').addEventListener('click', function() {
        checkAnswer(this);
      });
      document.getElementById('answer4').addEventListener('click', function() {
        checkAnswer(this);
      });

    }
  }
}

function prev() {
  if (indexQuestions == 0) {
    document.getElementById('Next').textContent = 'Next';
    alert('Vous êtes déjà à la première question');
  } else {
    document.getElementById('Next').textContent = 'Next';
    indexQuestions--;
    if ((choiceColor[indexQuestions] != null)) {
      resetStyle();
      document.getElementById(choiceAnswer[indexQuestions]).style.backgroundColor = choiceColor[indexQuestions];
      quizz();
      document.getElementById('answer1').removeEventListener('click', function() {
        checkAnswer(this);
      });
      document.getElementById('answer2').removeEventListener('click', function() {
        checkAnswer(this);
      });
      document.getElementById('answer3').removeEventListener('click', function() {
        checkAnswer(this);
      });
      document.getElementById('answer4').removeEventListener('click', function() {
        checkAnswer(this);
      });
      console.log('question repondue')
    } else {
      console.log('question non repondue')
      resetStyle();
      quizz();
      document.getElementById('answer1').addEventListener('click', function() {
        checkAnswer(this);
      });
      document.getElementById('answer2').addEventListener('click', function() {
        checkAnswer(this);
      });
      document.getElementById('answer3').addEventListener('click', function() {
        checkAnswer(this);
      });
      document.getElementById('answer4').addEventListener('click', function() {
        checkAnswer(this);
      });
    }

  }
}

function checkAnswer(td) {
  if (td.id == answers[indexQuestions]) {
    td.style.backgroundColor = 'green';
    goodAnswers++;
    document.getElementById('answer1').removeEventListener('click', function() {
      checkAnswer(this);
    });
    document.getElementById('answer2').removeEventListener('click', function() {
      checkAnswer(this);
    });
    document.getElementById('answer3').removeEventListener('click', function() {
      checkAnswer(this);
    });
    document.getElementById('answer4').removeEventListener('click', function() {
      checkAnswer(this);
    });

  } else {
    td.style.backgroundColor = 'yellow';
    document.getElementById('answer1').removeEventListener('click', function() {
      checkAnswer(this);
    });
    document.getElementById('answer2').removeEventListener('click', function() {
      checkAnswer(this);
    });
    document.getElementById('answer3').removeEventListener('click', function() {
      checkAnswer(this);
    });
    document.getElementById('answer4').removeEventListener('click', function() {
      checkAnswer(this);
    });
    document.getElementById(answers[indexQuestions]).style.backgroundColor='green';

  }
  choiceColor[indexQuestions] = td.style.backgroundColor;
  choiceAnswer[indexQuestions] = td.id;
}
