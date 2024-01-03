import { useState } from 'react';

import ShortenForm from './ShortenForm';
import ShortenCard from './ShortenCard';

const ShortenComponent = () => {
	const [shortenedUrls, setShortenedUrls] = useState<[string]>();

	return (
		<>
			<div className='bg-bg-shorten-desktop bg-cover bg-primary-darkest-violet p-6 md:px-16 md:py-12 rounded-xl w-full mb-6'>
				<ShortenForm />
			</div>
            <div className='flex flex-col-reverse gap-4'>
                <ShortenCard />
                <ShortenCard />
                <ShortenCard />
            </div>
		</>
	);
};

export default ShortenComponent;
