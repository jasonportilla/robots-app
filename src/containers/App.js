import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import Searchbar from '../components/Searchbar';
import './App.css';
import Scroll from '../components/Scroll';
import Header from '../components/Header';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField, requestRobots } from '../actions/actions';

class App extends Component {
  componentDidMount() {
    this.props.requestRobots();  
  }

  onSearchChange = (event) => {
    this.props.setSearchField(event.target.value);
  }

  render() {
    const { isPending, robots, searchField } = this.props;
    if(isPending) {
      return <h1>Loading</h1>;
    }
    console.log(this.props);
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
   
    return (
      <div className="tc">
       <Header />
        <Searchbar 
          searchChange={this.onSearchChange}
        />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={ filteredRobots } />
          </ErrorBoundary>  
        </Scroll>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchField.input,
    robots: state.robots.data,
    isPending: state.pending
  };
}

export default connect(mapStateToProps, { setSearchField, requestRobots })(App);