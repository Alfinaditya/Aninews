import { MediaRecommendations } from '../../../ts/media';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import { ThumbUpIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

SwiperCore.use([Autoplay]);

interface Props {
	recommendations: MediaRecommendations;
}
const Recommendations: React.FC<Props> = ({ recommendations }) => {
	const [size, setSize] = useState<any>({
		width: window.innerWidth,
		height: window.innerHeight,
	});
	const updateSize = () =>
		setSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	useEffect(() => (window.onresize = updateSize), []);
	// const XL = size.width >= '1366' ? 5 : undefined;
	// const LG = size.width <= '1024' ? 4 : undefined;
	// const MD = size.width <= '768' ? 3 : undefined;
	// const SM = size.width <= '425' ? 1 : false;
	// const SLIDE_PREVIEW = SM || MD || LG || XL;
	return (
		<div className='mb-20'>
			<h1 className='font-bold text-2xl'>Recommendations</h1>
			<Swiper
				autoplay={{ delay: 1500 }}
				slidesPerView={5}
				freeMode={{ enabled: true }}
			>
				{recommendations.recommendations.map(recommendation => (
					<SwiperSlide key={recommendation.mal_id}>
						<Link className='block' to={`/manga/${recommendation.mal_id}`}>
							{/* h-96 */}
							{/* sm: */}
							<div className='w-48 h-60 mt-8 m-auto'>
								<img
									className='w-full h-full'
									src={recommendation.image_url}
									alt={recommendation.title}
								/>
							</div>
							<div className='mt-2 w-48 sm:m-auto'>
								<p>{recommendation.title}</p>
								<div className='text-main font-bold flex items-center'>
									<ThumbUpIcon className='w-5 h-5' />
									<p className='ml-2'>{recommendation.recommendation_count}</p>
								</div>
							</div>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Recommendations;
