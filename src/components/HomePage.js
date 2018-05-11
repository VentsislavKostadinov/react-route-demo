
import React, { Component} from 'react';   // If We have only HTML is not necessary to import Component


class HomePage extends Component {

    constructor(props) {
        super(props);

        this.redirectToAbout = this.redirectToAbout.bind(this);

         }

         redirectToAbout () {

        this.props.history.push("/about");
         }

         render () {
        return (
            <div>
                <div>
                Hi from Home Page
                </div>
                <button type= "button" onClick={this.redirectToAbout}> Go to About</button>
                </div>
        )
         }
}


export default HomePage;