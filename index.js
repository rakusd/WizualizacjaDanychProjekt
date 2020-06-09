$(document).ready(function () {
    const quiz = [
        {
            "question": "Ile wynosiła przewidywana oczekiwana długość życia w roku 2000?",
            "image": "images/img1_incorrect.png",
            "goodImage": "images/img1_correct.png",
            "choices": [
                "Nie wiadomo",
                "60 lat",
                "68 lat",
                "70 lat"
            ],
            "correctIndex": 0,
            "explanation": "Poprawna odpowiedź, to nie wiadomo, gdyż długość życia została zbadana tylko dla roku 1955 oraz 2015. Wartości pomiędzy nimi są jedynie liniową interpolacją, która jest trudna do identyfikacji na wykresie biegunowym. Prawidłowy wykres powinien przedstawiać tylko wartości obserwacji.",
            "source": "https://i.redd.it/n3nc8r2qql811.png"
        },
        {
            "question": "Co jest niepoprawnego w poniższym wykresie?",
            "image": "images/img2_incorrect.png",
            "goodImage": "images/img2_correct.png",
            "choices": [
                "Źródło danych jest niepoprawne",
                "Źle dobrany został rodzaj wykresu",
                "Etykiety na wykresie nie są informacyjne",
                "Brak skali czasowej między kategoriami",
                "Suma wartości przekracza 100%",
                "Wszystkie odpowiedzi są poprawne"
            ],
            "correctIndex": 5,
            "explanation": "Wszystkie odpowiedzi są poprawne. W miejscu źródła danych podany został margines błędu (ang. “Margin of Error”). Na wykresie kołowym nie jesteśmy w stanie przedstawić upływu czasu, więc jest on tutaj niepoprawnie użyty. Dodatkowo wykres nie zawiera konkretnych lat tylko względne informacje na temat czasu (dzisiaj), co w przyszłości nie pozwoli określić kiedy przeprowadzana została obserwacja. Dodatkowo, suma wartości procentowych na wykresie kołowym nie sumuje się do 100%.",
            "source": "https://i.imgur.com/apLslaAl.jpg"
        },
        {
            "question": "Jak przedstawia się zależność czasu potrzebnego na wykonanie 20 milionów “zielonych krążków” od liczby robotników wykonujących pracę?",
            "image": "images/img3_incorrect.png",
            "goodImage": "images/img3_correct.png",
            "choices": [
                "Jest to zależność liniowa",
                "Zależność przyjmuje kształt hiperboli",
                "Zależność jest kwadratowa",
                "Zależność jest wykładnicza"
            ],
            "correctIndex": 1,
            "explanation": "Ta zależność przyjmuje kształt hiperboli. Na niepoprawnym wykresie wartości na osi X nie są uporządkowane. Ponadto osie powinny być zamienione, gdyż liczba osób jest stałą wartością, a czas wykonania jest w tym przypadku zmienną.",
            "source": "https://i.redd.it/xp3hnmfkwiv31.png"
        },
        {
            "question": "Czy liczba morderstw z użyciem broni palnej zmalała od momentu wprowadzenia ustawy “Stand your ground”?",
            "image": "images/img4_incorrect.png",
            "goodImage": "images/img4_correct.png",
            "choices": [
                "Tak",
                "Nie",
                "Nie da się tego stwierdzić"
            ],
            "correctIndex": 1,
            "explanation": "Liczba morderstw z użyciem broni palnej wzrosła po wprowadzeniu ustawy. Skala na osi Y została zamieniona, przez co trend wydaje się być odwrotny do rzeczywistego. Podobny efekt ma czerwona ramka - opis tekstowy zwykle jest umieszczany nad tłem, przez co kolor biały zaczyna wyglądać na kolor przekazujący informację.",
            "source": "https://i.redd.it/wyel993y3dmy.jpg"
        },
        {
            "question": "Jak zmieniało się w ostatnich latach zapotrzebowanie na stanowiska techniczne?",
            "image": "images/img5_incorrect.png",
            "goodImage": "images/img5_correct.png",
            "choices": [
                "Rosło",
                "Malało",
                "Nie zmieniało się"
            ],
            "correctIndex": 0,
            "explanation": "Zapotrzebowanie na stanowiska techniczne rosło. Wartości na osi X są w kolejności malejącej, zaburzając chronologię. Przez to trend widoczny na wykresie jest odwrotny do rzeczywistego.",
            "source": "https://www.reddit.com/r/dataisugly/comments/fkvi5t/jobs_in_computing_are_dwindling_rapidly_wait_that/"
        },
        {
            "question": "Jaki jest najpopularniejszy kolor butów?",
            "image": "images/img6_inorrect.png",
            "goodImage": "images/img6_correct.png",
            "choices": [
                "Biały",
                "Niebieski",
                "Czarny",
                "Czerwony"
            ],
            "correctIndex": 2,
            "explanation": "Czarny jest najpopularniejszym kolorem butów. Kolory przypisane słupkom nie odpowiadają kolorom butów. Dodatkowo między kolorami nie ma określonego porządku, w związku z czym czytelniejszy jest ustawienie słupków w kolejności rosnącej lub malejącej.",
            "source": "https://www.reddit.com/r/dataisugly/comments/ey62bz/shoe_color_frequency/"
        },
        {
            "question": "Na końcu przedziału widocznego wartość zysku była w stosunku do wartości sprzedaży...",
            "image": "images/img7_incorrect.png",
            "goodImage": "images/img7_correct.png",
            "choices": [
                "... zdecydowanie większa",
                "... zdecydowanie mniejsza",
                "... prawie taka sama"
            ],
            "correctIndex": 1,
            "explanation": "Wartość była zdecydowanie mniejsza. Każda ze zmiennych ma własną skalę osi Y na wykresie niepoprawnym. Zaburza to wizualizację zależności pomiędzy tymi zmiennymi. Skala dla zmiennych powinna być taka sama.",
            "source": "http://blog.tableau-software.pl/2015/03/najczesciej-popeniane-bedy-przy.html"
        },
        {
            "question": "O ile procent większy jest plon ziarna pszenicy typu APOSTEL od plonu ziarna pszenicy typu Formacja?",
            "image": "images/img8_incorrect.png",
            "goodImage": "images/img8_correct.png",
            "choices": [
                "250%",
                "100%",
                "50%",
                "5%"
            ],
            "correctIndex": 3,
            "explanation": "Plon ziarna pszenicy typu APOSTEL jest większy od plonu ziarna pszenicy typu Formacja o 5 punktów procentowych, a także o 5%. Wobec tego prawidłowa odpowiedź to 105%. Błąd wizualizacji polega na wykorzystaniu utrudniającego odczytanie danych wizerunku kłosa oraz osi Y nie zaczynającej się w 0.",
            "source": ""
        },
        {
            "question": "Jaki procent ludności odpowiedziało “Zdecydowanie nie” na pytanie ankietowe?",
            "image": "images/img9_incorrect.png",
            "goodImage": "images/img9_correct.png",
            "choices": [
                "11-15%",
                "16-20%",
                "21-25%",
                "26-30%"
            ],
            "correctIndex": 3,
            "explanation": "Prawidłowa odpowiedź to 29%. Błąd wizualizacji polega na nałożeniu koperty na wykres kołowy oraz zachowania proporcji względem kąta, a nie powierzchni, co jest kontrintuicyjne.",
            "source": ""
        },
        {
            "question": "Czy podwyżka wynagrodzeń nauczycieli w roku 2020 jest wyższa niż w roku 2019?",
            "image": "images/img10_incorrect.png",
            "goodImage": "images/img10_correct.png",
            "choices": [
                "Tak",
                "Nie"
            ],
            "correctIndex": 1,
            "explanation": "Prawidłowa odpowiedź brzmi nie, ponieważ podwyżka wynagrodzeń w 2020r. wynosi 1,4 mld zł. Błąd, a raczej prawdopodobnie celowa dezinformacja, polega na zmianie formy ostatniego słupka - reprezentuje on sumaryczną podwyżkę z lat 2017-2020.",
            "source": ""
        }
    ];
    let currentQuestion = 0,
        score = 0,
        submit = true,
        picked,
        chord,
        tada,
        shutdown,
        startup;

    function addChoices(choices) {
        $('#answers-box').empty();
        $(document.createElement('legend')).text('Wybierz odpowiedź').appendTo('#answers-box');
        for (var i = 0; i < choices.length; i++) {
            var row = $(document.createElement('div')).appendTo('#answers-box');
            row.addClass('field-row');
            
            var answer = $(document.createElement('input'));
            answer.attr('id',`answer${i}`).attr('type','radio').attr('name','answers').attr('value',`${i}`).appendTo(row);
            
            var label = $(document.createElement('label'));
            label.attr('for',`answer${i}`).text(choices[i]).appendTo(row);
        }
    }

    function nextQuestion() {
        submit = true;
        $('#explanation-box').addClass('collapsed');
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
        $('input[type=radio]').each(function() {
            this.disabled=false;
        });
    }

    function processQuestion(choice) {
        $('.image-legend').removeClass('hidden');
        $('#correctImage').removeClass('hidden');
        $('#explanation-box').removeClass('collapsed');

        if (parseInt(choice) === quiz[currentQuestion]['correctIndex']) {
            $('#answers-box .field-row').eq(choice).addClass('correct');
            tada.play();
            score++;
        } else {
            $('#answers-box .field-row').eq(choice).addClass('incorrect');
            chord.play();
        }
        $('#explanation').html(quiz[currentQuestion]['explanation'] + `<br/><a target="_blank" href=${quiz[currentQuestion]['source']}>Grafika oryginalna</a>`);
        currentQuestion++;

        $('#submitbutton').html(currentQuestion !== quiz.length ? "Kolejne pytanie &raquo;" : 'Zakończ quiz').on('click', function () {
            if (currentQuestion === quiz.length) {
                endQuiz();
            } else {
                nextQuestion();
            }
        })

        $('input[type=radio]').each(function() {
            this.disabled=true;
        });
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
        $('#explanation-box').addClass('collapsed');
        $('#answers-box').remove();
        $('#imagesDiv').remove();
        $('#submitbutton').remove();
        $("#questionCounter").text('Koniec quizu');
        $('#question').text("Odpowiedziałeś poprawnie na " + score + " z " + quiz.length + " pytań.");
        $(document.createElement('h2')).css({
            'text-align': 'center',
            'font-size': '4em'
        }).text(Math.round(score / quiz.length * 100) + '%').insertAfter('#question');
        shutdown.play();
    }

    function init() {
        startup = new Audio('audio/startup.mp3');
        chord = new Audio('audio/chord.mp3');
        tada = new Audio('audio/tada.mp3');
        shutdown = new Audio('audio/shutdown.mp3');
        nextQuestion();

        $('#login-button').click(function() {
            $('#login-window').hide();
            $('#quiz-window').removeAttr('hidden');
            $('body').removeClass('not-logged').addClass('logged');
            startup.play();
        });
    }

    init();
});

