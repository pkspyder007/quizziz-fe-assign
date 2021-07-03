const MARKUP_CSS = `
    
/* Utility classes start */
.flex {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

.justify-start {
    justify-content: start;
}

button {
    padding: 8px 1rem;
    border-radius: 8px;
    color: white;
    outline: none;
    border: 0;
}


button.primary {
    background: var(--button-primary-color);
}

button.secondary {
    background: var(--button-secondary-color);
}

/* Utility classes end */

#markup_container {
    margin: 2rem;
    background: rgb(236, 236, 236);
    padding-bottom: 1rem;
}

header {
    background: var(--header-bg-color);
    min-height: 4rem;
    padding: 0 1rem;
}

.logo {
    color: var(--header-text-color);
    font-size: var(--header-text-size);
}

.about_quiz  {
    padding: 0 1rem;
    background: var(--quiz-header-bg-color);
}

.about_quiz h1 {
    color: var(--quiz-header-text-color);
}

.pill {
    padding: 6px;
    font-size: 0.8rem;
    font-weight: bold;
    margin: 0 3px;
    border-radius: 8px;
}

.pill:nth-child(1) {
    color: var(--pill1-text-color);
    background: var(--pill1-bg-color);
    
}

.pill:nth-child(2) {
    color: var(--pill2-text-color);
    background: var(--pill2-bg-color);
    
}

.about_quiz img {
    border-radius: 100%;
    max-height: 3rem;
    margin-right: 0.6rem;
}

.about_quiz .quiz_author {
    justify-self: center;
}

.questions_container {
    background-color: white;
    margin: 1rem 1.4rem;
    padding: 1rem;
    border-radius: 8px;
}

.question_text {
    font-weight: bold;
}

.answer_group {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
button.answer {
    border-radius: 0;
    color: rgb(58, 58, 58);
    font-weight: bold;
    padding: 1rem;
}

button.correct {
    color: white;
    background: var(--answer-button-color);
}
`;

export {MARKUP_CSS};