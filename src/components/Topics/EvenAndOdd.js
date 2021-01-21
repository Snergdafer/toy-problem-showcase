import React, {Component} from "react"

class EvenAndOdd extends Component {
    constructor() {
        super()
        this.state ={
            evenArray: [],
            oddArray: [],
            userInput: ''
        }

    }

    updateInput(value) {
        this.setState({
            userInput: value
        })
    }

    solveIt() {
        let arr = this.userInput.split(',')
        let evens = []
        let odds = []
    
        for ( let i = 0; i < arr.length; i++ ) {
          if ( arr[i] % 2 === 0 ) {
            evens.push( parseInt(arr[i], 10) )
          } else {
            odds.push( parseInt(arr[i], 10) )
          }
        }
    
        this.setState({evenArray: evens})
        this.setState({oddArray: odds})
    }

    render() {
        return(
            
            <div className="puzzleBox evenAndOddPB">

                <h4 className="inputLine">Evens and Odds</h4>
                <input className="confirmationButton" onChange={(e) => this.updateInput(e.target.value)}/>
                <button onClick={this.solveIt()}>Solve!</button>
                <span className="resultsBox"> Evens: {JSON.stringify(this.state.evenArray)} </span>
                <span className="resultsBox"> Odds: {JSON.stringify(this.state.oddArray)} </span>

            </div>
            
        )
    }
       
}

export default EvenAndOdd