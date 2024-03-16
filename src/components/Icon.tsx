import iconShare from "../assets/icon-share.svg";
import iconFacebook from "../assets/icon-facebook.svg";
import iconX from "../assets/icon-x.svg";

interface IconProps {
  icon: "share" | "facebook" | "x";
  size: "large" | "small";
}

const ICON_MAPPER: Record<IconProps["icon"], string> = {
  share: iconShare,
  facebook: iconFacebook,
  x: iconX,
};

function Icon({ icon, size }: IconProps) {
  const iconSize = size === "small" ? "w-9 h-9" : "w-11 h-11";

  return (
    <div
      className={`${iconSize} bg-white flex justify-center items-center rounded-full shadow-custom`}
    >
      <img src={ICON_MAPPER[icon]} alt={`${icon} icon`} />
    </div>
  );
}
export default Icon;
