import React, {Component} from "react"

class Palindrome extends Component {
    constructor(){
        super()
        this.state = {
            userInput: '',
            palindrome: ''
        }

    }

    updateInput(value) {
        this.setState({
            userInput: value
        })
    }

    solveIt(userInput) {
        let normal = userInput;
        let backwards = userInput;
        backwards = backwards.split('');
        backwards = backwards.reverse();
        backwards = backwards.join('');

        if ( normal === backwards ) {
            this.setState({ palindrome: 'true' });
          } else {
            this.setState({ palindrome: 'false' });
          }
    }   

    render() {
        return(
            
            <div className="puzzleBox palindromePB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e) => this.updateInput(e.target.value)}/>
                <button className="confirmationButton" onClick={this.solveIt()}></button>
                <span className="resultsBox">Palindrome: {this.state.palindrome} </span>
            </div>

        )
    }
       
}

export default Palindrome