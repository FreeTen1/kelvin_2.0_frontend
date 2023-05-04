import React from "react"
import SingleRow from "./SingleRow"

function IndexTable({ rows }) {
    return (
        <table className='w-full'>
            <thead className='sticky top-0 z-10 border-b-2 border-gray-300 bg-white'>
                <tr className='text-[#564D4EB2] font-normal'>
                    <th className='px-6 py-3 text-left'>Дата измерений</th>
                    <th className='px-6 py-3 text-left'>Время захода по графику</th>
                    <th className='px-6 py-3 text-left'>Время измерений</th>
                    <th className='px-6 py-3 text-left'>Номер маршрута</th>
                    <th className='px-6 py-3 text-left'>Номер сцепа</th>
                    <th className='px-6 py-3 text-left'>Тип состава</th>
                    <th className='px-6 py-3 text-left'>Состояние</th>
                    <th className='px-6 py-3 text-left'>Редактировалось</th>
                    <th className='px-6 py-3 text-left'>Внес данные ФИО</th>
                </tr>
            </thead>
            <tbody className='divide-y divide-gray-300 text-gray-700'>
                {rows.map(row => {
                    return <SingleRow row={row} key={row.id} />
                })}
            </tbody>
        </table>
    )
}

export default IndexTable
