import React from 'react';

const IntroExplanation = () => (
    <div style={{marginTop: "3rem"}}>
        <h5 style={{fontWeight: "bold"}}>Пояснения:</h5>
        <ul>
            <li>Тесты предполагают современные браузеры.</li>
            <li>Все настройки браузера – по умолчанию.</li>
            <li>Версия JavaScript – современная.</li>
            <li>Везде "use strict".</li>
        </ul>
        <div>
            Если у вас не получилось ответить на многие вопросы – не расстраивайтесь. Его цель – не только проверить знания, но и помочь заполнить пробелы в них. Многие вопросы неочевидны и требуют не только знаний, но и опыта. Удачи!
        </div>
    </div>
);

export default IntroExplanation;