import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class DashboardItem extends Component {
    render() {
        return (
            <Container iteminfo={this.props.itemInfo}>
                <Row>
                    <Col>
                        <h1>{this.props.itemInfo.name}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>FORKS: {this.props.itemInfo.forks}</p>
                    </Col>
                    <Col>
                        <p>STARS: {this.props.itemInfo.stargazers_count}</p> 
                    </Col>
                    <Col>
                        <p>OPEN ISSUES: {this.props.itemInfo.open_issues}</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default DashboardItem;