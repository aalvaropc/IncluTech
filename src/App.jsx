import React from 'react';
import './App.css';
import SummaryCard from './components/summaryCard/SummaryCard';
import DashboardFrame from './components/dashboardFrame/DashboardFrame';


const IncluyeTechDashboard = () => {
    return (
        <div className="container">
            <header className="header">
                <h1>INCLUTECH</h1>
                <p>Tecnología para la inclusión laboral de personas con discapacidad</p>
            </header>

            <div className="summary">
                <SummaryCard title="Vacantes para PCD" value="42,000" />
                <SummaryCard title="PCD registradas en Empleos Perú" value="2000" />
                <SummaryCard title="PCD que consiguieron empleo" value="490" />
            </div>

            <DashboardFrame />

            <footer className="footer">
                <p>INCLUTECH</p>
                <p>Integrantes: [Ronald Uchuya Alvarez], [Jose Saira Chambi], [Alvaro Peña Peña]</p>
            </footer>
        </div>
    );
};

export default IncluyeTechDashboard;
