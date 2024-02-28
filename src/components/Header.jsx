import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleMenuItemClick(e) {
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  function MenuItem({ title, url }) {
    return (
      <Link
        to={url}
        className='text-xs sm:text-sm md:text-base font-medium tracking-wide text-slate-100 hover:text-slate-300 active:text-amber-200'
        onClick={handleMenuItemClick}
      >
        {title}
      </Link>
    )
  }

  return (
    <header className='sticky top-0 z-30 m-0 bg-sky-900'>
      <nav className='relative flex items-center justify-between px-1 lg:px-8 py-2 mx-auto max-w-full lg:max-w-screen-xl'>
        <Link
          to='/'
          aria-label='Brand'
          title='Brand'
          className='inline-flex items-center'
        >
          <div className='flex px-1 py-0 items-center bg-gradient-to-r from-cyan-300 to-cyan-100 rounded-md '>
            <span className='mx-2 text-base sm:text-xl md:text-3xl font-extrabold text-amber-800 hover:text-amber-900'>
              Bilal Gonen
            </span>
          </div>
        </Link>
        <div className='hidden xs:flex items-center space-x-4 md:space-x-8 text-xs sm:text-sm md:text-lg '>
          <MenuItem url={'#'} title='Home-Resume' />
          <MenuItem url={'#'} title={'Academic CV'} />
          <MenuItem url={'#'} title='Projects' />
        </div>

        <div className='xs:hidden'>
          <button
            aria-label='Open Menu'
            title='Open Menu'
            className='bg-amber-300 text-amber-950 hover:text-amber-700 border px-1 py-0 mr-1 font-semibold transition duration-200 rounded focus:outline-none focus:shadow-outline z-30'
            onClick={() => setIsMenuOpen(true)}
          >
            Menu
          </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full'>
              <div className='p-5 bg-stone-800/90 border rounded shadow-sm'>
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      className='btn btn2 text-white'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>&#10006;</span>
                    </button>
                  </div>
                </div>
                <nav className='flex flex-col gap-2 divide-y text-2xl'>
                  <MenuItem url={'#'} title='Home-Resume' />
                  <MenuItem url={'#'} title={'Academic CV'} />
                  <MenuItem url={'#'} title='Projects' />
                </nav>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
