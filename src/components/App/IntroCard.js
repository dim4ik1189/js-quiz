import React from 'react';
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import PropTypes from 'prop-types';
import '../../styles/App.scss'

const IntroCard = ({children}) => (
    <Card body className="intro-card">
        <CardBody>
            <CardTitle className="font-weight-bold">
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

IntroCard.propTypes = {
    children: PropTypes.node.isRequired
};

export default IntroCard;