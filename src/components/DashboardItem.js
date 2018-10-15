import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class DashboardItem extends Component {
    render() {
        return (
            <Container style={{marginTop: '10px', marginBottom: '10px'}} iteminfo={this.props.itemInfo}>
                    <Row>
                        <Col>
                        <img src={this.props.itemInfo.organization.avatar_url} style={{height: '30px', width: '30px'}} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>{this.props.itemInfo.name}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Forks: {this.props.itemInfo.forks}</p>
                        </Col>
                        <Col>
                            <p>Open Issues: {this.props.itemInfo.open_issues}</p>
                        </Col>
                        <Col>
                            <p>Stars: {this.props.itemInfo.stargazers_count}</p> 
                        </Col>
                    </Row>
            </Container>
        )
    }
}

export default DashboardItem;