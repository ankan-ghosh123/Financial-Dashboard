import { useState, useEffect, useContext } from "react";
import { DashboardContext } from '../conteext/DashBoard.jsx';
import './History.css';
export function TransactionsHistory() {
    const { transactions } = useContext(DashboardContext)
    const [category, setCatagory] = useState("all")
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    const displayData = transactions;
    console.log(displayData)
    const handelChange = (e) => {
        setCatagory(e.target.value)
    }

    const filterdData =
        displayData.filter((txn) => {
            if (category === "all") return displayData
            return txn.category === category
        }).filter((txn) => {
            if (search === " ") return displayData
            return (
                txn.category.toLowerCase().includes(search.toLowerCase()) ||
                txn.amount.toString().includes(search) ||
                txn.type.toLowerCase().includes(search.toLowerCase())

            )
        });

    return (
        <div className="main-div">
            <div className="hist-heading"> Trasaction History</div>
            <div className="featurs-div">

                <select value={category}
                    onChange={handelChange} className="drop">
                    <option value="all">all</option>
                    <option value="Rent">Rent</option>
                    <option value="Food">Food</option>
                    <option value="Salary">Salary</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Transport">Transport</option>
                </select>

                <input type="text"
                    value={search}
                    placeholder="search.... "
                    className="search-field"

                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="table-div">
                <table className="tnx-table">

                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Category</th>
                            <th>Type</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            filterdData.length === 0
                                ? (
                                    <tr>
                                        <td> no results found </td>
                                    </tr>
                                )

                                : (
                                    filterdData.map((txn) => (

                                        <tr key={txn.id}>

                                            <td>{txn.date}</td>
                                            <td>{txn.amount}</td>
                                            <td>{txn.category}</td>
                                            <td>{txn.type}</td>

                                        </tr>

                                    ))
                                )
                        }

                    </tbody>

                </table>

            </div>
        </div>
    )
}
