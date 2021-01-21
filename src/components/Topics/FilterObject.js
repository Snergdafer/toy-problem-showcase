import React, {Component} from "react"

class FilterObject extends Component {
    constructor(){
        super()
        this.state = {
            unFileredArray: [{}, {}, {}, {}],
            userInput: '',
            filteredArray: []
        }

    }

    updateInput(value) {
        this.setState({
            userInput: value
        })
    }

    solveIt(prop) {
        let employees = this.state.employees;
        let filteredEmployees = [];

        for ( let i = 0; i < employees.length; i++ ) {
        if ( employees[i].hasOwnProperty(prop) ) {
            filteredEmployees.push(employees[i]);
        }
    }

    this.setState({ filteredEmployees: filteredEmployees });
    }

    render() {
        return(
            
           <div className="puzzleBox filterObjectPB">
               <h4>Filter Object</h4>
               <span className="puzzleText">unFilertered Array: { JSON.stringify(this.state.employees, null, 10) } </span>
               <input className="inputLine" onChange={(e) => this.updateInput(e.target.value)}/>
               <button className="confirmationButton" onClick={this.solveIt(this.state.userInput)}>Solve!</button>
               <span className="resultsBox filterObjectRB">Filtered Array: { JSON.stringify(this.state.filteredEmployees, null, 10) } </span>
           </div>
            
        )
    }
       
}

export default FilterObject