import Image from 'next/image'
import Link from 'next/link'

export const Content = () => {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group col-span-6 row-span-6 overflow-hidden rounded-lg bg-neutral-800"
      >
        <Image
          src="/gym_img2.webp"
          alt=""
          width={1200}
          height={1000}
          quality={100}
          className="scale-105 transition-transform duration-500 group-hover:scale-110"
        />
      </Link>
      <Link
        href="/"
        className="group col-span-3 row-span-3 overflow-hidden rounded-lg bg-neutral-800"
      >
        <Image
          src="/man2_img.jpg"
          alt=""
          width={1200}
          height={1000}
          quality={100}
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <Link
        href="/"
        className="group col-span-3 row-span-3 overflow-hidden rounded-lg bg-neutral-800"
      >
        <Image
          src="/female_img.png"
          alt=""
          width={1200}
          height={1000}
          quality={100}
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
    </div>
  )
}

export default Content
