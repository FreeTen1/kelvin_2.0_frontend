import React, { useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import SearchSelect from "../inputs/SearchSelect"
import OverheatModal from "../modal/OverheatModal"

function SingleMeasureInsert() {
    const location = useLocation()
    const { depoId } = location.state || {depoId: null}
    const a = useParams()
    console.log(a);
    console.log(depoId)
    let [route, setRoute] = useState("")
    let routeList = [
        { id: "route1", value: "route1" },
        { id: "route2", value: "route2" },
    ]
    let [openModal, setOpenModal] = useState(false) // изначально всегда false

    let [overheat, setOverheat] = useState(true) // будет меняться

    function InsertMeasure() {
        alert("Добавлено")
    }

    return (
        <div className='single-measure'>
            <div className='flex items-center justify-between measure-header px-10 bg-[#F0EFEF]'>
                <div className='flex gap-5 items-center'>
                    <span>ТЧ-15 "Печатники"</span>
                    <SearchSelect
                        inputStyle={{ width: "80px" }}
                        setValue={setRoute}
                        value={route}
                        labelName='Поиск:'
                        liList={routeList}
                    />
                    <span>Тип состава: 82-740/741</span>
                    <span>Дата измерений: 26.04.2021</span>
                    <div className='flex flex-col gap-3'>
                        <span>Кол-во вагонов: 5</span>
                        <span>Кол-во измерений: 330</span>
                    </div>
                    <span>Внес данные: Сидоров Иван Иванович </span>
                    <span>Температура О.С.: 12оС</span>
                </div>
                <div className='flex gap-2'>
                    <div
                        className='button'
                        onClick={() => {
                            console.log(route)
                        }}
                    >
                        Применить
                    </div>
                    <div className='button'>Загрузить файл</div>
                </div>
            </div>

            <div className='measure-table px-10'>Тут таблица</div>

            <div className='measure-footer px-10 flex items-center justify-center'>
                <div
                    className='button'
                    onClick={() => {
                        if (overheat) {
                            setOpenModal(true)
                        } else {
                            InsertMeasure()
                        }
                    }}
                >
                    Сохранить
                </div>
            </div>
            {openModal && <OverheatModal />}
        </div>
    )
}

export default SingleMeasureInsert
