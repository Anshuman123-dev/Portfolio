const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 max-w-7xl mx-auto">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/Anshuman123-dev" className="social-icon hover:bg-black-500 duration-300 transition-all">

            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2 " />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/anshuman-panda-3b18462a2/" className="social-icon  hover:bg-black-500 duration-300 transition-all">
            <img src="/assets/linkedin.png" alt="twitter" className="w-1/2 h-1/2" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.instagram.com/anshumanpandaofc/" className="social-icon  hover:bg-black-500 duration-300 transition-all">
            <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />

          </a>
        </div>
      </div>

      <p className="text-white-500">© 2025 Anshuman Panda. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
