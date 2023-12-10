import "../../assets/logos.css";

export default function LogoItem({
  path,
  image,
  text,
  extraStyles,
  isSideBar,
  ...props
}) {
  return (
    <div
      className={`${!isSideBar ? "w-16 h-16" : ""} ${extraStyles}`}
      {...props}
    >
      <a href={path} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={text} />
      </a>
    </div>
  );
}
