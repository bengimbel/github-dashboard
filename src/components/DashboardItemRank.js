import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import sortForkData from '../actions/SortFork';
import sortIssueData from '../actions/SortIssue';
import sortStarData from '../actions/SortStar';
import fetchGithubData from '../actions/FetchGithubData';
import { Container, Row, Col, Button } from 'reactstrap';

class DashboardItemRank extends Component {
    constructor(props){
        super(props)
        this.state = ({
            sortForkTrigger: false,
            sortIssueTrigger: false,
            sortStarTrigger: false
        })
    }

    setupFork(){
        const unSortedData = this.props.itemInfo
        if (!this.state.sortForkTrigger) {
            if (unSortedData) {
                return (
                    unSortedData.map(info => {
                        return (
                            <h5 key={info.forks}>{info.name} {info.forks}</h5>
                        )
                    })
                )
            }
        } else {
            if(this.props.sortedForkData){
                return (
                    this.props.sortedForkData.map(info => {
                        return (
                            <h5 key={info.forks}>{info.name}: {info.forks}</h5>
                        )
                    })   
                )}
        }

    }
    setupIssue(){
        const unSortedData = this.props.itemInfo
        if (!this.state.sortIssueTrigger) {
            if (unSortedData) {
                return (
                    unSortedData.map(info => {
                        return (
                            <h5 key={info.open_issues}>{info.name}: {info.open_issues}</h5>
                        )
                    })
                )
            }
        } else {
            if(this.props.sortedIssueData){
                return (
                    this.props.sortedIssueData.map(info => {
                        return (
                            <h5 key={info.open_issues}>{info.name}: {info.open_issues}</h5>
                        )
                    })   
                )}
        }

    }
    setupStar(){
        const unSortedData = this.props.itemInfo
        if (!this.state.sortStarTrigger) {
            if (unSortedData) {
                return (
                    unSortedData.map(info => {
                        return (
                            <h5 key={info.stargazers_count}>{info.name}: {info.stargazers_count}</h5>
                        )
                    })
                )
            }
        } else {
            if(this.props.sortedStarData){
                return (
                    this.props.sortedStarData.map(info => {
                        return (
                            <h5 key={info.stargazers_count}>{info.name}: {info.stargazers_count}</h5>
                        )
                    })   
                )}
        }

    }

    renderForkButton() {
        if(this.state.sortForkTrigger){
            return(
                <Button 
                disabled
                color="primary"
                onClick={() => this.setState({
                    sortForkTrigger: !this.state.sortForkTrigger
            })}
            >
            Rank Fork Data From Lowest To Highest
            </Button>
            )
        } else {
            return(
            <Button 
                color="primary"
                onClick={() => this.setState({
                    sortForkTrigger: !this.state.sortForkTrigger
                })}
            >
            Rank Fork Data From Lowest To Highest
            </Button>
            )
        }
    }

    renderIssueButton() {
        if(this.state.sortIssueTrigger){
            return(
                <Button 
                disabled
                color="primary"
                onClick={() => this.setState({
                    sortIssueTrigger: !this.state.sortIssueTrigger
            })}
            >
            Rank Open Issue Data From Lowest To Highest
            </Button>
            )
        } else {
            return(
            <Button 
                color="primary"
                onClick={() => this.setState({
                    sortIssueTrigger: !this.state.sortIssueTrigger
                })}
            >
            Rank Open Issue Data From Lowest To Highest
            </Button>
            )
        }
    }

    renderStarButton() {
        if(this.state.sortStarTrigger){
            return(
                <Button 
                disabled
                color="primary"
                onClick={() => this.setState({
                    sortStarTrigger: !this.state.sortStarTrigger
            })}
            >
            Rank Star Data From Lowest To Highest
            </Button>
            )
        } else {
            return(
            <Button 
                color="primary"
                onClick={() => this.setState({
                    sortStarTrigger: !this.state.sortStarTrigger
                })}
            >
            Rank Star Data From Lowest To Highest
            </Button>
            )
        }
    }
    
    render() {
        if (this.props.dataType === 'fork') {
            return (
                <div className='dashboardItemRank-container'>
                <Container>
                    <Row>
                        <Col>
                        {
                            this.setupFork()
                        }
                        </Col>
                    </Row>
                </Container>
                {
                    this.renderForkButton()
                }
                </div>
            )
        }
        if (this.props.dataType === 'issue') {
            return (
                <div className='dashboardItemRank-container'>
                    <Container>
                        <Row>
                            <Col>
                            {
                                this.setupIssue()
                            }
                            </Col>
                        </Row>
                    </Container>
                    {
                        this.renderIssueButton()
                    }
                </div>
            )
        }
        if (this.props.dataType === 'star') {
            return (
                <div className='dashboardItemRank-container'>
                <Container>
                    <Row>
                        <Col>
                        {
                            this.setupStar()
                        }
                        </Col>
                    </Row>
                </Container>
                 {
                     this.renderStarButton()
                 }
                    {/* <Button
                        color="primary"
                        onClick={() => this.setState({
                            sortStarTrigger: !this.state.sortStarTrigger
                        })}
                    >
                    Rank Star Data From Lowest To Highest
                    </Button> */}
                </div>
            )
        }
        
        return (
            <div className='dashboardItemRank-container'>
                <h1>LOADING</h1>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchGithubData, sortForkData, sortIssueData, sortStarData }, dispatch);
  }

const mapStateToProps = (state) => {
    return {
        githubData: state.githubData.data,
        sortData: state.sortData,
        sortedForkData: state.sortData.sortForkData,
        sortedIssueData: state.sortData.sortIssueData,
        sortedStarData: state.sortData.sortStarData
    };
};

// export default DashboardItemRank;
export default connect(mapStateToProps, mapDispatchToProps)(DashboardItemRank);