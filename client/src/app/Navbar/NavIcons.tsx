import { FC, ReactNode } from "react";
import { Icon } from "@phosphor-icons/react";
import { useAppSelector } from "../../redux/Provider";
import { useGetProfilePictureQuery } from "../../api/user";

type MessageBox = FC<{ content: string }>;

interface NavIconProps {
  MenuIcon?: Icon | null;
  MenuContent: ReactNode | MessageBox;
  pointerPos?: string;
  bodyPos: string;
  isMenuOpen: boolean;
  toggle: () => void;
}

const NavIcons = ({
  isMenuOpen,
  toggle,
  pointerPos = "left-1 top-9",
  bodyPos,
  MenuIcon,
  MenuContent,
}: NavIconProps) => {
  const currentUser = useAppSelector((state) => state.global.user);
  const { data: profilePicture } = useGetProfilePictureQuery(currentUser?.id!);

  const SUPABASE_URL = import.meta.env.VITE_REACT_APP_SUPABASE_URL;
  const isDefault =
    currentUser?.profilePicture === "/default/defaultprofilepic.png";

  const profilePicUrl = isDefault
    ? `${SUPABASE_URL}/storage/v1/object/public/profile-pictures/public${currentUser?.profilePicture}`
    : `${profilePicture?.profilePicture}`;

  return (
    <li className="relative text-primary">
      {MenuIcon ? (
        <MenuIcon
          onClick={toggle}
          className={`cursor-pointer ${
            isMenuOpen ? "scale-90 text-black" : "scale-100"
          }
        hover:text-cream duration-500 ease-out `}
          size={30}
          weight="fill"
        />
      ) : (
        <img
          onClick={toggle}
          src={profilePicUrl}
          className="size-10 cursor-pointer"
          alt="avatar-pic"
        />
      )}
      {isMenuOpen && (
        <>
          <div
            className={`absolute ${pointerPos} size-4 bg-black
            transform rotate-45 rounded`}
          />
          {/* Menu Body */}
          <div
            className={`absolute p-2 w-[170px] text-sm rounded bg-black ${bodyPos}`}
          >
            {typeof MenuContent === "function"
              ? MenuContent({ content: "test" })
              : MenuContent}
          </div>
        </>
      )}
    </li>
  );
};

export default NavIcons;
