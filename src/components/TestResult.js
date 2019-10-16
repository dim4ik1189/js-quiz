import React, { useState } from 'react';
import { ListGroup, Card, CardTitle, Form, FormGroup, Label, Input, Container, Alert } from "reactstrap";

const TestResult = ({ questionsContext: { questions } }) => {
    const localStorageRef = localStorage.getItem('answers');
    const [ results ] = useState(JSON.parse(localStorageRef));

    const cardStyle = {
        margin: "2rem 0 2rem",
        padding: "2rem",
        border: "3px solid #eee",
        borderRadius: "10px",
        textAlign: "left"
    };

    const inputStyle = {
        width: "16px",
        height: "16px",
        margin: "-.07rem 0 0 -1.5rem",
        cursor: "pointer"
    };

    const variantStyle = {
        background: "#f5f2f0",
        padding: "2px 4px"
    };
    console.log("questions", questions);

    const handleResult = (question, questionIndex, i) => {
        return question.id === results[questionIndex].questionId && results[questionIndex].valueArray.includes(String(i));
    };
    return (
        <Container style={{padding: "0 9rem"}}>
            {
                results.length < 1 ? (
                    <Alert color="warning" style={{display: "flex", justifyContent: "center", marginTop: "5rem"}}>
                        <a href="/quiz">Пройдите тест</a>, чтобы увидеть результаты
                    </Alert>
                ): (
                    <ListGroup>
                        {
                            questions.map((question, questionIndex) => {
                                return (
                                    <Card style={cardStyle} key={`${question.id}-${question.type}`}>
                                        <CardTitle>
                                            { question.question }
                                        </CardTitle>
                                        <Form style={{marginTop: "1rem"}}>
                                            {
                                                question.variants.map((variant, i) => (
                                                    <FormGroup
                                                        style={{lineHeight: "16px", marginBottom: ".1rem"}}
                                                        check
                                                        key={`key-${questionIndex}${variant.length}${i}`}
                                                    >
                                                        <Label style={{fontSize: "14px", cursor: "pointer"}}>
                                                            <Input
                                                                type={question.type}
                                                                value={i}
                                                                id={`custom${question.type}${i}`}
                                                                name="answer"
                                                                style={inputStyle}
                                                                defaultChecked={handleResult(question, questionIndex, i)}
                                                                disabled
                                                            />
                                                            <span style={variantStyle}>{ variant }</span>
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

export default TestResult;