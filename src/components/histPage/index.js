const HistPage = () => {
    return (
        <>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <select className="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option defaultValue="1">One</option>
                <option defaultValue="2">Two</option>
                <option defaultValue="3">Three</option>
            </select>
            <div id="emailHelp" className="form-text">Select a bank to see history.</div>
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
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            </tr>
        </tbody>
        </table>
        </>
    )
}

export default HistPage;