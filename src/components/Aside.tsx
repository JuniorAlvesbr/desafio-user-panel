import logo from '../assets/logoNexaas.png'
import windowIcon from '../assets/icon1.png'
import config from '../assets/icon2.png'

export default function Aside() {
  return (
    <aside className='w-60 border-r-2 border-gray-400 bg-white fixed inset-y-0'>

      <figure className='border-gray-400 border-b-2 w-full pl-6 h-20 flex items-center'>
        <img src={logo} alt="logo da empresa" />
      </figure>

      <div className='flex p-6 cursor-pointer border-l-4 border-cyan-400 bg-cyan-50'>
        <img src={windowIcon} alt="icone de window" />
        <span className='ml-4'>Painel</span>
      </div>

      <div className='flex p-6 cursor-pointer'>
        <img src={config} alt="icone config" />
        <span className='ml-4'>Configurações</span>
      </div>

      <div className='flex p-6 cursor-pointer border-gray-400 border-t-2 absolute bottom-0 w-full'>
        <img src={windowIcon} alt="icone de window" />
        <span className='ml-4'>Suporte</span>
      </div>
    </aside>
  )
}