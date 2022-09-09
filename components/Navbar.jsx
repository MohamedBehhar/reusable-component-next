import React from 'react'

const Navbar = () => {
  return (
	<nav className='w-full py-3 bg-gray-50 drop-shadow-2xl flex'>
		<logo className="flex-none bg-green-200 w-1/4">
			Logo
		</logo>
		<ul className='flex-auto flex bg-red-200 w-3/4 justify-around'>
			<li>Home</li>
			<li>About</li>
			<li>Products</li>
			<li>Services</li>
			<li>Contact</li>
		</ul>
	</nav>
  )
}

export default Navbar