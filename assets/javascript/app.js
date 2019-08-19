$("#start").on('click', function () {

    game.start();

})

$(document).on("click", "#end", function(){
    game.done();
});

var questions = [{
    question: "What is the capital of Sweden?",
    answers: ["Stockholm", "Oslo", "Helsinki", "Bergen"],
    correctAnswer: "Stockholm"
}, {
    question: "What is the world's tallest mountain?",
    answers: ["Ararat", "Nanga Parbat", "Everest", "Olympus"],
    correctAnswer: "Everest"
}, {
    question: "What is the world's longest river?",
    answers: ["Amazon", "Nile", "Yangtze", "Yellow"],
    correctAnswer: "Nile"
}, {
    question: "What is the smallest US state?",
    answers: ["Connecticut", "Delaware", "Vermont", "Rhode Island"],
    correctAnswer: "Rhode Island"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 20,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <=0) {
            console.log("Time is up!");
            game.done();
        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $("#subwrapper").prepend("<h2>Time Remaining: <span id='counter'>120</span> Seconds</h2>");
        
        //remove the start button
        $("#start").remove();

        for (var i = 0; i < questions.length; i++) {
            $("#subwrapper").append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subwrapper").append("<input type='radio' name='question-"+i+"'value='"+questions[i].answers[j]+"'>" + questions[i].answers[j]);
            }
        }
        $("#subwrapper").append("<br><button id='end'>DONE</button>");
    },
    done: function () {
        $.each($('input[name="question-0]": checked'), function() {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1]": checked'), function() {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-2]": checked'), function() {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-3]": checked'), function() {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        this.result();
    },
    result: function () {
        clearInterval(timer);
        $("#subwrapper.h2").remove();
        $("#subwrapper").html("<h2>All done!");
        $("#subwrapper").append("<h3>Correct Answer: " + this.correct);
        $("#subwrapper").append("<h3>Incorrect Answer: " + this.incorrect);
        $("#subwrapper").append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");


    }
}