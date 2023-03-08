import alert from '../assets/notification.png'
import avatar from '../assets/avatar-admin.png'
import arrow from '../assets/arrow.png'

export default function Header({ setSearch }: any) {

  const handleSubmit = (event: any) => {
    event.preventDefault()
    setSearch(event.target[0].value)
  }

  return (
    <header
      className="bg-white fixed w-screen pl-80 border-gray-400 border-b-2 h-20 flex items-center justify-between">

      <form className="pl-20" onSubmit={handleSubmit}>
        <label htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input type="search" id="default-search" className="block w-[700px] p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Busque por clientes" />
        </div>
      </form>

      <div className='flex items-center gap-10 pr-20'>
        <img src={alert} alt="icone de alerta" />

        <div className='flex items-center gap-1'>
          <img src={avatar} alt="avatar do admin" />
          <img src={arrow} alt="seta do avatar" />
        </div>
      </div>

    </header>
  )
}