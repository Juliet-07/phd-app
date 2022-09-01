import React, { useState } from "react";
import { links } from "./links";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import Link from "next/link";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div>
          <div className=" text-left md:cursor-pointer group">
            <h1
              className="p-4 flex justify-between items-center md:pr-0 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
              }}
            >
              {link.name}
              <span>
                {heading === link.name ? (
                  <FiChevronUp size={20} />
                ) : (
                  <FiChevronDown size={20} />
                )}
              </span>
              {/* <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <FiChevronDown size={20} />
              </span> */}
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-3 gap-10">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        <h5 className="text-xl text-black">
                          {mysublinks.Head}
                        </h5>
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-sm text-gray-600 my-2.5">
                            <Link
                              href={slink.link}
                              className="hover:text-black"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* MOBILE VIEW */}
          
        </div>
      ))}
    </>
  );
};
export default NavLinks;
