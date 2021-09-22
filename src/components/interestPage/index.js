const InterestPage = () => {
    return (
        <table className="table table-striped bank-table table-bordered">
        <thead className="table-dark">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Bank name</th>
            <th scope="col">Interest rate</th>
            <th scope="col">Max loan</th>
            <th scope="col">Max down payment</th>
            <th scope="col">Loan term</th>
            <th className="text-center" scope="col">Manage row</th>
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
            <td className="d-flex justify-content-center"><div className="wrap-editor"><i className="bi bi-plus-square"></i><i className="bi bi-pencil-square"></i><i className="bi bi-trash"></i></div></td>
            </tr>
        </tbody>
        </table>
    )
}

export default InterestPage;