import React, { useContext } from "react"
import Context from "../../context"
import AnyInput from "../../inputs/AnyInput"
import CheckboxInput from "../../inputs/CheckboxInput"
import SearchSelect from "../../inputs/SearchSelect"

function AdvancedFilter({
    dateStart,
    setDateStart,
    dateEnd,
    setDateEnd,
    notMeasured,
    setNotMeasured,
    overheat,
    setOverheat,
    warming,
    setWarming,
    mistake,
    setMistake,
    norm,
    setNorm,
    routeFull,
    setRouteFull,
    clutchNumber,
    setClutchNumber,
    trainTypeId,
    setTrainTypeId,
    measureTimeId,
    setMeasureTime,
    enterDataFio,
    setEnterDataFio,
    edited,
    setEdited,
}) {
    return (
        <div className=' h-full w-2/3 bg-[#E7E7E7] border-[1px] rounded-md border-[#C4C4C4] px-7 py-4'>
            <div className='flex justify-between items-center mb-5'>
                <p className='font-medium mr-2 truncate' title='Дата измерений'>
                    Дата измерений:
                </p>
                <AnyInput
                    value={dateStart}
                    setValue={setDateStart}
                    labelName='с:'
                    inputType='date'
                    inputStyle={{ width: "100px" }}
                />
                <AnyInput
                    value={dateEnd}
                    setValue={setDateEnd}
                    labelName='по:'
                    inputType='date'
                    inputStyle={{ width: "100px" }}
                />

                <p className='font-medium mr-2 truncate' title='Состояние'>
                    Состояние:
                </p>
                <CheckboxInput
                    labelStyle={{ color: "#362E2F" }}
                    checked={notMeasured}
                    setChecked={setNotMeasured}
                    labelName='не измерен'
                    orientation='right'
                />
                <CheckboxInput
                    labelStyle={{ color: "#362E2F" }}
                    checked={overheat}
                    setChecked={setOverheat}
                    labelName='перегрев'
                    orientation='right'
                />
                <CheckboxInput
                    labelStyle={{ color: "#362E2F" }}
                    checked={warming}
                    setChecked={setWarming}
                    labelName='нагрев'
                    orientation='right'
                />
                <CheckboxInput
                    labelStyle={{ color: "#362E2F" }}
                    checked={mistake}
                    setChecked={setMistake}
                    labelName='ошибка'
                    orientation='right'
                />
                <CheckboxInput
                    labelStyle={{ color: "#362E2F" }}
                    checked={norm}
                    setChecked={setNorm}
                    labelName='норма'
                    orientation='right'
                />
            </div>

            <div className='flex justify-between text-[#564D4EB2]'>
                <div className='flex flex-col gap-2 items-end'>
                    <AnyInput value={routeFull} setValue={setRouteFull} labelName='Номер маршрута' inputType='text' />
                    <AnyInput value={clutchNumber} setValue={setClutchNumber} labelName='Номер сцепа' inputType='text' />
                </div>

                <div className='flex flex-col gap-2 items-end'>
                    <SearchSelect
                        setValue={setTrainTypeId}
                        value={trainTypeId}
                        labelName='Тип состава'
                        liList={[
                            { value: "Type1", id: 1 },
                            { value: "Type2", id: 2 },
                        ]}
                    />
                    <SearchSelect
                        setValue={setMeasureTime}
                        value={measureTimeId}
                        labelName='Время измерений'
                        liList={[
                            { value: "MeasureTime1", id: 1 },
                            { value: "MeasureTime2", id: 2 },
                        ]}
                    />
                </div>

                <div className='flex flex-col gap-2 items-start'>
                    <AnyInput value={enterDataFio} setValue={setEnterDataFio} inputType='text' labelName='Внес данные ФИО' />
                    <CheckboxInput checked={edited} setChecked={setEdited} labelName='Редактировалось' />
                </div>
            </div>
        </div>
    )
}

export default AdvancedFilter
