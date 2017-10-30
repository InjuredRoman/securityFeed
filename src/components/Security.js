import React from 'react';
import Map from './Map.js';
import LocationForm from "./LocationForm.js";
import {fetchLocationInfo} from "../actions/locationActions.js";

export default class Security extends React.Component{

    render(){
        if (Object.getOwnPropertyNames(this.props.securityInfo).length ===0){
            return <div>
                        It seems we can't find any info on given input!
                    </div>
        }
        else {
            var vulnerabilities = this.props.securityInfo.hits.map(function(hitInfo, index){
                return(
                    <div key = {index} className = "text-center" style = {{padding:10}}>
                        <br />
                        <strong>Type: </strong>{hitInfo.title}
                        <br />
                        {hitInfo.description}
                        
                    </div>
                )
            })
            return (
                <div>
                    <Map location = {this.location}/>
                    <h1 className = "text-center">Hits: {this.props.securityInfo.total}</h1>
                    <h3 className = "text-center">Max Shown: {this.props.securityInfo.size}</h3>
                    <br />
                    <LocationForm securityInfoArray = {this.props.securityInfo.hits}
                                    location = {this.location}
                                        goToIp = {this.goToIp.bind(this)}/>
                    {vulnerabilities}
                    
                    
                </div>
            )
        }
    }

    goToIp(loc){
        this.location = loc;
        this.props.goToIp(loc);  
    }



}