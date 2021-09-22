import { useContext, useEffect, useState } from "react";
import { FireBaseContext } from "../../services/firebaseContext";

const CalcInterest = () => {
    const firebase = useContext(FireBaseContext);

    const [state, setState] = useState({
        bankList: {},
        mp: null,
        ir: null,
        mdp: 0,
        ml: 0,
        valDownPay: "",
        valAmound: ""
    });

    const handleSelected = (e) => {
        const tempEl=e.target[e.target.selectedIndex];
        setState(prev => (
            {...prev, mp: tempEl.dataset.mp, 
                ir: tempEl.dataset.ir, 
                mdp: tempEl.dataset.mdp,
                ml:  tempEl.dataset.ml,
                valDownPay: tempEl.dataset.mdp,
                valAmound: tempEl.dataset.mdp
            }))
    }

    const handleDownPay = (e) => {
        console.log(e)
        setState(prev => ({...prev, valDownPay: e.target.value}))
    }

    const handleInitial = (e) => {
        console.log(e)
        setState(prev => ({...prev, valAmound: e.target.value}))
    }

    useEffect(() => {
        firebase.getBanks(bankList => setState(prevState => ({...prevState, bankList: bankList}) ));
        return () => firebase.offDataBase();
    }) 

    console.log(state);
    return (
        <div className="container">
        <div className="row">
            <div className="col-sm-5 col-md-6">
            <form>
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
                <button type="button" className="btn btn-primary d-block calc-btn">Submit</button>
                </form>
            </div>
            <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0 d-flex justify-content-center align-items-center">
                <div className="res-panel">
                    <h2 className="text-center">Result</h2>
                    <span className="display-2 text-center d-block">52$</span>
                    <p>Enter all data to get result... || Your monthly payment.</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default CalcInterest;