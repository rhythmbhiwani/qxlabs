import { NAV_ITEM } from "@/utils/navItems";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import { IoIosArrowDown } from "react-icons/io";

function NavDropdown({ navItem }: { navItem: NAV_ITEM }) {
  if (!navItem.links) return null;

  return (
    <>
      <Popover className="relative">
        {() => (
          <>
            <Popover.Button
              className={`group inline-flex items-center rounded-md font-light text-white hover-brand-color focus:outline-none text-xl`}
            >
              <span>{navItem.title}</span>
              <IoIosArrowDown size={20} className={`ml-1`} aria-hidden="true" />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-5 -translate-x-1/2 transform px-4 sm:px-0">
                <div className="bg-black w-60 rounded-3xl p-5">
                  {navItem?.links?.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href ?? "#"}
                      className="text-xl"
                    >
                      <div className="my-2">
                        <p>{item.title}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                {/* <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-black p-7 lg:grid-cols-2 text-white">
                    {navItem?.links?.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href ?? "#"}
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out 
                        focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div className="ml-4">
                          <p className="text-sm font-medium">{item.title}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div> */}
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
}

export default NavDropdown;
