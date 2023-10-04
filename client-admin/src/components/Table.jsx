import TableRow from "../components/TableRow"


const Table = ({ datas, deleteData, type, columns }) => {

    return (
        <table className="lodging-table">
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={columns.indexOf(column)}>
                            {column}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {datas.map((data, index) => (
                    <TableRow
                        key={data.id}
                        data={data}
                        index={index}
                        deleteData={deleteData}
                        type={{
                            ...type,
                            id: data.id
                        }}
                    ></TableRow>
                ))}
            </tbody>
        </table>
    )
}

export default Table