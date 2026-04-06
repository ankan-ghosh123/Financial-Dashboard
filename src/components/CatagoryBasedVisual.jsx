import { DashboardContext } from "../conteext/DashBoard.jsx";
import { useContext, useState, useEffect } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid, ResponsiveContainer
} from "recharts"
import "./Chart.css";
export function CatagoryBasedVisual() {

    const { getCategoryExpenses } =
        useContext(DashboardContext);
    const [data, setData] = useState([])
    useEffect(() => {
        setData(getCategoryExpenses())

    }, [getCategoryExpenses])

    console.log(data)
    return (
        <div className="chartDiv">

            <ResponsiveContainer width="100%" height="100%" >
                <BarChart
                    barCategoryGap="20%"
                    barSize={60}
                    margin={{
                        top: 20,
                        right: 60,
                        left: 60,
                        bottom: 40,
                    }}
                    data={data}
                >


                    <XAxis dataKey="category"
                        stroke="rgb(118, 118, 235)"
                        tick={{ fill: "rgb(81, 81, 255) " }}
                    />

                    <YAxis stroke="rgb(118, 118, 235)"
                        tick={{ fill: "rgb(81, 81, 255) " }} />

                    <Tooltip />

                    <Bar
                        type="monotone"
                        dataKey="amount"
                        fill="rgb(138, 138, 228)"

                    />
                </BarChart>
            </ResponsiveContainer>
            <label className="level">--Catagory VS Amount</label>

        </div>
    );
}
