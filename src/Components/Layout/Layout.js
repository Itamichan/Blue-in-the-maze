import React, {Fragment, useState} from 'react';
import MazeContainer from "../Maze/MazeContainer";
import StartScreen from "../Maze/StartGame/StartScreen";
import LevelSelection from "../Maze/LevelSelection";

import GameBackground from "../GameBackground/GameBackground";
import FinishScreen from "../Maze/FinishScreen";


const Layout = (props) => {

    const [currentScreen, setCurrentScreen] = useState('startScreen');

    const [currentLevel, setCurrentLevel] = useState(null);

    let screenOption;
    if (currentScreen === 'startScreen') {
        screenOption = <StartScreen startClicked={() => setCurrentScreen('levelSelection')}/>
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