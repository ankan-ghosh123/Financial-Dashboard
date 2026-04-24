import { useState, useEffect, useContext } from "react";
import { DashboardContext, } from '../conteext/DashBoard'
import './admin.css'
export function Admin() {
    const { transactions,
        updateTransactions,
        addTransaction,
        deleteTranscation

    } = useContext(DashboardContext);

    const [editId, setEditId] = useState(null);
    const [data, setData] = useState({
        id: null,
        date: "",
        category: "",
        amount: "",
        type: ""
    })
    const handelEdit = (id) => {
        setEditId(id)
    }
    const handelSave = () => {
        setEditId(null)
    }

    const handelData = () => {
        //checking if if there is no empty input to add
        for (let key in data) {
            if (!data[key]) {
                alert(`${key} is required`);
                return;
            }
        }

        addTransaction(

            {
                id: data.id,
                date: data.date,
                category: data.category,
                amount: data.amount,
                type: data.type
            }

        )
        setData({
            id: null,
            date: "",
            category: " ",
            amount: "",
            type: ""
        })
    }

    //delete function
    const handelDelete = (id) => {
        deleteTranscation(id);
    }
    return (
        <div className="main-admin">
            <div className="add-tnx-div">


                <input

                    className="inpt"
                    value={data.id}
                    placeholder="add id..."
                    onChange={(e) => setData({ ...data, id: e.target.value })}
                />



                <input
                    className="inpt"
                    value={data.date}
                    placeholder="add date..."
                    onChange={(e) => setData({ ...data, date: e.target.value })}
                />



                <input
                    className="inpt"
                    value={data.category}
                    placeholder="add category..."
                    onChange={(e) => setData({ ...data, category: e.target.value })}
                />



                <input
                    className="inpt"
                    value={data.amount}
                    placeholder="add amount..."
                    onChange={(e) => setData({ ...data, amount: e.target.value })}
                />



                <input className="inpt"
                    placeholder="add type..."
                    value={data.type}
                    onChange={(e) => setData({ ...data, type: e.target.value })}
                />


            </div>
            <div className="add-btn-container">
                <button className="add-btn" onClick={handelData}>
                    add
                </button>
            </div>

            <div className="admin-table">
                <table className="admin-edit-table">

                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Category</th>
                            <th>Type</th>
                            <th>Edit/Save</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>

                        {

                            transactions.map((txn) => (


                                <tr key={txn.id}>

                                    <td> {

                                        editId === txn.id
                                            ?
                                            (
                                                <input
                                                    type="text"
                                                    value={txn.id}
                                                    onChange={(e) => updateTransactions(txn.id, { id: e.target.value })}
                                                    className="edit-inpt"
                                                />
                                            )
                                            : txn.id
                                    }
                                    </td>
                                    <td> {

                                        editId === txn.id
                                            ?
                                            (
                                                <input
                                                    type="text"
                                                    value={txn.date}
                                                    onChange={(e) => updateTransactions(txn.id, { date: e.target.value })}
                                                    className="edit-inpt"
                                                />
                                            )
                                            : txn.date
                                    }
                                    </td>
                                    <td>
                                        {
                                            editId === txn.id
                                                ? (<input
                                                    type="text"
                                                    value={txn.amount}
                                                    onChange={(e) => updateTransactions(txn.id, { amount: e.target.value })}
                                                    className="edit-inpt"
                                                />)
                                                : txn.amount
                                        }
                                    </td>
                                    <td>
                                        {
                                            editId === txn.id
                                                ? <input
                                                    type="text"
                                                    className="edit-inpt"
                                                    value={txn.category}
                                                    onChange={(e) => updateTransactions(txn.id, { category: e.target.value })}
                                                />
                                                : txn.category
                                        }
                                    </td>
                                    <td>
                                        {
                                            editId === txn.id
                                                ? <input
                                                    type="text"
                                                    value={txn.type}
                                                    className="edit-inpt"
                                                    onChange={(e) => updateTransactions(txn.id, { type: e.target.value })}

                                                />
                                                : txn.type
                                        }
                                    </td>
                                    <td>
                                        {
                                            editId === txn.id
                                                ? (<button
                                                    className="save-btn"
                                                    onClick={handelSave}>
                                                    Save💾
                                                </button>)

                                                : (<button
                                                    className="edit-btn"
                                                    onClick={() => handelEdit(txn.id)}>
                                                    Edit✏️
                                                </button>)
                                        }
                                    </td>

                                    <td>
                                        <button
                                            className="delt-btn"
                                            onClick={(e) => handelDelete(txn.id)}>
                                            ❌Delete
                                        </button>

                                    </td>
                                </tr>
                            )

                            )

                        }

                    </tbody>

                </table>
            </div>





        </div>
    )
}
