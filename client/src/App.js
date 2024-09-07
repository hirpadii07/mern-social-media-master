import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {
  // Retrieve the current mode (light/dark) from the Redux store
  const mode = useSelector((state) => state.auth.mode);  // Ensure this matches your reducer key
  // Create a Material-UI theme based on the current mode
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  // Check if the user is authenticated (i.e., if there is a valid token in the Redux store)
  const isAuth = Boolean(useSelector((state) => state.auth.token));  // Ensure this matches your reducer key

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            {/* Define the routes for the app */}
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
            <Route
              path="/profile/:userId"
              element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
