
const Card = ({data}) => {
  return (
    
    <div className="bg-white p-6 rounded-2xl flex items-center
    gap-4 dark:bg-green-900 dark:text-gray-400">
      <span className={`${data.bgColor} px-3 py-6 text-2xl
      rounded-2xl dark:bg-gray-500`}><data.icon/></span>
      <div>
        <h2 className="text-xl"><span className="text-2xl">{data.count}</span></h2>
        <p className="font-bold">{data.title}</p>
      </div>
    </div>
  )
}

export default Card
