import React, {Fragment, useState} from 'react';
import MazeContainer from "../MazeContainer/MazeContainer";
import StartScreen from "../MazeContainer/StartScreen";
import LevelSelection from "../MazeContainer/LevelSelection/LevelSelection";

import GameBackground from "./GameBackground/GameBackground";
import FinishScreen from "../MazeContainer/FinishScreen";


const Layout = (props) => {

    const [currentScreen, setCurrentScreen] = useState('startScreen');

    const [currentLevel, setCurrentLevel] = useState(null);

    let screenOption;
    if (currentScreen === 'startScreen') {
        screenOption = <StartScreen onStartClick={() => setCurrentScreen('levelSelection')}/>
    } else if (currentScreen === 'levelSelection') {
        screenOption = <LevelSelection chooseLevel={(level) => {
            setCurrentLevel(level);
            setCurrentScreen('gamePlay')
        }}/>
    } else if (currentScreen === 'gamePlay') {
        screenOption = <MazeContainer
            mazeLevel={currentLevel}
            onPlayerFinish={() => setCurrentScreen('finishScreen')}/>
    } else if (currentScreen === 'finishScreen') {
        screenOption = <FinishScreen/>
    }

    return (
        <Fragment>
            <div>
                navbar
            </div>
            <GameBackground>
                {screenOption}
            </GameBackground>

            <footer>
                footer
            </footer>

        </Fragment>
    )
};

export default Layout;