import React from "react";

export default class QueryForm extends React.Component{
    render(){
        return(
            <div>
                <h1 className = "text-center">Security Feed 101</h1>
                <form onSubmit={this.changeHostname.bind(this)}>
                    <div className = "form-group">
                        <input type = "text" className = "form-control" ref="hostname" placeholder="RomanIsAwesome.com" />
                    </div>

                    <input className = "btn btn-primary btn-block" type = "submit" value = "Search by Hostname" />
                </ form>
                <br />
                <br />
                <br />
                <form onSubmit={this.changeIPAddress.bind(this)}>
                    <div className = "form-group">
                            <input type = "text" className = "form-control" ref="ipaddress" placeholder="123.45.678.9" />
                    </div>
                    <input className = "btn btn-primary btn-block" type = "submit" value = "Search by IP" />

                </form>
            </div>
        )
    }

    changeHostname(e){
        e.preventDefault();
        let nextQuery = {
            hostname: this.refs.hostname.value
        }

        this.props.searchHostname(nextQuery);
        console.log(nextQuery.hostname);

        return false;
    }

    changeIPAddress(e){
        e.preventDefault();
        let nextQuery = {
            ip: this.refs.ipaddress.value
        }

        this.props.searchIPAddress(nextQuery);
        console.log(nextQuery.ip);

        return false;
    }
}