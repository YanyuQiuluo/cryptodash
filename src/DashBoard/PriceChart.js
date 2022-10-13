import React from 'react';
import {Tile} from "../Shared/Tile";
import {AppContext} from "../App/AppProvider";
import highcharts from 'highcharts'
import ReactHighcharts from 'highcharts-react-official';
import highchartsConfig from "./HighchartsConfig";
import HighChartsTheme from "./HighChartsTheme";

highcharts.setOptions(HighChartsTheme());

export default function (){
    return (
        <AppContext.Consumer>
            {({historical}) =>
                <Tile>
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