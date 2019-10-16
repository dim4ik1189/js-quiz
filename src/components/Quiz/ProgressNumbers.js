import React from 'react';
import questions from '../../data/questions';

const ProgressNumbers = ({ currentQuestionID }) => {
    const numbers = [...Array(questions.length + 1).keys()].slice(1);
    const quizTimeline = {
        fontSize: "12px",
        color: "#333",
        width: "20px",
        height: "20px",
        listStyleType: "none"
    };
    const lineStyle = {
        display: "flex",
        justifyContent: "space-evenly",
        border: "2px solid #eee",
        borderRadius: "20px",
        padding: "5px"
    };
    const current = {
        borderRadius: "10px",
        color: "#fff",
        background: "#f8ab47"
    };
    return (
        <div style={lineStyle}>
            {
                numbers.map((num, index) => {
                    if (currentQuestionID === index) {
                        return (
                            <li key={num} style={{...quizTimeline, ...current}}>{num}</li>
                        )
                    }
                    return (
                        <li key={num} style={quizTimeline}>{num}</li>
                    )
                })
            }
        </div>
    )
};

export default ProgressNumbers;