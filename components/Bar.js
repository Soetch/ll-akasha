import { Unbounded } from 'next/font/google'
import Link from 'next/link'

const unbounded = Unbounded({ subsets: ['latin'] })


export default function Bar() {
    return(
        <div>
            <div>
                <div className=''>
                    <div className="flex box-border bg-slate-300 h-12 text-black place-content-center">
                        <div id='title' className={unbounded.className}>
                            <div className='place-self-center mt-3'>
                                <Link href={"/"}>Limite-Limite - Akasha</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}