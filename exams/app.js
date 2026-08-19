/*
 * ============================================================
 * 365in5 EXAM SIMULATOR ENGINE
 * ============================================================
 *
 * Generic simulator engine.
 *
 * This file does NOT contain AZ-104-specific logic.
 *
 * Any exam can use this engine as long as its question file
 * exposes:
 *
 * window.EXAM_CONFIG
 * window.EXAM_QUESTIONS
 *
 * Example:
 *
 * /exams/questions/az-104.js
 *
 * ============================================================
 */


"use strict";


(() => {


    /*
     * ========================================================
     * CONSTANTS
     * ========================================================
     */


    const SCORE_MAX =
        1000;


    const SCORE_MIN =
        1;


    /*
     * ========================================================
     * APPLICATION STATE
     * ========================================================
     */


    const state = {

        config: null,

        questions: [],

        currentQuestionIndex: 0,

        answers: {},

        markedForReview:
            new Set(),

        remainingSeconds: 0,

        timerHandle: null,

        submitted: false,

        results: null

    };


    /*
     * ========================================================
     * DOM HELPER
     * ========================================================
     */


    function getElement(id) {

        return document.getElementById(
            id
        );

    }


    /*
     * ========================================================
     * VIEWS
     * ========================================================
     */


    const viewIds = [

        "introView",

        "examView",

        "reviewView",

        "resultsView",

        "answerReviewView",

        "unsupportedView"

    ];


    function showView(viewId) {

        viewIds.forEach(
            (id) => {

                const element =
                    getElement(id);


                if (!element) {

                    return;

                }


                element.classList.toggle(
                    "hidden",
                    id !== viewId
                );

            }
        );


        /*
         * Reset scroll position when moving
         * between major screens.
         */


        window.scrollTo({

            top: 0,

            left: 0,

            behavior: "instant"

        });

    }


    /*
     * ========================================================
     * SAFE TEXT
     * ========================================================
     *
     * Most application content is inserted using textContent.
     *
     * This helper exists for the few places where HTML is
     * constructed intentionally.
     *
     */


    function escapeHtml(value) {

        return String(value)

            .replaceAll(
                "&",
                "&amp;"
            )

            .replaceAll(
                "<",
                "&lt;"
            )

            .replaceAll(
                ">",
                "&gt;"
            )

            .replaceAll(
                "\"",
                "&quot;"
            )

            .replaceAll(
                "'",
                "&#039;"
            );

    }


    /*
     * ========================================================
     * SHUFFLE
     * ========================================================
     *
     * Use crypto.getRandomValues where available.
     *
     * This gives better randomness than Math.random().
     *
     */


    function secureRandomInt(maxExclusive) {

        if (
            !Number.isInteger(
                maxExclusive
            ) ||
            maxExclusive <= 0
        ) {

            return 0;

        }


        if (
            window.crypto &&
            typeof window.crypto.getRandomValues === "function"
        ) {

            const random =
                new Uint32Array(1);


            window.crypto.getRandomValues(
                random
            );


            return (
                random[0] %
                maxExclusive
            );

        }


        /*
         * Fallback for older browsers.
         */


        return Math.floor(
            Math.random() *
            maxExclusive
        );

    }


    function shuffleArray(array) {

        const copy =
            [...array];


        for (
            let index =
                copy.length - 1;

            index > 0;

            index--
        ) {

            const randomIndex =
                secureRandomInt(
                    index + 1
                );


            [
                copy[index],
                copy[randomIndex]
            ] = [
                copy[randomIndex],
                copy[index]
            ];

        }


        return copy;

    }


    /*
     * ========================================================
     * INITIALISE
     * ========================================================
     */


    function initialise() {


        /*
         * simulator.html sets this if the requested
         * exam is not supported.
         */


        if (
            window.EXAM_DATA_LOAD_FAILED
        ) {

            showUnsupportedExam();

            return;

        }


        /*
         * Exam script should have exposed both objects.
         */


        if (
            !window.EXAM_CONFIG ||
            !Array.isArray(
                window.EXAM_QUESTIONS
            )
        ) {

            /*
             * The dynamically-loaded question script may still
             * be loading when app.js executes.
             *
             * Give it a very short opportunity to complete.
             */


            waitForExamData();

            return;

        }


        prepareExam();

    }


    /*
     * ========================================================
     * WAIT FOR DYNAMIC QUESTION SCRIPT
     * ========================================================
     */


    function waitForExamData() {

        let attempts =
            0;


        const maximumAttempts =
            40;


        const poll =
            window.setInterval(
                () => {

                    attempts++;


                    if (
                        window.EXAM_CONFIG &&
                        Array.isArray(
                            window.EXAM_QUESTIONS
                        )
                    ) {

                        window.clearInterval(
                            poll
                        );


                        prepareExam();

                        return;

                    }


                    if (
                        window.EXAM_DATA_LOAD_FAILED ||
                        attempts >=
                        maximumAttempts
                    ) {

                        window.clearInterval(
                            poll
                        );


                        showUnsupportedExam();

                    }

                },

                50
            );

    }


    /*
     * ========================================================
     * PREPARE EXAM
     * ========================================================
     */


    function prepareExam() {

        state.config =
            window.EXAM_CONFIG;


        state.questions =
            [...window.EXAM_QUESTIONS];


        validateExamData();


        populateIntro();


        bindEvents();


        showView(
            "introView"
        );

    }


    /*
     * ========================================================
     * EXAM DATA VALIDATION
     * ========================================================
     *
     * Question files validate themselves too.
     *
     * We still perform basic generic validation here so a
     * future exam bank cannot break the simulator silently.
     *
     */


    function validateExamData() {

        const config =
            state.config;


        if (
            !config ||
            typeof config !== "object"
        ) {

            throw new Error(
                "365in5 simulator: invalid exam configuration."
            );

        }


        if (
            !config.code ||
            !config.title
        ) {

            throw new Error(
                "365in5 simulator: exam code/title missing."
            );

        }


        if (
            !Number.isInteger(
                config.questionCount
            ) ||
            config.questionCount <= 0
        ) {

            throw new Error(
                "365in5 simulator: invalid question count."
            );

        }


        if (
            state.questions.length !==
            config.questionCount
        ) {

            throw new Error(

                "365in5 simulator: expected " +
                config.questionCount +
                " questions but loaded " +
                state.questions.length +
                "."

            );

        }


        if (
            !Number.isFinite(
                config.durationMinutes
            ) ||
            config.durationMinutes <= 0
        ) {

            throw new Error(
                "365in5 simulator: invalid exam duration."
            );

        }


        if (
            !config.domains ||
            typeof config.domains !== "object"
        ) {

            throw new Error(
                "365in5 simulator: no exam domains configured."
            );

        }

    }


    /*
     * ========================================================
     * INTRO PAGE
     * ========================================================
     */


    function populateIntro() {

        const config =
            state.config;


        document.title =
            config.code +
            " Exam Simulator | 365in5";


        setText(
            "headerExamCode",
            config.code
        );


        setText(
            "introExamCategory",
            config.category
        );


        setText(
            "introExamTitle",
            config.code +
            " — " +
            config.title
        );


        setText(
            "introExamDescription",
            config.description
        );


        setText(
            "introQuestionCount",
            config.questionCount
        );


        setText(
            "introExamMinutes",
            config.durationMinutes
        );


        setText(
            "introPassScore",
            config.simulatedPassingScore
        );


        setText(
            "toolbarExamCode",
            config.code
        );


        setText(
            "reviewExamCode",
            config.code +
            " · FINAL REVIEW"
        );


        setText(
            "resultExamCode",
            config.code +
            " · RESULT"
        );


        setText(
            "answerReviewExamCode",
            config.code +
            " · ANSWER REVIEW"
        );


        /*
         * Build blueprint.
         */


        const blueprintList =
            getElement(
                "blueprintList"
            );


        blueprintList.innerHTML =
            "";


        Object.values(
            config.domains
        ).forEach(
            (domain) => {

                const row =
                    document.createElement(
                        "div"
                    );


                row.className =
                    "weight-row";


                const title =
                    document.createElement(
                        "span"
                    );


                title.textContent =
                    domain.name;


                const weight =
                    document.createElement(
                        "strong"
                    );


                weight.textContent =
                    domain.minWeight +
                    "–" +
                    domain.maxWeight +
                    "%";


                row.appendChild(
                    title
                );


                row.appendChild(
                    weight
                );


                blueprintList.appendChild(
                    row
                );

            }
        );

    }


    /*
     * ========================================================
     * EVENT BINDINGS
     * ========================================================
     */


    function bindEvents() {

        bindClick(
            "startExamBtn",
            startExam
        );


        bindClick(
            "previousBtn",
            previousQuestion
        );


        bindClick(
            "nextBtn",
            nextQuestion
        );


        bindClick(
            "returnToExamBtn",
            returnToExam
        );


        bindClick(
            "submitExamBtn",
            () => submitExam(false)
        );


        bindClick(
            "restartBtn",
            startExam
        );


        bindClick(
            "reviewAnswersBtn",
            showAnswerReview
        );


        bindClick(
            "backToResultsBtn",
            () => {

                showView(
                    "resultsView"
                );

            }
        );


        const reviewCheckbox =
            getElement(
                "reviewCheckbox"
            );


        if (
            reviewCheckbox
        ) {

            reviewCheckbox.addEventListener(
                "change",
                handleReviewToggle
            );

        }

    }


    function bindClick(
        id,
        handler
    ) {

        const element =
            getElement(
                id
            );


        if (
            !element
        ) {

            return;

        }


        element.addEventListener(
            "click",
            handler
        );

    }


    /*
     * ========================================================
     * START EXAM
     * ========================================================
     */


    function startExam() {


        /*
         * Reset previous state.
         */


        stopTimer();


        state.currentQuestionIndex =
            0;


        state.answers =
            {};


        state.markedForReview =
            new Set();


        state.submitted =
            false;


        state.results =
            null;


        state.remainingSeconds =
            Math.round(
                state.config.durationMinutes *
                60
            );


        /*
         * Randomise question order.
         *
         * Domain distribution remains correct because the full
         * bank itself already matches the target weighting.
         */


        state.questions =
            shuffleArray(
                window.EXAM_QUESTIONS
            );


        /*
         * Randomise answer option order for each attempt.
         *
         * We must remap the correct-answer indexes after
         * changing option order.
         */


        state.questions =
            state.questions.map(
                randomiseQuestionOptions
            );


        buildQuestionNavigation();


        renderQuestion();


        renderTimer();


        showView(
            "examView"
        );


        startTimer();

    }


    /*
     * ========================================================
     * RANDOMISE ANSWER OPTIONS
     * ========================================================
     */


    function randomiseQuestionOptions(
        originalQuestion
    ) {

        const question =
            structuredCloneSafe(
                originalQuestion
            );


        const indexedOptions =
            question.options.map(
                (text, index) => ({

                    text,

                    originalIndex:
                        index

                })
            );


        const shuffledOptions =
            shuffleArray(
                indexedOptions
            );


        question.options =
            shuffledOptions.map(
                (item) =>
                    item.text
            );


        const newAnswers =
            [];


        shuffledOptions.forEach(
            (item, newIndex) => {

                if (
                    question.answer.includes(
                        item.originalIndex
                    )
                ) {

                    newAnswers.push(
                        newIndex
                    );

                }

            }
        );


        question.answer =
            newAnswers.sort(
                (
                    first,
                    second
                ) =>
                    first - second
            );


        return question;

    }


    /*
     * ========================================================
     * STRUCTURED CLONE FALLBACK
     * ========================================================
     */


    function structuredCloneSafe(
        object
    ) {

        if (
            typeof structuredClone ===
            "function"
        ) {

            return structuredClone(
                object
            );

        }


        return JSON.parse(
            JSON.stringify(
                object
            )
        );

    }


    /*
     * ========================================================
     * TIMER
     * ========================================================
     */


    function startTimer() {

        stopTimer();


        state.timerHandle =
            window.setInterval(
                () => {

                    state.remainingSeconds--;


                    if (
                        state.remainingSeconds <= 0
                    ) {

                        state.remainingSeconds =
                            0;


                        renderTimer();


                        stopTimer();


                        submitExam(
                            true
                        );


                        return;

                    }


                    renderTimer();

                },

                1000
            );

    }


    function stopTimer() {

        if (
            state.timerHandle !==
            null
        ) {

            window.clearInterval(
                state.timerHandle
            );


            state.timerHandle =
                null;

        }

    }


    function renderTimer() {

        const totalSeconds =
            Math.max(
                0,
                state.remainingSeconds
            );


        const hours =
            Math.floor(
                totalSeconds /
                3600
            );


        const minutes =
            Math.floor(
                (
                    totalSeconds %
                    3600
                ) /
                60
            );


        const seconds =
            totalSeconds %
            60;


        const display =
            String(hours)
                .padStart(
                    2,
                    "0"
                ) +
            ":" +
            String(minutes)
                .padStart(
                    2,
                    "0"
                ) +
            ":" +
            String(seconds)
                .padStart(
                    2,
                    "0"
                );


        setText(
            "timer",
            display
        );

    }


    /*
     * ========================================================
     * QUESTION NAVIGATION
     * ========================================================
     */


    function buildQuestionNavigation() {

        const navigation =
            getElement(
                "questionNav"
            );


        navigation.innerHTML =
            "";


        state.questions.forEach(
            (
                question,
                index
            ) => {

                const button =
                    document.createElement(
                        "button"
                    );


                button.type =
                    "button";


                button.className =
                    "nav-q";


                button.textContent =
                    String(
                        index + 1
                    );


                button.setAttribute(
                    "aria-label",
                    "Go to question " +
                    (
                        index + 1
                    )
                );


                button.addEventListener(
                    "click",
                    () => {

                        goToQuestion(
                            index
                        );

                    }
                );


                navigation.appendChild(
                    button
                );

            }
        );


        updateQuestionNavigation();

    }


    function updateQuestionNavigation() {

        const navigation =
            getElement(
                "questionNav"
            );


        if (
            !navigation
        ) {

            return;

        }


        const buttons =
            Array.from(
                navigation.children
            );


        buttons.forEach(
            (
                button,
                index
            ) => {

                const question =
                    state.questions[
                        index
                    ];


                const answered =
                    Array.isArray(
                        state.answers[
                            question.id
                        ]
                    ) &&
                    state.answers[
                        question.id
                    ].length > 0;


                button.classList.toggle(
                    "active",
                    index ===
                    state.currentQuestionIndex
                );


                button.classList.toggle(
                    "answered",
                    answered
                );


                button.classList.toggle(
                    "review",
                    state.markedForReview.has(
                        question.id
                    )
                );

            }
        );

    }


    /*
     * ========================================================
     * RENDER CURRENT QUESTION
     * ========================================================
     */


    function renderQuestion() {

        const question =
            state.questions[
                state.currentQuestionIndex
            ];


        if (
            !question
        ) {

            return;

        }


        setText(
            "questionCounter",

            "Question " +
            (
                state.currentQuestionIndex +
                1
            ) +
            " of " +
            state.questions.length
        );


        setText(
            "domainBadge",
            getDomainName(
                question.domain
            )
        );


        setText(
            "questionText",
            question.question
        );


        setText(
            "questionInstruction",

            question.type ===
            "multi"

                ? "Select all answers that apply."

                : "Select one answer."
        );


        renderScenario(
            question
        );


        renderAnswers(
            question
        );


        renderReviewCheckbox(
            question
        );


        renderNavigationButtons();


        updateQuestionNavigation();

    }


    /*
     * ========================================================
     * SCENARIO
     * ========================================================
     */


    function renderScenario(
        question
    ) {

        const scenarioBox =
            getElement(
                "scenarioBox"
            );


        if (
            !scenarioBox
        ) {

            return;

        }


        if (
            question.scenario
        ) {

            scenarioBox.textContent =
                question.scenario;


            scenarioBox.classList.remove(
                "hidden"
            );

            return;

        }


        scenarioBox.textContent =
            "";


        scenarioBox.classList.add(
            "hidden"
        );

    }


    /*
     * ========================================================
     * ANSWER OPTIONS
     * ========================================================
     */


    function renderAnswers(
        question
    ) {

        const form =
            getElement(
                "answersForm"
            );


        form.innerHTML =
            "";


        const selectedAnswers =
            state.answers[
                question.id
            ] || [];


        question.options.forEach(
            (
                optionText,
                optionIndex
            ) => {

                const label =
                    document.createElement(
                        "label"
                    );


                label.className =
                    "answer-option";


                const input =
                    document.createElement(
                        "input"
                    );


                input.type =
                    question.type ===
                    "multi"

                        ? "checkbox"

                        : "radio";


                input.name =
                    "answer-" +
                    question.id;


                input.value =
                    String(
                        optionIndex
                    );


                input.checked =
                    selectedAnswers.includes(
                        optionIndex
                    );


                label.classList.toggle(
                    "selected",
                    input.checked
                );


                input.addEventListener(
                    "change",
                    () => {

                        handleAnswerSelection(
                            question,
                            optionIndex,
                            input.checked
                        );

                    }
                );


                const text =
                    document.createElement(
                        "span"
                    );


                text.textContent =
                    optionText;


                label.appendChild(
                    input
                );


                label.appendChild(
                    text
                );


                form.appendChild(
                    label
                );

            }
        );

    }


    /*
     * ========================================================
     * ANSWER SELECTION
     * ========================================================
     */


    function handleAnswerSelection(
        question,
        optionIndex,
        checked
    ) {


        /*
         * Single-answer question.
         */


        if (
            question.type ===
            "single"
        ) {

            state.answers[
                question.id
            ] = [
                optionIndex
            ];


            renderQuestion();

            return;

        }


        /*
         * Multi-answer question.
         */


        const existing =
            new Set(
                state.answers[
                    question.id
                ] || []
            );


        if (
            checked
        ) {

            existing.add(
                optionIndex
            );

        } else {

            existing.delete(
                optionIndex
            );

        }


        state.answers[
            question.id
        ] =
            Array.from(
                existing
            )
            .sort(
                (
                    first,
                    second
                ) =>
                    first - second
            );


        renderQuestion();

    }


    /*
     * ========================================================
     * MARK FOR REVIEW
     * ========================================================
     */


    function renderReviewCheckbox(
        question
    ) {

        const checkbox =
            getElement(
                "reviewCheckbox"
            );


        if (
            !checkbox
        ) {

            return;

        }


        checkbox.checked =
            state.markedForReview.has(
                question.id
            );

    }


    function handleReviewToggle(
        event
    ) {

        const question =
            state.questions[
                state.currentQuestionIndex
            ];


        if (
            !question
        ) {

            return;

        }


        if (
            event.target.checked
        ) {

            state.markedForReview.add(
                question.id
            );

        } else {

            state.markedForReview.delete(
                question.id
            );

        }


        updateQuestionNavigation();

    }


    /*
     * ========================================================
     * PREVIOUS / NEXT
     * ========================================================
     */


    function renderNavigationButtons() {

        const previous =
            getElement(
                "previousBtn"
            );


        const next =
            getElement(
                "nextBtn"
            );


        previous.disabled =
            state.currentQuestionIndex ===
            0;


        if (
            state.currentQuestionIndex ===
            state.questions.length - 1
        ) {

            next.textContent =
                "Review exam";

        } else {

            next.textContent =
                "Next";

        }

    }


    function previousQuestion() {

        if (
            state.currentQuestionIndex <=
            0
        ) {

            return;

        }


        state.currentQuestionIndex--;


        renderQuestion();

    }


    function nextQuestion() {

        if (
            state.currentQuestionIndex ===
            state.questions.length - 1
        ) {

            showFinalReview();

            return;

        }


        state.currentQuestionIndex++;


        renderQuestion();

    }


    function goToQuestion(
        questionIndex
    ) {

        if (
            questionIndex < 0 ||
            questionIndex >=
            state.questions.length
        ) {

            return;

        }


        state.currentQuestionIndex =
            questionIndex;


        showView(
            "examView"
        );


        renderQuestion();

    }


    /*
     * ========================================================
     * FINAL REVIEW
     * ========================================================
     */


    function showFinalReview() {

        const answered =
            state.questions.filter(
                (question) => {

                    const selected =
                        state.answers[
                            question.id
                        ];


                    return (
                        Array.isArray(
                            selected
                        ) &&
                        selected.length > 0
                    );

                }
            ).length;


        const unanswered =
            state.questions.length -
            answered;


        setText(
            "answeredCount",
            answered
        );


        setText(
            "unansweredCount",
            unanswered
        );


        setText(
            "markedCount",
            state.markedForReview.size
        );


        buildReviewGrid();


        showView(
            "reviewView"
        );

    }


    /*
     * ========================================================
     * REVIEW GRID
     * ========================================================
     */


    function buildReviewGrid() {

        const grid =
            getElement(
                "reviewGrid"
            );


        grid.innerHTML =
            "";


        state.questions.forEach(
            (
                question,
                index
            ) => {

                const button =
                    document.createElement(
                        "button"
                    );


                button.type =
                    "button";


                button.className =
                    "review-q";


                button.textContent =
                    String(
                        index + 1
                    );


                const selected =
                    state.answers[
                        question.id
                    ] || [];


                button.classList.toggle(
                    "unanswered",
                    selected.length === 0
                );


                button.classList.toggle(
                    "marked",
                    state.markedForReview.has(
                        question.id
                    )
                );


                button.setAttribute(
                    "aria-label",

                    "Return to question " +
                    (
                        index + 1
                    )
                );


                button.addEventListener(
                    "click",
                    () => {

                        goToQuestion(
                            index
                        );

                    }
                );


                grid.appendChild(
                    button
                );

            }
        );

    }


    /*
     * ========================================================
     * RETURN TO EXAM
     * ========================================================
     */


    function returnToExam() {

        showView(
            "examView"
        );


        renderQuestion();

    }


    /*
     * ========================================================
     * ANSWER COMPARISON
     * ========================================================
     */


    function answersMatch(
        selected,
        correct
    ) {

        if (
            selected.length !==
            correct.length
        ) {

            return false;

        }


        const selectedSorted =
            [...selected]
            .sort(
                (
                    first,
                    second
                ) =>
                    first - second
            );


        const correctSorted =
            [...correct]
            .sort(
                (
                    first,
                    second
                ) =>
                    first - second
            );


        return selectedSorted.every(
            (
                value,
                index
            ) =>
                value ===
                correctSorted[index]
        );

    }


    /*
     * ========================================================
     * SUBMIT EXAM
     * ========================================================
     */


    function submitExam(
        timedOut
    ) {

        if (
            state.submitted
        ) {

            return;

        }


        state.submitted =
            true;


        stopTimer();


        let correctCount =
            0;


        const domainResults =
            {};


        Object.keys(
            state.config.domains
        ).forEach(
            (domainId) => {

                domainResults[
                    domainId
                ] = {

                    correct: 0,

                    total: 0

                };

            }
        );


        const detailedResults =
            [];


        state.questions.forEach(
            (question) => {

                const selected =
                    state.answers[
                        question.id
                    ] || [];


                const correct =
                    answersMatch(
                        selected,
                        question.answer
                    );


                domainResults[
                    question.domain
                ].total++;


                if (
                    correct
                ) {

                    correctCount++;


                    domainResults[
                        question.domain
                    ].correct++;

                }


                detailedResults.push({

                    question,

                    selected,

                    correct

                });

            }
        );


        const rawPercentage =
            (
                correctCount /
                state.questions.length
            ) *
            100;


        /*
         * ====================================================
         * SIMULATED SCORE
         * ====================================================
         *
         * Microsoft does NOT publish the private algorithm
         * used to convert exam item performance into the
         * reported scaled score.
         *
         * We therefore do NOT claim that this represents the
         * Microsoft scoring calculation.
         *
         * For the simulator:
         *
         * 70% raw accuracy ≈ 700 simulated score.
         *
         */


        let simulatedScore =
            Math.round(
                rawPercentage *
                10
            );


        simulatedScore =
            Math.max(
                SCORE_MIN,
                Math.min(
                    SCORE_MAX,
                    simulatedScore
                )
            );


        const passed =
            simulatedScore >=
            state.config.simulatedPassingScore;


        state.results = {

            correctCount,

            totalQuestions:
                state.questions.length,

            rawPercentage,

            simulatedScore,

            passed,

            timedOut:
                Boolean(
                    timedOut
                ),

            domainResults,

            detailedResults

        };


        renderResults();

    }


    /*
     * ========================================================
     * RESULTS
     * ========================================================
     */


    function renderResults() {

        const results =
            state.results;


        const resultsCard =
            document.querySelector(
                ".results-card"
            );


        if (
            resultsCard
        ) {

            resultsCard.classList.toggle(
                "pass",
                results.passed
            );


            resultsCard.classList.toggle(
                "fail",
                !results.passed
            );

        }


        setText(

            "resultStatus",

            results.passed

                ? "PASS"

                : "NOT YET"

        );


        setText(
            "scaledScore",
            results.simulatedScore
        );


        let rawScoreText =

            results.correctCount +
            " of " +
            results.totalQuestions +
            " questions correct · " +
            Math.round(
                results.rawPercentage
            ) +
            "% raw accuracy";


        if (
            results.timedOut
        ) {

            rawScoreText +=
                " · Time expired";

        }


        setText(
            "rawScore",
            rawScoreText
        );


        renderDomainResults();


        renderWeakAreas();


        showView(
            "resultsView"
        );

    }


    /*
     * ========================================================
     * DOMAIN RESULTS
     * ========================================================
     */


    function renderDomainResults() {

        const container =
            getElement(
                "domainResults"
            );


        container.innerHTML =
            "";


        Object.entries(
            state.results.domainResults
        ).forEach(
            (
                [
                    domainId,
                    result
                ]
            ) => {

                const percentage =

                    result.total === 0

                        ? 0

                        : Math.round(

                            (
                                result.correct /
                                result.total
                            ) *
                            100

                        );


                const row =
                    document.createElement(
                        "div"
                    );


                row.className =
                    "domain-result-row";


                const heading =
                    document.createElement(
                        "div"
                    );


                heading.className =
                    "domain-result-heading";


                const label =
                    document.createElement(
                        "span"
                    );


                label.textContent =
                    getDomainName(
                        domainId
                    );


                const score =
                    document.createElement(
                        "strong"
                    );


                score.textContent =

                    result.correct +
                    "/" +
                    result.total +
                    " · " +
                    percentage +
                    "%";


                heading.appendChild(
                    label
                );


                heading.appendChild(
                    score
                );


                const progress =
                    document.createElement(
                        "div"
                    );


                progress.className =
                    "progress";


                const progressBar =
                    document.createElement(
                        "i"
                    );


                progressBar.style.width =
                    percentage +
                    "%";


                progress.appendChild(
                    progressBar
                );


                row.appendChild(
                    heading
                );


                row.appendChild(
                    progress
                );


                container.appendChild(
                    row
                );

            }
        );

    }


    /*
     * ========================================================
     * WEAK AREAS
     * ========================================================
     */


    function renderWeakAreas() {

        const container =
            getElement(
                "weakAreas"
            );


        container.innerHTML =
            "";


        const domains =
            Object.entries(
                state.results.domainResults
            )
            .map(
                (
                    [
                        domainId,
                        result
                    ]
                ) => {

                    const percentage =

                        result.total === 0

                            ? 0

                            : Math.round(

                                (
                                    result.correct /
                                    result.total
                                ) *
                                100

                            );


                    return {

                        id:
                            domainId,

                        name:
                            getDomainName(
                                domainId
                            ),

                        percentage,

                        correct:
                            result.correct,

                        total:
                            result.total

                    };

                }
            )
            .sort(
                (
                    first,
                    second
                ) =>
                    first.percentage -
                    second.percentage
            );


        const weakest =
            domains.slice(
                0,
                3
            );


        weakest.forEach(
            (
                domain,
                index
            ) => {

                const card =
                    document.createElement(
                        "div"
                    );


                card.className =
                    "weak-area-card";


                const rank =
                    document.createElement(
                        "span"
                    );


                rank.className =
                    "weak-area-rank";


                rank.textContent =
                    index === 0

                        ? "Priority"

                        : "Review";


                const title =
                    document.createElement(
                        "h3"
                    );


                title.textContent =
                    domain.name;


                const score =
                    document.createElement(
                        "p"
                    );


                score.textContent =

                    domain.percentage +
                    "% accuracy · " +
                    domain.correct +
                    " of " +
                    domain.total +
                    " correct";


                const advice =
                    document.createElement(
                        "p"
                    );


                advice.className =
                    "weak-area-advice";


                if (
                    domain.percentage < 60
                ) {

                    advice.textContent =
                        "This is currently a significant weakness. Review this domain before your next full attempt.";

                } else if (
                    domain.percentage < 75
                ) {

                    advice.textContent =
                        "You're close, but this domain is still costing you marks. Target it before retaking the simulator.";

                } else {

                    advice.textContent =
                        "This domain is performing reasonably well. Review incorrect answers and tighten the remaining gaps.";

                }


                card.appendChild(
                    rank
                );


                card.appendChild(
                    title
                );


                card.appendChild(
                    score
                );


                card.appendChild(
                    advice
                );


                container.appendChild(
                    card
                );

            }
        );

    }


    /*
     * ========================================================
     * ANSWER REVIEW
     * ========================================================
     */


    function showAnswerReview() {

        if (
            !state.results
        ) {

            return;

        }


        const container =
            getElement(
                "answerReviewList"
            );


        container.innerHTML =
            "";


        state.results.detailedResults.forEach(
            (
                result,
                index
            ) => {

                const question =
                    result.question;


                const card =
                    document.createElement(
                        "article"
                    );


                card.className =

                    "answer-review-item " +

                    (
                        result.correct

                            ? "correct"

                            : "incorrect"
                    );


                /*
                 * Domain.
                 */


                const badge =
                    document.createElement(
                        "span"
                    );


                badge.className =
                    "domain-badge";


                badge.textContent =
                    getDomainName(
                        question.domain
                    );


                /*
                 * Question.
                 */


                const heading =
                    document.createElement(
                        "h3"
                    );


                heading.textContent =

                    (
                        index + 1
                    ) +
                    ". " +
                    question.question;


                /*
                 * User answer.
                 */


                const selectedText =
                    getAnswerText(

                        question,

                        result.selected

                    );


                const yourAnswer =
                    document.createElement(
                        "p"
                    );


                yourAnswer.className =
                    "answer-line";


                yourAnswer.innerHTML =

                    "<strong>Your answer:</strong> " +

                    escapeHtml(
                        selectedText
                    );


                /*
                 * Correct answer.
                 */


                const correctText =
                    getAnswerText(

                        question,

                        question.answer

                    );


                const correctAnswer =
                    document.createElement(
                        "p"
                    );


                correctAnswer.className =
                    "answer-line";


                correctAnswer.innerHTML =

                    "<strong>Correct answer:</strong> " +

                    escapeHtml(
                        correctText
                    );


                /*
                 * Explanation.
                 */


                const explanation =
                    document.createElement(
                        "p"
                    );


                explanation.innerHTML =

                    "<strong>Why:</strong> " +

                    escapeHtml(
                        question.explanation
                    );


                /*
                 * Objective.
                 */


                if (
                    question.objective
                ) {

                    const objective =
                        document.createElement(
                            "p"
                        );


                    objective.className =
                        "answer-objective";


                    objective.innerHTML =

                        "<strong>Objective:</strong> " +

                        escapeHtml(
                            question.objective
                        );


                    card.appendChild(
                        badge
                    );


                    card.appendChild(
                        heading
                    );


                    card.appendChild(
                        yourAnswer
                    );


                    card.appendChild(
                        correctAnswer
                    );


                    card.appendChild(
                        explanation
                    );


                    card.appendChild(
                        objective
                    );

                } else {

                    card.appendChild(
                        badge
                    );


                    card.appendChild(
                        heading
                    );


                    card.appendChild(
                        yourAnswer
                    );


                    card.appendChild(
                        correctAnswer
                    );


                    card.appendChild(
                        explanation
                    );

                }


                container.appendChild(
                    card
                );

            }
        );


        showView(
            "answerReviewView"
        );

    }


    /*
     * ========================================================
     * GET ANSWER TEXT
     * ========================================================
     */


    function getAnswerText(
        question,
        answerIndexes
    ) {

        if (
            !Array.isArray(
                answerIndexes
            ) ||
            answerIndexes.length === 0
        ) {

            return "No answer";

        }


        return answerIndexes

            .map(
                (index) => {

                    return (
                        question.options[
                            index
                        ] ||
                        "Unknown answer"
                    );

                }
            )

            .join(
                "; "
            );

    }


    /*
     * ========================================================
     * DOMAIN NAME
     * ========================================================
     */


    function getDomainName(
        domainId
    ) {

        const domain =
            state.config.domains[
                domainId
            ];


        if (
            !domain
        ) {

            return domainId;

        }


        return domain.name;

    }


    /*
     * ========================================================
     * UNSUPPORTED EXAM
     * ========================================================
     */


    function showUnsupportedExam() {

        stopTimer();


        showView(
            "unsupportedView"
        );

    }


    /*
     * ========================================================
     * GENERIC TEXT SETTER
     * ========================================================
     */


    function setText(
        id,
        value
    ) {

        const element =
            getElement(
                id
            );


        if (
            !element
        ) {

            return;

        }


        element.textContent =
            String(
                value ?? ""
            );

    }


    /*
     * ========================================================
     * BLOCK ACCIDENTAL FORM SUBMISSION
     * ========================================================
     */


    document.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();

        }
    );


    /*
     * ========================================================
     * PAGE VISIBILITY
     * ========================================================
     *
     * We deliberately DO NOT pause the timer when the browser
     * tab is hidden.
     *
     * Exam time continues just as it would during a real exam.
     *
     */


    document.addEventListener(
        "visibilitychange",
        () => {

            if (
                document.visibilityState ===
                "visible" &&
                state.timerHandle !==
                null
            ) {

                renderTimer();

            }

        }
    );


    /*
     * ========================================================
     * BOOT
     * ========================================================
     */


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initialise
        );

    } else {

        initialise();

    }


})();
