import ChartBar from './ChartBar';
import './Chart.css'

const Chart = (props) => {

    // transform a dataPoint object to just a array of numbers
    const valueArray = props.dataPoints.map(dataPoint => dataPoint.value);

    // max() expects numbers ex: "1, 2, 3"
    // use '...' to pull out all the array elements and add then as stand alone arguments to this max() method
    const totalMaximum = Math.max(...valueArray);

    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => (
                <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
};


export default Chart;