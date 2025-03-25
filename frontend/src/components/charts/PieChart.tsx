import {
  ResponsiveContainer,
  Pie,
  Cell,
  Tooltip,
  Legend,
  PieChart as RechartsPieChart,
} from "recharts";

export const PieChart = ({
  data,
  dataKey,
  nameKey,
  colors,
}: {
  data: unknown[];
  dataKey: string;
  nameKey: string;
  colors: string[];
}) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsPieChart>
        <Pie
          data={data}
          dataKey={dataKey}
          nameKey={nameKey}
          cx="50%"
          cy="50%"
          outerRadius={100}
        >
          {data.map((_entry, index) => (
            <Cell key={index} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};
