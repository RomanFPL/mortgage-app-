const CalcInterest = () => {
    return (
        <div class="container">
        <div class="row">
            <div class="col-sm-5 col-md-6">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Initial loan</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Down payment</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <button type="submit" class="btn btn-primary d-block calc-btn">Submit</button>
                </form>
            </div>
            <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0 d-flex justify-content-center align-items-center">
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