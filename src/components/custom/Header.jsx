import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

function Header() {
    const { user, isSignedIn } = useUser();
    return (
        <div className='p-3 px-5 flex justify-between shadow-md bg-gradient-to-r from-purple-700 to-purple-900 text-white'>
    <Link to={'/dashboard'}>
        <img src='/logo.svg' className='cursor-pointer' width={150} height={150} />
    </Link>
    {isSignedIn ? (
        <div className='flex gap-2 items-center'>
            <Link to={'/plan'}>
                <Button className="bg-white text-purple-800 border border-purple-700 transition-all duration-200 hover:bg-purple-800 hover:text-white hover:shadow-lg hover:scale-105">
                    Premium
                </Button>
            </Link>
            <Link to={'/dashboard'}>
                <Button className="bg-white text-purple-800 border border-purple-700 transition-all duration-200 hover:bg-purple-800 hover:text-white hover:shadow-lg hover:scale-105">
                    Dashboard
                </Button>
            </Link>
            <UserButton />
        </div>
    ) : (
        <Link to={'/auth/sign-in'}>
            <Button className="bg-white text-purple-800 hover:bg-purple-100 border border-purple-700">Get Started</Button>
        </Link>
    )}
</div>

    )
}

export default Header