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
        mortgage: 0,
        invalidMort: false,
        isLoaded: false
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
        setState(prev => ({...prev, mortgage: m, invalidMort: !(m>state.valDownPay && +state.valAmound<=state.ml)}))
        console.log(m>state.valDownPay);
        console.log(+state.valAmound<=state.ml);
        console.log(state.invalidMort);
        !state.invalidMort &&
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
    
    const addSpaces = (number) => {
        return number.toString().split("").reverse().join("").replace(/[^\dA-Z]/g, '').replace(/(.{3})/g, '$1 ').split("").reverse().join("").trim()
    }
    
    return (
        <div className="container">
            {state.invalidMort && (
                <div className="alert alert-danger" role="alert">
                        Your monthly payment is lower than minimum down payment or initial loan is higher than maximum loan for this bank. This loan is invalid.
                </div>
            )}
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
                <label htmlFor="select-bank" className="form-label">Select bank</label>
                <select onClick={handleSelected} id="select-bank" className="form-select" aria-label="Default select example">
                    {Object.entries(state.bankList).map(([key, obj]) => (<option key={key} data-mp={obj.lt} data-mdp={obj.mdp} data-ir={obj.ir} data-ml={obj.ml}>{obj.bankName}</option>))}

                </select>
                </div>
                <button type="button" onClick={calcMonthPayment} className="btn btn-secondary d-block">Calculate</button>
                </form>
            </div>
            <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0 d-flex justify-content-center align-items-center text-light">
                <div className="res-panel border border-info rounded p-4 bg-secondary m-3">
                    <h2 className="text-center primary">Result</h2>
                    <span className="display-2 text-center d-block">{addSpaces(state.mortgage)}$</span>
                    <p>{state.mortgage ? "Your monthly payment." : "Enter all data to get result..."}</p>
                </div>
            </div>
        </div>
        <div className="add-overvlow">
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
            <td>{addSpaces(state.ml)}$</td>
            <td>{addSpaces(state.mdp)}$</td>
            <td>{state.mp} m</td>
            <td>{addSpaces(state.valAmound)}$</td>
            <td>{addSpaces(state.valDownPay)}$</td>
            <td className="text-center">{addSpaces(state.mortgage)}$</td>
            </tr>
        </tbody>
        </table>
        </div>
        </div>
        </div>
    )
}

export default CalcInterest;