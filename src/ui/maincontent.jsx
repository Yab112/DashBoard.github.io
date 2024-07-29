const main = ({children}) => {
  return (
    <div className="text-gray-500 bg-gray-100 sm:ml-64 p-4
    flex gap-5 flex-col lg:flex-row translate-all duration-300 mt-14
    dark:bg-gray-800">
      {children}
    </div>
  )
}

export default main