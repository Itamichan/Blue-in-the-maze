import React, {Fragment, useState} from 'react';
import MazeContainer from "../MazeContainer/MazeContainer";
import StartScreen from "../MazeContainer/StartScreen";
import LevelSelection from "../MazeContainer/LevelSelection/LevelSelection";
import GameBackground from "./GameBackground/GameBackground";
import FinishScreen from "../MazeContainer/FinishScreen";
import LostScreen from "../MazeContainer/LostScreen";
import Footer from "../Footer/Footer";
import Rules from "../MazeContainer/Rules/Rules";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
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

    const [showRules, setShowRules] = useState(false);

    const toggleModal = () => setShowRules(!showRules);

    return (
        <Fragment>
            <div>
                navbar
            </div>
            <GameBackground>
                <Rules onReadRules={(showModal) => {
                    setShowRules(showModal)
                }}/>
                <Modal


                    id={'rules-modal'}
                    isOpen={showRules}
                >
                    <ModalHeader id={'modal-header'}>
                        <h1>How to play</h1>
                    </ModalHeader>
                    <ModalBody id={'modal-body'}>
                        <div>
                            <p> Blue came from far away in the hope to see the creatures called
                                "humans".
                            </p>
                            <p>Unfortunately instead he got trapped into a maze.</p>
                            <p>Help Blue to get out!</p>
                            <ul>
                                <li>Use the arrows bellow the maze - for mobile</li>
                                <li>Use the arrows on your keyboard - for desktop</li>
                            </ul>
                        </div>

                    </ModalBody>
                    <ModalFooter id={'modal-footer'}>
                        <Button onClick={toggleModal}> Ok!
                        </Button>
                    </ModalFooter>
                </Modal>
                {screenOption}
            </GameBackground>
            <Footer/>

        </Fragment>
    )
};

export default Layout;