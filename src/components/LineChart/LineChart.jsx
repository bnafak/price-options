import {
  LineChart as LChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const LineChart = () => {
  const mathMarksData = [
    { id: 1, name: "Student 1", math: 85 },
    { id: 2, name: "Student 2", math: 72 },
    { id: 3, name: "Student 3", math: 93 },
    { id: 4, name: "Student 4", math: 78 },
    { id: 5, name: "Student 5", math: 65 },
    { id: 6, name: "Student 6", math: 90 },
    { id: 7, name: "Student 7", math: 88 },
    { id: 8, name: "Student 8", math: 76 },
    { id: 9, name: "Student 9", math: 82 },
    { id: 10, name: "Student 10", math: 95 },
  ];

  return (
    <LChart width={500} height={400} data={mathMarksData}>
      <XAxis dataKey="name" />
      <YAxis />
      <Line dataKey="math"> </Line>
    </LChart>
  );
};

export default LineChart;
