//Using require for CommonJS or AMD exports
import Web3 = require('../node_modules/web3/src/index');

// /// <reference path="../typings/polyfills.d.ts"/> 
// import { Web3Polyfills } from "web3";

interface Config{
    host: string,
    port: number
}

export default class EthHelper {
    config: Config;
    web3: any;
    constructor(config: Config){
        this.config = config;
    }

    connect(){
        console.log("Web3: ", Web3);
        this.web3 = new Web3(new Web3.providers.WebsocketProvider(this.config.host + ":" + String(this.config.port)));
        // this.web3.maxtestfunc();

        console.log("this.web3: ", this.web3);
    }

    getCoinbase(){
        return this.web3.eth.getCoinbase();
    }
}
