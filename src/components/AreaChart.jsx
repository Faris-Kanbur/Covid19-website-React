import Autocomplete from '@material-ui/lab/Autocomplete';
import React, {useState, useEffect} from 'react';
import Chart from "react-apexcharts";
import { fetchDailyData } from './api';



const AreaChart = ({country}) => {
    const [ dailyData , setDailyData ] = useState([]);
    
    useEffect(() => {
        const fetchCountryDailyData = async () => {
            const data = await fetchDailyData(country);
            setDailyData(data);
        };

        fetchCountryDailyData();
    }, [country]);


    return (
        <div id="chart">
            <Chart 
              options={{
                chart: {
                    height: 350,
                    type: 'area',
                  },
                  dataLabels: {
                    enabled: false,
                  },
                  stroke: {
                    curve: 'smooth',
                  },
                  xaxis: {
                    type: 'datetime',
                    categories: dailyData.map((item) => item.Date),
                  },
                  tooltip: {
                    x: {
                      format: 'dd/MM/yy'
                    },
                  },
            }}

            series = {[
                {
                name: 'Case',
                data: dailyData.map((item) => item.Confirmed),
                }, 
                {
                name: 'Recovered',
                data: dailyData.map((item) => item.Recovered),
                }, 
                {
                name: 'Death',
                data: dailyData.map((item) => item.Deaths),
                }
                 ]}
                 
                 style = {{
                     marginTop:50,
                     marginRight:25,
                     
                  }}
                  height={350}
                  
            
            />
        </div>
    )
}

export default AreaChart

 