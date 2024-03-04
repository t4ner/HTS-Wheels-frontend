function Footer() {
  return (
    <div className="bg-white p-1 lg:p-6 w-full">
      <div className="w-full md:w-3/4 mx-auto flex-col lg:flex lg:flex-row">
        <div className=" md:basis-1/4">
          <h4 className="text-blue-900 font-extrabold text-3xl">HTS-Wheels</h4>
          <p className="text-gray-500 mt-4">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className="flex md:basis-3/4 justify-around lg:justify-end gap-6 lg:gap-12 mt-6 lg:mt-0">
          <div>
            <h4 className="font-bold text-xl">About</h4>
            <ul className="space-y-3 text-gray-500 mt-4 text-sm md:text-base">
              <li>
                <a href="#how-it-works">How it works?</a>
              </li>
              <li>
                <a href="#featured">Featured</a>
              </li>
              <li>
                <a href="#partnership">Partnership</a>
              </li>
              <li>
                <a href="#business-relation">Business relation</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl">Community</h4>
            <ul className="space-y-3 text-gray-500 mt-4 text-sm md:text-base">
              <li>
                <a href="#events">Events</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#podcast">Podcast</a>
              </li>
              <li>
                <a href="#invite-a-friend">Invite a friend</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl">Socials</h4>
            <ul className="space-y-3 text-gray-500 mt-4 text-sm md:text-base">
              <li>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
