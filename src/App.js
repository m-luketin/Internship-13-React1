import React, { Component } from 'react';
import './App.css';
import ColoredText from './components/ColoredText'

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            color: 'black',
            active: [true, true, true],
            bold: [false, false, false, false, false, false]
        }
    }

    render(){
        return (
            <>
                <h2>Color</h2>
                <span onClick={() => this.ChangeColorHandler("red", 0)} style={ this.state.bold[0] ? { fontWeight: 'bold' } : { fontWeight: 'normal' }}>Red</span><br />
                <span onClick={() => this.ChangeColorHandler("blue", 1)} style={ this.state.bold[1] ? { fontWeight: 'bold' } : { fontWeight: 'normal' }}>Blue</span><br />
                <span onClick={() => this.ChangeColorHandler("green", 2)} style={ this.state.bold[2] ? { fontWeight: 'bold' } : { fontWeight: 'normal' }}>Green</span><br />
                <h2>Number</h2>
                <span onClick={() => this.Toggle(0, 0)} style={ this.state.bold[3] ? { fontWeight: 'bold' } : { fontWeight: 'normal' }}>1</span><br />
                <span onClick={() => this.Toggle(1, 1)} style={ this.state.bold[4] ? { fontWeight: 'bold' } : { fontWeight: 'normal' }}>2</span><br />
                <span onClick={() => this.Toggle(2, 2)} style={ this.state.bold[5] ? { fontWeight: 'bold' } : { fontWeight: 'normal' }}>3</span><br />
                <h2>ColoredText</h2>
                <ColoredText value={1} color={this.state.color} active={this.state.active[0]} />
                <ColoredText value={2} color={this.state.color} active={this.state.active[1]} />
                <ColoredText value={3} color={this.state.color} active={this.state.active[2]} />
            </>
        )
    }
    
    ChangeColorHandler = (color, buttonId) => {    
        this.setState({color: color});
        this.BoldColorButton(buttonId);
    }
    
    Toggle = (id, buttonId) => {
        this.setState(previousState => {
            previousState.active[id] = !previousState.active[id];
            return {
                active: previousState.active
            };
        })
        this.BoldIndex(buttonId);
    }
    
    
    BoldColorButton = (buttonId) => {
        for(let i = 0; i < 3; i++){
            if(i !== buttonId)
                this.state.bold[i].setState(false);
            else
                this.state.bold[buttonId].setState(true);
        }
    }

    BoldIndex = (buttonId) => {
        this.state.bold[buttonId + 3].setState(!this.state.bold[buttonId + 3]);
    }
} 

export default App;
