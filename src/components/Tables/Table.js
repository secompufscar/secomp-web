export default function Component({ name, th, children }) {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          {name}
        </h4>
      </div>

      <div className="grid grid-cols-3 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        {th.map(item => (
          <div className="col-span-2 flex items-center">
            <p className="font-medium">{item}</p>
          </div>
        ))}
      </div>

      {children}
    </div>
  )
}
