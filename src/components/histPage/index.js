import { useContext, useEffect, useState } from "react";
import { FireBaseContext } from "../../services/firebaseContext";

const HistPage = () => {
    const firebase = useContext(FireBaseContext);

    const [state, setState] = useState({
        historyList: {},
        curentBank: "None",
        bankRecords: {}
    })

    useEffect(() => {
        firebase.getHistory(history => setState(prevState => ({...prevState, historyList: history})));
        return () => firebase.offDataBaseHist();
    })

    const filterBank = () => {
        setState(prevState => ({...prevState, bankRecords: {
            ...Object.entries(prevState.historyList).filter(([key, record]) => record.bankName ===prevState.curentBank)
        }}))
    }

    const handleCurentBank = (e) => {
        setState(prevState => ({...prevState, curentBank: e.target.value}))
        filterBank();
    }

    const addSpaces = (number) => {
        return number.toString().split("").reverse().join("").replace(/[^\dA-Z]/g, '').replace(/(.{3})/g, '$1 ').split("").reverse().join("").trim()
    }
    
    return (
        <>
        <div className="mb-3">
            <label htmlFor="bank-calculations" className="form-label"><h2 className="text-light">Bank calculations</h2></label>
            <select onClick={handleCurentBank} className="form-select" aria-label="Default select example">
                <option>Select bank to filter</option>
                {[...new Set(Object.entries(state.historyList).reduce((x,[,obj])=> x.concat(obj.bankName),[]))].map((name, i) => (
                    <option key={i}>{name}</option>
                ))}
            </select>
            <div className="form-text text-light">Select a bank to see history.</div>
        </div>
        <div className="add-overvlow">
        <table className="table table-striped bank-table table-bordered table-secondary max-content">
        <thead className="table-dark">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Interest rate</th>
            <th scope="col">Max loan</th>
            <th scope="col">MDP</th>
            <th scope="col">Loan term</th>
            <th scope="col">Initial loan</th>
            <th scope="col">Down payment</th>
            <th className="text-center" scope="col">Monthly payment</th>
            </tr>
        </thead>
        <tbody>
            {Object.entries(state.bankRecords).map(([key, [,record]], n) => (
            <tr key={key}>
            <th scope="row">{++n}</th>
            <td>{record.ir}%</td>
            <td>{addSpaces(record.lt)}$</td>
            <td>{addSpaces(record.mdp)}$</td>
            <td>{record.ml}m</td>
            <td>{addSpaces(record.il)}$</td>
            <td>{addSpaces(record.dp)}$</td>
            <td className="text-center">{addSpaces(record.mp)}$</td>
            </tr>   
        ))}
        </tbody>
        </table>
        </div>
        </>
    )
}

export default HistPage;