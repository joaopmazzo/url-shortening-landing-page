import Header from '@components/shared/Header/Header';
import ShortenComponent from './components/shared/ShortenComponent/ShortenComponent';
import { ButtonBody } from '~/components/shared/Buttons';
import { Card, CardProps } from '@components/shared/Card';
import { FooterLinks } from './components/shared/Footer/FooterLinks';

import { CardContainerInfos } from './utils/CardContainerInfos';

import LogoWhite from '@assets/logo-white.svg';
import IllustrationWorking from '@assets/illustration-working.svg';
import IconFacebook from '@assets/icon-facebook.svg';
import IconTwitter from '@assets/icon-twitter.svg';
import IconPinterest from '@assets/icon-pinterest.svg';
import IconInstagram from '@assets/icon-instagram.svg';

function App() {
	return (
		<>
			{/* intro section */}
			<section className='overflow-hidden font-Poppins'>
				<div className='my-0 mx-auto max-w-6xl min-w-80 w-11/12 pb-40'>
					<Header />

					<div className='flex flex-col-reverse lg:flex-row items-center justify-between md:gap-24 mt-20'>
						<div className='flex flex-col md:justify-between items-center lg:items-start lg:w-1/2'>
							<div className='mb-9 text-center lg:text-start'>
								<h1 className='mb-4 md:mb-1 font-bold text-[42px] md:text-[80px] text-neutral-very-dark-blue leading-[48px] md:leading-[90px] -tracking-[1px] md:-tracking-[2px]'>
									More than just shorter links
								</h1>
								<p className='font-medium text-[18px] md:text-[22px] text-neutral-grayish-violet'>
									Build your brand's recognition and get detailed insights on
									how your links are performing
								</p>
							</div>
							<div>
								<ButtonBody
									link='#'
									text='Get Started'
								/>
							</div>
						</div>

						<div className='-mr-60 sm:-mr-96 lg:-mr-60'>
							<img
								src={IllustrationWorking}
								alt='Illustration of a person working'
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Advanced Statistics section */}
			<section className='bg-neutral-gray w-full pb-32 relative -z-30'>

				<div className='my-0 mx-auto max-w-6xl min-w-80 w-11/12'>
					{/* shorten link component */}
					<div className='flex flex-col justify-center w-full pb-32'>
						<ShortenComponent />
					</div>

					<div className='flex justify-center'>
						<div className='w-[540px] text-center'>
							<h1 className='mb-4 md:mb-4 font-bold text-3xl md:text-[40px] text-neutral-very-dark-blue'>
								Advanced Statistics
							</h1>
							<p className='font-medium text-base text-neutral-grayish-violet'>
								Track how your links are performing across the web with our
								advanced statistics dashboard
							</p>
						</div>
					</div>

					<div className='relative mt-24 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-24 lg:gap-0 -z-20'>
						<div className='rotate-90 lg:rotate-0 w-[900px] lg:full h-2 bg-primary-cyan absolute top-0 lg:right-0  lg:left-0 bottom-0 m-auto -z-10' />
						{CardContainerInfos.map((cardInfo: CardProps, index: number) =>
							index === 0 ? (
								<div key={index}>
									<Card
										imageSrc={cardInfo.imageSrc}
										imageAlt={cardInfo.imageAlt}
										titleText={cardInfo.titleText}
										bodyText={cardInfo.bodyText}
									/>
								</div>
							) : (
								<div
									className={`md:pt-${12*index}`}
									key={index}
								>
									<Card
										imageSrc={cardInfo.imageSrc}
										imageAlt={cardInfo.imageAlt}
										titleText={cardInfo.titleText}
										bodyText={cardInfo.bodyText}
									/>
								</div>
							)
						)}
					</div>
				</div>
			</section>

			{/* Boost your links section */}
			<section className='bg-bg-boost-desktop bg-cover bg-primary-darkest-violet w-full relative py-14'>
				<div className='flex flex-col gap-8 justify-center items-center'>
					<h1 className='font-bold text-3xl md:text-4xl text-white'>
						Boost your links today
					</h1>
					<ButtonBody
						link='#'
						text='Get Started'
					/>
				</div>
			</section>

			{/* footer section */}
			<section className='bg-neutral-very-dark-violet w-full py-[72px]'>
				<div className='my-0 mx-auto max-w-6xl min-w-80 w-11/12 text-white flex flex-col md:flex-row justify-between items-center md:items-start'>
					<div>
						<img
							src={LogoWhite}
							alt='Shortly Logo'
							className='mb-12 md:mb-0'
						/>
					</div>
					<div className='flex flex-col md:flex-row justify-between text-center md:text-start md:items-start gap-20'>
						<FooterLinks
							itemTitle='Features'
							subitems={['Link Shortening', 'Branded Links', 'Analytics']}
						/>
						<FooterLinks
							itemTitle='Resources'
							subitems={['Blog', 'Developers', 'Support']}
						/>
						<FooterLinks
							itemTitle='Company'
							subitems={['About', 'Our Team', 'Careers', 'Contact']}
						/>
						<div>
							<div className='flex flex-row gap-6'>
								<img
									src={IconFacebook}
									alt='Shortly Logo'
								/>
								<img
									src={IconTwitter}
									alt='Shortly Logo'
								/>
								<img
									src={IconPinterest}
									alt='Shortly Logo'
								/>
								<img
									src={IconInstagram}
									alt='Shortly Logo'
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default App;
