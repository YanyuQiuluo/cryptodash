import React from 'react';
import {Tile} from "../Shared/Tile";
import {AppContext} from "../App/AppProvider";
import highcharts from 'highcharts'
import ReactHighcharts from 'highcharts-react-official';
import highchartsConfig from "./HighchartsConfig";
import HighChartsTheme from "./HighChartsTheme";
import ChartSelect from './ChartSelect'

highcharts.setOptions(HighChartsTheme());

export default function (){
    return (
        <AppContext.Consumer>
            {({historical, changeChartSelect}) =>
                <Tile>
                    <ChartSelect
                        defaultValue={"months"}
                        onChange={e => changeChartSelect(e.target.value)}
                    >
                        <option value="days"> Days </option>
                        <option value="weeks"> Weeks </option>
                        <option value="months"> Months </option>
                    </ChartSelect>
                    {historical ?
                        <ReactHighcharts
                        highcharts={highcharts}
                        options={highchartsConfig(historical)}/>
                        :<div>Loading historical data</div>
                    }
                </Tile>
            }
        </AppContext.Consumer>
    )
}