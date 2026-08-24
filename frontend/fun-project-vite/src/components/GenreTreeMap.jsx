import { Treemap } from 'recharts';


const GenreTreeMap = ({data}) => {

  return (
    <Treemap
      style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 4 / 3 }}
      data={data}
      dataKey="size"
      aspectRatio={4 / 3}
      stroke="#fff"
      fill="#8884d8"
    >
    </Treemap>
  );
};

export default GenreTreeMap;