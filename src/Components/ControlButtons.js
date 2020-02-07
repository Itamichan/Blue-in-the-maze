import React from 'react';
import {Button, Col, Container, Row} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import PropTypes from 'prop-types';

const ControlButtons = ({up, left, down, right}) => {
    return (
        <Container fluid={true} className={'containerPaddingTop'}>
            <Row>
                <Col className={'buttonCenter'}>
                    <Button className={'moveButtons'} color="warning" onClick={up}>Button up</Button>
                </Col>
            </Row>
            <Row className={'buttonJustify'}>
                <Col>
                    <Button className={'moveButtons'} color="warning" onClick={left}>Button left</Button>
                </Col>
                <Col>
                    <Button className={'moveButtons'} color="warning" onClick={right}>Button right</Button>
                </Col>
            </Row>
            <Row>
                <Col className={'buttonCenter'}>
                    <Button className={'moveButtons'} color="warning" onClick={down}>
                        <FontAwesomeIcon icon="coffee"/>
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