import React from 'react';
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

const IntroCard = ({ cardBg, cardTitle, children }) => (
    <Card body width="70%" style={cardBg}>
        <CardBody>
            <CardTitle style={cardTitle}>
                <span>Язык JavaScript</span>
            </CardTitle>
            <CardText>
                Только сам JavaScript, без браузерных и иных расширений.
            </CardText>
        </CardBody>
        {
            children
        }
    </Card>
);

export default IntroCard;