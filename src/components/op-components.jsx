import React from 'react';

import {Col, Form} from 'react-bootstrap';

export const Contains = (props) => {
    return (
        <Col>
            <Form.Label>Value</Form.Label>
            <Form.Control
                type="text"
                name="value"
                value={props.value}
                onChange={props.onChange}
                isValid={props.isValid}
              />
        </Col>
    )
}