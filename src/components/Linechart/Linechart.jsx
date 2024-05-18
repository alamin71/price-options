
import { LineChart, Line, XAxis, YAxis } from 'recharts';
const Linechart = () => {
    const studentMathMarksData = [
        { id: 1, name: "Alice", math: 78, physics: 82, chemistry: 85 },
    { id: 2, name: "Bob", math: 85, physics: 89, chemistry: 90 },
    { id: 3, name: "Charlie", math: 92, physics: 95, chemistry: 91 },
    { id: 4, name: "David", math: 74, physics: 78, chemistry: 76 },
    { id: 5, name: "Eva", math: 88, physics: 90, chemistry: 87 },
    { id: 6, name: "Frank", math: 95, physics: 92, chemistry: 94 },
    { id: 7, name: "Grace", math: 67, physics: 70, chemistry: 72 },
    { id: 8, name: "Hannah", math: 80, physics: 85, chemistry: 83 },
    { id: 9, name: "Ivy", math: 83, physics: 88, chemistry: 86 },
    { id: 10, name: "Jack", math: 90, physics: 93, chemistry: 91 }
    ];
    return (
        <div>
           <LineChart width={700} height={300} data={studentMathMarksData}>
            <XAxis dataKey="name"/>
            <YAxis></YAxis>
            <Line dataKey="math" stroke='red'></Line>
            <Line dataKey="physics" stroke='yellow'></Line>

           </LineChart>
        </div>
    );
};

export default Linechart;