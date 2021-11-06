import React, { Component } from 'react';

class MastermindContainer extends Component {

    // State to maintain status for code fetches
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: ""
        }
    }

    // Automatically fetches 4 code numbers when application is started
    componentDidMount() {
        fetch('https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new')            
            .then(resp => resp.text())
            .then(codeData => {
                this.setState({
                    isloaded: true,
                    items: codeData
                })
            })           
    }

// NOTE The state items format ex. =>> '2\n7\n2\n6\n'

    render() {
        // Destructure the state variables
        let { isloaded, items } = this.state;

        // Assign state to a variable for data manipulation
        let ans = this.state.items
    console.log(items)
    

        if(!isloaded) {
            return <div>Loading...</div>
        } else {

            return (
                <div>
                    {isloaded ? "TRUE" : "FALSE"}
                    <br /><br />
                    {items}

                    <br /><br />

                    {/* Split string into array then use index to access each number */}
                    {ans.split("\n")[0]}
                    {ans.split("\n")[1]}
                    {ans.split("\n")[2]}
                    {ans.split("\n")[3]}

                    <br /><br />

                    {items.split("\n")[0]}
                    {items.split("\n")[1]}
                    {items.split("\n")[2]}
                    {items.split("\n")[3]}
                    
                    
                </div>
            )
        }

        
    }
}

export default MastermindContainer;
