import React, { Component } from 'react';
import DashboardItem from '../components/DashboardItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchGithubData from '../actions/FetchGithubData';
import firebase from '../utils/firebase';
import { Container, Row, Col, Button, Alert } from 'reactstrap';
class Vote extends Component {
    constructor(props){
        super(props)

        this.state = ({
            email: '',
            voted: false,
            react: null,
            angular: null,
            ember: null,
            vue: null,
            voteValue: 'react',
            list: []
        })

        this.onEmailChange = this.onEmailChange.bind(this);
        this.saveStateToLocalStorage = this.saveStateToLocalStorage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.hydrateStateWithLocalStorage()
        this.props.fetchGithubData()
        const itemsRef = firebase.database().ref('repos');
        itemsRef.on('value', (snapshot) => {
            let repos = snapshot.val();
            let newArray = [];
            for (let i in repos) {
                    newArray.push({
                        name: i,
                        votes: repos[i]
                    })
                    newArray.map(info => {
                        if(info.name === 'react'){
                            this.setState({
                                react: info.votes
                            })
                        }
                        if(info.name === 'angular'){
                            this.setState({
                                angular: info.votes
                            })
                        }
                        if(info.name === 'ember'){
                            this.setState({
                                ember: info.votes
                            })
                        }
                        if(info.name === 'vue'){
                            this.setState({
                                vue: info.votes
                            })
                        }
                    })
            }
          });
        window.addEventListener(
            "beforeunload",
            this.saveStateToLocalStorage
          );
    }

    saveStateToLocalStorage() {
        for (let item in this.state) {
          localStorage.setItem(item, JSON.stringify(this.state[item]));
        }
      }

    onEmailChange(e) {
        this.setState({email: e.target.value})
    }

    handleChange(e){
        this.setState({voteValue: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()
        if (this.state.list.includes(this.state.email)){
            return (
               alert("You already voted with this email")
            )
        }
        const newItem = this.state.list.concat(this.state.email);
        this.setState({
            list: newItem,
            voted: true,
        }, () => {
            this.setState({
                email: ''
            })
        })
  

        if(this.state.voteValue === 'react'){
            const itemsRef = firebase.database().ref('repos/react');
            itemsRef.set(this.state.react + 1);
        }
        if(this.state.voteValue === 'angular'){
            const itemsRef = firebase.database().ref('repos/angular');
            itemsRef.set(this.state.angular + 1);
        }
        if(this.state.voteValue === 'ember'){
            const itemsRef = firebase.database().ref('repos/ember');
            itemsRef.set(this.state.ember + 1);
        }
        if(this.state.voteValue === 'vue'){
            const itemsRef = firebase.database().ref('repos/vue');
            itemsRef.set(this.state.vue + 1);
        }
    }

    hydrateStateWithLocalStorage() {
        for (let item in this.state) {
          if (localStorage.hasOwnProperty(item)) {
            let value = localStorage.getItem(item);
            try {
              value = JSON.parse(value);
              this.setState({
                  voted: value,
                  list: value
              });
            } catch (e) {
              this.setState({
                  voted: value,
                  list: value
              });
            }
          }
        }
      }


    renderRepositoryDashboardItems() {
        if(this.props.githubData.data) {

            return (
                this.props.githubData.data.map((repo) => {
                    return (
                        <Container key={repo.id}>
                            <Row>
                                <Col>
                                    <DashboardItem key={repo.id} itemInfo={repo} />
                                </Col>
                            </Row>
                        </Container>
                    )
                })
            )
        } else {
            return (
                <h1>LOADING</h1>
            )
            
        }
    }

    componentWillUnmount() {
        window.removeEventListener(
          "beforeunload",
          this.saveStateToLocalStorage
        );
        this.saveStateToLocalStorage();
    }
    
    render() {
        return (
            <div className="page-container">
                <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="form-container">
                        <Container>
                            <Row>
                                <Col className="email-container">
                                    <input
                                        placeholder='Email'
                                        className='form-control'
                                        value={this.state.email}
                                        onChange={this.onEmailChange}
                                    />
                                </Col>
                                <Col className="framework-container" >
                                    <label>
                                        <h6>Pick Your Favorite Framework:</h6>
                                            <select value={this.state.voteValue} onChange={this.handleChange} style={{marginLeft: '10px'}}>
                                            <option value="react">React</option>
                                            <option value="angular">Angular</option>
                                            <option value="ember">Ember</option>
                                            <option value="vue">Vue</option>
                                        </select>
                                    </label>
                                </Col>
                                <Col className="button-container">
                                    <Button color="primary" type="submit" size="lg">Vote</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </form>
                <div className="votes-container">
                <Container style={{marginTop: '20px', marginBottom: '20px'}}>
                    <Alert color="dark">
                        <Row>
                            <Col>
                                <h5>React Votes: {this.state.react}</h5>
                            </Col>
                            <Col> 
                                <h5>Angular Votes: {this.state.angular}</h5>
                            </Col>
                            <Col>
                                <h5>Ember Votes: {this.state.ember}</h5>
                            </Col>
                            <Col>
                                <h5>Vue Votes: {this.state.vue}</h5>
                            </Col>
                        </Row>
                    </Alert>
                </Container>
                    {
                        this.renderRepositoryDashboardItems()
                    }
                </div>
            </div>     
          </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchGithubData }, dispatch);
  }

const mapStateToProps = (state) => {
    return {
        githubData: state.githubData
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vote);

