import { RiTaskLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const NagivationMenu = () => {
  return (
    <nav className="flex flex-col gap-2 mt-16">
      <NavLink
        to="/"
        className="flex items-center gap-4 text-black p-2 rounded-lg hover:text-white hover:bg-sky-300 transition-all transition-duration: 250ms;"
      >
        <div>
          <RxDashboard className="w-6 h-6" />
        </div>
        <h3 className="text-lg">Anasayfa</h3>
      </NavLink>

      {/* CATEGORİES */}

      <NavLink
        to="/categories-add"
        className="flex items-center gap-4 text-black p-2 rounded-lg hover:text-white hover:bg-sky-300 transition-all transition-duration: 250ms;"
      >
        <div>
          <RiTaskLine className="w-6 h-6" />
        </div>
        <h3 className="text-lg">Kategori Ekle</h3>
      </NavLink>
      <NavLink
        to="/categories-list"
        className="flex items-center gap-4 text-black p-2 rounded-lg hover:text-white hover:bg-sky-300 transition-all transition-duration: 250ms;"
      >
        <div>
          <RiTaskLine className="w-6 h-6" />
        </div>
        <h3 className="text-lg">Kategorileri Listele</h3>
      </NavLink>

      {/* BRANDS */}

      <NavLink
        to="/brand-add"
        className="flex items-center gap-4 text-black p-2 rounded-lg hover:text-white hover:bg-sky-300 transition-all transition-duration: 250ms;"
      >
        <div>
          <RiTaskLine className="w-6 h-6" />
        </div>
        <h3 className="text-lg">Araç Markası Ekle</h3>
      </NavLink>

      {/* MODELS */}

      <NavLink
        to="/model-add"
        className="flex items-center gap-4 text-black p-2 rounded-lg hover:text-white hover:bg-sky-300 transition-all transition-duration: 250ms;"
      >
        <div>
          <RiTaskLine className="w-6 h-6" />
        </div>
        <h3 className="text-lg">Model Ekle</h3>
      </NavLink>
      <NavLink
        to="/models-list"
        className="flex items-center gap-4 text-black p-2 rounded-lg hover:text-white hover:bg-sky-300 transition-all transition-duration: 250ms;"
      >
        <div>
          <RiTaskLine className="w-6 h-6" />
        </div>
        <h3 className="text-lg">Modelleri Listele</h3>
      </NavLink>

      {/* FUEL TYPES */}

      <NavLink
        to="/fuel-type-add"
        className="flex items-center gap-4 text-black p-2 rounded-lg hover:text-white hover:bg-sky-300 transition-all transition-duration: 250ms;"
      >
        <div>
          <RiTaskLine className="w-6 h-6" />
        </div>
        <h3 className="text-lg">Yakıt Tipi Ekle</h3>
      </NavLink>
      <NavLink
        to="/fuel-type-list"
        className="flex items-center gap-4 text-black p-2 rounded-lg hover:text-white hover:bg-sky-300 transition-all transition-duration: 250ms;"
      >
        <div>
          <RiTaskLine className="w-6 h-6" />
        </div>
        <h3 className="text-lg">Yakıt Türlerini Listele</h3>
      </NavLink>

      {/* COLORS */}

      <NavLink
        to="/color-add"
        className="flex items-center gap-4 text-black p-2 rounded-lg hover:text-white hover:bg-sky-300 transition-all transition-duration: 250ms;"
      >
        <div>
          <RiTaskLine className="w-6 h-6" />
        </div>
        <h3 className="text-lg">Renk Ekle</h3>
      </NavLink>
      <NavLink
        to="/color-list"
        className="flex items-center gap-4 text-black p-2 rounded-lg hover:text-white hover:bg-sky-300 transition-all transition-duration: 250ms;"
      >
        <div>
          <RiTaskLine className="w-6 h-6" />
        </div>
        <h3 className="text-lg">Renkleri Listele</h3>
      </NavLink>

      {/* CARS */}

      <NavLink
        to="/cars"
        className="flex items-center gap-4 text-black p-2 rounded-lg hover:text-white hover:bg-sky-300 transition-all transition-duration: 250ms;"
      >
        <div>
          <RiTaskLine className="w-6 h-6" />
        </div>
        <h3 className="text-lg">Araçları Listele</h3>
      </NavLink>
      <NavLink
        to="/cars-update"
        className="flex items-center gap-4 text-black p-2 rounded-lg hover:text-white hover:bg-sky-300 transition-all transition-duration: 250ms;"
      >
        <div>
          <RiTaskLine className="w-6 h-6" />
        </div>
        <h3 className="text-lg">Araçları Güncelle</h3>
      </NavLink>
      <NavLink
        to="/cars-add"
        className="flex items-center gap-4 text-black p-2 rounded-lg hover:text-white hover:bg-sky-300 transition-all transition-duration: 250ms;"
      >
        <div>
          <RiTaskLine className="w-6 h-6" />
        </div>
        <h3 className="text-lg">Araç Ekle</h3>
      </NavLink>

      {/* PERSONALS */}

      <NavLink
        to="/personals-add"
        className="flex items-center gap-4 text-black p-2 rounded-lg hover:text-white hover:bg-sky-300 transition-all transition-duration: 250ms;"
      >
        <div>
          <RiTaskLine className="w-6 h-6" />
        </div>
        <h3 className="text-lg">Personel Ekle</h3>
      </NavLink>
      <NavLink
        to="/personals-list"
        className="flex items-center gap-4 text-black p-2 rounded-lg hover:text-white hover:bg-sky-300 transition-all transition-duration: 250ms;"
      >
        <div>
          <RiTaskLine className="w-6 h-6" />
        </div>
        <h3 className="text-lg">Personelleri Listele</h3>
      </NavLink>
      <NavLink
        to="/image-add"
        className="flex items-center gap-4 text-black p-2 rounded-lg hover:text-white hover:bg-sky-300 transition-all transition-duration: 250ms;"
      >
        <div>
          <RiTaskLine className="w-6 h-6" />
        </div>
        <h3 className="text-lg">Fotoğraf Ekle</h3>
      </NavLink>
    </nav>
  );
};

export default NagivationMenu;
