import React, { Component } from 'react';
import './App.css';
import ColoredText from './components/ColoredText'

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            color: 'black',
            active: [true, true, true]
        }
    }
    
    changeColorHandler = (color) => {    
        this.setState({color});
    }
    
    toggle = (id) => {
        this.setState(previousState => {
            let tmpStateActive = previousState.active;
            tmpStateActive[id] = !tmpStateActive[id];
            return {
                active: tmpStateActive
            };
        })
    }
    
    render(){
        return (
            <>
                <h2>Color</h2>
                <span onClick={() => this.changeColorHandler("red", 0)} style={ this.state.color === "red" ? { fontWeight: 'bold' } : { fontWeight: 'normal' }}>Red</span><br />
                <span onClick={() => this.changeColorHandler("blue", 1)} style={ this.state.color === "blue" ? { fontWeight: 'bold' } : { fontWeight: 'normal' }}>Blue</span><br />
                <span onClick={() => this.changeColorHandler("green", 2)} style={ this.state.color === "green" ? { fontWeight: 'bold' } : { fontWeight: 'normal' }}>Green</span><br />
                <h2>Number</h2>
                <span onClick={() => this.toggle(0, 0)} style={ this.state.active[0] ? { fontWeight: 'bold' } : { fontWeight: 'normal' }}>1</span><br />
                <span onClick={() => this.toggle(1, 1)} style={ this.state.active[1] ? { fontWeight: 'bold' } : { fontWeight: 'normal' }}>2</span><br />
                <span onClick={() => this.toggle(2, 2)} style={ this.state.active[2] ? { fontWeight: 'bold' } : { fontWeight: 'normal' }}>3</span><br />
                <h2>ColoredText</h2>
                <ColoredText label={1} color={this.state.active[0] ? this.state.color : "black"}/>
                <ColoredText label={2} color={this.state.active[1] ? this.state.color : "black"}/>
                <ColoredText label={3} color={this.state.active[2] ? this.state.color : "black"}/>
            </>
        )
    }
} 

export default App; 