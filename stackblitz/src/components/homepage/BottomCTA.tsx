function BottomCTA() {
  return (
    <div className="relative bg-green-purplish text-white px-10 py-40 text-center before:[background-image:url('/assets/effects/quote-logo_grid-bg-pink.png')] before:bg-no-repeat before:w-full before:bottom-[-42px] before:left-0 before:bg-[left_center] before:bg-contain before:absolute before:h-96 before:mix-blend-lighten before:box-border after:[background-image:url('/assets/effects/quote-logo_grid-bg-blue.png')] after:bg-no-repeat after:w-full after:top-[-44px] after:right-0 after:bg-[right_center] after:bg-contain after:absolute after:h-96 after:mix-blend-lighten after:box-border overflow-hidden">
      <div className="section font-redHatDisplay text-4xl font-bold">
        <h4 className="mb-5">See for yourself.</h4>
        <h4 className="mb-20">
          <span className="font-normal">Boot a fresh environment in</span>{" "}
          milliseconds.
        </h4>
        <button className="text-[15px] ring ring-[#33ffcc] px-20 py-5 hover:bg-[#33ffcc] hover:text-black transition-colors duration-300">
          CREATE A NEW PROJECT
        </button>
      </div>
    </div>
  );
}

export default BottomCTA;
