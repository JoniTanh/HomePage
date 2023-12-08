import LogoItem from "./UI/LogoItem";

export default function SideBar({ githubLogo, linkedInLogo }) {
  return (
    <div className="w-12 h-12 absolute bottom-1/2 m-6">
      <LogoItem
        path={githubLogo.page}
        image={githubLogo.url}
        text={githubLogo.name}
        isSideBar={true}
      />
      <LogoItem
        path={linkedInLogo.page}
        image={linkedInLogo.url}
        text={linkedInLogo.name}
        isSideBar={true}
        extraStyles="mt-8"
      />
    </div>
  );
}
