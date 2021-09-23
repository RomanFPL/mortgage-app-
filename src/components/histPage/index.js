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
    
    return (
        <>
        <div className="mb-3">
            <label htmlFor="bank-calculations" className="form-label">Bank calculations</label>
            <select onClick={handleCurentBank} className="form-select" aria-label="Default select example">
                <option>Select bank to filter</option>
                {[...new Set(Object.entries(state.historyList).reduce((x,[,obj])=> x.concat(obj.bankName),[]))].map((name, i) => (
                    <option key={i}>{name}</option>
                ))}
            </select>
            <div className="form-text">Select a bank to see history.</div>
        </div>
        <table className="table table-striped bank-table table-bordered">
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
            <td>{record.lt}$</td>
            <td>{record.mdp}$</td>
            <td>{record.ml}m</td>
            <td>{record.il}$</td>
            <td>{record.dp}$</td>
            <td className="text-center">{record.mp}</td>
            </tr>   
        ))}
        </tbody>
        </table>
        </>
    )
}

export default HistPage;