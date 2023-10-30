var riddle = {
    question: 'Висит груша нельзя скушать.',
    correctAnswer: 'лампочка',
    hints: ['это несъедобное', 'это не фрукт'],
    tries: 3,
    ind: 0,
    checkAnswer(qest) {
        // TODO: написать логику проверки правильного ответа
        // alert для пользователя, console.log()
        if(this.tries===0){
            alert('Вы не уложиились в отведённое количество попыток');
            location.reload();    
            return
        }; 
        this.tries--;
        if (qest.toLowerCase()===this.correctAnswer){
            alert ('Вы отгадали. Игра окончена');
            location.reload();
            return
        } else{
           
            alert('Ответ не верный. Попробуйте ещё раз. Количество оставшихся попыток ' + this.tries + '. Подсказка :  '+ this.hints[this.ind]);
        }
        this.ind++;
        
    },
}

window.onload = function() {
    document.getElementById('riddle').innerText = riddle.question;
}

function check() {
    var input = document.getElementsByTagName('input')[0];

    var guessedAnswer = input.value;

    // if (guessedAnswer.toLowerCase()===riddle.correctAnswer) {
    //     // TODO: вызвать функцию checkAnswer у объекта загадки, передав туда ответ
        riddle.checkAnswer(guessedAnswer);
        
    // }
}



