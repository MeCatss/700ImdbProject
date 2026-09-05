import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const data = [
//   { director: "Director A", size: 20 },
//   { director: "Director B", size: 45 },
//   { director: "Director C", size: 30 }
// ];

const SimpleBarChart = ({data}) => {
  return (
  <ResponsiveContainer width="100%" height={500}>
    <BarChart
      data={data}
      barSize={35}
      margin={{
        top: 5,
        right: 20,
        left: 20,
        bottom: 5,
      }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="director" angle={-45} textAnchor="end" height={120}/>
      <YAxis label={{ 
    value: "Total Movies Directed", 
    angle: -90, 
    position: "", 
    offset: 0     
  }} />
      <Tooltip 
    contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', color: '#fff' }}
    labelStyle={{ color: '#22d3ee' }}
/>
      <Bar dataKey="total" radius={[12, 12, 0, 0]} fill="#22d3ee"/>
    </BarChart>
    </ResponsiveContainer>
  );
};

export default SimpleBarChart;