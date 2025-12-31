import Wa from 'pub/sosmed/wa-logo.png'
import Tiktok from 'pub/sosmed/tiktok-logo.png'
import Ig from 'pub/sosmed/ig-logo.png'
import Email from 'pub/sosmed/email-logo.png'
import Phone from 'pub/sosmed/phone-logo.png'
import { StaticImageData } from "next/image"; 

type SosmedProps = {
    id: number,
    logo: StaticImageData,
    name: string,
    content?: string,
    link: string
}

export const SocialMedia: SosmedProps[] = [
    {
        id: 1,
        logo: Wa,
        name: "Whatsapp",
        link:'/'
    },
    {
        id: 2,
        logo: Tiktok,
        name: "Tiktok",
        link:'/'
    },
    {
        id: 3,
        logo: Ig,
        name: "Instagram",
        link:'/'
    },
    {
        id: 4,
        logo: Email,
        name: "Email",
        link:'/'
    },
]
export const CustomerServices: SosmedProps[] =[
    {
        id: 1,
        logo: Email,
        content: 'papin.cs@gmail.com',
        name: "Email",
        link:'/'
    },
    {
        id: 2,
        logo: Phone,
        content: '+62 812-xxxx-xxxx',
        name: 'Telepon',
        link: 'tel:+62812xxxxxxx',
    },
]