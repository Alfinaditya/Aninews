import React from 'react';
import { MediaRecommendations } from '../../../ts/media';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import { ThumbUpIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

SwiperCore.use([Autoplay]);

interface Props {
	dataRecommendations: MediaRecommendations;
}

const Recommendations: React.FC<Props> = ({ dataRecommendations }) => {
	return (
		<div className='mb-20'>
			<h1 className='font-bold text-2xl'>Recommendations</h1>
			<Swiper
				autoplay={{ delay: 1500 }}
				breakpoints={{
					320: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					640: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 4,
						spaceBetween: 40,
					},
					1024: {
						slidesPerView: 5,
						spaceBetween: 50,
					},
				}}
			>
				{dataRecommendations.recommendations.map(recommendation => (
					<SwiperSlide key={recommendation.mal_id}>
						<Link to={`/anime/${recommendation.mal_id}`}>
							<div className='h-60 mt-8'>
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
