import React from 'react';
import './App.css';
import SummaryCard from './components/summaryCard/SummaryCard';
import DashboardFrame from './components/dashboardFrame/DashboardFrame';


const IncluyeTechDashboard = () => {
    return (
        <div className="container">
            <header className="header">
                <h1>INCLUTECH</h1>
                <p>Reto 2: Tecnología para la inclusión laboral de personas con discapacidad</p>
            </header>

            <div className="summary">
                <SummaryCard title="Vacantes para PCD" value="42,000" />
                <SummaryCard title="PCD registradas en Empleos Perú" value="2,000" />
                <SummaryCard title="PCD que consiguieron empleo" value="490" />
            </div>

            <DashboardFrame />

            <footer className="footer">
                <p>#DATATONMTPE2024 | INCLUTECH</p>
                <p>Integrantes: [Carlos Junior Huamaní Napa], [Antony Campos Castro], [Alvaro Rodrigo Peña Peña]</p>
            </footer>
        </div>
    );
};

export default IncluyeTechDashboard;
