import React, { Component } from 'react';
import axios from 'axios';

class Rb extends Component {
    constructor(){
        super();
        this.state={
            isi: '',
        }
    }
     
    render(){
        let input = ()=>{
            var rupiah = this.refs.nilai.value;
            var usd = rupiah/14000;
            var url = `https://blockchain.info/tobtc?currency=USD&value=${usd}`
            
            axios.get(url).then((x)=>{
                this.setState({
                    isi: 'Rp. '+rupiah+'= BTC '+x.data
                })
            }).catch((console.log('error')))
        }
        return(
            <div>
                <h3>Konversi Rupiah ke Bitcoin</h3>
                <p1>Kurs 1 USD = 14.000 IDR</p1><br/><br/>
                <input className="form-group" type="number" ref="nilai" 
                placeholder="Input Your value" onInput={input} />
                <h4>{this.state.isi}</h4>
            </div>
        )
    }
}
export default Rb;