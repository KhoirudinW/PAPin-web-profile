import Image, { StaticImageData } from "next/image";

type FeatureCardProps = {
    title: string;
    subtitle: string;
    description: string;
    points?: string[];
    image?: StaticImageData
  };
  
  export default function FeatureCard({
    title,
    subtitle,
    description,
    points,
    image
  }: FeatureCardProps) {
    return (
      <div className="bg-white rounded-xl shadow-md shadow-primary p-6 flex flex-col gap-4">
        <div>
            <div className="flex flex-row items-center gap-3 py-2">
                {image && (
                    <Image src={image} alt={`${title}-icon`} className="size-10"  width={100} height={100}/>
                )}
                <h3 className="header-primary-4 mb-1">{title}</h3>
            </div>
            <p className="fonts-xs text-gray">{subtitle}</p>
        </div>
  
        <p className="fonts-sm leading-relaxed">{description}</p>
  
        {points && (
          <ul className="list-disc pl-5 fonts-xs text-gray">
            {points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  