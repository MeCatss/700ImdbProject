import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer
} from 'recharts';

// Your actual data array
// const myActualData = [
//   { decade: 'Jan', avgRating: 4000 },
//   { decade: 'Feb', avgRating: 3000 },
//   { decade: 'Mar', avgRating: 2000 },
//   { decade: 'Apr', avgRating: 2780},
// ];

export default function DecadeLine({data}) {
  return (
    // ResponsiveContainer handles fluid sizing safely instead of the chart's style prop
    <ResponsiveContainer 
      width="100%" 
      style={{ maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
    >
      <LineChart
        data={data}
        margin={{
          top: 7,
          right: 20, // Added right margin so values don't get cut off
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="5 5 1 5" />
        
        <XAxis dataKey="decade"  label={{value: "Decade", position: 'insideBottom', offset:-5}}/>
        <YAxis label={{value: "Average Rating", position: 'insideLeft', offset:20, angle:-90}}/>
        
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
        }} */}
      {/* /> */}
        
        {/* Added actual Lines mapping to your data keys */}
        <Line type="monotone" dataKey="avgRating" stroke="#8884d8" activeDot={{ r: 10 }}>
        </Line>
        {/* <Line type="monotone" dataKey="expenses" stroke="#82ca9d" /> */}
        
      </LineChart>
    </ResponsiveContainer>
  );
}
