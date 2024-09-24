import NextLink from 'next/link'

import LargeLabel from '@/components/common/Label/LargeLabel'

const Header: React.FC = () => {
  return (
    <header className='w-full p-4 sm:px-12 bg-sky-500 text-white flex flex-row justify-between items-center sticky z-10 top-0'>
      <LargeLabel title='メモる' />
      <nav>
        <ul className='flex flex-row space-x-4'>
          <li>
            <NextLink href='/'>
              <p>Home</p>
            </NextLink>
          </li>
          <li>
            <NextLink href='/'>
              <p>Contact</p>
            </NextLink>
          </li>
          <li>
            <NextLink href='/'>
              <p>Account</p>
            </NextLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
