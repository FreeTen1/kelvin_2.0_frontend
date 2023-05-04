import React, { useEffect, useRef, useState } from "react"
import AdvancedFilter from "../HomePage/filters/FullFilter"
import MiniFilter from "../HomePage/filters/MiniFilter"
import IndexFooter from "../HomePage/indexFooter/IndexFooter"
import IndexTable from "../HomePage/indexTable/IndexTable"
import FullLoader from "../FullLoader"

function HomePage() {
    const mainGridDiv = useRef(null)
    const currDate = new Date()
    // строки
    const [rows, setRows] = useState([])
    const [loading, setLoading] = useState(true)
    const [filtered, setFiltered] = useState(false)
    // mini filter
    const todayDate = currDate.toISOString().match(/^(\d{4}-\d{2}-\d{2})/)[1]
    const [depoId, setDepoId] = useState(1)
    const [routeMiniId, setRouteMiniId] = useState("")
    const [date, setDate] = useState(todayDate)
    // full filter
    const [dateStart, setDateStart] = useState("")
    const [dateEnd, setDateEnd] = useState("")
    const [notMeasured, setNotMeasured] = useState(false)
    const [overheat, setOverheat] = useState(false)
    const [warming, setWarming] = useState(false)
    const [mistake, setMistake] = useState(false)
    const [norm, setNorm] = useState(false)
    const [routeFull, setRouteFull] = useState("")
    const [clutchNumber, setClutchNumber] = useState("")
    const [trainTypeId, setTrainTypeId] = useState("")
    const [measureTimeId, setMeasureTime] = useState("")
    const [enterDataFio, setEnterDataFio] = useState("")
    const [edited, setEdited] = useState(false)

    function FindRow() {
        console.log("поиск ", depoId)
        console.log("маршрут", routeMiniId)
        console.log("дата", date)

        console.log("с", dateStart)
        console.log("по", dateEnd)
        console.log("не измерен", notMeasured)
        console.log("перегрев", overheat)
        console.log("нагрев", warming)
        console.log("ошибка", mistake)
        console.log("норма", norm)
        console.log("Номер маршрута", routeFull)
        console.log("Номер сцепа", clutchNumber)
        console.log("Тип состава", trainTypeId)
        console.log("Время измерений", measureTimeId)
        console.log("Внес данные ФИО", enterDataFio)
        console.log("Редактировалось", edited)

        setLoading(true)
        setFiltered(true)
        setTimeout(() => {
            setRows([
                {
                    id: 1,
                    date: date,
                    time: "04:53",
                    measure_time: "05:02",
                    route_number: "67",
                    clutch_number: "0156-0157",
                    train_type: "81-717/714",
                    status: "ошибка",
                    edited: true,
                    fio: "ТИПА ПОИСК",
                },
                {
                    id: 2,
                    date: date,
                    time: "05:53",
                    measure_time: "05:02",
                    route_number: "67",
                    clutch_number: "0156-0157",
                    train_type: "81-717/714",
                    status: "норма",
                    edited: false,
                    fio: "Kekov И.И. ",
                },
            ])
            setLoading(false)
        }, 100)
    }

    function ResetFilters() {
        setDepoId("")
        setRouteMiniId("")
        setDate(todayDate)
        setDateStart("")
        setDateEnd("")
        setNotMeasured(false)
        setOverheat(false)
        setWarming(false)
        setMistake(false)
        setNorm(false)
        setRouteFull("")
        setClutchNumber("")
        setTrainTypeId("")
        setMeasureTime("")
        setEnterDataFio("")
        setEdited(false)

        setLoading(true)
        setFiltered(false)

        setTimeout(() => {
            setRows([
                {
                    id: 1,
                    date: "26.04.2021",
                    time: "04:53",
                    measure_time: "05:02",
                    route_number: "67",
                    clutch_number: "0156-0157",
                    train_type: "81-717/714",
                    status: "ошибка",
                    edited: true,
                    fio: "СБРОСИЛ",
                },
                {
                    id: 2,
                    date: "27.04.2021",
                    time: "05:53",
                    measure_time: "05:02",
                    route_number: "67",
                    clutch_number: "0156-0157",
                    train_type: "81-717/714",
                    status: "норма",
                    edited: false,
                    fio: "Kekov И.И. ",
                },
                {
                    id: 3,
                    date: "27.04.2021",
                    time: "05:53",
                    measure_time: "05:02",
                    route_number: "67",
                    clutch_number: "0156-0157",
                    train_type: "81-717/714",
                    status: "норма",
                    edited: true,
                    fio: "Kekov И.И. ",
                },
            ])
            setLoading(false)
        }, 100)
    }

    useEffect(() => {
        setTimeout(() => {
            setRows([
                {
                    id: 1,
                    date: "26.04.2021",
                    time: "04:53",
                    measure_time: "05:02",
                    route_number: "67",
                    clutch_number: "0156-0157",
                    train_type: "81-717/714",
                    status: "ошибка",
                    edited: true,
                    fio: "Сидоров И.И. ",
                },
                {
                    id: 2,
                    date: "27.04.2021",
                    time: "05:53",
                    measure_time: "05:02",
                    route_number: "67",
                    clutch_number: "0156-0157",
                    train_type: "81-717/714",
                    status: "норма",
                    edited: false,
                    fio: "Kekov И.И. ",
                },
            ])
            setLoading(false)
        }, 100)
    }, [])

    return (
        <div className='home-page' ref={mainGridDiv}>
            <div className='mini-filter flex justify-between flex-wrap px-3 2xl:px-40 ransition-all duration-500'>
                <MiniFilter
                    depoId={depoId}
                    setDepoId={setDepoId}
                    routeMiniId={routeMiniId}
                    setRouteMiniId={setRouteMiniId}
                    date={date}
                    setDate={setDate}
                />
                <div className='flex items-center gap-8'>
                    <div className='button ml-11' onClick={FindRow}>
                        Найти
                    </div>
                    <div
                        className='button'
                        style={filtered ? { background: "#362E2F", color: "#FFF" } : null}
                        onClick={ResetFilters}
                    >
                        Сбросить
                    </div>
                </div>

                <div
                    className='flex items-center gap-2 cursor-pointer'
                    onClick={e => {
                        mainGridDiv.current.classList.toggle("full-filter-open")
                        e.target.querySelector("img").classList.toggle("rotate-180")
                    }}
                >
                    <img
                        className='transition-transform duration-500'
                        src={require("../img/navOpen.svg").default}
                        alt='navOpen'
                    />
                    Расширенный поиск
                </div>
            </div>

            <div className='full-filter flex justify-center'>
                <AdvancedFilter
                    dateStart={dateStart}
                    setDateStart={setDateStart}
                    dateEnd={dateEnd}
                    setDateEnd={setDateEnd}
                    notMeasured={notMeasured}
                    setNotMeasured={setNotMeasured}
                    overheat={overheat}
                    setOverheat={setOverheat}
                    warming={warming}
                    setWarming={setWarming}
                    mistake={mistake}
                    setMistake={setMistake}
                    norm={norm}
                    setNorm={setNorm}
                    routeFull={routeFull}
                    setRouteFull={setRouteFull}
                    clutchNumber={clutchNumber}
                    setClutchNumber={setClutchNumber}
                    trainTypeId={trainTypeId}
                    setTrainTypeId={setTrainTypeId}
                    measureTimeId={measureTimeId}
                    setMeasureTime={setMeasureTime}
                    enterDataFio={enterDataFio}
                    setEnterDataFio={setEnterDataFio}
                    edited={edited}
                    setEdited={setEdited}
                />
            </div>

            <div className='div-table px-3 2xl:px-40 transition-all duration-500'>
                <div className='w-full h-full overflow-y-auto bg-white rounded-md scrolling'>
                    {loading ? (
                        <FullLoader />
                    ) : rows.length ? (
                        <IndexTable rows={rows} />
                    ) : (
                        <h1 className='text-center mt-3 text-2xl'>
                            На данный момент ({currDate.toLocaleString()}) замеров не было
                        </h1>
                    )}
                </div>
            </div>

            <div className='index-footer px-3 2xl:px-40 transition-all duration-500'>
                <IndexFooter
                    editedLength={rows.filter(row => row.edited).length}
                    length={rows.length}
                    depoId={depoId}
                    loading={loading}
                />
            </div>
        </div>
    )
}

export default HomePage
