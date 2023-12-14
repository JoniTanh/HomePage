import NavItem from "./UI/NavItem";

export default function NavBar() {
  return (
    <>
      <nav className="border-gray-200 dark:bg-gray-900 bg-transparent pt-6 sm:mx-20 xl:mx-36">
        <div className="flex items-center justify-between mx-auto py-2 text-xl font-bold whiteColorBlackShadow">
          <ul className="logo text-4xl pl-10 hidden sm:flex">
            <NavItem path="/" text="JT" logo={true} />
          </ul>
          <div className="w-full sm:pr-10 mx-6 sm:mx-0 text-xl">
            <ul className="flex flex-row justify-between sm:justify-end p-4 mt-0 space-x-8">
              <NavItem path="/" text="About" />
              <NavItem path="/portfolio" text="Portfolio" />
              <NavItem path="/contact" text="Contact" />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
