import React, { Component } from 'react';
import './App.css';
import { Route, Link} from 'react-router-dom';
import Home from './komponen/Home.js';
import Rb from './komponen/Rb.js';
import Br from './komponen/Br.js';


class App extends Component {
  render() {
    return (
      <div>
        <div>
        <header className="text-center">
            <img style={{width:'15%'}} src="https://localcoinatm.com/wp-content/uploads/2017/09/Blockchain-logo.png" alt=""/>
        </header>
          <center>
           <div className="container  pb-xl-3">
           <ul className="nav nav-tabs justify-content-center" style={{backgroundColor:'#F5F5F5'}}>
             <li className="nav-items"><Link className="nav-link mr-3" to="/home">Bitcoin Hari Ini</Link></li>
             <li className="nav-items"><Link className="nav-link mr-3" to='/rupiahbitcoin'>Rupiah ke Bitcoin</Link></li>
             <li className="nav-items"><Link className="nav-link mr-3" to='/bitcoinrupiah'>Bitcoin ke Rupiah</Link></li>
           </ul>
           </div>
           
           
           <div>
           <Route path='/home' component={Home}></Route>
           <Route path='/rupiahbitcoin' component={Rb}></Route>
           <Route path='/bitcoinrupiah' component={Br}></Route>
           </div>

           </center>
        </div>
        


      </div>
    );
  }
}

export default App;