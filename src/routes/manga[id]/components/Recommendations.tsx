import { MediaRecommendations } from '../../../ts/media';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import { ThumbUpIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

SwiperCore.use([Autoplay]);

interface Props {
	recommendations: MediaRecommendations;
}
const Recommendations: React.FC<Props> = ({ recommendations }) => {
	return (
		<div className='mb-20'>
			<h1 className='font-bold text-2xl'>Recommendations</h1>
			<Swiper autoplay={{ delay: 1500 }} slidesPerView={5}>
				{recommendations.recommendations.map(recommendation => (
					<SwiperSlide key={recommendation.mal_id}>
						<Link to={`/manga/${recommendation.mal_id}`}>
							<div className='w-48 h-60 mt-8 bg-green-800'>
								<img
									className='w-full h-full'
									src={recommendation.image_url}
									alt={recommendation.title}
								/>
							</div>
							<div className='mt-2'>
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
