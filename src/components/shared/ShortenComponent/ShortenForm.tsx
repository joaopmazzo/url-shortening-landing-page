import { ButtonForm } from '~/components/shared/Buttons';

const ShortenForm = () => {
    return (
        <form className='flex items-center flex-col md:flex-row gap-6'>
            <input
                type='text'
                name='url-to-short'
                id='url-to-short'
                placeholder='Shorten a link here...'
                className='px-8 py-4 rounded-xl flex-1 w-full md:w-fit'
            />
            <ButtonForm text='Shorten It!' />
        </form>
    )
}

export default ShortenForm;