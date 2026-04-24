import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid, ResponsiveContainer
} from "recharts"
import "./Chart.css";
import React from "react";
import { DashboardContext } from "../conteext/DashBoard.jsx";
import { useContext, useState, useEffect } from "react";

export function TimeBasedVisual() {
    // const { getMonthlyBalance } = useContext(DashboardContext)
    const { getMonthlyBalance } =
        useContext(DashboardContext);
    const [data, setData] = useState([])
    useEffect(() => {
        setData(getMonthlyBalance())

    }, [getMonthlyBalance])

    console.log(data)
    return (
        <div className="chartDiv">

            <ResponsiveContainer width="100%" height="100%" >
                <LineChart


                    margin={{
                        top: 20,
                        right: 60,
                        left: 60,
                        bottom: 40,
                    }}
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="month"
                        stroke="rgb(118, 118, 235)"
                        tick={{ fill: "rgb(81, 81, 255) " }}
                    />

                    <YAxis stroke="rgb(118, 118, 235)"
                        tick={{ fill: "rgb(81, 81, 255) " }}
                    />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="balance"
                    />
                </LineChart>
            </ResponsiveContainer>

        </div>
    );
}
