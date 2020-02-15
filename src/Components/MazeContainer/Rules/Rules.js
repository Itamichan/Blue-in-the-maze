import React, {Fragment, useState} from 'react';
import './Rules.scss';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";


const Rules = () => {

    const [showRules, setShowRules] = useState(false);

    const toggleModal = () => setShowRules(!showRules);

    return (
        <Fragment>
            <div
                id={'rules'}
                onClick={() => setShowRules(true)}

            >Rules</div>
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
                        <p>Unfortunately instead he got trapped in a maze.</p>
                        <p>Help Blue to get out!</p>
                        <ul>
                            <li>Use the arrows below the maze - for mobile</li>
                            <li>Use the arrows on your keyboard - for desktop</li>
                        </ul>
                    </div>

                </ModalBody>
                <ModalFooter id={'modal-footer'}>
                    <Button onClick={toggleModal}> Ok!
                    </Button>
                </ModalFooter>
            </Modal>

        </Fragment>

    )
};

export default Rules;