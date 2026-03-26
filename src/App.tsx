import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './layout/SiteLayout'

const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })))
const ExperiencePage = lazy(() => import('./pages/ExperiencePage').then((m) => ({ default: m.ExperiencePage })))
const ApplicationPortfolioPage = lazy(() =>
  import('./pages/ApplicationPortfolioPage').then((m) => ({ default: m.ApplicationPortfolioPage })),
)
const WebsitePortfolioPage = lazy(() =>
  import('./pages/WebsitePortfolioPage').then((m) => ({ default: m.WebsitePortfolioPage })),
)
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })))

function RouteLoader() {
  return (
    <div style={{ minHeight: '40vh', display: 'grid', placeItems: 'center', color: '#a3aac4' }}>
      Loading section...
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<RouteLoader />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/experience"
          element={
            <Suspense fallback={<RouteLoader />}>
              <ExperiencePage />
            </Suspense>
          }
        />
        <Route
          path="/application-portfolio"
          element={
            <Suspense fallback={<RouteLoader />}>
              <ApplicationPortfolioPage />
            </Suspense>
          }
        />
        <Route
          path="/website-portfolio"
          element={
            <Suspense fallback={<RouteLoader />}>
              <WebsitePortfolioPage />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<RouteLoader />}>
              <ContactPage />
            </Suspense>
          }
        />
        <Route path="/resume" element={<Navigate to="/experience" replace />} />
        <Route
          path="*"
          element={
            <Suspense fallback={<RouteLoader />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
