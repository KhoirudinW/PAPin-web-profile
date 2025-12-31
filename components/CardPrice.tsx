'use client'
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import RecomendedIcon from "pub/pricelist/recomanded.png"
import { rupiah } from "@/helpers/ConvertRupiah"

type CardPriceProps = {
  title: string
  desc: string
  price: number
  realPrice?: number
  benefit: string[]
  isPink?: boolean
  recomended?: boolean
  logo: StaticImageData
}

const DESKTOP_WIDTH = 1024;


function CardPriceParallax({
  title,
  desc,
  price,
  realPrice,
  benefit,
  isPink = false,
  recomended = false,
  logo,
}: CardPriceProps) {

    const isDesktop = () => {
        if (typeof window === "undefined") return false;
        return window.innerWidth >= DESKTOP_WIDTH;
      };
      
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop()) return;
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()

    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    const rotateX = (-y * 20).toFixed(2)
    const rotateY = (x * 20).toFixed(2)

    card.classList.remove("reset")
    card.style.transform =
      `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop()) return;
    const card = e.currentTarget
    card.classList.add("reset")
    card.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)"
  }

  const resetTransform = (card: HTMLDivElement) => {
    card.classList.add("reset")
    card.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)"
  }

  return (
    <div className="perspective-900">
      <div
        className={`
          card-parallax preserve-3d
          w-75 h-117.25 flex flex-col justify-between
          rounded-md shadow-lg p-3.25
          ${isPink ? "bg-secondary border-none" : "bg-white border-2 border-secondary"}
        `}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchEnd={(e) => resetTransform(e.currentTarget)}
        onTouchCancel={(e) => resetTransform(e.currentTarget)}
      >

        {/* ================= CONTENT ================= */}
        <div className="flex flex-col items-center gap-4 layer-base">

          {/* Logo */}
          <Image
            src={logo}
            alt={`${title.toLowerCase()}-icon`}
            className="size-24.75 layer-front"
          />

          {/* Title + Recommended */}
          <div className="flex items-center gap-2 layer-top">
            <h3 className={isPink ? "header-white-3" : "header-primary-3"}>
              {title}
            </h3>
            {recomended && (
              <Image
                src={RecomendedIcon}
                alt="recomended-icon"
                className="size-6"
              />
            )}
          </div>

          {/* Price */}
          <div className="flex flex-col items-center gap-1 layer-front">
            {realPrice && (
              <div className="relative">
                <div className="absolute inset-x-0 top-1/2 -rotate-3 border border-red-600 rounded-full" />
                <p className="fonts-xs text-gray">
                  Rp.{rupiah(realPrice)} / Bulan
                </p>
              </div>
            )}

            <div className="flex gap-1">
              <h5 className={isPink ? "header-white-5" : "header-primary-5"}>
                Rp.{rupiah(price)} /
              </h5>
              <h5 className={isPink ? "header-white-5" : "header-primary-5"}>
                Bulan
              </h5>
            </div>
          </div>

          {/* Description */}
          <div className="px-2 layer-base">
            <p className="fonts-xs text-gray mb-2">{desc}</p>
            <ul className="px-6 fonts-sm list-disc">
              {benefit.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* ================= CTA ================= */}
        <Link
          href="/pricing"
          className={`btn ${isPink ? "btn-primary-stroke" : "btn-primary-solid"} layer-top`}
        >
          Pelajari lebih lanjut
        </Link>

      </div>
    </div>
  )
}

export default CardPriceParallax
