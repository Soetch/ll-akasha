import Bar from '@/components/Bar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-white'>
      <div>
        <div>
          <div>
            <Bar/>
          </div>
        </div>
      </div>
    </div>
  )
}
