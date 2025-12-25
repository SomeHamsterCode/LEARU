// Данные для игры - вопросы по разным темам
const gameData = {
    орфография: [
        {
            question: "Как правильно: 'раз...езд' (дефис, пробел или слитно)?",
            answers: ["раз-езд", "разъезд", "раз езд", "разьезд"],
            correct: 1,
            explanation: "Слово 'разъезд' пишется слитно с буквой 'ъ' после приставки 'раз-' перед буквой 'е'"
        },
        {
            question: "В каком слове пропущена буква 'и'?",
            answers: ["соб...ру", "соберу", "саберу", "саб...ру"],
            correct: 0,
            explanation: "В слове 'собиру' пропущена буква 'и' после 'б' - правильно 'соберу'"
        },
        {
            question: "Как правильно писать 'не...вкруговую'?",
            answers: ["непрямовкруговую", "не прямовкруговую", "непрямо-вкруговую", "непрям овкруговую"],
            correct: 0,
            explanation: "Сложное прилагательное 'непрямовкруговую' пишется слитно"
        },
        {
            question: "В каком слове пишется 'нн'?",
            answers: ["плака...ый", "работа...ик", "клюква...ый", "свеже...ый"],
            correct: 1,
            explanation: "В слове 'работающий' пишется 'нн' как причастие с приставкой"
        },
        {
            question: "В каком слове пишется 'не' раздельно?",
            answers: ["(не)достаёт", "(не)достающий", "(не)видимка", "(не)льстивый"],
            correct: 0,
            explanation: "В слове '(не)достаёт' 'не' пишется раздельно, потому что можно заменить синонимом без 'не'"
        }
    ],
    пунктуация: [
        {
            question: "Где нужно поставить запятую в предложении: 'Я купил хлеб молоко и яйца'?",
            answers: ["После 'хлеб'", "После 'молоко'", "После 'и'", "Нигде"],
            correct: 0,
            explanation: "Запятая ставится после 'хлеб', так как это однородные члены предложения"
        },
        {
            question: "Нужна ли запятая перед 'что' в предложении: 'Все сказали, что придут'?",
            answers: ["Да, нужна", "Нет, не нужна", "Только в устной речи", "По желанию"],
            correct: 0,
            explanation: "Запятая нужна перед 'что' при переходе к придаточному предложению"
        },
        {
            question: "В каком случае нужна запятая перед 'и'?",
            answers: ["Всегда", "Никогда", "Когда соединяет части сложносочиненного предложения", "Только в начале предложения"],
            correct: 2,
            explanation: "Запятая ставится перед 'и' в сложносочиненных предложениях"
        },
        {
            question: "Где нужно поставить тире?",
            answers: ["Язык — это ...", "Язык это ...", "Язык, это ...", "Язык это,"],
            correct: 0,
            explanation: "Тире ставится между подлежащим и сказуемым, выраженными существительными"
        }
    ],
    лексика: [
        {
            question: "Что означает слово 'фламинго'?",
            answers: ["Розовая птица", "Вид танца", "Цветок", "Музыкальный инструмент"],
            correct: 0,
            explanation: "Фламинго - это птица с характерным длинным клювом и розовым оперением"
        },
        {
            question: "Какое слово является синонимом к 'множество'?",
            answers: ["Единица", "Много", "Мало", "Один"],
            correct: 1,
            explanation: "Слово 'много' является синонимом к 'множество'"
        },
        {
            question: "Какое слово является антонимом к 'смелость'?",
            answers: ["Отвага", "Храбрость", "Трусость", "Решимость"],
            correct: 2,
            explanation: "Антонимом к слову 'смелость' является 'трусость'"
        },
        {
            question: "Что означает фразеологизм 'бить баклуши'?",
            answers: ["Работать усердно", "Лениваться", "Готовить", "Путешествовать"],
            correct: 1,
            explanation: "Фразеологизм 'бить баклуши' означает лениться, бездельничать"
        }
    ],
    грамматика: [
        {
            question: "Какой частью речи является слово 'бегать'?",
            answers: ["Существительное", "Глагол", "Прилагательное", "Наречие"],
            correct: 1,
            explanation: "Слово 'бегать' - глагол несовершенного вида, обозначает действие"
        },
        {
            question: "В каком падеже находится слово 'дом' в предложении 'Я иду домой'?",
            answers: ["Именительный", "Винительный", "Творительный", "Предложный"],
            correct: 2,
            explanation: "Слово 'домой' - это наречие, образованное от существительного 'дом', в творительном падеже"
        },
        {
            question: "Какое слово является подлежащим в предложении 'Дети играют в парке'?",
            answers: ["Играют", "Парке", "Дети", "В"],
            correct: 2,
            explanation: "Подлежащее - это главный член предложения, обозначающий предмет. В данном случае это 'дети'"
        },
        {
            question: "Какое спряжение у глагола 'писать'?",
            answers: ["Первое", "Второе", "Оба", "Ни одно"],
            correct: 0,
            explanation: "Глагол 'писать' относится к первому спряжению по окончанию -ить"
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