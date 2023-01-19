import DefaultLayout from "../components/layouts/default"

export function Index () {

  return (
    <>
      <div className="flex w-full h-full items-center justify-center">
        <div className="w-80">
          <label className="block text-sm">
            <div
              className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400"
            >
              <input
                className="block w-full mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input placeholder:text-sm placeholder:ml-10"
                placeholder="Afonso Simão"
              />
              <div
                className="absolute inset-y-0 flex items-center ml-1 pointer-events-none"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
            </div>
          </label>
        </div>
      </div>
    </>
  )
}

Index.Layout = DefaultLayout

export default Index