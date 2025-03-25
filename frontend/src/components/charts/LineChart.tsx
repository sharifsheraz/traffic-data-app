import {
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

export const LineChart = ({
  data,
  xKey,
  yKey,
  color,
}: {
  data: unknown[];
  xKey: string;
  yKey: string;
  color: string;
}) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsLineChart data={data}>
        <XAxis dataKey={xKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={yKey} stroke={color} />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};
