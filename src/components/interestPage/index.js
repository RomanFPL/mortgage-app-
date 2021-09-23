import { useContext, useEffect, useState } from "react";

import { FireBaseContext } from "../../services/firebaseContext";
import AddBankForm from "../addBank/addBank";

const InterestPage = () => {
    const firebase = useContext(FireBaseContext);

    const [state, setState] = useState({
        bankList:{},
        dirForm: "ADD",
        clickedElem: null
    });
    
    useEffect(() => {
        firebase.getBanks(bankList => setState(prevStete => ({...prevStete, bankList})));
        return () => firebase.offDataBaseBanks();
    }) 

    const addSpaces = (number) => {
        return number.toString().split("").reverse().join("").replace(/[^\dA-Z]/g, '').replace(/(.{3})/g, '$1 ').split("").reverse().join("").trim()
    }

    return (
        <>
        <table className="table table-striped bank-table table-bordered">
        <thead className="table-dark">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Bank name</th>
            <th scope="col">Interest rate</th>
            <th scope="col">Max loan</th>
            <th scope="col">Minimum down payment</th>
            <th scope="col">Loan term</th>
            <th className="text-center" scope="col">Manage row</th>
            </tr>
        </thead>
        <tbody>
            {Object.entries(state.bankList).map(([key, {bankName, ir, lt, mdp, ml}], n) => (
                <tr key={key}>
                <th scope="row">{++n}</th>
                <td>{bankName}</td>
                <td>{ir}%</td>
                <td>{addSpaces(ml)}$</td>
                <td>{addSpaces(mdp)}$</td>
                <td>{lt} m</td>
                <td className="d-flex justify-content-center">
                    <div className="wrap-editor">
                        <i className="bi bi-pencil-square"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            onClick={() => {
                                setState(prevStete => ({
                                    ...prevStete, 
                                    dirForm: "EDIT",
                                    clickedElem: Object.entries(state.bankList).find(([k,elem]) => k === key ? ([key, elem]) : null)
                                }));
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
        {state.dirForm === "ADD" ? 
        <AddBankForm 
        name="Add bank" 
        method={(v) => firebase.sendNewBank(v)}
        /> : 
        <AddBankForm 
        name="Edit bank" 
        method={(v) => firebase.sendNewBank(v)}
        />} 
        </>
    )
}

export default InterestPage;