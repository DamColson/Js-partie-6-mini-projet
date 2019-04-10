//Tableau initial comprenant 10 strings, elles même contenant les questions et réponses possibles du quizz

var questions = ['Combien vaut ln(e(1))? :, 0, 1, e(1), Ceci n\'est pas défini',
  'Que se passe t-il lorsque l\'on divise un nombre par zéro? :, Paul abat un innocent petit lapin, on obtient un très grand chiffre, on obtient un très petit chiffre, une bonne vieille erreur des familles',
  'Quel lettre représente l\'ensemble des nombres complexes :, I, R, C, X',
  'Un lapin achète 7 cagettes de légumes. Chaque cagette contient 7 choux et 5 carottes. Chaque légume contient 17 pucerons. Combien y a t-il de lapin au total? :, 49, 1428, 84, 1',
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

function resetStyle() {
  document.getElementById('answer1').style = '';
  document.getElementById('answer2').style = '';
  document.getElementById('answer3').style = '';
  document.getElementById('answer4').style = '';
}

function disableClick(){
  for(i=0;i<4;i++){
    document.getElementById('answer'+(i+1)).removeAttribute('onclick');
  }
}

function enableClick(){
  for(i=0;i<4;i++){
    document.getElementById('answer'+(i+1)).setAttribute('onclick','checkAnswer(this)')
  }
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
      disableClick();
      console.log('question répondue')
    } else {
      console.log('question non répondue')
      resetStyle();
      quizz();
      enableClick();
    }
  } else if (indexQuestions == 9) {
    alert('il n\'y a pas d\'autre question');
    document.getElementById('score').textContent = goodAnswers;
  } else {
    indexQuestions++;
    if ((choiceColor[indexQuestions] != null)) {
      resetStyle();
      document.getElementById(choiceAnswer[indexQuestions]).style.backgroundColor = choiceColor[indexQuestions];
      quizz();
      disableClick();
      console.log('question répondue')
    } else {
      console.log('question non répondue')
      resetStyle();
      quizz();
      enableClick();
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
      disableClick();
      console.log('question repondue')
    } else {
      console.log('question non repondue')
      resetStyle();
      quizz();
      enableClick();
    }
  }
}

function checkAnswer(td) {
  if (td.id == answers[indexQuestions]) {
    td.style.backgroundColor = 'green';
    goodAnswers++;
    disableClick();
  } else {
    td.style.backgroundColor = 'yellow';
    document.getElementById(answers[indexQuestions]).style.backgroundColor = 'green';
    disableClick();
  }
  choiceColor[indexQuestions] = td.style.backgroundColor;
  choiceAnswer[indexQuestions] = td.id;
}
