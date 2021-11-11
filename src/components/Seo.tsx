import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router';

interface Props {
	title: string;
	description: string;
	image: string;
}
const Seo: React.FC<Props> = ({ title, description, image }) => {
	const { pathname } = useLocation();
	const siteUrl = 'https://aninews-app.netlify.app/';
	const seo = {
		title: title,
		description: description,
		image: image,
		url: `${siteUrl}${pathname}`,
	};
	return (
		<div>
			<Helmet title={seo.title}>
				<meta name='description' content={seo.description} />
				<meta name='image' content={seo.image} />
				{seo.url && <meta property='og:url' content={seo.url} />}
				{seo.title && <meta property='og:title' content={seo.title} />}
				{seo.description && (
					<meta property='og:description' content={seo.description} />
				)}
				{seo.image && <meta property='og:image' content={seo.image} />}
			</Helmet>
		</div>
	);
};

export default Seo;
