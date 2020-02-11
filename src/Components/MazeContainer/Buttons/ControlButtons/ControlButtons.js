import React from 'react';
import {Button, Col, Container, Row} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './ControlButtons.scss';

import PropTypes from 'prop-types';

const ControlButtons = ({up, left, down, right}) => {
    return (
        <Container fluid={true} id={'control-buttons'}>
            <Row>
                <Col className={'button-center'}>
                    <Button className={'move-buttons'} id={'arrow-up'} color="warning" onClick={up}>
                        <FontAwesomeIcon icon="chevron-up"/>
                    </Button>
                </Col>
            </Row>
            <Row className={'button-center'}>
                <Col>
                    <Button className={'move-buttons'} color="warning" onClick={left}>
                        <FontAwesomeIcon icon="chevron-left"/>
                    </Button>
                </Col>
                <Col>
                    <Button className={'move-buttons'} color="warning" onClick={right}>
                        <FontAwesomeIcon icon="chevron-right"/>
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col className={'button-center'}>
                    <Button className={'move-buttons'} color="warning" onClick={down}>
                        <FontAwesomeIcon icon="chevron-down"/>
                    </Button>
                </Col>
            </Row>
        </Container>
    )
};

ControlButtons.prototype = {
    up: PropTypes.func.isRequired,
    left: PropTypes.func.isRequired,
    down: PropTypes.func.isRequired,
    right: PropTypes.func.isRequired,
};

export default ControlButtons;