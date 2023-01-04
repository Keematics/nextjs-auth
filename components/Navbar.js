import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

function Navbar() {
    const { data: session, status } = useSession()
    // console.log(session, status)
    return (
        <nav className='header'>
            <Link href='/'>
                <h1 className='logo'>NextAuth</h1>
            </Link>

            <ul className={`main-nav ${!session && status === 'loading' ? 'loading' : 'authenticated'}`}>
                <li>
                    <Link href='/'>
                        Home
                    </Link>
                </li>
                {session && (<li>
                    <Link href='/dashboard'>
                        Dashboard
                    </Link>
                </li>
                )}
                <li>
                    <Link href='/blog'>
                        Blog
                    </Link>
                </li>

                {!session && (<li>
                    <Link href='/api/auth/signin' onClick={e => {
                        e.preventDefault()
                        signIn('github')
                    }}>
                        Sign In
                    </Link>
                </li>
                )}
                {session && (
                    <li>
                        <Link href='/api/auth/signout' onClick={e => {
                            e.preventDefault()
                            signOut()
                        }}>

                            Sign Out
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navbar