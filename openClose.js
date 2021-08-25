class BooleanQuestion {
    constructor(description) {
        this.description = description
    }

    printQuestionChoices(){
        console.log('1. True');
        console.log('2. False');
    }
}

class MultipleChoiceQuestion {
    constructor(description, options) {
        this.description = description
        this.options = options
    }

    printQuestionChoices(){
        this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        })
    }
}

class TextQuestion {
    constructor(description){
        this.description = description
    }

    printQuestionChoices(){
        console.log('Answer:___________');
    }
}

class RangeQuestion {
    constructor(description){
        this.description = description
    }

    printQuestionChoices(){
        console.log('Minimum:___________');
        console.log('Maximum:___________');
    }
}

function printQuiz(questions){
    questions.forEach(question => {
        console.log(question.description);
        question.printQuestionChoices()
        console.log('');
    })
}