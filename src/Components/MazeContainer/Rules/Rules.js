import React, {Fragment, useState} from 'react';
import './Rules.scss';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
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
                onClick={() => setShowRules(true)}

            >Rules
            </div>
            <Modal
                id={'rules-modal'}
                isOpen={showRules}
            >
                <ModalHeader id={'modal-header'}>
                    <div>How to play</div>
                </ModalHeader>
                <ModalBody id={'modal-body'}>
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
                    <Button onClick={toggleModal}> Ok!
                    </Button>
                </ModalFooter>
            </Modal>

        </Fragment>

    )
};

export default Rules;