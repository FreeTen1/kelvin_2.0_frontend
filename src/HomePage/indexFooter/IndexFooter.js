import React from "react"
import { useNavigate } from "react-router-dom"
import MiniLoader from "../../MiniLoader"

function IndexFooter({ length, editedLength, depoId, loading }) {
    const navigate = useNavigate()
    return (
        <div className='flex h-full items-center justify-between'>
            <div className='flex gap-6 text-xs text-[#716D6D]'>
                <span className='flex gap-2 items-center'>
                    записей
                    <img src={require("../../img/book.svg").default} alt='book' />
                    {loading ? <MiniLoader width='24px' /> : length}
                </span>
                <span className='flex gap-2 items-center'>
                    измеренных
                    <img src={require("../../img/book.svg").default} alt='book' />
                    {loading ? <MiniLoader width='24px' /> : editedLength}
                </span>
            </div>
            <div
                className='button w-[220px]'
                onClick={() => {
                    navigate(`SingleMeasureInsert`, { state: { depoId } })
                }}
            >
                <img className='mr-2' src={require("../../img/plus_btn.svg").default} alt='plus_btn' />
                Внести данные
            </div>
            <div className='button w-[220px]'>Отчет</div>
        </div>
    )
}

export default IndexFooter
