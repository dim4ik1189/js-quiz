import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from '../App/App';
import Quiz from '../Quiz/Quiz';
import TestResult from '../TestResult';
import questions from '../../data/questions';
import { Provider, Consumer } from '../QuizContext';

const Router = () => (
    <Provider value={{questions}}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/quiz"
                       exact
                       render={props => (
                               <Consumer>
                                   {
                                       context => (
                                           <Quiz {...props}
                                                questionsContext={context}
                                           />
                                       )
                                   }
                               </Consumer>
                           )
                       }
                />
                <Route path="/results"
                       exact
                       render={props => (
                               <Consumer>
                                   {
                                       context => (
                                           <TestResult {...props}
                                                 questionsContext={context}
                                           />
                                       )
                                   }
                               </Consumer>
                           )
                       }
                />
            </Switch>
        </BrowserRouter>
    </Provider>
);

export default Router;