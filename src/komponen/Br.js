import React, { Component } from 'react';
import axios from 'axios';
class Br extends Component {
    constructor(){
        super();
        this.state={isi1: ""}
    }
  
    render(){
        let input1 = ()=>{
            var bitcoin = this.refs.nilai1.value;
            var usd = bitcoin/14000;
            var url = `https://blockchain.info/tobtc?currency=USD&value=${usd}`
            axios.get(url).then((x)=>{
                var d = 103437400100000000
                var rupiah = x.data*d
    
                this.setState({
                    isi1: 'BTC '+ bitcoin +'= Rp '+rupiah
                    // isi1: url
                })
            })
        }
        return(
            <div>
                <h3>Konversi Bitcoin ke Rupiah</h3>
                <p1>Kurs 1 USD = 14.000 IDR</p1><br/><br/>
                <input type="number" ref="nilai1" placeholder="input value" 
                onInput={input1}></input>
                <h4>{this.state.isi1}</h4>

            </div>
        )
    }
}
export default Br;