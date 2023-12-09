import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <div className="py-8 text-center">
      <div className="flex flex-col justify-center items-center mb-4">
        <ul className="flex gap-4">
          <li>
            <a href="https://github.com/mariotbg11" target="_blank">
              <FaGithub size={25} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mariochristofell?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkPN%2BDSWtSdeo8yGOMRdsFw%3D%3D"
              target="_blank"
            >
              <FaLinkedin size={25} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/mario_fed" target="_blank">
              <FaTwitter size={25} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/mariochrstbg/" target="_blank">
              <FaInstagram size={25} />
            </a>
          </li>
        </ul>
      </div>
      <p className="text-sm mt-2 opacity-50">
        &copy; {new Date().getFullYear()} Mario Christofell. All rights
        reserved.
      </p>
    </div>
  );
}

export default Footer;
