import React from "react"
import AnyInput from "../../inputs/AnyInput"
import SearchSelect from "../../inputs/SearchSelect"

function MiniFilter({ depoId, setDepoId, routeMiniId, setRouteMiniId, date, setDate }) {
    const depoList = [
        { value: "test1", id: 1 },
        { value: "test2", id: 2 },
        { value: "кек пати мейкер", id: 3 },
    ]
    const routeList = [
        { value: "Route test1", id: 1 },
        { value: "Route test2", id: 2 },
    ]
    // const dateInput = AnyInput(date, setDate, "Дата:", "date", null, { width: "100px" })

    return (
        <>
            <div className='flex items-center gap-5'>
                <SearchSelect
                    inputStyle={{ minWidth: "80px", maxWidth: "100px" }}
                    setValue={setDepoId}
                    value={depoId}
                    labelName='Поиск:'
                    liList={depoList}
                />
                <SearchSelect
                    inputStyle={{ minWidth: "80px", maxWidth: "100px" }}
                    setValue={setRouteMiniId}
                    value={routeMiniId}
                    labelName='Маршрут:'
                    liList={routeList}
                />
                <AnyInput value={date} setValue={setDate} labelName='Дата:' inputType='date' inputStyle={{ width: "100px" }} />
            </div>
        </>
    )
}

export default MiniFilter
