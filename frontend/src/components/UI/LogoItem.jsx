export default function LogoItem({
  path,
  image,
  text,
  extraStyles,
  isSideBar,
}) {
  return (
    <div className={`${!isSideBar ? "w-16 h-16" : ""} ${extraStyles}`}>
      <a href={path} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={text} />
      </a>
    </div>
  );
}
