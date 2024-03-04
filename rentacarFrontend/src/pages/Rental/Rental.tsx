import PaymentForm from "../../components/Payments/PaymentForm";

function Rental() {
  return (
    <div className="flex gap-10 my-10 justify-center">
      <div>
        <div className="bg-white w-[631px] h-[360px] p-6 rounded-lg">
          <h4 className="text-lg font-bold">Billing Info</h4>
          <p className="text-gray-400 mt-1 mb-5">
            Please enter your billing info
          </p>
          <div>
            <div className="flex">
              <div className="flex flex-col">
                <label className="font-semibold" htmlFor="">
                  Name
                </label>
                <input
                  className="border p-2 rounded-lg w-[272px] h-[48px]"
                  type="text"
                  name=""
                  id=""
                  placeholder="Name"
                />
              </div>
              <div className="flex flex-col ml-10">
                <label className="font-semibold" htmlFor="">
                  Adress
                </label>
                <input
                  className="border p-2 rounded-lg w-[272px] h-[48px]"
                  type="text"
                  placeholder="Adress"
                />
              </div>
            </div>
            <div className="flex mt-10">
              <div className="flex flex-col">
                <label className="font-semibold" htmlFor="">
                  Phone
                </label>
                <input
                  className="border p-2 rounded-lg w-[272px] h-[48px]"
                  type="text"
                  placeholder="Phone"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col ml-10">
                <label className="font-semibold" htmlFor="">
                  Town/City
                </label>
                <input
                  className="border p-2 rounded-lg w-[272px] h-[48px]"
                  type="text"
                  placeholder="Town/City"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white w-[631px] h-[300px] p-6 rounded-lg mt-10">
          <h4 className="text-lg font-bold">Confirmation</h4>
          <p className="text-gray-400">
            We are getting to the end. Just few clicks and your rental is ready!
          </p>
          <div className="flex gap-5 items-center bg-gray-200 p-4 rounded-lg my-5">
            <input type="checkbox" />
            <p className="font-semibold">
              I agree with sending an marketing and newsletter emails. No spam,
              promissed!
            </p>
          </div>
          <div className="flex gap-5 items-center bg-gray-200 p-4 rounded-lg">
            <input type="checkbox" />
            <p className="font-semibold">
              I agree with our terms and conditions and privacy policy.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-white w-[631px] h-[300px] p-6 rounded-lg">
          <h4 className="text-lg font-bold">Rental Summary</h4>
          <p className="text-gray-400">
            Prices may change depending on the length of the rental and the
            price of your rental car.
          </p>
          <div className="flex gap-10 items-center my-8">
            <div>
              <img src="" alt="" />
            </div>
          </div>

          <hr className="my-6" />

          <div className="flex justify-between items-center mt-6">
            <div>
              <h4 className="font-bold text-base">Total Rental Price</h4>
              <p className="text-gray-400">Overall price rental</p>
            </div>
            <div className="font-bold">$200.00</div>
          </div>
        </div>
        <div className="mt-10">
          <PaymentForm />
        </div>
      </div>
    </div>
  );
}

export default Rental;
