import { StaticImageData } from "next/image";

export interface WorkflowStep {
    id: number;
    title: string;
    description: string;
    image?: StaticImageData
}

export const steps: WorkflowStep[] = [
    {
        id: 1,
        title: "Berpasangan dengan Aman",
        description: "Hubungkan akun dengan pasangan melalui kode privat, tanpa ruang publik.",
    },
    {
        id: 2,
        title: "Kirim Satu Momen Setiap Hari.",
        description: "Cukup satu foto, satu pesan, satu niat untuk hadir hari ini.",
    },
    {
        id: 3,
        title: "Jaga Streak Bersama.",
        description: "Bukan tentang angka, tapi tentang kebiasaan yang terus dijaga.",
    },
    {
        id: 4,
        title: "Simpan Perjalanan Kalian",
        description: "Semua momen tersusun rapi, hanya untuk kalian berdua.",
    },
];