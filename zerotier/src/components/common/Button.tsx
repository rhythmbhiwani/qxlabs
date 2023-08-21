import classNames from "classnames";

interface Props {
  title: string;
  className?: string;
}

function Button({ title, className }: Props) {
  return (
    <button
      className={classNames(
        "rounded-full whitespace-nowrap text-xl focus:outline-none ring-1 ring-white px-3 py-1 hover:bg-white hover:text-[#262626] transition-colors duration-300",
        className
      )}
    >
      {title}
    </button>
  );
}

export default Button;
