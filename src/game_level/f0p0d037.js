import React from 'react';
import ReactDOM from 'react-dom';
import Game_es from "../templates/acogue/poppy/p2/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_index.css";
import Typical from '../typical';
import refresh from "../img/icons/refresh.svg";
import f0p0d038 from "./f0p0d038";
import f0p0d036 from "./f0p0d036";

import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';



export default class f0p0d037 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/f/f0p0d038" component={f0p0d038} />
                        <Route path="/game/f/f0p0d036" component={f0p0d036} />


                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Game_es />
                <Link onClick={link} to="f0p0d036">
                    <div id="b1" className="Back_">
                        <p className="back_">Voltar</p>
                    </div>
                </Link>
                <div className="bar_game"/>
                <Link onClick={link} to="f0p0d038">
                    <div id="n1" className="Next">
                        <p className="next">Próximo</p>
                    </div>
                </Link>
                  <h1 className="rebecca">Rebecca</h1>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                <Typical
                steps={['(Acho que entendi!)', 1300, '(Ele deve ter alguma coisa que nem a caixa da Poppy!)', 1300, '(Talvez...)', 1500, '(talvez seja essa vitrola que ele está segurando!)', 1300, '(Vou pegar ela!)']}
                loop={1}
                wrapper="p"
                className="texto-italic"
                />
            </div>
        );
    }
}