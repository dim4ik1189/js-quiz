import React from 'react';
import { Button, Container } from 'reactstrap';
import IntroCard from './IntroCard';
import IntroExplanation from './IntroExplanation';
import '../../styles/App.scss'

const App = () => (
    <Container style={{padding: "0 9rem"}}>
        <div style={{textAlign: "center"}}>
            <h1 style={{marginTop: "5rem"}}>Тестирование знаний</h1>
            <p>На этой странице вы можете протестировать свои знания JavaScript</p>
        </div>
        <IntroCard>
            <Button href="/quiz" className="start-quiz">
                Пройти тестирование
            </Button>
        </IntroCard>
        <IntroExplanation/>
    </Container>
);

export default App;