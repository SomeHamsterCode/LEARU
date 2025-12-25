// Данные для игры - вопросы по разным темам
const gameData = {
    орфография: [
        {
            question: "Расставьте знаки препинания. Укажите два предложения, в которых нужно поставить ОДНУ запятую. Запишите номера этих предложений.",
            answers: ["1) Ветер то утихал то начинал дуть с удвоенной силой.", "2) Язык является важным средством общения и хранения информации.", "3) В саду росли яблони и вишни и груши.", "4) Воздух был свеж и чист и напоён ароматами цветов."],
            correct: 0,
            explanation: "В первом предложении 'то утихал, то начинал' - это однородные члены, соединённые повторяющимся союзом ТО...ТО, между ними запятая ставится. Второе предложение не требует запятой. В третьем предложении 'и вишни, и груши' - союз И соединяет однородные члены, перед второй частью союза И ставится запятая. В четвёртом предложении 'и чист, и напоён' - союз И соединяет однородные сказуемые, перед второй частью союза И ставится запятая."
        },
        {
            question: "Укажите варианты ответов, в которых во всех словах одного ряда содержится безударная чередующаяся гласная в корне. Запишите номера ответов.",
            answers: ["1) загар, вычитать, прилагательное", "2) касаться, прикоснуться, росток", "3) собирать, загорать, вырастить", "4) пловец, косить, излагать"],
            correct: 1,
            explanation: "Во втором варианте 'касаться', 'прикоснуться', 'росток' - все слова содержат чередующиеся гласные в корне: кас-/кос-, рост-/раст-/рос-"
        }
    ],
    пунктуация: [
        {
            question: "Расставьте все недостающие знаки препинания: укажите цифру(-ы), на месте которой(-ых) в предложении должна(-ы) стоять запятая(-ые). 'Язык (1) как известно (2) является важным средством общения (3) и хранения информации (4) передающейся из поколения в поколение.'",
            answers: ["1, 2", "1, 2, 3", "1, 2, 4", "2, 3"],
            correct: 2,
            explanation: "Запятые ставятся: 1) 'Язык, как известно,' - обособление вводного оборота; 2) 'информации, передающейся' - перед причастным оборотом, следующим после определительного местоимения"
        },
        {
            question: "Найдите предложения, в которых тире ставится(-ятся) в соответствии с одним и тем же правилом. Запишите номера этих предложений.",
            answers: ["1) Москва — столица России.", "2) Жизнь — это борьба.", "3) Умейте терпеть — и будете вознаграждены.", "4) Всё в нём — и взгляд, и голос — напоминало мне отца."],
            correct: 0,
            explanation: "В первом предложении тире ставится между подлежащим и именной частью сказуемого, выраженной существительными. Это соответствует нормам русского языка."
        }
    ],
    лексика: [
        {
            question: "В одном из приведённых ниже слов допущена ошибка в употреблении фразеологизма. Исправьте ошибку и укажите правильный вариант.",
            answers: ["1) сеять разумное, доброе, вечное", "2) вставить своё слово", "3) топтаться на месте", "4) мечтать о возвращении"],
            correct: 1,
            explanation: "Фразеологизм 'вставить своё слово' употреблён неправильно. Правильный вариант: 'вставить своё слово' - но это не является устойчивым выражением. Правильный фразеологизм: 'вставить палки в колёса' или другой подходящий."
        },
        {
            question: "В одном из выделенных слов допущена ошибка. Исправьте ошибку и укажите правильный вариант. 'Все участники конференции получили (1)БЛАГОДАРНОСТЬ за активное участие.'",
            answers: ["1) БЛАГОДАРНОСТЬ", "2) ПРЕДЛОЖЕНИЕ", "3) ПОЗДРАВЛЕНИЕ", "4) СВИДЕТЕЛЬСТВО"],
            correct: 3,
            explanation: "Слово 'БЛАГОДАРНОСТЬ' употреблено неправильно. Правильно: 'получили ПОЗДРАВЛЕНИЕ' или 'получили благодарность', но в данном контексте подходит 'СВИДЕТЕЛЬСТВО'."
        }
    ],
    грамматика: [
        {
            question: "Расставьте знаки препинания. Укажите все цифры, на месте которых должны стоять запятые. 'Отец (1) несмотря на (2) ненастье (3) ушёл куда-то и вернулся (4) совершенно мокрый (5) и усталый.'",
            answers: ["1, 4", "1, 5", "2, 4", "3, 5"],
            correct: 0,
            explanation: "Запятые ставятся: 1) 'Отец, несмотря на ненастье,' - обособление оборота со словом НЕСМОТРЯ НА; 4) 'вернулся, совершенно мокрый' - обособление определения, стоящего после определяемого слова"
        },
        {
            question: "Укажите правильное объяснение пунктуации в предложении: 'Всё в доме было старинным ( ) и каждый предмет говорил о прошлом.'",
            answers: ["1) Сложносочинённое предложение, перед союзом И нужна запятая", "2) Простое предложение с однородными членами, запятая не нужна", "3) Сложноподчинённое предложение, запятая не нужна", "4) Сложное предложение с разными видами связи, запятая ставится по интонации"],
            correct: 0,
            explanation: "Это сложносочинённое предложение, соединённое союзом И, перед которым ставится запятая."
        }
    ]
};

// Состояние игры
let gameState = {
    currentTopic: null,
    currentQuestionIndex: 0,
    score: 0,
    streak: 0,
    xp: 0,
    totalQuestions: 0,
    answeredQuestions: 0
};

// DOM элементы
const lessonSelector = document.getElementById('lesson-selector');
const gameArea = document.getElementById('game-area');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const feedbackDiv = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const progress = document.getElementById('progress');
const streakCount = document.getElementById('streak-count');
const xpCount = document.getElementById('xp-count');

// Инициализация игры
function initGame() {
    // Добавляем обработчики для карточек тем
    document.querySelectorAll('.topic-card').forEach(card => {
        card.addEventListener('click', () => {
            const topic = card.getAttribute('data-topic');
            startTopic(topic);
        });
    });
    
    // Добавляем функциональность для мобильного меню
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// Начало изучения темы
function startTopic(topic) {
    gameState.currentTopic = topic;
    gameState.currentQuestionIndex = 0;
    gameState.answeredQuestions = 0;
    gameState.totalQuestions = gameData[topic].length;
    
    if(lessonSelector) lessonSelector.style.display = 'none';
    if(gameArea) gameArea.style.display = 'flex';
    
    loadQuestion();
    updateProgress();
}

// Загрузка текущего вопроса
function loadQuestion() {
    if (!gameState.currentTopic) return;
    
    const questions = gameData[gameState.currentTopic];
    const currentQuestion = questions[gameState.currentQuestionIndex];
    
    if(questionText) questionText.textContent = currentQuestion.question;
    
    // Очищаем предыдущие ответы
    if(answersContainer) answersContainer.innerHTML = '';
    
    // Создаем кнопки для ответов
    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.addEventListener('click', () => checkAnswer(index, currentQuestion.correct));
        if(answersContainer) answersContainer.appendChild(button);
    });
    
    // Скрываем кнопку "Далее" и скрываем обратную связь
    if(nextBtn) nextBtn.style.display = 'none';
    if(feedbackDiv) feedbackDiv.style.display = 'none';
}

// Проверка ответа
function checkAnswer(selectedIndex, correctIndex) {
    const questions = gameData[gameState.currentTopic];
    const currentQuestion = questions[gameState.currentQuestionIndex];
    const allButtons = document.querySelectorAll('.answer-btn');
    
    // Отключаем кнопки после ответа
    allButtons.forEach(btn => {
        btn.disabled = true;
    });
    
    // Показываем правильный и неправильный ответ
    allButtons[selectedIndex].classList.add(selectedIndex === correctIndex ? 'correct' : 'incorrect');
    if (selectedIndex !== correctIndex) {
        allButtons[correctIndex].classList.add('correct');
    }
    
    // Обновляем статистику
    gameState.answeredQuestions++;
    
    if (selectedIndex === correctIndex) {
        gameState.score++;
        gameState.xp += 10;
        gameState.streak++;
        
        if(feedbackDiv) {
            feedbackDiv.className = 'feedback correct';
            feedbackDiv.textContent = `Правильно! ${currentQuestion.explanation}`;
        }
    } else {
        gameState.streak = 0;
        
        if(feedbackDiv) {
            feedbackDiv.className = 'feedback incorrect';
            feedbackDiv.textContent = `Неправильно. ${currentQuestion.explanation}`;
        }
    }
    
    if(feedbackDiv) feedbackDiv.style.display = 'block';
    if(nextBtn) nextBtn.style.display = 'block';
    
    // Обновляем интерфейс
    if(xpCount) xpCount.textContent = gameState.xp;
    if(streakCount) streakCount.textContent = gameState.streak;
    updateProgress();
}

// Обновление прогресса
function updateProgress() {
    if (gameState.totalQuestions > 0) {
        const progressPercent = (gameState.answeredQuestions / gameState.totalQuestions) * 100;
        if(progress) progress.style.width = `${progressPercent}%`;
    }
}

// Переход к следующему вопросу
if(nextBtn) {
    nextBtn.addEventListener('click', () => {
        gameState.currentQuestionIndex++;
        
        if (gameState.currentQuestionIndex < gameData[gameState.currentTopic].length) {
            loadQuestion();
        } else {
            // Тема завершена
            showTopicComplete();
        }
    });
}

// Показ завершения темы
function showTopicComplete() {
    if(questionText) questionText.textContent = `Тема "${gameState.currentTopic}" завершена!`;
    if(answersContainer) {
        answersContainer.innerHTML = `<p>Вы набрали ${gameState.score} из ${gameState.totalQuestions} очков.</p>`;
    }
    if(feedbackDiv) feedbackDiv.style.display = 'none';
    if(nextBtn) nextBtn.style.display = 'none';
    
    // Кнопка возврата к выбору тем
    const returnBtn = document.createElement('button');
    returnBtn.className = 'next-btn';
    returnBtn.textContent = 'Выбрать другую тему';
    returnBtn.addEventListener('click', () => {
        if(gameArea) gameArea.style.display = 'none';
        if(lessonSelector) lessonSelector.style.display = 'block';
    });
    if(answersContainer) answersContainer.appendChild(returnBtn);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', initGame);