import { useState } from "react"
import { useEffect } from "react"
import { GetAllVideosService } from '../services/Controller'

const Home = () => {

	const [listVideos, setListVideos] = useState([])

	useEffect(() => {
		const loadVideos = async () => {
			const allVideos = await GetAllVideosService()
			setListVideos(allVideos)
		}

		loadVideos()

	}, [])

	return (
		<div>
			{
				console.log(listVideos)
			}
		</div>
	)
}

export default Home
