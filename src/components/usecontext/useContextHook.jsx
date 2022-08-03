import React from 'react';
import {FunctionContextComponent} from './functionContextComponent';
import {ThemeProvider} from './themeContext'

// import {ClassContextComponent} from './classContextComponent';



// export const ThemeContext = React.createContext()

export default function UseContextHook() {
    // const [darkTheme, setDarkTheme] = useState(true)

    // function toggleTheme() {
    //     setDarkTheme(prevDarkTheme => !prevDarkTheme)
    // }

    return (
        <>
            <ThemeProvider>
                <FunctionContextComponent />
                {/* <ClassContextComponent /> */}
            </ThemeProvider>
        </>
    )
};
