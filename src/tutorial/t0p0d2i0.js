import React from 'react';
import ReactDOM from "react-dom";
import Choices from "../game_template/porta/game_choice";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import "../css/tutorial.css";
import "../css/game_input.css";
import t3 from './t0p0d3';
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';



export default class t1i0 extends React.Component{
    render(){    


        function right(){
            var answer = document.getElementById('answer').value;
            var right_answer = "continuar";
            if (answer === right_answer){
                alert("Acertou");
                ReactDOM.render(
                    <Router>
                        <Route path="/game/" component={TheBackgroundScreams} />
                        <Switch>
                            <Route path="/game/t0p0d3" component={t3} />
                        </Switch>
                        <Redirect to="t0p0d3"></Redirect>
                    </Router>,
                    document.getElementById('root')
                );
            }else{
                alert("errou");
            }
        }

        return(
            <div className="all_game">
                <Choices />
                <h1 className="input_tittle">Digite “continuar” para<br/>prosseguir</h1>
                <form name="form1" action="#" onSubmit={right}>
                    <input type="text" id="answer" name="answer" className="answer" placeholder="Digite aqui" />
                    <input type="submit" className="send" value="Enviar"/>
                </form>
            </div>
        );
    }
}