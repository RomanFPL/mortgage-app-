const CalcInterest = () => {
    return (
        <div class="container">
        <div class="row">
            <div class="col-sm-5 col-md-6">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
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