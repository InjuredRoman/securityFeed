import React from "react";

export default class LocationForm extends React.Component{

    render(){
        // get ipAddress from property description
        this.props.securityInfoArray

        return(
            <form onSubmit={this.getDescriptionString.bind(this)}>
            <input type = "text" className = "form-control" ref="index" placeholder="Entry Index Here:)" />
            <input className = "btn btn-primary btn-block" type = "submit" value = "Go to associated IP on Map (if available)" />

            </form>

        )

    }

    getDescriptionString(e){
        e.preventDefault();
        var index = this.refs.index.value;
        var arr = this.props.securityInfoArray;
        console.log(arr);
        if (isNaN(index) || Object.keys(arr).length <= this.refs.index.value){
            return;
        }
        else{
            console.log(arr[index].location.point.lat);
            console.log(arr[index].location.point.lon);
            var location = {
                lat: arr[index].location.point.lat,
                lng: arr[index].location.point.lon
            };
            this.goToIp(location);
        }
    }

    goToIp(loc){
        let location = {
            lat: loc.lat,
            lng: loc.lng
        }

        this.props.goToIp(location);
        return false;
    }

}