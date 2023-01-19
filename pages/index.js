import DefaultLayout from "../components/layouts/default"
import { useRouter } from 'next/router'
import { MdPassword } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'

export function Index () {

  let router = useRouter()

  const Login = async ( event ) => {
    event.preventDefault()
    const data = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    console.log(data);
    router.push('/dashboard')
  }

  return (
    <>
      <div className="flex w-full h-full items-center justify-center">
      <form onSubmit={(e) => Login(e)}>
        <div className="w-80">
          <label className="block text-sm">
            <div
              className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400"
            >
              <input
                id="username"
                name="username"
                className="block w-full mt-1 text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                placeholder="user@rms-cloud.pt"
              />
              <div
                className="absolute inset-y-0 flex items-center ml-2 pointer-events-none"
              >
                <AiOutlineUser />
              </div>
            </div>
          </label>
          <label className="block mt-4 text-sm">
            <div
              className="relative text-gray-500 focus-within:text-purple-600"
            >
              <input
                type={'password'}
                id="password"
                name="password"
                className="block w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                placeholder="Senha"
              />
              <div
                className="absolute inset-y-0 flex items-center ml-2 pointer-events-none"
              >
                <MdPassword />
              </div>
              <button type="submit"
                className="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
              >
                Entrar
              </button>
            </div>
          </label>
        </div>
        </form>
      </div>
    </>
  )
}

Index.Layout = DefaultLayout

export default Index