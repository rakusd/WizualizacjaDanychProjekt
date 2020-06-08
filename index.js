$(document).ready(function () {
    const quiz = [
        {
            "question": "Ile razy wzrosła cena żyta w 2020 roku?",
            "image": "https://www.quickanddirtytips.com/sites/default/files/images/5360/line_graph.png",
            "goodImage": "https://download.komputerswiat.pl/media/2017/81/3109893/graph-program-do-rysowania-wykresow-matematycznych.jpg",
            "choices": [
                "xd",
                "rakus",
                "to",
                "pała"
            ],
            "correct": "Good",
            "explanation": "Wzrosła aż 5 krotnie",
        },
        {
            "question": "Ile razy wzrosła cena żyta w 2020 roku?",
            "image": "https://www.quickanddirtytips.com/sites/default/files/images/5360/line_graph.png",
            "goodImage": "https://download.komputerswiat.pl/media/2017/81/3109893/graph-program-do-rysowania-wykresow-matematycznych.jpg",
            "choices": [
                "Wrong",
                "Nie",
                "Odp3",
                "Good"
            ],
            "correct": "Good",
            "explanation": "Wzrosła aż 5 krotnie",
        }
    ];
    let currentQuestion = 0,
        score = 0,
        submit = true,
        picked;

    function addChoices(choices) {
        for (var i = 0; i < choices.length; i++) {
            $(`label[for="answer${i}"]`).text(choices[i]);
        }
    }

    function nextQuestion() {
        submit = true;
        $('#explanation').empty();
        $('#question').text(quiz[currentQuestion]['question']);
        $('#questionCounter').text('Pytanie ' + Number(currentQuestion + 1) + ' z ' + quiz.length);
        $('#questionImage').attr('src', quiz[currentQuestion]['image']);
        $('#correctImage').addClass('hidden').attr('src', quiz[currentQuestion]['goodImage']);
        $('.image-legend').addClass('hidden');

        $('#answers-box .field-row').removeClass('correct ').removeClass('incorrect');
        $('#answers-box input').prop("checked", false);

        $('#submitbutton').text('Sprawdź odpowiedź')
            .off('click').attr('disabled');

        addChoices(quiz[currentQuestion]['choices']);
        setupRadioButtons();
    }

    function processQuestion(choice) {
        $('.image-legend').removeClass('hidden');
        $('#correctImage').removeClass('hidden');
        if (quiz[currentQuestion]['choices'][choice] === quiz[currentQuestion]['correct']) {
            $('#answers-box .field-row').eq(choice).addClass('correct');
            $('#explanation').text('Super! ' + quiz[currentQuestion]['explanation']);
            score++;
        } else {
            $('#answers-box .field-row').eq(choice).addClass('incorrect');
            $('#explanation').text('Źle! ' + quiz[currentQuestion]['explanation']);
        }
        currentQuestion++;

        $('#submitbutton').html(currentQuestion !== quiz.length ? "Kolejne pytanie &raquo;" : 'Zakończ quiz').on('click', function () {
            if (currentQuestion === quiz.length) {
                endQuiz();
            } else {
                nextQuestion();
            }
        })
    }

    function setupRadioButtons() {
        $('#answers-box input').on('change', function () {
            picked = $(this).attr('value');

            if (submit) {
                submit = false;
                $('#submitbutton').removeAttr('disabled')
                    .on('click', function () {
                    $('#answers-box input').off('change');
                    $(this).off('click');
                    processQuestion(picked);
                });
            }
        })
    }

    function endQuiz() {
        $('#explanation').empty();
        $('#answers-box').remove();
        $('#imagesDiv').remove();
        $('#submitbutton').remove();
        $("#questionCounter").text('Koniec quizu');
        $('#question').text("Odpowiedziałeś poprawnie na " + score + " z " + quiz.length + " pytań.");
        $(document.createElement('h2')).css({
            'text-align': 'center',
            'font-size': '4em'
        }).text(Math.round(score / quiz.length * 100) + '%').insertAfter('#question');
    }

    function init() {
        nextQuestion();
    }

    init();
});

