import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "component/Header";
import MonthPage from "route/MonthPage";

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<Header />}>
                <Routes>
                    <Route path="/Calendar/" element={<Header />}>
                        <Route index element={<MonthPage />} />
                        <Route
                            path="month/:year/:month"
                            element={<MonthPage />}
                        />
                    </Route>
                    <Route
                        path="*"
                        element={<Navigate to="/Calendar/" replace={true} />}
                    />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
