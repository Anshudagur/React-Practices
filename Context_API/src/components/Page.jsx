import { useState, useContext, useEffect } from "react"
import ThemeContext from "../../context/Theme/ThemeContext"

const Page = () => {
    const { themeMode, setToggledTheme } = useContext(ThemeContext);
    const isChecked = themeMode == "dark"

    useEffect(() => {
        setToggledTheme()
    }, [isChecked, setToggledTheme]);

    return (
        <div className="min-h-screen p-8 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-6 border border-indigo-600 rounded-lg p-8 m-8 w-64 h-32">
                <h6 className="text-lg font-semibold">Swithch Theme</h6>
                <div className="flex flex-row gap-5 items-center">
                    <div>
                        <span title="light mode">
                            <img src="/src/assets/sun.png" alt="light" className="h-8 w-8" />
                        </span>
                    </div>

                    <div className="relative inline-block w-11 h-5">
                        <input
                            checked={isCheckedisCheckedisChecked}
                            onChange={setToggledTheme}
                            id="switch-component-1"
                            type="checkbox"
                            className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" />
                        <label
                            htmlFor="switch-component-1"
                            className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
                        </label>
                    </div>

                    <div>
                        <span title="dark mood">
                            <img src="/src/assets/moon.png" alt="dark" className="h-8 w-8" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;