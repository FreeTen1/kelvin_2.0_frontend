import React from "react"
import { Outlet, NavLink } from "react-router-dom"

function Layout() {
    // отслеживание изменения размера экрана чтобы в случае чего закрыть aside
    const min_width = 1450
    window.addEventListener("resize", () => {
        let btn = document.querySelector("#toggle_aside")
        if (document.body.clientWidth < min_width && document.querySelector(".grid").classList.contains("aside_open")) {
            btn.click()
        }
        document.body.clientWidth < min_width ? btn.classList.add("invisible") : btn.classList.remove("invisible")
    })

    return (
        <div className='grid'>
            <header className='flex justify-between items-center px-6 text-base text-[#564D4E] font-medium'>
                <h1>Журнал контроля нагрева тепловых узлов подвижного состава</h1>
                <div className='flex gap-4 items-center'>
                    <p>Иванов Иван Иванович</p>
                    <img className='' src={require("../img/profile_logo.svg").default} alt='logo1' />
                </div>
            </header>

            <aside>
                <div>
                    <img className='min-w-[126px] ml-[8px]' src={require("../img/logo_metro.svg").default} alt='logo2' />
                    <img
                        className='min-w-[404px] min-h-[58px] my-3'
                        src={require("../img/logo_metro1.svg").default}
                        alt='logo3'
                    />
                    <div className='flex flex-col gap-3'>
                        <NavLink className='link' to='/'>
                            <div className='flex items-center gap-8'>
                                <img className='' src={require("../img/index_logo.svg").default} alt='logo4' />
                                <p>Главная</p>
                            </div>
                            <div>
                                <img className='' src={require("../img/link_arrow.svg").default} alt='logo5' />
                            </div>
                        </NavLink>

                        <NavLink className='link' to='reports'>
                            <div className='flex items-center gap-8'>
                                <img className='' src={require("../img/reports_logo.svg").default} alt='logo6' />
                                <p>Отчёты</p>
                            </div>
                            <div>
                                <img className='' src={require("../img/link_arrow.svg").default} alt='logo7' />
                            </div>
                        </NavLink>
                    </div>
                </div>

                <div className='flex flex-col items-center gap-14 w-[67px]'>
                    <img
                        className='w-[25px] cursor-pointer transition-transform duration-500'
                        id='toggle_aside'
                        src={require("../img/toggle_sidebar.svg").default}
                        onClick={e => {
                            document.querySelector(".grid").classList.toggle("aside_open")
                            e.target.classList.toggle("rotate-180")
                        }}
                        alt='logo8'
                    />
                    <img className='w-[47px]' src={require("../img/cmapp_logo.svg").default} alt='logo9' />
                </div>
            </aside>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
