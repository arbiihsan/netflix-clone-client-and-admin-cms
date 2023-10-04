import { useState } from "react"
import EditMovie from '../pages/EditMovie'
import { Link } from "react-router-dom"
import DateFormatter from "../helpers/dateFormatter"


const TableRow = ({ data, deleteData, type, index }) => {
    const tableData = type.name === "movies" ? {
        no: index + 1, title: data.title, genre: data.Genre?.name, rating: data.rating, createdAt: data.createdAt, updatedAt: data.updatedAt
    } : {
        no: index + 1, name: data.name, createdAt: data.createdAt, updatedAt: data.updatedAt
    }

    return (
        <tr>
            {Object.keys(tableData).map((item, index) => (
                <td key={index}>
                    {item === "createdAt" || item === "updatedAt" ? DateFormatter(tableData[item]) : tableData[item]}
                </td>
            ))}

            {type?.name === "movies" && (
                <td>
                    <Link to={`/movies/${type.id}`}>
                        <button>View details</button>
                    </Link>
                </td>
            )}

            <td className="button-table-data">
                <Link to={`/${type.name === "movies" ? "movies" : "genres"}/${type.id}/${type.name === "movies" ? "edit-movie" : "edit-genre"}`}>
                    <button >Edit</button>
                </Link>
                <button onClick={() => deleteData(type.id)}>Delete</button>
            </td>
        </tr>
    )
}

export default TableRow