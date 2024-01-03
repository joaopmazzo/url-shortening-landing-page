import { useEffect, useRef, useState } from 'react';
import useWindowDimensions from '~/components/hooks/usewindowsDimensions';

import { ButtonLinkHeader } from '~/components/shared/Buttons';
import { LinkHeader } from '@components/shared/Link';
import { NavItens } from '@utils/NavLinks';

import Logo from '@assets/logo.svg';
import IconMenu from '@assets/icon-menu.svg';

const Header = () => {
	const { width } = useWindowDimensions();
	const hamburguerMenuRef = useRef<HTMLImageElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const handleMenuOpen = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (
			hamburguerMenuRef.current &&
			!hamburguerMenuRef.current.contains(event.target as Node) &&
			menuRef.current &&
			!menuRef.current.contains(event.target as Node)
		) {
			setIsMenuOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const navStyle =
		width > 768
			? 'flex items-center justify-between w-full'
			: isMenuOpen
			? 'absolute flex flex-col items-center bg-primary-darkest-violet rounded-lg w-full top-10 px-6 py-10'
			: 'hidden';

	return (
		<header className='flex items-center justify-between mt-12 relative'>
			<div className='flex items-center gap-11 w-full'>
				<img
					src={Logo}
					alt='Shortly logo'
				/>
				<div
					ref={menuRef}
					className={navStyle}
				>
					<div className='flex flex-col md:flex-row items-center gap-7 w-full md:w-fit text-center md:text-start'>
						{NavItens.options.map((option: string, index: number) => (
							<LinkHeader
								link='#'
								text={option}
								key={index}
							/>
						))}
					</div>

					<div className='block md:hidden h-[1px] bg-gray-500 w-10/12 my-6' />

					<div className='flex flex-col md:flex-row items-center gap-9 w-full md:w-fit text-center md:text-start'>
						<LinkHeader
							link='#'
							text='Login'
						/>
						<ButtonLinkHeader
							link='#'
							text='Sing Up'
						/>
					</div>
				</div>
			</div>

			<img
				ref={hamburguerMenuRef}
				src={IconMenu}
				alt='Menu'
				className='block md:hidden'
				onClick={handleMenuOpen}
			/>
		</header>
	);
};

export default Header;
