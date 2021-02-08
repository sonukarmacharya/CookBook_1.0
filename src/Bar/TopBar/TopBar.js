import React, {Component} from 'react';
import logo from './logo.png'


class  TopBar extends Component{
    render() {
        return(
        <div>
            <nav>
                <div class="logo d-flex">
                  <img src={logo}/>
                  <div>
                  <p>Home</p>
                  <p>About Us</p>
                  <p>Detail</p>

                  </div>
                </div>
              </nav>
        </div>

        );
    }
}

export default TopBar;
