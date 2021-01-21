import React, {Component} from "react"

class FilterString extends Component {
    constructor(){
        super()
        this.state = {
            unFileredArray: ["Food", "Phood", "HELIOTROPICS", "Hellen"],
            userInput: '',
            filteredArray: []
        }

    }

    updateInput(value) {
        this.setState({
            userInput: value
        })
    }

    solveIt(userInput) {
        let names = this.state.unFileredArray;
        let filteredNames = [];

        for ( let i = 0; i < names.length; i++ ) {
            if ( names[i].includes(userInput) ) {
                filteredNames.push(names[i]);
        }
    }

    this.setState({ filteredArray: filteredNames });
    }

    render() {
        return(

          <div className="puzzleBox filterStringPB">
              <h4>Filter String</h4>
              <span className="puzzleText">Unfiltered Array: {this.state.unFileredArray}</span>
              <input className="inputLine" onChange={(e) => this.updateInput(e.target.value)}/>
              <button className="confirmationButton" onClick={this.solveIt()}></button>
              <span className="resultsBox filterStringRB">Filtered Array: {this.state.filteredArray}</span>
          </div>

        )
    }
       
}

export default FilterString