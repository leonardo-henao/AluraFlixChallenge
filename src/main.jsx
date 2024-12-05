import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.jsx'
import './index.css'
import AddVideo from './pages/AddVideo.jsx'
import Home from './pages/Home.jsx'

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<StrictMode>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Home />} />
					<Route path="/agregar-video" element={<AddVideo />} />
				</Route>
			</Routes>
		</StrictMode>
	</BrowserRouter>
)
