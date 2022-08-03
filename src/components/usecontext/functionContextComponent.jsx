import React from "react";
// import { ThemeContext } from "./useContextHook";
import {useTheme, useThemeUpdate} from './themeContext'

export function FunctionContextComponent() {
  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <>
      <button onClick={toggleTheme}> Toggle Theme</button>
      <div style={themeStyles}>Function Theme</div>
    </>
  );
}
