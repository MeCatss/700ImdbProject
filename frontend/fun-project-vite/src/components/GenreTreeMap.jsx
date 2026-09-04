import { Treemap, ResponsiveContainer, Tooltip } from 'recharts';

const CustomContent = ({ x, y, width, height, name, value, index }) => {
    const COLORS = ['#22d3ee', '#06b6d4', '#0891b2', '#0e7490', '#155e75', '#164e63', '#0369a1', '#1d4ed8', '#4f46e5', '#7c3aed', '#a21caf', '#c30010'];
    
    return (
        <g>
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                fill={COLORS[index % COLORS.length]}
                stroke="#000"
                strokeWidth={2}
            />
            {width > 50 && height > 30 && (
                <g>
                    <text
                        x={x + width / 2}
                        y={y + height / 2 - 8}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#fff"
                        fontSize={14}
                        fontWeight="bold"
                    >
                        {name}
                    </text>
                    <text
                        x={x + width / 2}
                        y={y + height / 2 + 10}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#fff"
                        fontSize={11}
                    >
                        {value}
                    </text>
                </g>
            )}
        </g>
    );
};


const GenreTreeMap = ({data}) => {

  return (
    <ResponsiveContainer width="100%" height={400}>
      <Treemap
        style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 4 / 3 }}
        data={data}
        dataKey="size"
        aspectRatio={4 / 3}
        stroke="#fff"
        strokeWidth={0.5}
        fill="#22d3ee"
        content={CustomContent}
      >
      </Treemap>
      </ResponsiveContainer>
  );
};

export default GenreTreeMap;