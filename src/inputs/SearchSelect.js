import { useEffect, useRef, useState } from "react"

function SearchSelect({ value, setValue, labelName, liList, inputStyle = null }) {
    /**
     * Функция, которая возвращает JSX с input type=select, с возможностью поиска. Меняет переменную на id, а не на value
     * @param {SetStateAction} setValue - второй аргумент хука useState, т.е. ф-ция для изменения state переменной
     * @param {String} labelName - название label
     * @param {Array} liList - массив объектов, со значениями для выпадающего спика. Пример: [{value: "test1", id: 1}, {value: "test2", id: 2}]
     * @returns {JSX} - input[type=select], с возможностью поиска
     */

    let [isFocused, setIsFocused] = useState(false)
    const listRef = useRef(null)
    const labelRef = useRef(null)
    const inputRef = useRef(null)
    let [clickElem, setClickElem] = useState(null)
    window.addEventListener("mousedown", e => {
        setClickElem(e.target.parentElement.tagName)
    })
    const validLiList = liList.map(item => {
        return item.value
    })
    let nameToId = liList.reduce((acc, curr) => {
        acc[curr.value] = curr.id
        return acc
    }, {})
    let idToName = liList.reduce((acc, curr) => {
        acc[curr.id] = curr.value
        return acc
    }, {})
    let [textValue, setTextValue] = useState(value ? idToName[value] : "")

    useEffect(() => {
        if (!value) {
            setTextValue("")
        }
    }, [value])

    return (
        <label className='flex items-center gap-2' ref={labelRef}>
            {labelName}
            <input
                ref={inputRef}
                type='text'
                className='input_text'
                style={inputStyle}
                value={textValue}
                onFocus={() => {
                    setIsFocused(true)
                }}
                onChange={e => {
                    setTextValue(e.target.value)
                }}
                onBlur={e => {
                    if (!(listRef.current.tagName === clickElem)) {
                        setIsFocused(false)
                        if (!validLiList.includes(e.target.value)) {
                            setValue("")
                            setTextValue("")
                        } else {
                            setValue(nameToId[textValue])
                        }
                    }
                }}
            />
            {isFocused && (
                <ul
                    className='scrolling search_select_datalist'
                    ref={listRef}
                    style={{
                        position: "fixed",
                        top:
                            inputRef.current.getBoundingClientRect().top +
                            inputRef.current.getBoundingClientRect().height +
                            5 +
                            "px",
                        left: inputRef.current.getBoundingClientRect().left,
                        width: `${inputRef.current.clientWidth}px`,
                        zIndex: 999,
                    }}
                >
                    {liList
                        .filter(item => item.value.toUpperCase().includes(textValue.toUpperCase()))
                        .map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => {
                                        setValue(item.id)
                                        setTextValue(item.value)
                                        setIsFocused(false)
                                    }}
                                >
                                    {item.value}
                                </li>
                            )
                        })}
                </ul>
            )}
        </label>
    )
}

export default SearchSelect
