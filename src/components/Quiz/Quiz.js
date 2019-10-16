import React, { useState, useEffect } from 'react';
import { Container, Button} from "reactstrap";
import PropTypes from 'prop-types';
import ProgressNumbers from './ProgressNumbers';
import QuizQuestionCard from './QuizQuestionCard';

const Quiz = ({ questionsContext: { questions } }) => {
    console.log('this.context', questions);
    const [ questionsArray ] = useState(questions);
    let [ questionId, setQuestionId ] = useState(0);
    const [ answers, setAnswers ] = useState([]);
    let [ flag, setFlag ] = useState(true);

    const onInputChange = event => { //input and checkbox change
        setFlag(false);
        const { type, value } = event.target;

        let exists = answers.some(a => a.questionId === questionsArray[questionId].id);

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
                    questionId: questionsArray[questionId].id,
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

    const button = questionId < questionsArray.length - 1 ? (
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
        <Container style={{padding: "0 9rem"}}>
            <div style={{textAlign: "center"}}>
                <h1 style={{margin: "5rem 0 3rem"}}>Язык JavaScript</h1>
                <ProgressNumbers
                    currentQuestionID={questionId}
                />
                <QuizQuestionCard
                    onInputChange={onInputChange}
                    index={questionId}
                    questions={questionsArray}
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