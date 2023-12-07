import Carousel from "./Carousel";

export default function ProjectDescription({ title, images, description }) {
  return (
    <div className="flex flex-col xl:flex-row xl:min-h-[600px] min-h-auto">
      <div className="w-full xl:w-3/5 pr-6">
        <div className="mb-4">{title}</div>
        {description}
      </div>
      <div className="w-full xl:w-2/5 ml-4">
        <Carousel images={images} />
      </div>
    </div>
  );
}
