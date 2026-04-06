import { createContext, useContext, useState, useEffect } from 'react';


export const DashboardContext = createContext();

export const DashboardContextProvider = ({ children }) => {
    const [transactions, setTranactions] = useState([
        {
            id: 1,
            date: "2025-01-01",
            amount: 10000,
            category: "Rent",
            type: "expense"
        },
        {
            id: 2,
            date: "2025-01-03",
            amount: 3000,
            category: "Food",
            type: "expense"
        },
        {
            id: 3,
            date: "2025-01-05",
            amount: 15000,
            category: "Rent",
            type: "expense"
        },
        {
            id: 4,
            date: "2025-02-01",
            amount: 48000,
            category: "Salary",
            type: "income"
        },
        {
            id: 5,
            date: "2025-02-07",
            amount: 2500,
            category: "Transport",
            type: "expense"
        },
        {
            id: 6,
            date: "2025-02-10",
            amount: 4000,
            category: "Entertainment",
            type: "expense"
        }

    ]);
    const updateTransactions = (id, fields) => {
        setTranactions((prev) =>
            prev.map((txn) =>
                txn.id === id
                    ? { ...txn, ...fields }
                    : txn
            )
        )
    }
    const addTransaction = (data) => {
        setTranactions((prev) => [...prev, data])
    }



    /* SAVE */

    const summaryExpense = () => {
        const totalExpenses = transactions.reduce(
            (sum, t) => t.type === "expense" ? sum + t.amount : sum,
            0
        );

        return totalExpenses
    }

    const summaryIncome = () => {
        const totalIncome = transactions.reduce(
            (sum, t) => t.type === "income" ? sum + t.amount : sum, 0);
        return totalIncome
    }
    const summaryBalance = (totalexpense, totalincome) => {
        return totalincome - totalexpense
    }

    const getMonthlyBalance = () => {
        const monthlyData = {};

        transactions.forEach((t) => {
            const month =
                new Date(t.date)
                    .toLocaleString("default", {
                        month: "short"
                    });

            if (!monthlyData[month]) {
                monthlyData[month] = 0;
            }

            if (t.type === "income") {
                monthlyData[month] += t.amount;
            } else {
                monthlyData[month] -= t.amount;
            }
        });

        return Object.keys(monthlyData)
            .map((month) => ({
                month,
                balance: monthlyData[month]
            }));
    };
    const getCategoryExpenses = () => {
        const categoryData = {};

        transactions.forEach((t) => {

            if (t.type === "expense") {

                const category = t.category;

                if (!categoryData[category]) {
                    categoryData[category] = 0;
                }

                categoryData[category] += t.amount;

            }

        });

        return Object.keys(categoryData).map(
            (category) => ({
                category,
                amount: categoryData[category]
            })
        );
    };
    return <DashboardContext.Provider value={{
        transactions,
        summaryExpense,
        summaryIncome,
        summaryBalance,
        getMonthlyBalance,
        getCategoryExpenses,
        updateTransactions,
        addTransaction
    }}>{children}</DashboardContext.Provider>
}


