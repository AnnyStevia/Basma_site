import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './App.tsx'
import Home from './pages/Home'
import LeSalon from './pages/LeSalon'
import ExpoMarrakech from './pages/ExpoMarrakech'
import GagnantsPrix from './pages/GagnantsPrix'
import ActivitesWorkshop from './pages/ActivitesWorkshop'
import NosConferences from './pages/NosConferences'
import LePrix from './pages/LePrix'
import VisiteGuidees from './pages/VisiteGuidees'


function Gallery() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h2 className="text-3xl font-semibold">Gallery</h2>
      <p className="text-white/70 mt-2">Coming soon.</p>
    </div>
  )
}

function About() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h2 className="text-3xl font-semibold">About</h2>
      <p className="text-white/70 mt-2">BASMA is an elegant, image-first art showcase.</p>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'about', element: <About /> },
      { path: 'LeSalon', element: <LeSalon /> },
      { path: 'NosConferences', element: <NosConferences /> },
      { path: 'themes/expo-marrakech', element: <ExpoMarrakech /> },
      { path: 'themes/gagnants-prix', element: <GagnantsPrix /> },
      { path: 'themes/activites-workshop', element: <ActivitesWorkshop /> },
      { path: 'le-prix', element: <LePrix /> },
      { path: 'visite-guidees', element: <VisiteGuidees /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
