import React from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Map extends React.Component{
    render(){
        var zoom = 11;
        if (this.props.location ==null){
            console.log("happened");
            var vals ={
                center: {lat: 40.44, lng: -79.99}
            };
        }
        else{
            console.log("this hah");
            var vals = {center:this.props.location};
            console.log(this.props.location.lat);
        }
        return( 

            <div className = "text-center container" style = {{height: 700, width: 900, padding:100}}>
                <h1 > Map </h1>
                <GoogleMapReact 
                    center = {vals.center}
                    defaultZoom={zoom} 
                    bootstrapURLKeys={{
                        key: "AIzaSyCSMlyKha_ye3GB3GPem7eDnibomDJ88ug"
                    }}>
                        <AnyReactComponent
                            center = {{lat:45.000000, lng:30.337844}}
                            text={'Kreyser Avrora'}
                            />
                </ GoogleMapReact>
                </div>
        )
    }
}