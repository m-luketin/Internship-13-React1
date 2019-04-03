import React, { Component } from 'react';
import './App.css';
import ColoredText from './components/ColoredText'


class App extends Component {
    state = {
        coloredTexts: [
            {color: 'black', active: 1},
            {color: 'black', active: 1},
            {color: 'black', active: 1}]
    }

    render(){
        return (
            <>
                <h2>Color</h2>
                <span onClick={() => this.ChangeColor("red")}>Red</span><br />
                <span onClick={() => this.ChangeColor("blue")}>Blue</span><br />
                <span onClick={() => this.ChangeColor("green")}>Green</span><br />
                <h2>Number</h2>
                <span onClick={() => this.Toggle(1)}>1</span><br />
                <span onClick={() => this.Toggle(2)}>2</span><br />
                <span onClick={() => this.Toggle(3)}>3</span><br />
                <h2>ColoredText</h2>
                <ColoredText value={1} color={this.state.coloredTexts[0].color} active={this.state.coloredTexts[0].active} />
                <ColoredText value={2} color={this.state.coloredTexts[1].color} active={this.state.coloredTexts[1].active} />
                <ColoredText value={3} color={this.state.coloredTexts[2].color} active={this.state.coloredTexts[2].active} />
            </>
        )
    }
    
    ChangeColor(color) 
    {
        console.log(color);
        console.log("hi i change the color");
    }
    

    Toggle(id)
    {
        console.log(id);
        console.log("hi i toggle stuff");
    }
} 



export default App;