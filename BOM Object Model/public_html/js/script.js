var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
var questions = [
    ['2 con vịt đi trước 2 con vịt, 2 con vịt đi sau 2 con vịt, 2 con vịt đi giữa 2 con vịt. Hỏi có mấy con vịt?',
        '2 con',
        '4 con',
        '6 con',
        '8 con',
        "B"
    ],
    ['Lịch nào dài nhất?',
        'Lịch lãm',
        'Lịch sự',
        'Lịch sử',
        'Lịch treo tường',
        "C"
    ],
    ['Quần gì rộng nhất',
        'Quần đảo',
        'Quần chúng',
        'Quần bò',
        'Quần đùi',
        "A"
    ],
    ['Núi nào bị chặt lằm nhiều khúc nhất',
        'Núi Phú Sĩ',
        'Núi Thái Sơn',
        'Núi Đôi',
        'Núi Hymalaya',
        "B"
    ],
    ['100% nguời dân Việt Nam đều phát âm sai từ gì',
        'Nghiêng',
        'Ngổng',
        'Sai',
        'Thúi',
        "C"
    ],
    ['Con đường dài nhất là đường nào?',
        'Đường sữa',
        'Đường chuột chạy',
        'Đường chim bay',
        'Đường đời',
        "D"
    ]
];
function _(x) {
    return document.getElementById(x);
}

function renderQuestion() {
    test = _('test');
    if (pos >= questions.length) {
        if (correct == questions.length) {
            window.location.href = 'chucmung.html';
            test.innerHTML = window.location.href;
        } else if (correct < questions.length) {
            test.innerHTML = '<h2>Bạn trả lời đúng ' + correct + ' trong ' + questions.length + ' câu hỏi</h2>';
        }
        _('text_status').innerHTML = 'test completed';
        pos = 0;
        correct = 0;
        return false;
    }
    _('test_status').innerHTML = 'Câu hỏi ' + (pos + 1) + " trong " + questions.length + ' câu hỏi';
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    chD = questions[pos][4];
    test.innerHTML = '<h3>' + question + '</h3>';
    test.innerHTML += "<input onclick='checkAnswer()' type='radio' name='choices' value='A'> " + chA + "<br>";
    test.innerHTML += "<input onclick='checkAnswer()' type='radio' name='choices' value='B'> " + chB + "<br>";
    test.innerHTML += "<input onclick='checkAnswer()' type='radio' name='choices' value='C'> " + chC + "<br>";
    test.innerHTML += "<input onclick='checkAnswer()' type='radio' name='choices' value='D'> " + chD + "<br>";
}
function checkAnswer() {
    choices = document.getElementsByName('choices');
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }
    if (choice == questions[pos][5]) {
        correct++;
    }
    pos++;
    renderQuestion();
}
window.addEventListener('load', renderQuestion, false);