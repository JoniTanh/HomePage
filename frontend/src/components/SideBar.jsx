export default function SideBar({ githubLogo, linkedInLogo }) {
  return (
    <div className="w-12 h-12 absolute bottom-1/2 m-6">
      <div>
        <a
          href="https://github.com/jonitanh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={githubLogo}
            alt="GitHub Logo"
            className="w-full h-full object-contain cursor-pointer"
          />
        </a>
      </div>
      <div className="mt-8">
        <a
          href="https://www.linkedin.com/in/joni-tanhuansuu-411011141/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedInLogo}
            alt="LinkedIn Logo"
            className="w-full h-full object-contain cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
}
