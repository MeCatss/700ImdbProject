import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const data = [
//   { director: "Director A", size: 20 },
//   { director: "Director B", size: 45 },
//   { director: "Director C", size: 30 }
// ];

const SimpleBarChart = ({data}) => {
  return (
    <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 20,
        left: 20,
        bottom: 5,
      }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="director" angle={-45} textAnchor="end" height={80}/>
      <YAxis label={{ 
    value: "Total Movies Directed", 
    angle: -90, 
    position: "", // Place it inside the left edge boundary
    offset: 0             // Push it 10 pixels to the left away from the numbers
  }} />
      <Tooltip />
      {/* <Legend
        name={'Average Rating'}
        layout={'horizontal'}
        position={'insideBottomLeft'}
        offset={0}
        wrapperStyle={{
          border: '2px solid black',
          borderRadius: 4,
          backgroundColor: 'white',
        }}/> */}
      <Bar dataKey="total" radius={[10, 10, 0, 0]} fill="#8884d8"/>
    </BarChart>
  );
};

export default SimpleBarChart;