import React, { useContext} from "react";
import { SidebarContext } from "../hooks/SidebarContext";
import { CartContext } from "../hooks/CartContext";
import { BsBag } from "react-icons/bs";

const Header = () => {
  // header state

  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex relative"
      >
        <BsBag className="text-2xl" />
        <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
          {itemAmount}
        </div>
      </div>
    </>
  );
};

export default Header;
