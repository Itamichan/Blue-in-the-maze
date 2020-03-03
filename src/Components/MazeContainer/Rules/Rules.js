import React, {Fragment, useState} from 'react';
import './Rules.scss';
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {isMobile, isTablet} from "react-device-detect";


const Rules = () => {

    const [showRules, setShowRules] = useState(false);

    const toggleModal = () => setShowRules(!showRules);

    let renderInstructions = () => {
        if (isMobile || isTablet) {
            return 'In order to move use the arrows below the maze.'
        } else {
            return 'In order to move use the arrow keys on your keyboard.'
        }
    };

    return (
        <Fragment>
            <div
                id={'rules'}
                className={'text-default'}
                onClick={() => setShowRules(true)}

            >Rules
            </div>
            <Modal
                id={'rules-modal'}
                centered
                isOpen={showRules}
            >
                <ModalHeader id={'modal-header'}>
                    <div
                        className={'text-header'}>How to play
                    </div>
                </ModalHeader>
                <ModalBody
                    id={'modal-body'}
                    className={'text-default'}>
                    <div>
                        <p> Blue came from far away in the hope to see the creatures called
                            "humans".
                        </p>
                        <p>Unfortunately, instead he got trapped in a maze.</p>
                        <p>Help Blue to get out!</p>
                        <p>{renderInstructions()}</p>
                    </div>
                </ModalBody>
                <ModalFooter
                    id={'modal-footer'}
                    style={{background: `url(${process.env.PUBLIC_URL + "/resources/question.png"})`}}
                >
                    <button
                        className={'button-default'}
                        onClick={toggleModal}>
                        Ok!
                    </button>
                </ModalFooter>
            </Modal>
        </Fragment>
    )
};

export default Rules;