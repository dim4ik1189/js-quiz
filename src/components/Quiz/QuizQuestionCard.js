import React from 'react';
import { Card, CardTitle, Form, FormGroup, Input, Label } from "reactstrap";
import PropTypes from 'prop-types';
import '../../styles/Quiz.scss';

const QuizQuestionCard = ({ questions, index, onInputChange }) => {
    const { variants, type } = questions[index];

    return (
        <Card className="quiz-question">
            <CardTitle>
                { questions[index].question }
            </CardTitle>
            <Form className="mt-1">
                    {
                        variants.map((variant, i) => (
                            <FormGroup
                                className="group"
                                check
                                key={`key-${index}${variant.length}${i}`}
                            >
                                <Label className="group-label">
                                    <Input
                                        type={type}
                                        value={i}
                                        id={`custom${type}${i}`}
                                        name="answer"
                                        className="group-input"
                                        onChange={onInputChange}
                                    />
                                    <span className="variant">{ variant }</span>
                                </Label>
                            </FormGroup>
                        ))
                    }
            </Form>
        </Card>
    );
};

QuizQuestionCard.propTypes = {
    questions: PropTypes.array,
    index: PropTypes.number,
    onInputChange: PropTypes.func
};

export default QuizQuestionCard;