import React from "react"

function OverheatModal() {
    return (
        <div className='fixed top-0 left-0 z-50 flex w-full h-full items-center justify-center'>
            <div className='bg-[#F0EFEF] w-[600px] min-h-[200px] max-h-[500px] border-[#4F4D4D] border-solid border-[1px] rounded-md'>
                <div className='flex items-center px-5 h-[44px] bg-[#1252F621] text-[#1252F699] font-extrabold'>Перегрев</div>
            </div>
        </div>
    )
}

export default OverheatModal
