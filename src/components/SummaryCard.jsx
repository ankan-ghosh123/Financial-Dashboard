import { useState, useEffect } from "react";
import React from "react";
import { DashboardContext } from "../conteext/DashBoard.jsx";
import { useContext } from "react";
import "./SummaryCard.css";
export function SummaryCard() {
    const { summaryExpense, summaryIncome, summaryBalance, transactions } = useContext(DashboardContext);
    const [total, setTotal] = useState({
        expense: 0,
        income: 0,
        balance: 0
    })



    useEffect(() => {
        const totalexpense = summaryExpense()
        const totalincome = summaryIncome()
        const totalbalance = summaryBalance(totalexpense, totalincome)
        setTotal({
            expense: totalexpense,
            income: totalincome,
            balance: totalbalance
        })
    }, [transactions])



    return (
        <div className="main-card">
            <div className="card">
                <h3> Total Expense</h3>
                <p > {total.expense}</p>
                <h4>📉</h4>
            </div>
            <div className="card"> <h3> Total Income</h3>
                <p>{total.income}</p>
                <h4>📈</h4>

            </div>
            <div className="card"> <h3>  Total Balance</h3>
                <p>{total.balance}</p>
                <h4>🏦</h4>
            </div>
        </div>


    )

}
