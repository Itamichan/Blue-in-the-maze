import React, {Fragment, useState} from 'react';
import MazeContainer from "../MazeContainer/MazeContainer";
import StartScreen from "../MazeContainer/StartScreen";
import LevelSelection from "../MazeContainer/LevelSelection/LevelSelection";
import GameBackground from "./GameBackground/GameBackground";
import FinishScreen from "../MazeContainer/FinishScreen/FinishScreen";
import LostScreen from "../MazeContainer/LostScreen/LostScreen";
import Footer from "../Footer/Footer";
import Rules from "../MazeContainer/Rules/Rules";
import './Layout.scss';


const Layout = (props) => {

    const [currentScreen, setCurrentScreen] = useState('startScreen');
    const [currentLevel, setCurrentLevel] = useState(null);
    const [currentGameResult, setCurrentGameResult] = useState(null);

    //renders the necessary Screen component
    let screenOption;
    if (currentScreen === 'startScreen') {
        screenOption = <StartScreen onStartClick={() => setCurrentScreen('levelSelection')}/>
    } else if (currentScreen === 'levelSelection') {
        screenOption = <LevelSelection
            chooseLevel={(level) => {
                setCurrentLevel(level);
                setCurrentScreen('gamePlay')
            }}/>
    } else if (currentScreen === 'gamePlay') {
        screenOption = <MazeContainer
            mazeLevel={currentLevel}
            onPlayerFinish={(score) => {
                setCurrentScreen('finishScreen');
                setCurrentGameResult(score)
            }}
            onPlayerLose={() => {
                setCurrentScreen('lostScreen')
            }}
        />
    } else if (currentScreen === 'finishScreen') {
        screenOption = <FinishScreen
            gameResult={currentGameResult}
            onRepeatLevel={() => {
                setCurrentScreen('gamePlay')
            }}
            onNewLevel={() => {
                setCurrentScreen('levelSelection')
            }}
        />
    } else if (currentScreen === 'lostScreen') {
        screenOption = <LostScreen
            onRepeatLevel={() => {
                setCurrentScreen('gamePlay')
            }}
            onNewLevel={() => {
                setCurrentScreen('levelSelection')
            }}
        />
    }

    return (
        <Fragment>
            <GameBackground>
                <div id={'screen-header'}>
                    <div
                        id={'home-button'}
                    onClick={() => setCurrentScreen('startScreen')}
                    >Home
                    </div>
                    <Rules/>
                </div>
                {screenOption}
            </GameBackground>
            <Footer/>
        </Fragment>
    )
};

export default Layout;