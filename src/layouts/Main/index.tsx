import { Outlet } from 'react-router-dom'

export function MainLayout() {
  return (
    <div>
      <header>Main layout</header>

      <Outlet />
    </div>
  )
}
