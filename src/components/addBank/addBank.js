import { useState } from "react";
import AlertShow from "../alert";

const initState = {formData: {
    bankName: "",
    ir: "",
    ml: "",
    mdp: "", 
    lt: ""
    },
    wrongVal: false
}

const AddBankForm = ({name, method, inputs}) => {

    const [state, setState] = useState({...initState});

    const handleClickSend = (e) => {
        if(Object.entries(state.formData).every(x => x[1].length>0)){
            method(state.formData);
            setState(initState);
            e.target.parentElement.parentElement.parentElement.children[0].lastChild.click(); 
        } else {

            setState(prevState => ({
                ...prevState,
                wrongVal: true
            }))
    
            setTimeout(() => {
                setState(prevState => ({
                    ...prevState,
                    wrongVal: false
                }))
            },2000)
        }
        
    }

    const getInputValue = (e) => {
        setState(prevState => (
            {
                ...prevState,
                formData:{...prevState.formData,
                    [e.target.id]: e.target.value
                }
            }
        ))
        console.log(state)     
    }

    return (
        <>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">{name}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            {state.wrongVal && <AlertShow/>}
            <form>
                <div className="mb-3">
                    <label htmlFor="bankName" className="form-label">Bank name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="bankName" 
                        aria-describedby="bankToEnter"
                        onChange={getInputValue}
                        value={state.formData.bankName}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="ir" className="form-label">Interest rate</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="ir" 
                        aria-describedby="bankToEnter"
                        onChange={getInputValue}
                        value={state.formData.ir}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="ml" className="form-label">Max loan</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="ml" 
                        aria-describedby="bankToEnter"
                        onChange={getInputValue}
                        value={state.formData.ml}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="mdp" className="form-label">Max down payment</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="mdp" 
                        aria-describedby="bankToEnter"
                        onChange={getInputValue}
                        value={state.formData.mdp}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="lt" className="form-label">Loan term</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="lt" 
                        aria-describedby="bankToEnter"
                        onChange={getInputValue}
                        value={state.formData.lt}/>
                </div>
                <button onClick={handleClickSend} type="button" className="btn btn-primary">Add bank info</button>
                <button onClick={() => {setState(initState)}} type="button" className="btn btn-warning ml-5">Clear form</button>
            </form>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default AddBankForm;