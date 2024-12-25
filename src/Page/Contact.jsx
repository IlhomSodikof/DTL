import React from 'react'

export default function Contact() {
  return (
    <section className="py-10 sm:py-16 lg:py-24 mt-[100px]">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-base-content sm:text-4xl lg:text-5xl">Biz bilan bog'laning</h2>
        </div>

        <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
          <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
            <div className="overflow-hidden bg-base-300 rounded-xl shadow-[#cccccc] shadow-md lg:shadow-lg">
              <div className="p-6  ">
                <p className="mt-6 text-lg font-medium ">Telefon</p>
                <p className="mt-1 text-sm font-medium ">
                  {/* {apiDataA[0]?.phone} */}
                  +998971234567</p>
              </div>
            </div>

            <div className="overflow-hidden bg-base-300 rounded-xl shadow-[#cccccc] shadow-md lg:shadow-lg">
              <div className="p-6">
                <p className="mt-6 text-lg font-medium ">Elektron manzil</p>
                <p className="mt-1 text-sm font-medium ">
                  {/* {apiDataA[0]?.email} */}
                  farhodganijonov81@gmail.com
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-base-300 rounded-xl shadow-[#cccccc] shadow-md lg:shadow-lg">
              <div className="p-6">
                <p className="mt-6 text-lg font-medium ">Joylashuv</p>
                <p className="mt-1 text-sm font-medium ">
                  {/* {apiDataA[0]?.location} */}
                  yunusobot
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 overflow-hidden bg-base-300 white rounded-xl shadow-[#cccccc] shadow-md lg:shadow-lg">
            <div className="px-6 py-12 sm:p-12">
              <h3 className="text-3xl font-semibold text-center">Bizga xabar yuboring</h3>

              <form
                // onSubmit={handleSubmit}
                className="mt-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  <div>
                    <label className="text-base font-medium">Ismingiz</label>
                    <div className="mt-2.5 relative">
                      <input
                        type="text"
                        name="name"
                        // value={formData.name}
                        // onChange={handleInputChange}
                        placeholder="To'liq simingiani kiriting"
                        className="block w-full px-4 py-4 placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                      {/* {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>} */}
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium">Telefon raqamingiz</label>
                    <div className="mt-2.5 relative">
                      <input
                        type="tel"
                        name="phone"
                        // value={formData.phone}
                        // onChange={handleInputChange}
                        placeholder="Telefon raqamingizni kiriting"
                        className="block w-full px-4 py-4 placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                      {/* {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>} */}
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-base font-medium">Xabar</label>
                    <div className="mt-2.5 relative">
                      <textarea
                        name="comment"
                        // value={formData.comment}
                        // onChange={handleInputChange}
                        placeholder="Xabaringizni kiriting"
                        className="block w-full px-4 py-4 placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                        rows="4"
                      ></textarea>
                      {/* {errors.comment && <p className="text-red-500 text-sm">{errors.comment}</p>} */}
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-white font-semibold transition-all duration-200 bg-[crimson] border border-transparent rounded-md focus:outline-none hover:bg-[#f9466a] focus:bg-[crimson] focus:ring-2"
                    >
                      Yuborish
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
