import NavItem from "./UI/NavItem";

export default function NavBar() {
  return (
    <>
      <nav className="border-gray-200 dark:bg-gray-900 bg-transparent pt-6">
        <div className="max-w-[90%] flex items-center justify-between mx-auto py-2 text-xl font-bold text-gray-500">
          <ul className="logo text-3xl pl-10">
            <NavItem path="/about" text="JT" logo={true} />
          </ul>
          <div className="w-auto pr-10 sourceCodePro">
            <ul className="flex flex-row p-4 mt-0 space-x-8 text-gray-500">
              <NavItem path="/about" text="About" />
              <NavItem path="/projects" text="Projects" />
              <NavItem path="/contact" text="Contact" />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
