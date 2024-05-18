
import { LineChart, Line } from 'recharts';
const Linechart = () => {
    const studentMathMarksData = [
        { id: 1, name: "Alice", math: 78 },
        { id: 2, name: "Bob", math: 85 },
        { id: 3, name: "Charlie", math: 92 },
        { id: 4, name: "David", math: 74 },
        { id: 5, name: "Eva", math: 88 },
        { id: 6, name: "Frank", math: 95 },
        { id: 7, name: "Grace", math: 67 },
        { id: 8, name: "Hannah", math: 80 },
        { id: 9, name: "Ivy", math: 83 },
        { id: 10, name: "Jack", math: 90 }
    ];
    return (
        <div>
           <LineChart width={500} height={400} data={studentMathMarksData}>
            <Line dataKey="math"></Line>

           </LineChart>
        </div>
    );
};

export default Linechart;