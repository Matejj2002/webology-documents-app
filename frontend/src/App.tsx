import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./pages/Login";
import Header from "./pages/Header"
import {AuthProvider} from "./context/AuthContext.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">
                <Header />
                <main>
                    <Routes>
                        <Route path="/login" element={<Login/>}></Route>

                        <Route element={<ProtectedRoute />}>
                            <Route path="/dashboard" />
                        </Route>

                        <Route path="*" element={<Navigate to="/login" replace />} />
                    </Routes>
                </main>
                </div>
            </Router>
        </AuthProvider>
    )
}

export default App