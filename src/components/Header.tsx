import Link from 'next/link'
import { HomeIcon, File, UsersRound, LogOutIcon } from 'lucide-react'
import NavButton from '@/components/NavButton'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ModeToggle'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'

export default function Header () {
    return(
     <header className='animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20'>
        <div className='flex h-8 items-center justify-between w-full'>
            <div className='flex items-center gap-2'>
                <NavButton label='Home' icon={HomeIcon} href='/home'/>
                <Link href="/home" className='flex items-center justify-center gap-2 ml-0' title='Home'>
                    <h1 className='hidden sm:block text-xl m-0'>nikka-bill</h1>
                </Link>
            </div>
            <div className='flex items-center'>
                <NavButton label='Tickets' icon={File} href='/tickets'/>
                <NavButton label='Customers' icon={UsersRound} href='/customers'/>
                <ModeToggle />
                <Button
                    variant="ghost"
                    aria-label='Logout'
                    title='Logout'
                    className='rounded-full'
                    asChild
                >
                    <LogoutLink>
                        <LogOutIcon />
                    </LogoutLink>
                </Button>
            </div>
        </div>
     </header>
    )
}