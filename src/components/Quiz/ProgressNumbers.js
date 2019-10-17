import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Quiz.scss';

const ProgressNumbers = ({ currentQuestionID, questionsLength }) => {
    const numbers = [...Array(questionsLength + 1).keys()].slice(1);
    return (
        <div className="timeline mt-4">
            {
                numbers.map((num, index) => {
                    if (currentQuestionID === index) {
                        return (
                            <li key={num} className="current">{num}</li>
                        )
                    }
                    return (
                        <li key={num}>{num}</li>
                    )
                })
            }
        </div>
    )
};

ProgressNumbers.propTypes = {
    currentQuestionID: PropTypes.number,
    questionsLength: PropTypes.number
};

export default ProgressNumbers;