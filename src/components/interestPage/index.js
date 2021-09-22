import { useContext, useEffect, useState } from "react";

import { FireBaseContext } from "../../services/firebaseContext";
import AddBankForm from "../addBank/addBank";

const InterestPage = () => {
    const firebase = useContext(FireBaseContext);

    const [state, setState] = useState({
        bankList:{},
        dirForm: "ADD"
    });
    
    useEffect(() => {
        firebase.getBanks(bankList => setState(prevStete => ({...prevStete, bankList})));
        return () => firebase.offDataBase();
    }) 

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
            {Object.entries(state.bankList).map(([key, {bankName, ir, lt, mdp, ml}], n) => (
                <tr key={key}>
                <th scope="row">{++n}</th>
                <td>{bankName}</td>
                <td>{ir}</td>
                <td>{lt}</td>
                <td>{mdp}</td>
                <td>{ml}</td>
                <td className="d-flex justify-content-center">
                    <div className="wrap-editor">
                        <i className="bi bi-pencil-square"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            onClick={() => {
                                setState(prevStete => ({
                                    ...prevStete, 
                                    dirForm: "EDIT",
                                    curentKey: key
                                }));
                                // Object.entries(state.bankList).find(([keyI, obj])=> keyI === key ? obj : null)
                                }
                            }
                        ></i>
                        <i onClick={
                            () => { firebase.deleteBank(key) }
                        } className="bi bi-trash"></i>
                    </div></td>
                </tr>
            ))}
        </tbody>
        </table>
        <button 
            type="button" 
            className="btn btn-secondary" 
            data-bs-toggle="modal" 
            data-bs-target="#staticBackdrop"
            onClick={() => {
                setState(prevState => ({
                    ...prevState,
                    dirForm: "ADD"
                }))
            }}>
                <i className="bi bi-plus-square mr-5">    
                </i>Add new bank</button>
        {state.dirForm === "ADD" ? <AddBankForm name="Add bank"/> : <AddBankForm name="Edit bank"/>} 
        </>
    )
}

export default InterestPage;