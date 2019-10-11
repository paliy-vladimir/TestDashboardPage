import React, { memo } from 'react';
import {
  BarChart as Chart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import PropTypes from 'prop-types';

const fill = [
  'rgba(76, 175, 120, 1.0)',
  'rgba(240, 181, 58, 1.0)',
  'rgba(240, 58, 58, 1.0)'
];

const BarChart = ({ data, ticks }) => (
  <Chart
    width={500}
    height={300}
    data={data}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis ticks={ticks} />
    <Tooltip />
    {data.length &&
      Object.keys(data[0])
        .slice(1)
        .map((el, i) => <Bar key={el} dataKey={el} fill={fill[i]} />)}
  </Chart>
);

BarChart.propTypes = {
  ticks: PropTypes.array,
  data: PropTypes.array
};

BarChart.defaultProps = {
  ticks: [],
  data: []
};

export default memo(BarChart);
