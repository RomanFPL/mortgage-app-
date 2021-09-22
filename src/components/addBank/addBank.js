const AddBankForm = () => {
    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Bank name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="bankToEnter"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Interest rate</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="bankToEnter"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Max loan</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="bankToEnter"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Max down payment</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="bankToEnter"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Loan term</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="bankToEnter"/>
                </div>
                <button type="button" className="btn btn-primary">Add bank info</button>
            </form>
            </div>
            </div>
        </div>
        </div>
    )
}

export default AddBankForm;