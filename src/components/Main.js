import React, { useContext } from "react";
import {CountryContext} from '../context/CountryContext';
import Navbar from "./Navbar";
import ComboSearchBox from "./ComboSearchBox";
import CardList from "./CardList";
import Footer from "./Footer";
import MyImageSlide from "./marquee-slider/MyImageSlide";
import AreaChart from "./AreaChart";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";



require("dotenv").config();

function Main() {
  const {countryName, countryList, countryData, setCountryName, getUserGeolocationDetails} = useContext(CountryContext)

  return (
    <React.Fragment>
      <Navbar/>
      <ComboSearchBox 
        setCountryName={setCountryName}
        bas={getUserGeolocationDetails} 
        item={countryList}
      />
      <CardList item={countryData}/>

      <Grid item xs={12}>
        <Paper>
          <AreaChart country={countryName} />
        </Paper>
      </Grid>
      <MyImageSlide  item={countryList}/>
      <Footer/>
    </React.Fragment>
  );
}

export default Main;
