$(document).ready(function () {
    const quiz = [
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


    jQuery(document).ready(function ($) {


        function htmlEncode(value) {
            return $(document.createElement('div')).text(value).html();
        }


        function addChoices(choices) {
            for (var i = 0; i < choices.length; i++) {
                $(`#answer${i}`).attr('data-index', i).text(choices[i]);
            }
        }

        function nextQuestion() {
            submit = true;
            $('#explanation').empty();
            $('#question').text(quiz[currentQuestion]['question']);
            $('#questionCounter').text('Pytanie ' + Number(currentQuestion + 1) + ' z    ' + quiz.length);
            $('#questionImage').attr('src', quiz[currentQuestion]['image']);
            $('#correctImage').addClass('hidden').attr('src', quiz[currentQuestion]['goodImage']);

            $('#submitbutton').text('Sprawdź odpowiedź').css({
                'color': '#222'
            }).off('click');

            $('.answer').css({
                'background-color': 'white'
            });
            
            addChoices(quiz[currentQuestion]['choices']);
            setupButtons();
        }


        function processQuestion(choice) {
            $('#correctImage').removeClass('hidden');
            if (quiz[currentQuestion]['choices'][choice] == quiz[currentQuestion]['correct']) {
                
                $('.answer').eq(choice).css({
                    'background-color': '#50D943'
                });
                
                $('#explanation').text('Super! ' + quiz[currentQuestion]['explanation']);
                score++;
            } else {
                $('.answer').eq(choice).css({
                    'background-color': '#D92623'
                });

                $('#explanation').text('Źle! ' + quiz[currentQuestion]['explanation']);
            }
            currentQuestion++;

            $('#submitbutton').html(currentQuestion != quiz.length ? "Kolejne pytanie &raquo;" : 'Zakończ quiz').on('click', function () {
                if (currentQuestion == quiz.length) {
                    endQuiz();
                } else {
                    nextQuestion();
                }
            })
        }


        function setupButtons() {
            $('.answer').on('click', function () {
                picked = $(this).attr('name');

                $('.answer').removeAttr('style').off('mouseout mouseover');
                $(this).css({
                    'border-color': '#222',
                    'font-weight': 700,
                    'background-color': '#c1c1c1'
                });

                if (submit) {
                    submit = false;
                    $('#submitbutton').css({
                        'color': '#000'
                    }).on('click', function () {
                        $('.answer').off('click');
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
});

