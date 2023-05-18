import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-14 pb-3">
      <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
        <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
          <div className="flex flex-col gap-3 shrink-0">
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              Find a store
            </div>
            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
              Become a partner
            </div>
            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
              Sign up for email
            </div>
            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
              Send us feedback
            </div>
            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
              Student discount
            </div>
          </div>
          <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
            <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase text-sm">
                get help
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Order Status
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Returns
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Payment Options
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Contact Us
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase text-sm">
                About Shoe Oasis
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                News
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Careers
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Investors
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Sustainability
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center md:justify-start">
          <div
            onClick={() =>
              window.open("https://www.facebook.com/alisamir.dev", "_blank")
            }
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
          >
            <FaFacebookF size={20} />
          </div>
          <Link
            href="https://twitter.com/dev_alisamir"
            target="_blank"
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
          >
            <FaTwitter size={20} />
          </Link>
          <div
            onClick={() =>
              window.open("https://www.instagram.com/alisamir.dev", "_blank")
            }
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
          >
            <FaInstagram size={20} />
          </div>
          <div
            onClick={() =>
              window.open("https://www.linkedin.com/in/dev-alisamir", "_blank")
            }
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
          >
            <FaLinkedin size={20} />
          </div>
        </div>
      </Wrapper>
      <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
        <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
          © 2023 Show Oasis, Inc. All Rights Reserved
        </div>

        <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Guides
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Terms of Sale
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Terms of Use
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Privacy Policy
          </div>
        </div>
        {/* RIGHT END */}
      </Wrapper>
    </footer>
  );
};

export default Footer;