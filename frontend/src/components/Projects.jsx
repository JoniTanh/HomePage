import ImageCardContainer from "../components/UI/ImageCardContainer";

export default function Projects() {
  return (
    <>
      <div className="sourceCodePro whiteColorBlackShadow">
        <div className="mx-auto my-20 sm:my-24 px-8 md:px-20 lg:pl-16 xl:pl-40">
          <div className="flex flex-col md:flex-row md:space-x-10">
            <div className="w-full text-justify">
              <div className="text-2xl lg:text-5xl text-blue-700">
                Portfolio.
              </div>
              <div className="pt-8 mb-20">
                <div>
                  On this page, you will find some of my practice projects. Some
                  of them are still under development, evolving and changing
                  over time. Each project is its own separate entity, and
                  currently, I'm focusing on JavaScript technologies, such as
                  React, Angular, Vue, and Node in my work. However, my
                  intention in the future is to further expand my technical
                  knowledge and delve deeper into other programming languages
                  and technologies, such as Java, C#, and Python.
                </div>
                <div className="pt-10">
                  <div className="mb-4 text-2xl text-green-600">Website</div>
                  <div className="my-8">
                    <span className="text-orange-400">
                      Technologies & Tools:{" "}
                    </span>
                    <span>
                      React, Node.js, MongoDB, Tailwind, Vite, Digital Ocean,
                      Cloudflare
                    </span>
                  </div>
                  <div>
                    <span>GitHub repo: </span>
                    <a
                      className="text-blue-500 hover:text-blue-300"
                      href="https://github.com/JoniTanh/HomePage"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="mb-20">
                <ImageCardContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
