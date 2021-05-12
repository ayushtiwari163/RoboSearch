import React, { Fragment } from 'react';
import Card_List from '../components/Card_List';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
class App extends React.Component{
    constructor(){
        super();
        this.state={
           robots: [],
           searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=> response.json())
          .then(users => {this.setState({ robots: users})});
    } 
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render() {
        const robofilter=this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length===0)
        {
            return <h1>Loading</h1>
        }
        else 
        {
        return (
            <div className="tc">
            <h1 className="tc dark-red grow">Robofriends</h1>
             <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
            <Card_List robots={robofilter} />
            </Scroll>
            </div>
        )
        }
    }
}

 export default App;