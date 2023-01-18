import React from "react";
import useData from "../../hooks/useData";
import { PieChart, Pie, Sector, Cell } from 'recharts';
import { BarChart, Bar, Legend } from 'recharts';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Dashboard = () => {
  const [data, setData] = useData();
  const { month, investment, sell, revenue } = data;
  return (
    <div className="min-h-screen md:m-20 m-5 md:grid md:grid-cols-1 md:justify-items-center">
      <div className=" md:shadow-lg md:p-10 p-5">
        <p className="text-center w-[600px] font-semibold font-mono text-xl text-lime-400">
          Line Chart
        </p>
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="sell" stroke="green" />
          <Line type="monotone" dataKey="investment" stroke="#ff0000" />
          <Line type="monotone" dataKey="revenue" stroke="#f80" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
        </LineChart>
        <p className="text-center"><span className="text-green-600 ml-2">Sell</span><span className="text-[#ff0000] ml-2">Investment</span><span className="text-[#f80] ml-2">Revenue</span></p>
      </div>
      <div className=" md:shadow-lg md:p-10 p-5">
        <p className="text-center w-[600px] font-semibold font-mono text-xl text-lime-400">
          Pie Chart
        </p>
        <PieChart width={600} height={400}>
          <Pie data={data} dataKey="sell" cx="50%" cy="50%" outerRadius={60} fill="lightgreen" />
          <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#df6464" label />
          <Tooltip />
        </PieChart>
        <p className="text-center"><span className="text-green-600 ml-2">Sell</span><span className="text-[#df6464] ml-2">Investment</span></p>
      </div>
      <div className=" md:shadow-lg md:p-10 p-5">
        <p className="text-center w-[600px] font-semibold font-mono text-xl text-lime-400">
          Bar Chart
        </p>
        <BarChart
          width={600}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#df6464" />
          <Bar dataKey="investment" fill="#f80" />
        </BarChart>
        <p className="text-center"><span className="text-[#f80] ml-2">Revenue</span><span className="text-[#df6464] ml-2">Investment</span></p>
      </div>
    </div>
  );
};

export default Dashboard;
