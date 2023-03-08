import data from '../services/data'

const { customers } = data

const getOnlyOverdue = customers.filter(item => item.status === "overdue")
const getOnlyPaying = customers.filter(item => item.status === "overdue")
const getTotalPayment = getOnlyPaying.reduce((acc, item) => acc += item.subscription_amount, 0)

const formatterBRL = new Intl.NumberFormat('pt-Br', {
  style: 'currency',
  currency: 'BRL'
})

export default function MainDefault() {
  return (
    <div className="pt-20 pl-80">
      <section className="p-4">
        <p className="font-bold border-blue-600 border-l-4 pl-4">
          Visão Geral
        </p>

        <ul className="mt-6 flex justify-around gap-6">
          <li className="bg-white flex-1 p-4">
            <p>Total de clientes</p>
            <span className="text-blue-500 font-bold text-xl">
              {customers.length}
            </span>
          </li>
          <li className="bg-white flex-1 p-4">
            <p>Clientes inadimplentes</p>
            <span className="text-blue-500 font-bold text-xl">
              {getOnlyOverdue.length}
            </span>
          </li>
          <li className="bg-white flex-1 p-4">
            <p>Clientes adimplentes</p>
            <span className="text-blue-500 font-bold text-xl">
              {getOnlyPaying.length}
            </span>
          </li>
          <li className="bg-white flex-1 p-4">
            <p>Total arrecadado</p>
            <span className="text-blue-500 font-bold text-xl">
              {formatterBRL.format(getTotalPayment)}
            </span>
          </li>
        </ul>
      </section>

      <section className="p-4">
        <p className="font-bold border-blue-600 border-l-4 pl-4">
          Clientes cadastrados
        </p>

        <ul className='mt-6'>
          {customers?.map((custumer, index) => (
            <li className='bg-white flex justify-around items-center rounded-sm py-2 mt-2' key={index}>
              <img src={custumer.profile_url} className="h-10 rounded-full" />
              <span className='w-80 text-center capitalize'>{custumer.name}</span>
              <span className='w-80 text-center'>{custumer.email}</span>
              <span className='w-80 text-center'>{custumer.phone}</span>
              {custumer.status === "overdue"
                ?
                <span className='text-red-500 w-80 text-center'>Inadimplente</span>
                :
                <span className='w-80 text-center'>Adimplente</span>
              }
            </li>
          ))}
        </ul>

      </section>
    </div>
  )
}