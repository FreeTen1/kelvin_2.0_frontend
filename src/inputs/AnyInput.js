import React from "react"

function AnyInput({ value, setValue, labelName, inputType, labelStyle = null, inputStyle = null }) {
    /**
     * Компонент для отображения поля ввода в форме.
     * @param {String} value - текущее значение поля ввода
     * @param {function} setValue - функция для обновления значения поля ввода
     * @param {String} labelName - название для метки поля ввода
     * @param {String} inputType - тип поля ввода
     * @param {Object} [labelStyle=null] - объект стилей для метки поля ввода (опционально)
     * @param {Object} [inputStyle=null] - объект стилей для поля ввода (опционально)
     * @returns {JSX} - элемент формы для ввода данных
     */
    return (
        <label className='flex items-center gap-2' style={labelStyle}>
            {labelName}
            <input
                style={inputStyle}
                type={inputType}
                value={value}
                onChange={e => {
                    setValue(e.target.value)
                }}
                className='input_text'
            />
        </label>
    )
}

export default AnyInput
