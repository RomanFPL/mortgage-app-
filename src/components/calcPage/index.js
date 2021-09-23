import { useContext, useEffect, useState } from "react";
import { FireBaseContext } from "../../services/firebaseContext";

const CalcInterest = () => {
    const firebase = useContext(FireBaseContext);

    const [state, setState] = useState({
        bankList: {},
        historyList: {},
        mp: null,
        ir: null,
        mdp: 0,
        ml: 0,
        valDownPay: "",
        valAmound: "",
        bankName: "",
        mortgage: 0
    });

    const handleSelected = (e) => {
        const tempEl=e.target[e.target.selectedIndex];
        setState(prev => (
            {...prev, mp: tempEl.dataset.mp, 
                ir: tempEl.dataset.ir, 
                mdp: tempEl.dataset.mdp,
                ml:  tempEl.dataset.ml,
                bankName: e.target.value,
                valDownPay: tempEl.dataset.mdp,
                valAmound: tempEl.dataset.mdp
            }))
    }

    const handleDownPay = (e) => {
        setState(prev => ({...prev, valDownPay: e.target.value}))
    }

    const handleInitial = (e) => {
        setState(prev => ({...prev, valAmound: e.target.value}))
    }

    const calcMonthPayment = () => {
        const {valAmound, ir, mp} = state,
                m = Math.floor((valAmound*(ir/1200)*(1+ir/1200)**mp)/((1+ir/1200)**mp-1));
        setState(prev => ({...prev, mortgage: m}))
        firebase.sendNewHist({
            bankName: state.bankName,
            dp: state.valDownPay,
            il: state.valAmound,
            ir: state.ir,
            lt: state.ml,
            mdp: state.mdp,
            ml: state.mp,
            mp: m
        })
    }

    useEffect(() => {
        firebase.getBanks(bankList => setState(prevState => ({...prevState, bankList: bankList}) ));
        return () => {
            firebase.offDataBaseBanks();
        }
    }) 
    return (
        <div className="container">
        <div className="row">
            <div className="col-sm-5 col-md-6 border border-info rounded bg-light p-4">
            <form>
                <h2>Data to calculate</h2>
                <div className="mb-3">
                    <label htmlFor="enter-init" className="form-label">Initial loan</label>
                    <input type="number" onChange={handleInitial} min={state.mdp} max={state.ml} value={state.valAmound} className="form-control" id="enter-init" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="enter-dp" className="form-label">Down payment</label>
                    <input onChange={handleDownPay} type="number" min={state.mdp} max={state.ml} value={state.valDownPay} className="form-control" id="enter-dp" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                <select onClick={handleSelected} id="select-bank" className="form-select" aria-label="Default select example">
                    <option>Select bank</option>
                    {Object.entries(state.bankList).map(([key, obj]) => (<option key={key} data-mp={obj.lt} data-mdp={obj.mdp} data-ir={obj.ir} data-ml={obj.ml}>{obj.bankName}</option>))}

                </select>
                </div>
                <button type="button" onClick={calcMonthPayment} className="btn btn-secondary d-block">Calculate</button>
                </form>
            </div>
            <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0 d-flex justify-content-center align-items-center text-light">
                <div className="res-panel border border-info rounded p-4 bg-secondary m-3">
                    <h2 className="text-center primary">Result</h2>
                    <span className="display-2 text-center d-block">{state.mortgage}$</span>
                    {/* <p>Enter all data to get result... || Your monthly payment.</p> */}
                </div>
            </div>
        </div>
        <div className="container add-overvlow">
        <div className="max-content">
        <h2 className="text-center p-3 text-light">Last calculation</h2>
        <table className="table table-striped bank-table table-bordered table-secondary">
        <thead className="table-dark ">
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
            <tr>
            <th scope="row">#</th>
            <td>{state.ir}%</td>
            <td>{state.ml} $</td>
            <td>{state.mdp} $</td>
            <td>{state.mp} m</td>
            <td>{state.valAmound} $</td>
            <td>{state.valDownPay} $</td>
            <td className="text-center">{state.mortgage} $</td>
            </tr>
        </tbody>
        </table>
        </div>
        </div>
        </div>
    )
}

export default CalcInterest;