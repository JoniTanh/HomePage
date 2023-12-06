export default function LogoItem({ path, image, text, extraStyles }) {
  return (
    <div className={`w-24 h-24 ${extraStyles}`}>
      <a href={path} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={text} />
      </a>
    </div>
  );
}
