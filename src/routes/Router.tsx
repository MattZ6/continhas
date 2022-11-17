import { Routes, Route } from 'react-router-dom'

import { MainLayout } from '@layouts/Main'

import { HomePage } from '@pages/Home'
import { LoginPage } from '@pages/Login'
import { NotFoundPage } from '@pages/NotFound'
import { ProfilePage } from '@pages/Profile'
import { SettingsPage } from '@pages/Settings'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}
