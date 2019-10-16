import React from 'react';
import { Card, CardTitle, Form, FormGroup, Input, Label } from "reactstrap";

const QuizQuestionCard = ({ questions, index, onInputChange }) => {
    const { variants, type } = questions[index];
    const cardStyle = {
        margin: "2rem 0 2rem",
        padding: "2rem",
        border: "3px solid #eee",
        borderRadius: "10px",
        textAlign: "left"
    };

    return (
        <Card style={cardStyle}>
            <CardTitle>
                { questions[index].question }
            </CardTitle>
            <Form style={{marginTop: "1rem"}}>
                    {
                        variants.map((variant, i) => (
                            <FormGroup
                                style={{lineHeight: "16px", marginBottom: ".1rem"}}
                                check
                                key={`key-${index}${variant.length}${i}`}
                            >
                                <Label style={{fontSize: "14px", cursor: "pointer"}}>
                                    <Input
                                        type={type}
                                        value={i}
                                        id={`custom${type}${i}`}
                                        name="answer"
                                        style={{width: "16px", height: "16px", margin: "-.07rem 0 0 -1.5rem", cursor: "pointer"}}
                                        onChange={onInputChange}
                                    />
                                    <span style={{background: "#f5f2f0", padding: "2px 4px"}}>{ variant }</span>
                                </Label>
                            </FormGroup>
                        ))
                    }
            </Form>
        </Card>
    );
};

export default QuizQuestionCard;