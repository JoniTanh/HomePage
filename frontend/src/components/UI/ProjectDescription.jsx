import Carousel from "./Carousel";

export default function ProjectDescription({
  title,
  images,
  description,
  technologies,
  githubLink,
  note,
  noteText,
}) {
  return (
    <div className="flex flex-col xl:flex-row xl:min-h-[600px] min-h-auto mb-10">
      <div className="w-full xl:w-3/5 xl:pr-6">
        <div className="mb-4 text-xl text-green-600">{title}</div>
        {description.map((paragraph, index) => (
          <div key={index} className="py-4 xl:pr-4">
            {paragraph}
          </div>
        ))}
        {note && <div className="text-red-500">{noteText}</div>}
        <div>
          <div className="my-8">
            <span className="text-orange-400">Technologies & Tools: </span>
            <span>{technologies}</span>
          </div>
          <div className="mb-6">
            <span>GitHub repo: </span>
            <a
              className="text-blue-500 hover:text-blue-300"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-2/5 pr-0 xl:pr-10 2xl:pr-20 xl:mt-16">
        <Carousel images={images} />
      </div>
    </div>
  );
}
