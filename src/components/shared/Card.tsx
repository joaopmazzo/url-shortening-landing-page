export interface CardProps {
	imageSrc: string;
	imageAlt: string;
	titleText: string;
	bodyText: string;
}

export const Card = ({ imageSrc, imageAlt, titleText, bodyText }: CardProps) => {
	return (
		<div className='flex flex-col items-center lg:block text-center lg:text-start bg-white w-[350px] rounded-md px-8 py-10'>
			<div className="bg-primary-darkest-violet rounded-full p-6 w-fit -mt-20 mb-8">
				<img
					src={imageSrc}
					alt={imageAlt}
				/>
			</div>
			<div className="flex flex-col gap-3">
				<h1 className="font-bold text-2xl text-neutral-very-dark-blue">{titleText}</h1>
				<p className="font-medium text-base text-neutral-grayish-violet">{bodyText}</p>
			</div>
		</div>
	);
};
