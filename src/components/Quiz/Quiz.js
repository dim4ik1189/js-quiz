import React, { useState, useEffect } from 'react';
import { Container, Button} from "reactstrap";
import PropTypes from 'prop-types';
import ProgressNumbers from './ProgressNumbers';
import QuizQuestionCard from './QuizQuestionCard';
import '../../styles/Quiz.scss';

const Quiz = ({ questionsContext: { questions } }) => {
    let [ questionId, setQuestionId ] = useState(0);
    const [ answers, setAnswers ] = useState([]);
    let [ flag, setFlag ] = useState(true);

    const onInputChange = event => { //input and checkbox change
        setFlag(false);
        const { type, value } = event.target;

        let exists = answers.some(a => a.questionId === questions[questionId].id);

        if(exists) {
            let responseCopy = answers.slice();
            let { valueArray } = responseCopy[questionId];
            let valuesSet = new Set(valueArray);

            if(type === 'radio') valuesSet = new Set(value);

            if(type === 'checkbox') {
                if(valuesSet.has(value)) valuesSet.delete(value);
                else valuesSet.add(value);
            }
            responseCopy[questionId].valueArray = [...valuesSet].sort();

            setAnswers(responseCopy);

            if(!answers[questionId].valueArray.length) {
                setFlag(true);
            }
        } else {
            setAnswers([
                ...answers,
                {
                    questionId: questions[questionId].id,
                    valueArray: [...new Set(value)].sort()
                }
            ]);
        }

    };

    useEffect(() => {
        localStorage.setItem(
            'answers',
            JSON.stringify(answers)
        );
    });

    const onButtonClick = () => {
        setQuestionId(prevQuestionId => prevQuestionId + 1);
        setFlag(true);
    };

    const button = questionId < questions.length - 1 ? (
        <Button
            color="success"
            onClick={onButtonClick}
            disabled={flag}
        >Продолжить</Button>
    ) : (
        <Button
            color="success"
            onClick={onButtonClick}
            href="/results"
            disabled={flag}
        >Продолжить</Button>
    );
    return (
        <Container className="quiz-container">
            <div className="text-center">
                <h1>Язык JavaScript</h1>
                <ProgressNumbers
                    currentQuestionID={questionId}
                    questionsLength={questions.length}
                />
                <QuizQuestionCard
                    onInputChange={onInputChange}
                    index={questionId}
                    questions={questions}
                />
                { button }
            </div>
        </Container>
    );
};

Quiz.propTypes = {
    questionsContext: PropTypes.object
};

export default Quiz;