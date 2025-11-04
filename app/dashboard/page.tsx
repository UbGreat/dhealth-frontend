import React from 'react'
import Sidebar from '../components/sidebar/sidebar'
import AnalyticsPage from './analytics/page'
import Header from '../components/header/header'
import AssetsPage from './assets/page'
import DevicesPage from './devices/page'
import EhrsPage from './ehrs/page'
import EmergencyPage from './emergencies/page'
import FacilitiesPage from './facilities/page'
import ProfilePage from './profile/page'
import SettingsPage from './settings/page'
import TelemetryPage from './telemetries/page'
export default function DashboardPage() {
    return (
        <div>
            <Header />
            <Sidebar />
            <AnalyticsPage />
            <AssetsPage />
            <DevicesPage />
            <EhrsPage />
            <EmergencyPage />
            <FacilitiesPage />
            <ProfilePage />
            <SettingsPage />
            <TelemetryPage />
        </div>
    )
}