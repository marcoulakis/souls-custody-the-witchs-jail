import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import Game from "../game_template/game_talk";
import "../css/tutorial.css";
import t0 from './t0p0d0';
import t1e0 from "./t0p0d1e0"


export default class t1 extends React.Component{
    render(){     

        function link() {
            ReactDOM.render(
                <Router>
                    <Switch>
                    <Route path="/game/t0p0d0" component={t0} />
                        <Route path="/game/t0p0d1e0" component={t1e0} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all">
                <Game />
                <Link onClick={link} to="t0p0d0">
                    <div id="b1" className="Back_">
                        <p className="back_">Voltar</p>
                    </div>
                </Link>
                <div className="bar_game"/>
                <Link onClick={link} to="t0p0d1e0">
                    <div id="n1" className="Next">
                        <p className="next">Próximo</p>
                    </div>
                </Link>
                <h1 className="poppy">Poppy</h1>
                <p className="texto">
                Eu vou tentar te ensinar como se joga essa coisa. <br/>
                Você tem que escolher entre as opções que aparecem na tela para escolher seu rumo de história.
                </p>

            </div>
        );
    }
}