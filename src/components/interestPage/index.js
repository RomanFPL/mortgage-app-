import { useContext, useEffect, useState } from "react";

import { FireBaseContext } from "../../services/firebaseContext";

const InterestPage = () => {
    const firebase = useContext(FireBaseContext);

    const [bankList, setBankLIst] = useState({});

    
    console.log(bankList);
    
    useEffect(() => {
        firebase.getBanks(bankList => setBankLIst(bankList));
    })

    Object.entries(bankList).map(x => console.log(x))
    

    return (
        <>
        <table className="table table-striped bank-table table-bordered">
        <thead className="table-dark">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Bank name</th>
            <th scope="col">Interest rate</th>
            <th scope="col">Max loan</th>
            <th scope="col">Max down payment</th>
            <th scope="col">Loan term</th>
            <th className="text-center" scope="col">Manage row</th>
            </tr>
        </thead>
        <tbody>
            {Object.entries(bankList).map(([key, {bankName, ir, lt, mdp, ml}], n) => (
                <tr key={key}>
                <th scope="row">{++n}</th>
                <td>{bankName}</td>
                <td>{ir}</td>
                <td>{lt}</td>
                <td>{mdp}</td>
                <td>{ml}</td>
                <td className="d-flex justify-content-center"><div className="wrap-editor"><i className="bi bi-pencil-square"></i><i className="bi bi-trash"></i></div></td>
                </tr>
            ))}
        </tbody>
        </table>
        <button type="button" className="btn btn-secondary"><i className="bi bi-plus-square mr-5">    </i>Add new bank</button>
        </>
    )
}

export default InterestPage;