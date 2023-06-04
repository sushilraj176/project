export default function App() {
  return (
    <>
      <div class="flex flex-col mx-auto justify-center place-content-center my-10 bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-4xl hover:bg-gray-100 ">
        <img
          class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-1/4 md:rounded-none md:rounded-l-lg"
          src="https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg?size=626&ext=jpg&ga=GA1.2.499741801.1681969363&semt=sph"
          alt=""
        />
        <div class="flex flex-col-reverse md:w-3/4 justify-between md:flex-row lg:flex-row-reverse">
          <div className="flex flex-col-reverse md:flex-col lg:flex-row w-full md:w-1/2 lg:w-2/3">
            <div className="border border-b-2 p-4 lg:w-1/2">
              <h6 className="mb-1">Realtor</h6>
              <div className="flex">
                <img
                  class="w-12 h-12 rounded-full object-cover mr-4 shadow"
                  src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt="avatar"
                />
                <div class="w-full">
                  <h2 class="text-medium font-semibold text-gray-900 -mt-1">
                    Brad Adams
                  </h2>
                  <span className="text-slate-400">(555)555-4321 </span>
                </div>
              </div>
            </div>

            <div className="flex p-4 border-b-2 md:flex-col md:w-full lg:w-1/2 gap-2 justify-center">
              <div className="w-full">
                <span>
                  <i className="fa fa-bed  mx-1"></i>3 bedrooms
                </span>
              </div>
              <div className="w-full">
                <span>
                  <i className="fa fa-bath  mx-1"></i>2 bathrooms
                </span>
              </div>
            </div>
          </div>
          <div className="w-full border-2 md:w-1/2 p-4  flex flex-col justify-center">
            <div className="flex justify-between">
              {/* <h1>DETACHED HOUSE</h1>
              <h1>-5Y OLD</h1> */}
              <h3 className="font-normal">DEATCHED HOUSE</h3>
              <h3>-5Y OLD</h3>
            </div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              $750000
            </h5>
            <h5 class="mb-2 font-light tracking-tight text-gray-900 dark:text-white">
              742 Evergreen House
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
