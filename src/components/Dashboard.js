import React, { Component } from 'react';
import DashboardItem from './DashboardItem';
import DashboardItemRank from './DashboardItemRank';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchGithubData from '../actions/FetchGithubData';
import sortForkData from '../actions/SortFork';
import sortIssueData from '../actions/SortIssue';
import sortStarData from '../actions/SortStar';
import _ from 'lodash';
import { Container, Row, Col } from 'reactstrap';

class Dashboard extends Component {
    constructor(props){
        super(props)

        this.state = ({
            externalData: null,
        })
    }


    componentDidMount() {
        this.props.fetchGithubData().then(() => {
            const data = _.cloneDeep(this.props.githubData.data);
            const dataForForkSort = _.cloneDeep(this.props.githubData.data);
            const dataForIssueSort = _.cloneDeep(this.props.githubData.data);
            const dataForStarSort = _.cloneDeep(this.props.githubData.data);
            this.props.sortForkData(dataForForkSort);
            this.props.sortIssueData(dataForIssueSort);
            this.props.sortStarData(dataForStarSort);
            this.setState({
                externalData: data
            })
        })
        // this.interval = setInterval(this.props.fetchGithubData, 5000)
    }
 
    renderRepositoryDashboardItems() {
        if(this.props.githubData.data) {

            return (
                this.props.githubData.data.map((repo) => {
                    return (
                            <Col xs="6">
                                <DashboardItem key={repo.id} itemInfo={repo} />
                            </Col>
                    )
                })
            )
        } else {
            return (
                <h1>LOADING</h1>
            )
            
        }
    }
 

    renderDashboardItems() {
        if(this.props.githubData.data) {
            return (    
                    <Container style={{marginTop: '50px'}}>
                        <Row>
                            <Col>
                                <h3>GitHub Fork Data</h3>
                                <DashboardItemRank itemInfo={this.props.githubData.data} dataType={'fork'} />
                            </Col>
                            <Col>
                                <h3>GitHub Open Issue Data</h3>
                                <DashboardItemRank itemInfo={this.props.githubData.data} dataType={'issue'} />
                            </Col>
                            <Col>
                                <h3>GitHub Star Data</h3>
                                <DashboardItemRank itemInfo={this.props.githubData.data} dataType={'star'} />
                            </Col>
                        </Row>
                    </Container>                    
            )
        } else {
            return (
                <h1>LOADING</h1>
            )
            
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
            <Container>
                <Row>
                {
                    this.renderRepositoryDashboardItems()
                }
                </Row>
                <Row>
                    {
                        this.renderDashboardItems()
                    }
                </Row>
            </Container>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchGithubData, sortForkData, sortIssueData, sortStarData }, dispatch);
  }
const mapStateToProps = (state) => {
    return {
        githubData: state.githubData,
        sortData: state.sortData
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
