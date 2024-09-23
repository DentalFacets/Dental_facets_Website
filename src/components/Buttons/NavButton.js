import { DownArrow } from "@/svgs/NavIcons";

export default function NavButton({ visible, handlelcick, isScrolled }) {
  return (
    <button
      className={`lg:hidden md:hidden mx-3 ${
        visible ? "transition-all duration-500 rotate-180" : " duration-500"
      }`}
      onClick={handlelcick}
    >
      <DownArrow width={"10vw"} color={`${isScrolled ? "#fff" : "#000"}`} />
    </button>
  );
}
