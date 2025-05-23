import logo from '../../../assets/logo.png'
import {
    Footer,
    FooterBrand,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
  } from "flowbite-react";
  import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
  
const FooterPage = () => {
    return (
        <div >
            <Footer className='p-12'  >
      <div className="w-full ">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <FooterBrand
              href="https://flowbite.com"
              src={logo}
              alt="Flowbite Logo"
              name="LoveForever"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              {/* <FooterTitle title="about" /> */}
              {/* <FooterLinkGroup col>
                <FooterLink href="#">Flowbite</FooterLink>
                <FooterLink href="#">Tailwind CSS</FooterLink>
              </FooterLinkGroup> */}
            </div>
            <div>
              {/* <FooterTitle title="Follow us" /> */}
              {/* <FooterLinkGroup col>
                <FooterLink href="#">Github</FooterLink>
                <FooterLink href="#">Discord</FooterLink>
              </FooterLinkGroup> */}
            </div>
            {/* <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup col>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div> */}
          </div>
        </div>

        <div className="w-full sm:flex sm:items-center sm:justify-between">
       <div></div>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="https://www.facebook.com" icon={BsFacebook} />
            <FooterIcon href="https://www.instagram.com" icon={BsInstagram} />
            <FooterIcon href="https://www.twitter.com" icon={BsTwitter} />

          </div>
        </div>
      </div>
    </Footer>
        </div>
    );
};

export default FooterPage;