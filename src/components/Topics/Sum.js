import React, {Component} from "react"

class Sum extends Component {
    constructor(){
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    updateInput(value) {
        this.setState({
            userInput: value
        })
    }

    solveIt(number1, number2) {
        this.setState({sum: number1 + number2})
    }

    render() {
        return(
            
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(e) => this.updateInput(e.target.value)}/>
                <input className="inputLine" onChange={(e) => this.updateInput(e.target.value)}/>
                <button className="confirmationButton" onClick={this.solveIt()}>ADD</button>
                <span className="resultsBox">Sum: {this.state.sum} </span>
            </div>

        )
    }
       
}

export default Sum