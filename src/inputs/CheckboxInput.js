import React from "react"

function CheckboxInput({ checked, setChecked, labelName, orientation = "left", labelStyle = null, inputStyle = null }) {
    return (
        <label className='flex items-center gap-2 cursor-pointer' style={labelStyle}>
            {orientation === "left" ? labelName : ""}
            <input
                style={inputStyle}
                type='checkbox'
                checked={checked}
                onChange={e => {
                    setChecked(e.target.checked)
                }}
            />
            {orientation === "right" ? labelName : ""}
        </label>
    )
}

export default CheckboxInput
