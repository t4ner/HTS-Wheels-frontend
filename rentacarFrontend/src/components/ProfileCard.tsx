import React from "react";

export default function ProfileCard() {
  return (
    <div className="w-full flex justify-center p-10 mb-5" style={{ height: "75vh" }}>
      <div>
        <div className="flex space-x-2 w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto">
          <div className="card  min-w-sm border border-gray-100 bg-purple-100   transition-shadow shadow-xl hover:shadow-xl min-w-max">
            <div className="w-full card__media">
              <img
                src="https://img.freepik.com/premium-vector/network-background-connections-with-points-lines-people-icons-vector-technology-background_165143-2023.jpg"
                className="h-48 w-96"
              />
            </div>
            <div className="  card__media--aside "></div>
            <div className="flex items-center p-4">
              <div className="relative flex flex-col items-center w-full">
                <div className="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-purple-600 min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                  <img
                    className="h-24 w-24 md rounded-full relative"
                    src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                    alt=""
                  />
                  <div className="absolute"></div>
                </div>
                <div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                  <span className="text-md whitespace-nowrap text-gray-800 font-semibold">
                  Admin
                  </span>
                  <span className="text-md whitespace-nowrap text-gray-600">
                    admin
                  </span>
                  <p className="text-sm text-gray-500">admin@gmail.com</p>
                  <p className="text-sm text-gray-500">05555555555</p>
                  <div className="py-2 flex space-x-2">
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
