import React from "react"
import { useNavigate } from "react-router-dom"

function SingleRow({ row }) {
    const navigate = useNavigate()

    return (
        <tr
            className='hover:bg-gray-100 cursor-pointer'
            onClick={() => {
                navigate(`singleMeasureInsert/${row.id}`)
            }}
        >
            <td className='px-6 py-4 whitespace-nowrap'>{row.date}</td>
            <td className='px-6 py-4 whitespace-nowrap'>{row.time}</td>
            <td className='px-6 py-4 whitespace-nowrap'>{row.measure_time}</td>
            <td className='px-6 py-4 whitespace-nowrap'>{row.route_number}</td>
            <td className='px-6 py-4 whitespace-nowrap'>{row.clutch_number}</td>
            <td className='px-6 py-4 whitespace-nowrap'>{row.train_type}</td>
            <td className='px-6 py-4 whitespace-nowrap'>{row.status}</td>
            <td className='px-6 py-4 whitespace-nowrap'>
                {row.edited ? <img src={require("../../img/edited.svg").default} alt='edited' /> : ""}
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>{row.fio}</td>
        </tr>
    )
}

export default SingleRow
