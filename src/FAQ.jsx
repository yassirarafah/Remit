<section className="faq p-10 py-20 min-h-screen ">
<div className="max-w-5xl mx-auto">
  <div className="flex flex-col items-center justify-center text-black space-y-5">
    <div>
      <h1 className="text-3xl font-bold text-center">FAQ</h1>
      <p className="text-center text-sm font-normal mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore <br /> et dolore magna
        aliqua. Ut enim ad minim veniam
      </p>
    </div>
    <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`flex w-full justify-start space-x-2 ${
                    open ? " rounded-t-lg" : "rounded-lg"
                  } border divide-x-2 border-black px-4 py-5 text-left text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75`}
                >
                  <FaChevronUp
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-black`}
                  />{" "}
                  <span className="pl-2">
                    Lorem ipsum dolor sit amet,
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 border border-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`flex w-full justify-start space-x-2 ${
                    open ? " rounded-t-lg" : "rounded-lg"
                  } border divide-x-2 border-black px-4 py-5 text-left text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75`}
                >
                  <FaChevronUp
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-black`}
                  />{" "}
                  <span className="pl-2">
                    Lorem ipsum dolor sit amet,
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 border border-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`flex w-full justify-start space-x-2 ${
                    open ? " rounded-t-lg" : "rounded-lg"
                  } border divide-x-2 border-black px-4 py-5 text-left text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75`}
                >
                  <FaChevronUp
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-black`}
                  />{" "}
                  <span className="pl-2">
                    Lorem ipsum dolor sit amet,
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 border border-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
  </div>
  <div className="flex items-center justify-center mt-5">
    <div className="cursor-pointer h-[48px] w-[152px] hover:bg-white bg-[#205072] border border-[#205072] hover:text-black text-white rounded flex items-center justify-center text-lg font-semibold">
      See More
    </div>
</div>
</section>