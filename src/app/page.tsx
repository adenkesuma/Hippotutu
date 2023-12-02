import Link from 'next/link'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'

const Home = () => {
  return (
    <MaxWidthWrapper>
      <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
          Your marketplace for high-quality <span className='text-blue-600'>digital assets</span>.
        </h1>
        <p className='max-w-prose mt-6 text-lg text-muted-foreground'>
          Welcome to Hippotutu. Every asset on our platform is verified by our team to ensure our highest quality standards.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href='/products' className={buttonVariants()}>Browse Trending</Link>
          <Button variant='ghost'>Our quality promise &rarr;</Button>
        </div>
      </div>

      {/* TODO: List product */}
    </MaxWidthWrapper>
  )
}

export default Home
