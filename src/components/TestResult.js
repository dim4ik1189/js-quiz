import React, { useState } from 'react';
import { ListGroup, Card, CardTitle, Form, FormGroup, Label, Input, Container, Alert } from "reactstrap";
import PropTypes from "prop-types";
import '../styles/TestResult.scss';

const TestResult = ({ questionsContext: { questions } }) => {
    const localStorageRef = localStorage.getItem('answers');
    const [ results ] = useState(JSON.parse(localStorageRef));

    const handleResult = (question, questionIndex, i) => {
        question.correct
        return question.id === results[questionIndex].questionId && results[questionIndex].valueArray.includes(String(i));
    };
    return (
        <Container className="result-container">
            {
                results.length < 1 ? (
                    <Alert color="warning" className="d-flex justify-content-center mt-5">
                        <a href="/quiz">Пройдите тест</a>, чтобы увидеть результаты
                    </Alert>
                ) : (
                    <ListGroup>
                        {
                            questions.map((question, questionIndex) => {
                                return (
                                    <Card className="quiz-question mb-0" key={`${question.id}-${question.type}`}>
                                        <CardTitle>
                                            { question.question }
                                        </CardTitle>
                                        <Form className="mt-1">
                                            {
                                                question.variants.map((variant, i) => (
                                                    <FormGroup
                                                        className="group"
                                                        check
                                                        key={`key-${questionIndex}${variant.length}${i}`}
                                                    >
                                                        <Label className="group-label">
                                                            <Input
                                                                type={question.type}
                                                                value={i}
                                                                id={`custom${question.type}${i}`}
                                                                name="answer"
                                                                className="group-input"
                                                                defaultChecked={handleResult(question, questionIndex, i)}
                                                                disabled
                                                            />
                                                            <span className="variant">{ variant }</span>
                                                        </Label>
                                                    </FormGroup>
                                                ))
                                            }
                                        </Form>
                                    </Card>
                                )
                            })
                        }
                    </ListGroup>
                )
            }
        </Container>
    )
};

TestResult.propTypes = {
    questionsContext: PropTypes.object
};

export default TestResult;