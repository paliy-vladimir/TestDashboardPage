import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  BarChart as Chart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const fill = [
  'rgba(76, 175, 120, 1.0)',
  'rgba(240, 181, 58, 1.0)',
  'rgba(240, 58, 58, 1.0)'
];

const margin = {
  top: 5,
  right: 30,
  left: 20,
  bottom: 5
};

const BarChart = ({ data, ticks }) => {
  const items = useMemo(() => {
    if (!data.length) return [];
    return Object.keys(data[0]).slice(1);
  }, [data]);

  return <Chart
    width={500}
    height={300}
    data={data}
    margin={margin}
  >
    <CartesianGrid strokeDasharray="3 3"/>
    <XAxis dataKey="name"/>
    <YAxis ticks={ticks}/>
    <Tooltip/>
    {items.map((el, i) => <Bar key={el} dataKey={el} fill={fill[i]}/>)}
  </Chart>
};

BarChart.propTypes = {
  ticks: PropTypes.array,
  data: PropTypes.array
};

BarChart.defaultProps = {
  ticks: [],
  data: []
};

export default memo(BarChart);
