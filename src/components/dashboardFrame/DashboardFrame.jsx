import React from 'react';
import './DashboardFrame.css';

const DashboardFrame = () => (
    <div className="iframe-container">
        <iframe
            title="Dashboard INCLUTECH"
            src="https://app.powerbi.com/view?r=eyJrIjoiNmY1NWM0M2MtYmZiMC00N2U3LTkzZDktMjAzNjQwODAzZDY1IiwidCI6IjFlYmE0NDNmLTIzZTUtNDUzNC05MGQxLTA5NzZhYWJlODZhYyIsImMiOjR9"
            allowFullScreen
        />
    </div>
);

export default DashboardFrame;
