import { Routes, Route } from 'react-router-dom'

import { MainLayout } from '@layouts/Main'

import { HomePage } from '@pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  )
}
