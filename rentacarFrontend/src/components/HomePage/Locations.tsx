import istanbul from "/images/locationImage/istanbul.jpg";
import sivas from "/images/locationImage/sivas.jpg";
import eskişehir from "/images/locationImage/eskisehir.jpg";

function Locations() {
  return (
    <div className="px-3">
      <div className="container my-10 bg-white p-6  rounded-lg">
        <h3 className="text-blue-500 font-bold text-xl lg:text-2xl mb-6">
          Our Dealers
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <div className="flex-grow relative group">
            <a
              target="_blank"
              href="https://www.google.com/search?sca_esv=600400644&tbs=lf:1,lf_ui:4&tbm=lcl&sxsrf=ACQVn08VwdcNhfsfbLUjtpqP_BXs8nO0eQ:1705933533760&q=istanbul+garenta&rflfq=1&num=10&ved=2ahUKEwi_5qjSmfGDAxXi-QIHHdZKDlkQtgN6BAgbEAI#rlfi=hd:;si:;mv:[[41.16569680765136,29.192265802929704],[40.9653459835059,28.67728167207033]]"
            >
              <img
                className="group-hover:scale-110 duration-500 h-[150px] md:h-[200px] w-full object-cover rounded-lg"
                src={istanbul}
                alt=""
              />
            </a>

            <h4 className="absolute top-0 text-white left-2 text-xl md:text-2xl font-extrabold">
              ISTANBUL
            </h4>
          </div>
          <div className="flex-grow relative group">
            <a
              href="https://www.google.com/search?q=sivas+ara%C3%A7+kiralama&sca_esv=600400644&tbm=lcl&sxsrf=ACQVn0-2SAEjnZWBg-1cqnq2clArXSuYSw%3A1705933617269&ei=MXuuZa79D4yRwPAPl8SRgAY&udm=&ved=0ahUKEwju2ZH6mfGDAxWMCBAIHRdiBGAQ4dUDCAk&uact=5&oq=sivas+ara%C3%A7+kiralama&gs_lp=Eg1nd3Mtd2l6LWxvY2FsIhRzaXZhcyBhcmHDpyBraXJhbGFtYTIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIIEAAYFhgeGA8yBhAAGBYYHkiSPlCFF1jcPHACeACQAQCYAYsCoAG-GqoBBjAuMTkuM7gBA8gBAPgBAcICBBAjGCfCAgcQIxiwAhgnwgIOEAAYgAQYigUYsQMYgwHCAggQABiABBixA8ICCxAAGIAEGLEDGIMBwgIEEAAYA4gGAQ&sclient=gws-wiz-local#rlfi=hd:;si:;mv:[[39.7535674,37.036562499999995],[39.740695599999995,37.007813999999996]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2"
              target="_blank"
            >
              {" "}
              <img
                className="group-hover:scale-110 duration-500 h-[150px] md:h-[200px] w-full object-cover rounded-lg"
                src={sivas}
                alt=""
              />
            </a>

            <h4 className="absolute top-0 text-white left-2 text-xl md:text-2xl w-full font-extrabold">
              SIVAS
            </h4>
          </div>
          <div className="flex-grow relative group">
            <a
              href="https://www.google.com/search?q=eskisehir+ara%C3%A7+kiralama&sca_esv=600400644&tbm=lcl&sxsrf=ACQVn0-_AR_h3qz2oR3ej9_BnXt022_wWg%3A1705933628852&ei=PHuuZePJM5KRxc8P0qauWA&udm=&ved=0ahUKEwjj19T_mfGDAxWSSPEDHVKTCwsQ4dUDCAk&uact=5&oq=eskisehir+ara%C3%A7+kiralama&gs_lp=Eg1nd3Mtd2l6LWxvY2FsIhhlc2tpc2VoaXIgYXJhw6cga2lyYWxhbWEyBRAAGIAEMgYQABgHGB4yCBAAGAcYHhgPMgYQABgeGA8yBhAAGAgYHjIIEAAYCBgeGA9InBVQAFiJE3ABeACQAQCYAc0BoAG8C6oBBTAuOS4xuAEDyAEA-AEBwgIKEAAYCBgHGB4YD8ICBxAAGIAEGA3CAgYQABgeGA3CAggQABgeGA0YD8ICCBAAGAUYHhgN&sclient=gws-wiz-local#rlfi=hd:;si:;mv:[[39.7877753,30.587465499999997],[39.7444342,30.491034]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2"
              target="_blank"
            >
              <img
                className="group-hover:scale-110 duration-500 h-[150px] md:h-[200px] w-full object-cover rounded-lg"
                src={eskişehir}
                alt=""
              />
            </a>

            <h4 className="absolute top-0 text-white left-2 text-xl md:text-2xl font-extrabold">
              ESKISEHIR
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Locations;
