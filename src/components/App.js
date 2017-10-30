import React from 'react';
import {connect} from 'react-redux';
import Security from './Security.js';
import QueryForm from './QueryForm.js';

import {fetchLocationInfo} from "../actions/locationActions.js";
import {fetchSecurityInfo} from '../actions/securityActions';

@connect((store) => {
    return {
        security: store.security.security,
        location: store.location.location
    };
})
export default class App extends React.Component{
    componentWillMount(){
        this.props.dispatch(fetchSecurityInfo({
            ip: 'facebook.com',
        }));
    }
    
    render(){
        const {security} = this.props;
        return (
            <div className="container">
                <QueryForm searchHostname = {this.searchHostname.bind(this)} searchIPAddress = {this.searchIPAddress.bind(this)}/>
                <Security securityInfo = {security} location = {location} goToIp = {this.goToIp.bind(this)}/>
                
            </div>
        )
    }

    searchHostname(newQuery){

        //send hostname and type of query to fetchSecurityInfo function
        this.props.dispatch(fetchSecurityInfo({
            type: "hostnameSearch",
            hostname: newQuery.hostname
        }))
        
    }

    searchIPAddress(newQuery){
        this.props.dispatch(fetchSecurityInfo({
            type: "ipSearch",
            ip: newQuery.ip
        }))
    }

    goToIp(loc){
        this.props.dispatch(fetchLocationInfo({loc}));  
    }

}