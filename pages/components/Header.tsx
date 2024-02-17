import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router'
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import useSwr from 'swr';
import { useState } from 'react';


export default function Header() {
  const router = useRouter();
  const [showMe, setShowMe] = useState(true);
  const [searchshowMe, searchsetShowMe] = useState(false);
  const currentRoute = router.pathname;


  return (

    <>
      {/* <div className="py-2 bg-black">
        <div className='w-11/12 mx-auto 2xl:w-4/6 xl:w-5/6'>
          <div className='flex items-center justify-end'>

            <div className="flex justify-end space-x-4">
              {showMe ? <Link href="/arabic" passHref={true} onClick={() => setShowMe(!showMe)}>
                <span className="capitalize cursor-pointer px-6 md:py-2 py-3 text-xs  text-black font-medium bg-[#f5a225] lg:w-auto w-full block text-center md:mt-0 mt-4">
                  للعرب
                </span>
              </Link>
                :
                <Link href="/" passHref={true} onClick={() => setShowMe(!showMe)}>
                  <span className="capitalize cursor-pointer px-6 md:py-2 py-3 text-xs  text-black font-medium bg-[#f5a225] lg:w-auto w-full block text-center md:mt-0 mt-4">
                    English
                  </span>
                </Link>}
s
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}
