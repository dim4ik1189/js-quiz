import React from 'react';
import { Button, Container } from 'reactstrap';
import IntroCard from './IntroCard';
import IntroExplanation from './IntroExplanation';

const cardBg = {background: "#f7f6ea"};
const cardTitle = {color: "red", fontWeight: "bold"};
const goToTestBtn = {alignSelf: "flex-end", marginTop: "-3rem"};

const App = () => (
    <Container style={{padding: "0 9rem"}}>
        <div style={{textAlign: "center"}}>
            <h1 style={{marginTop: "5rem"}}>Тестирование знаний</h1>
            <p>На этой странице вы можете протестировать свои знания JavaScript</p>
        </div>
        <IntroCard cardBg={cardBg} cardTitle={cardTitle}>
            <Button href="/quiz" style={goToTestBtn}>
                Пройти тестирование
            </Button>
        </IntroCard>
        <IntroExplanation/>
    </Container>
);

export default App;