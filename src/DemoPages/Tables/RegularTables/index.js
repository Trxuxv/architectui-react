import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import PageTitle from '../../../Layout/AppMain/PageTitle';

import TableHover from './Examples/TableHover';


const RegularTables = (props) => {
    return (
        <Fragment>
            <PageTitle
                heading="Table"
                subheading="Tables are the backbone of almost all web applications."
                icon="pe-7s-drawer icon-gradient bg-happy-itmeo"
            />
            <ReactCSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>
                <Row>
                    <Col lg="12">
                        <Card className="main-card mb-3">
                            <CardBody>
                                <CardTitle>Table with hover</CardTitle>
                                <TableHover/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </ReactCSSTransitionGroup>
        </Fragment>
    );
};

export default RegularTables;
