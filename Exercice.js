  function setUserName() {
    let name = $('#name').val();
    localStorage.setItem("nom", name);
    $('#firstIntro').fadeOut(1000, function() {});
    $('#age').removeClass('d-none').hide().delay(800).fadeIn(1000, function() {});
    $('#userAge').text(function() {
      return 'Dis moi ' + name;
    });
  }

  function setUserAge() {
    let name = $('#name').val();
    localStorage.setItem("nom", name);
    if ($('#returnAge').val() > 10 && $('#returnAge').val() < 16) {
      $('#age').fadeOut(1000, function() {});
      $('#choice').removeClass('d-none').hide().delay(800).fadeIn(1000, function() {});
      $('#userChoice').text(function() {
        return 'Alors ' + name;
      });
    } else if($('#returnAge').val() <= 10){
      $('#age').fadeOut(1000, function() {});
      $('#gender').removeClass('d-none').hide().delay(800).fadeIn(1000, function() {});
      $('#userGender').text(function() {
        return 'Dernière question ' + name;
      });
    }else{
        $('#age').fadeOut(1000, function() {});
        initiateQuizz();
      }
    }

  function setUserChoice() {
    let name = $('#name').val();
    localStorage.setItem("nom", name);
    if ($('#returnChoice').val() == 'Quizz enfant') {
      $('#choice').fadeOut(1000, function() {});
      $('#gender').removeClass('d-none').hide().delay(800).fadeIn(1000, function() {});
      $('#userGender').text(function() {
        return 'Dernière question ' + name;
      });
    } else {
      $('#choice').fadeOut(1000, function(){});
      initiateQuizz();
    }
  }

  function initiateQuizz() {
    if ($('#returnAge').val() >= 16 || ($('#returnChoice').val() == 'Quizz adulte')) {
      $('#gender').fadeOut(1000, function() {});
      $('#quizzHUD').removeClass('d-none').hide().delay(800).fadeIn(1000, function() {});
      quizz();
    } else if ($('#returnAge').val() <= 10 && $('#returnGender').val() == 'Un garçon') {
      console.log('entrée dans condition')
      $('#gender').fadeOut(1000, function() {});
      $('#quizzJrHUD').removeClass('d-none').hide().delay(800).fadeIn(1000, function() {});
      $('li').removeClass('bg-lightblue').removeClass('text-danger').addClass('bg-pink');
      $('button').removeClass('bg-lightblue').removeClass('text-danger').addClass('bg-pink');
      quizzJr();
    } else if ($('#returnAge').val() <= 10 && $('#returnGender').val() == 'Une fille') {
      $('#gender').fadeOut(1000, function() {});
      $('#quizzJrHUD').removeClass('d-none').hide().delay(800).fadeIn(1000, function() {});
      $('li').removeClass('bg-lightblue').removeClass('text-danger').addClass('bg-navy');
      $('button').removeClass('bg-lightblue').removeClass('text-danger').addClass('bg-navy');
      quizzJr();
    }else if(($('#returnChoice').val() == 'Quizz enfant') && $('#returnGender').val() == 'Une fille'){
      $('#gender').fadeOut(1000, function() {});
      $('#quizzJrHUD').removeClass('d-none').hide().delay(800).fadeIn(1000, function() {});
      $('li').removeClass('bg-lightblue').removeClass('text-danger').addClass('bg-navy');
      $('button').removeClass('bg-lightblue').removeClass('text-danger').addClass('bg-navy');
      quizzJr();
    }else if(($('#returnChoice').val() == 'Quizz enfant') && $('#returnGender').val() == 'Un garçon'){
      $('#gender').fadeOut(1000, function() {});
      $('#quizzJrHUD').removeClass('d-none').hide().delay(800).fadeIn(1000, function() {});
      $('li').removeClass('bg-lightblue').removeClass('text-danger').addClass('bg-pink');
      $('button').removeClass('bg-lightblue').removeClass('text-danger').addClass('bg-pink');
      quizzJr();
    }
  }

  $('#sendName').click(setUserName);
  $('#sendAge').click(setUserAge);
  $('#sendGender').click(initiateQuizz);
  $('#sendChoice').click(setUserChoice);



  //Tableau initial comprenant 10 strings, elles même contenant les questions et réponses possibles du quizz

  var questions = ['Combien vaut ln(e(1))? :, 0, 1, e(1), Ceci n\'est pas défini',
    'Que se passe t-il lorsque l\'on divise un nombre par zéro? :, Paul abat un innocent petit lapin, on obtient un très grand chiffre, on obtient un très petit chiffre, une bonne vieille erreur des familles',
    'Quel lettre représente l\'ensemble des nombres complexes :, I, R, C, X',
    'Une famille de sept lapins va au marché. Chaque lapin achète 7 cagettes de légumes. Chaque cagette contient 7 choux et 5 carottes. Chaque légume contient 17 pucerons. Combien y a t-il de lapin au total? :, 49, 1428, 84, 7',
    'Que vaut Δ pour une équation du second degré de type ax²+bx+c=0 ? :, b²-4*a*c, -b²-4*a*c, b²+4*a*c ,b²-4*a*(-c)',
    'Quelle est la dérivée du logarithme népérien de x ? :, 1/x, x*ln(x)-x,-1/x², exp(x)',
    'Quelle est la primitive du logarithme népérien de x ? :, 1/x, x*ln(x)-x,-1/x²,exp(x)',
    'Laquelle de ces propositions n\'est pas une identité remarquable ? :,a²-2ab+b²,a²-b²,a²+2ab-b², a²+2ab+b²',
    'Comment s\'appelle notre formateur tyrannique ?:, Anousone, Anusone,Anoussone,Anussone',
    'Jean-Michel chevalin possédait un cheval de couleur chocolat. De quelle couleur était son cheval??? :, #00FFFF,#FFE4C4,#DC143C,#D2691E'
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

  //fonction permettant de reset le style quand on passe d'une question à l'autre

  var moitMoitTable1 =[];
  var moitMoitTable2 =[];


  function resetStyle() {
    $('#answer1').css('backgroundColor', '');
    $('#answer2').css('backgroundColor', '');
    $('#answer3').css('backgroundColor', '');
    $('#answer4').css('backgroundColor', '');
  }


  //fonction désactivant le clic gauche si une réponse a déjà été fournie

  function disableClick() {
    for (i = 0; i < 4; i++) {
      $('#answer' + (i + 1)).removeAttr('onclick');
    }
  }

  // fonction reactivant le click gauche si aucune réponse l'a été donné à la question

  function enableClick() {
    for (i = 0; i < 4; i++) {
      $('#answer' + (i + 1)).attr('onclick', 'checkAnswer(this)')
    }
  }

  function moitMoit(){
      if((choiceColor[indexQuestions] == null)){
        var random1=1+Math.floor(Math.random()*4);
        var random2=1+Math.floor(Math.random()*4);
        while('answer'+random1 == answers[indexQuestions] || 'answer'+random2 == answers[indexQuestions] || (random1==random2)) {
          random1=1+Math.floor(Math.random()*4);
          random2=1+Math.floor(Math.random()*4);
        }
        $('#answer'+random1).hide();
        $('#answer'+random2).hide();
        $('#moitMoit').remove();
        moitMoitTable1[indexQuestions]='answer'+random1;
        moitMoitTable2[indexQuestions]='answer'+random2;
      }else{
        alert('Déja répondu')
      }
  }

  function resetMoitMoit(){

    if(moitMoitTable1[indexQuestions]!=null && moitMoitTable2[indexQuestions]!=null){
      $('#'+moitMoitTable1[indexQuestions]).hide();
      $('#'+moitMoitTable2[indexQuestions]).hide();
    }else{
      $('#answer1').show();
      $('#answer2').show();
      $('#answer3').show();
      $('#answer4').show();
    }
  }
  //fonction quizz principal, créant des tableau a partir des string du tableau questions et les inserant dans la page html du quizz

  function quizz() {
    resetMoitMoit();
    question = questions[indexQuestions].split(',');
    $('#question').text(function() {
      return question[0];
    });
    $('#answer1').text(function() {
      return question[1];
    });
    $('#answer2').text(function() {
      return question[2];
    });
    $('#answer3').text(function() {
      return question[3];
    });
    $('#answer4').text(function() {
      return question[4];
    });
    resetMoitMoit();
  }





  //fonction permettant de comparer la réponse choisie avec la réponse attendues
  function checkAnswer(li) {
    //si l'id de la réponse choisie est la meme que la réponse attendue se trouvant dans le tableau de réponse a l'index en cours, alors le backgroundcolor de l'index choisie deviens vert, le compteur de bonne réponse est incrementer et le clic est désactivé
    if (li.id == answers[indexQuestions]) {
      li.style.backgroundColor = 'green';
      goodAnswers++;
      disableClick();
    } else {
      //si l'id de la réponse choisie n'est pas la meme que celle attendu, le background lié a l'id en question deviens jaune, le background de la réponse attendue devient vert et le clic est désactivé
      li.style.backgroundColor = 'red';
      $('#' + answers[indexQuestions]).css('backgroundColor', 'green');
      disableClick();
    }
    //la couleur du background qui aura été mis sur la réponse choisie est stockée dans choiceColor a l'indexQuestions en cours
    choiceColor[indexQuestions] = li.style.backgroundColor;
    //l'id de la réponse choisie est stockée dans le tableau choiceAnswer a l'indexQuestions en cours
    choiceAnswer[indexQuestions] = li.id;
  }

  //fonction permettant de passer a la question suivante lorsque l'on appuie sur le bouton next

  function next() {
    //si on est a la question 9 et que l'on passe a la 10, le bouton next sera remplacé par un bouton Fin
    if (indexQuestions == 8) {
      indexQuestions++;
      $('#Next').text(function() {
        return 'Fin';
      });
      //Si le tableau choiceColor ( question deja répondue) n'est pas vide pour l'indexQuestions en cours, alors le style sera reset, la réponse donnée sera affichée, le quizz se lancera et le click sera désactivé
      if ((choiceColor[indexQuestions] != null)) {
        resetStyle();
        $('#' + choiceAnswer[indexQuestions]).css('backgroundColor', choiceColor[indexQuestions]);
        quizz();
        disableClick();
      } else {
        //Si le tableau choiceColor est vide, alors le style est reset, le quizz est lancé et le click est réactivé
        resetStyle();
        quizz();
        enableClick();
      }
      //si la question est la 10eme, une alerte apparait pour prevenir qu'il n'y a pas d'autre question et le nombre de bonne réponses apparait dans le html
    } else if (indexQuestions == 9) {
      $('#quizzHUD').hide();
      $('#score').text(function() {
        return 'Vous avez obtenu ' + goodAnswers + ' bonnes réponses !'
      });
      $('#End').removeClass('d-none');
    } else {
      //si la question n'est ni la 9eme ni la 10eme, l'indexQuestions est incrémenter et une nouvelle condition entre en jeu
      indexQuestions++;
      //si choiceColor n'est pas vide pour l'index en cours, le style est reset, la réponse donnée est séléctionnée, le quizz se lance et le click désactivé
      if ((choiceColor[indexQuestions] != null)) {
        resetStyle();
        $('#' + choiceAnswer[indexQuestions]).css('backgroundColor', choiceColor[indexQuestions]);
        quizz();
        disableClick();
        //Si choiceColor est vide, le style est reset, le quizz lancé et le click reactivé
      } else {
        resetStyle();
        quizz();
        enableClick();
      }
    }
  }

  //fonction permettant de revenir a une question anterieure en cliquant sur le bouton previous
  function prev() {

    //si la question est la premiere, alors le bouton Next affichera bien Next une alerte sera envoyé quand on essaie de passer a la page précédente
    if (indexQuestions == 0) {
      $('#Next').text(function() {
        return 'Next';
      });
      alert('Vous êtes déjà à la première question');
    } else {
      //si la question n'est pas la premiere, lorsque l'on appuiera sur prev, le bouton Next affichera Next et l'indexQuestions sera décrémenté et une nouvelle condition sera prise en compte
      $('#Next').text(function() {
        return 'Next';
      });
      indexQuestions--;
      //si choiceColor n'est pas vide pour l'indexQuestions en cours, alors le style est reset, la réponse donnée est affichée, le quizz se lance et et clic est désactivé
      if ((choiceColor[indexQuestions] != null)) {
        resetStyle();
        $('#' + choiceAnswer[indexQuestions]).css('backgroundColor', choiceColor[indexQuestions]);
        quizz();
        disableClick();
      } else {
        //si choiceColor est vide, alors le style est reset, le quizz se lance et le clic est activé
        resetStyle();
        quizz();
        enableClick();
      }
    }
  }

  $('#End').click(function() {
    location.reload();
  });




  var questionsJr = ['Quel est le reste dans la division de 127 par 3 ?,0, 1, 2,127',
    'Comment s\'appelle le perroquet du terrible Jafar dans Aladdin ? :,Iago,Abu,Popole,Rajah',
    'Comment s\'appelle le célèbre duo qui vient en aide a Simba dans le roi lion ? :, Jackie et Michel,Bonnie et Clyde , Watson et Holmes, Timon et Pumba',
    'Dans l\'univers de mario quelle princesse est associée à Luigi ? :, Daisy, Bowser, Peach, Toad',
    'L\'une de ces 4 tortues n\'est pas un célèbre ninja. Laquelle est-ce ? :, Michelangelo, Donnatelo, Franklin ,Raphael',
    'Quelle équipe de football ne s\'est pas récement faite souiller ? :, Le PSG,Le PSG,Le PSG,La réponse D',
    'Quel pays est célèbre pour avoir batit la grande muraille de chine ? :,Le Congo,La chine,La Belgique,L\'Ousbekistan',
    'Dans quel jeu vidéo peut-on incarner un personnage sans bras ni jambes ? :,Rayman,Fifa 2019,Street Fighter,Hello Kitty au pays des rêves',
    'Lequel de ces animaux n\'est pas un chien ? :,Le berger allemand,Le caniche,l\'akita inu,Le sacré de birmanie',
    'Quel moustachu a été le principal adversaire de la France lors de la seconde guerre mondiale? :,Jésus Christ,Le Professeur Tournesol,Ned Flanders,Adolph Hitler'
  ];


  var answersJr = ['answer2Jr', 'answer1Jr', 'answer4Jr', 'answer1Jr', 'answer3Jr', 'answer4Jr', 'answer2Jr', 'answer1Jr', 'answer4Jr', 'answer4Jr'];


  var choiceColorJr = [];

  //Initialisation d'un tableau vide qui servira afin de stocker les id des réponses choisies

  var choiceAnswerJr = [];

  //Initialisation d'un index servant a parcourir le tableau questions ainsi que les autres tableaux

  var indexQuestionsJr = 0;

  //initialisation d'un compteurs de bonnes réponses

  var goodAnswersJr = 0;

  var moitMoitTable1Jr =[];
  var moitMoitTable2Jr =[];
  //fonction permettant de reset le style quand on passe d'une question à l'autre

  function resetStyleJr() {
    $('#answer1Jr').css('backgroundColor', '');
    $('#answer2Jr').css('backgroundColor', '');
    $('#answer3Jr').css('backgroundColor', '');
    $('#answer4Jr').css('backgroundColor', '');
  }

  //fonction désactivant le clic gauche si une réponse a déjà été fournie

  function disableClickJr() {
    for (i = 0; i < 4; i++) {
      $('#answer' + (i + 1) + 'Jr').removeAttr('onclick');
    }
  }

  // fonction reactivant le click gauche si aucune réponse l'a été donné à la question

  function enableClickJr() {
    for (i = 0; i < 4; i++) {
      $('#answer' + (i + 1) + 'Jr').attr('onclick', 'checkAnswerJr(this)')
    }
  }

  function moitMoitJr(){
      if((choiceColorJr[indexQuestionsJr] == null)){
        var random1Jr=1+Math.floor(Math.random()*4);
        var random2Jr=1+Math.floor(Math.random()*4);
        while('answer'+random1Jr+'Jr' == answersJr[indexQuestionsJr] || 'answer'+random2Jr+'Jr' == answersJr[indexQuestionsJr] || (random1Jr==random2Jr)) {
          random1Jr=1+Math.floor(Math.random()*4);
          random2Jr=1+Math.floor(Math.random()*4);
        }
        $('#answer'+random1Jr+'Jr').hide();
        $('#answer'+random2Jr+'Jr').hide();
        $('#moitMoitJr').remove();
        moitMoitTable1Jr[indexQuestionsJr]='answer'+random1Jr+'Jr';
        moitMoitTable2Jr[indexQuestionsJr]='answer'+random2Jr+'Jr';
      }else{
        alert('Déja répondu')
      }
  }

  function resetMoitMoitJr(){

    if(moitMoitTable1Jr[indexQuestionsJr]!=null && moitMoitTable2Jr[indexQuestionsJr]!=null){
      $('#'+moitMoitTable1Jr[indexQuestionsJr]).hide();
      $('#'+moitMoitTable2Jr[indexQuestionsJr]).hide();
    }else{
      $('#answer1Jr').show();
      $('#answer2Jr').show();
      $('#answer3Jr').show();
      $('#answer4Jr').show();
    }
  }

  //fonction quizz principal, créant des tableau a partir des string du tableau questions et les inserant dans la page html du quizz

  function quizzJr() {
    resetMoitMoitJr();
    questionJr = questionsJr[indexQuestionsJr].split(',');
    $('#questionJr').text(function() {
      return questionJr[0];
    });
    $('#answer1Jr').text(function() {
      return questionJr[1];
    });
    $('#answer2Jr').text(function() {
      return questionJr[2];
    });
    $('#answer3Jr').text(function() {
      return questionJr[3];
    });
    $('#answer4Jr').text(function() {
      return questionJr[4];
    });
    resetMoitMoitJr();
  }

  //fonction permettant de comparer la réponse choisie avec la réponse attendues
  function checkAnswerJr(li) {
    //si l'id de la réponse choisie est la meme que la réponse attendue se trouvant dans le tableau de réponse a l'index en cours, alors le backgroundcolor de l'index choisie deviens vert, le compteur de bonne réponse est incrementer et le clic est désactivé
    if (li.id == answersJr[indexQuestionsJr]) {
      li.style.backgroundColor = 'green';
      goodAnswersJr++;
      disableClickJr();
    } else {
      //si l'id de la réponse choisie n'est pas la meme que celle attendu, le background lié a l'id en question deviens jaune, le background de la réponse attendue devient vert et le clic est désactivé
      li.style.backgroundColor = 'red';
      $('#' + answersJr[indexQuestionsJr]).css('backgroundColor', 'green');
      disableClickJr();
    }
    //la couleur du background qui aura été mis sur la réponse choisie est stockée dans choiceColor a l'indexQuestions en cours
    choiceColorJr[indexQuestionsJr] = li.style.backgroundColor;
    //l'id de la réponse choisie est stockée dans le tableau choiceAnswer a l'indexQuestions en cours
    choiceAnswerJr[indexQuestionsJr] = li.id;
  }

  //fonction permettant de passer a la question suivante lorsque l'on appuie sur le bouton next

  function nextJr() {
    //si on est a la question 9 et que l'on passe a la 10, le bouton next sera remplacé par un bouton Fin
    if (indexQuestionsJr == 8) {
      indexQuestionsJr++;
      $('#NextJr').text(function() {
        return 'Fin';
      });
      //Si le tableau choiceColor ( question deja répondue) n'est pas vide pour l'indexQuestions en cours, alors le style sera reset, la réponse donnée sera affichée, le quizz se lancera et le click sera désactivé
      if ((choiceColorJr[indexQuestionsJr] != null)) {
        resetStyleJr();
        $('#' + choiceAnswerJr[indexQuestionsJr]).css('backgroundColor', choiceColorJr[indexQuestionsJr]);
        quizzJr();
        disableClickJr();
      } else {
        //Si le tableau choiceColor est vide, alors le style est reset, le quizz est lancé et le click est réactivé
        resetStyleJr();
        quizzJr();
        enableClickJr();
      }
      //si la question est la 10eme, une alerte apparait pour prevenir qu'il n'y a pas d'autre question et le nombre de bonne réponses apparait dans le html
    } else if (indexQuestionsJr == 9) {
      $('#quizzJrHUD').hide();
      $('#scoreJr').text(function() {
        return 'Vous avez obtenu ' + goodAnswersJr + ' bonnes réponses !'
      });
      $('#End').removeClass('d-none');
    } else {
      //si la question n'est ni la 9eme ni la 10eme, l'indexQuestions est incrémenter et une nouvelle condition entre en jeu
      indexQuestionsJr++;
      //si choiceColor n'est pas vide pour l'index en cours, le style est reset, la réponse donnée est séléctionnée, le quizz se lance et le click désactivé
      if ((choiceColorJr[indexQuestionsJr] != null)) {
        resetStyleJr();
        $('#' + choiceAnswerJr[indexQuestionsJr]).css('backgroundColor', choiceColorJr[indexQuestionsJr]);
        quizzJr();
        disableClickJr();
        //Si choiceColor est vide, le style est reset, le quizz lancé et le click reactivé
      } else {
        resetStyleJr();
        quizzJr();
        enableClickJr();
      }
    }
  }

  //fonction permettant de revenir a une question anterieure en cliquant sur le bouton previous
  function prevJr() {
    //si la question est la premiere, alors le bouton Next affichera bien Next une alerte sera envoyé quand on essaie de passer a la page précédente
    if (indexQuestionsJr == 0) {
      $('#NextJr').text(function() {
        return 'Next';
      });
      alert('Vous êtes déjà à la première question');
    } else {
      //si la question n'est pas la premiere, lorsque l'on appuiera sur prev, le bouton Next affichera Next et l'indexQuestions sera décrémenté et une nouvelle condition sera prise en compte
      $('#NextJr').text(function() {
        return 'Next';
      });
      indexQuestionsJr--;
      //si choiceColor n'est pas vide pour l'indexQuestions en cours, alors le style est reset, la réponse donnée est affichée, le quizz se lance et et clic est désactivé
      if ((choiceColorJr[indexQuestionsJr] != null)) {
        resetStyleJr();
        $('#' + choiceAnswerJr[indexQuestionsJr]).css('backgroundColor', choiceColorJr[indexQuestionsJr]);
        quizzJr();
        disableClickJr();
      } else {
        //si choiceColor est vide, alors le style est reset, le quizz se lance et le clic est activé
        resetStyleJr();
        quizzJr();
        enableClickJr();
      }
    }
  }

  $('#End').click(function() {
    location.reload();
  });
