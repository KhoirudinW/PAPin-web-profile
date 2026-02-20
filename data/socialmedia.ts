import Wa from 'pub/sosmed/wa-logoP.png'
import Tiktok from 'pub/sosmed/tiktok-logoP.png'
import Ig from 'pub/sosmed/ig-logoP.png'
import Email from 'pub/sosmed/email-logoP.png'
import Phone from 'pub/sosmed/phone-logoP.png'
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
        link:'https://wa.me/62881036048566'
    },
    // {
    //     id: 2,
    //     logo: Tiktok,
    //     name: "Tiktok",
    //     link:'/'
    // },
    {
        id: 3,
        logo: Ig,
        name: "Instagram",
        link:'https://www.instagram.com/papin_now/'
    },
    {
        id: 4,
        logo: Email,
        name: "Email",
        link:'https://mailto:papin.corps@gmail.com'
    },
]
export const CustomerServices: SosmedProps[] =[
    {
        id: 1,
        logo: Email,
        content: 'papin.corps@gmail.com',
        name: "Email",
        link:'/'
    },
    {
        id: 2,
        logo: Phone,
        content: '+62 881-0360-48566',
        name: 'Telepon',
        link: 'wa.me/62881036048566',
    },
]