const CalcInterest = () => {
    return (
        <div className="container">
        <div className="row">
            <div className="col-sm-5 col-md-6">
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Initial loan</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Down payment</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option defaultValue="1">One</option>
                    <option defaultValue="2">Two</option>
                    <option defaultValue="3">Three</option>
                </select>
                <button type="submit" className="btn btn-primary d-block calc-btn">Submit</button>
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