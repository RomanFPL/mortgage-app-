import { useContext, useEffect, useState } from "react";

import { FireBaseContext } from "../../services/firebaseContext";
import AlertShow from "../alert";

const newBank = {
    "bankName": "New",
    "ir": "20%",
    "ml": "400 000",
    "mdp": "200", 
    "lt": "3 years"
}

const AddBankForm = () => {
    const firebase = useContext(FireBaseContext);

    const [formVal, setFormVal] = useState({
        formData: {
            bankName: "",
            ir: "",
            ml: "",
            mdp: "", 
            lt: ""
        },
        wrongVal: false
    });


    const handleClickSend = () => {
        console.log(Object.entries(formVal).every(x => x>2));
        setFormVal(prevState => ({
            ...prevState,
            wrongVal: true
        }))

        setTimeout(() => {
            setFormVal(prevState => ({
                ...prevState,
                wrongVal: false
            }))
        },2000)
        // firebase.sendNewBank(formInput);
    }

    const getInputValue = (e) => {
        setFormVal(prevState => (
            {
                ...prevState,
                [e.target.id]: e.target.value
            }
        ))     
    }

    return (
        <>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Add bank</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            {formVal.wrongVal && <AlertShow/>}
            <form>
                <div className="mb-3">
                    <label htmlFor="bankName" className="form-label">Bank name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="bankName" 
                        aria-describedby="bankToEnter"
                        onChange={getInputValue}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="ir" className="form-label">Interest rate</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="ir" 
                        aria-describedby="bankToEnter"
                        onChange={getInputValue}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="ml" className="form-label">Max loan</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="ml" 
                        aria-describedby="bankToEnter"
                        onChange={getInputValue}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="mdp" className="form-label">Max down payment</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="mdp" 
                        aria-describedby="bankToEnter"
                        onChange={getInputValue}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="lt" className="form-label">Loan term</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="lt" 
                        aria-describedby="bankToEnter"
                        onChange={getInputValue}/>
                </div>
                <button onClick={handleClickSend} type="button" className="btn btn-primary">Add bank info</button>
            </form>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default AddBankForm;