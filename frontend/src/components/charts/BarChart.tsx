import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  BarChart as RechartsBarChart,
} from "recharts";

export const BarChart = ({
  data,
  xKey,
  yKey,
  color,
}: {
  data: any[];
  xKey: string;
  yKey: string;
  color: string;
}) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsBarChart data={data}>
        <XAxis dataKey={xKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={yKey} fill={color} />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};
