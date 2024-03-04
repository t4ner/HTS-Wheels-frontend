import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import contact from "/images/contact/contact.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_46ikwls",
        "template_yri41sa",
        form.current!,
        "eH_Rf6GYH5NogdNfx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className=" p-4 md:p-0 container mx-auto  my-10">
      <div className="flex flex-col rounded-3xl md:flex md:flex-row overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900  to-blue-900">
        <div className="bg-white  basis-1/3 rounded-3xl">
          <div className="overflow-hidden rounded-3xl">
            <img src={contact} className="object-cover" />
          </div>
          <div className="p-2 md:p-5 space-y-5 md:space-y-10 mt-5 font-semibold">
            <div className="flex items-center ">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-gray-500 text-xl mr-4"
              />
              <p>Pg. de Gràcia, 121, Gràcia, 08008 Barcelona, İspanya</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faPhoneVolume}
                className="text-gray-500 text-xl mr-4"
              />
              <p>+34 58015801</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-gray-500 text-xl mr-4"
              />
              <p>harnylmzz@outlook.com</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-gray-500 text-xl mr-4"
              />
              <p>tanerdokmets@gmail.com</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-gray-500 text-xl mr-4"
              />
              <p>sehmusekin17@gmail.com</p>
            </div>
            <div className="text-gray-500 text-xl space-x-10">
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faDiscord} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
          </div>
        </div>

        <div className="basis-2/3 py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <label className="block  font-medium text-gray-300">Name</label>
            <input
              type="text"
              name="user_name"
              className="shadow-sm border  text-sm rounded-lg  block w-full p-2.5"
            />
            <label className="block font-medium text-gray-300">Email</label>
            <input
              type="email"
              name="user_email"
              className="shadow-sm border  text-sm rounded-lg  block w-full p-2.5"
            />
            <label className="block  font-medium text-gray-300">Message</label>
            <textarea
              name="message"
              className="shadow-sm border  text-sm rounded-lg  block w-full p-2.5"
            />
            <input
              type="submit"
              value="Send"
              className="shadow-sm border cursor-pointer  text-sm rounded-lg  block  px-5 py-2 text-white font-bold"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
