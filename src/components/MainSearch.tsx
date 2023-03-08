export default function MainSearch({ searchResults }: any) {

  return (
    <div className="pt-20 pl-80">

      <section className="p-4">
        <p className="text-gray-400 text-xs">
          {`Foram encontrados ${searchResults.length} resultados`}
        </p>

        <ul className='mt-6'>
          {searchResults?.map((custumer: any, index: number) => (
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