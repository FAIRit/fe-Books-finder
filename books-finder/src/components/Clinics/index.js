import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import  {Box, Typography, List, Paper, ListItem, Grid, } from "@material-ui/core"
import styles from "./Clinics.module.css";

const mapStyles = {
    width: '550px',
    height: '650px',
    marginTop: '70px',

 }

export class Clinics extends Component {
    constructor(props) {
        super(props);
       
    this.state = {
        clinics: [

                {id:1,name:" Gdańska Poradnia Psychologiczno-Pedagogiczna Lingwista", address:"Św. Barbary 1", city: "80-753 Gdańsk", phone:"tel. 58 303 33 00",latitude:54.348459, longitude: 18.663474},
                {id:2,name:"Instytut Wspomagania Rozwoju Dziecka Niepubliczna Poradnia Psychologiczno-Pedagogiczna", address:"Malczewskiego 139", city:"80-114 Gdańsk", phone:"tel. 58 341 44 41",latitude:54.349081, longitude: 18.631518},
                {id:3,name:"Niepubliczna Poradnia Psychologiczno-Pedagogiczna CG", address:"Sztormowa 9",address:"80-335 Gdańsk", city:"tel. 58 559 00 66",latitude:54.422930, longitude: 18.573325},
                {id:4,name:"Niepubliczna Poradnia Psychologiczno-Pedagogiczna Didisi", address:"Balcerskiego 18 C",city:"80-289 Gdańsk", phone:"tel. 501 718 450",latitude:54.430092, longitude:18.468146},
                {id:5,name:"Polskie Towarzystwo Dysleksji Poradnia Diagnostyczno - Terapeutyczna", address:"Legionów 11",city:"80-441 Gdańsk", phone:"tel. 58 341 06 97",latitude:54.386263, longitude:18.612129},
                {id:6,name:"Poradnia Psychologiczno-Pedagogiczna nr 1", address:"Obywatelska 1",city:"80-259 Gdańsk", phone:"tel. 58 341 87 58",latitude: 54.380845, longitude:18.594401},
                {id:7,name:"Poradnia Psychologiczno-Pedagogiczna nr 3 w Gdańsku", address:"Wałowa 21",city:"80-858 Gdańsk", phone:"tel. 58 301 07 21",latitude:54.359129, longitude:18.651222},
                {id:8,name:"Poradnia Psychologiczno-Pedagogiczna nr 4 w Gdańsku", address:"L. Krzemienieckiej 1",city:"80-448 Gdańsk", phone:"tel. 58 341 05 42",latitude:54.389066, longitude:18.610365},
                {id:9,name:"Poradnia Psychologiczno-Pedagogiczna nr 5", address:"Związku Jaszczurczego 4",city:"80-288 Gdańsk", phone:"tel. 58 348 72 82",latitude:54.355047, longitude:18.573934},
                {id:10,name:"Poradnia Psychologiczno-Pedagogiczna nr 7", address:"Traugutta 82",city:"80-229 Gdańsk", phone:"tel. 58 341 39 50",latitude:54.370457, longitude:18.611481},
                {id:11,name:"Poradnia Psychologiczno-Pedagogiczna PEGAZ", address:"Powstańców Warszawskich 71",city:"80-170 Gdańsk", phone:"tel. 533 287 007",latitude:54.355691, longitude:18.618513},
                {id:12,name:"Specjalistyczna Poradnia Psychologiczno-Pedagogiczna Tęcza", address:"Korzeniowskiego 1",city:"80-508 Gdańsk", phone:"tel. 58 340 38 29",latitude:54.406575, longitude:18.636869},
            ],
            showDetails: false
      }
    }

//     handleOnClick = ()=> {
// this.setState ({

// })
    

    displayMarkers = () => {
        return this.state.clinics.map((clinic, index) => {
          return <Marker key={index} id={index} position={{
           lat: clinic.latitude,
           lng: clinic.longitude
         }}
        //  onClick={() => {this.handleOnClick} } 
         />
        })
      }

      showListOfClinics =() => {
        return this.state.clinics.map((clinic, index) => {
            return (
                <List>
                      <Typography variant="body1" style ={{lineHeight:"1rem"}}>
                    <ListItem>
                   {clinic.name} 
                    </ListItem>
                    <ListItem>
                   {clinic.address}     
                    </ListItem>
                    <ListItem>
                   {clinic.city}     
                    </ListItem>
                    <ListItem>
                   {clinic.phone}     
                    </ListItem>
                    </Typography>
                </List>
            ) 
           })
      }

  render() {
    return (
      <div className = "main-container">
         <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
      <Map
      style = {mapStyles}
      initialCenter={{ lat:54.348459 , lng: 18.663474}}
       google={this.props.google} zoom={11}>
           {this.displayMarkers()}
           {/* {this.state.clinics.name} */}
      </Map>
      </Grid>
   
      <Grid item xs = {12} sm={8}
    //    style ={{overflow: 'scroll', height:'800px'}}
       >
<Typography variant="h5" style = {{textAlign:"center", paddingBottom:'40'}}>
    Lista poradni psychologicznych dla dzieci w Gdańsku:
{this.showListOfClinics()}
</Typography>
      </Grid>
      </Grid>
      </div>
    );
  }
}

 
// export default Clinics;

export default GoogleApiWrapper({
  apiKey: ('AIzaSyC27uz1EZJyA00fmasGKWMKCv6cznNeRXM')
})(Clinics)