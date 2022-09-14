import { Images_Src } from "../config/images";

const Sidebar = () => {
  return (
    <div
      x-cloak
      className="z-40 absolute inset-y-0 transition transform md:translate-x-0 left-0 w-72 bg-gray pl-8 pr-4"
      //   className="{'-translate-x-full': !open}"
    >
      <div className="sticky top-0 py-8">
        <div className="flex-shrink-0 mr-8 flex items-center">
          <img src={Images_Src.logo} alt="logo" />
        </div>
        <ul className="space-y-4 pt-10 uppercase text-base mb-6">
          <li>
            <a
              className="font-bold flex items-center text-primary"
              href="nftsniper.html"
            >
              <div className="w-8 h-1 -ml-12 mr-4 border-t border-primary"></div>
              Home
            </a>
          </li>
          <li>
            <a className="flex items-center" href="day.html">
              Upcoming Drops
            </a>
          </li>
        </ul>
        <div className="inline-flex flex-col items-stretch">
          <a href="submit.html" className="btn btn-secondary mb-4">
            Submit Collection
          </a>
          <a
            href="https://discord.gg/kqTpjhScWD"
            className="btn bg-[#7389DA] mb-2"
            target="_blank"
          >
            <img className="h-6" src={Images_Src.discord} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
