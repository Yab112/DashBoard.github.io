import { empolyeesData } from "../../constants"
import Balance from "./Balance"
import Card from "./Card"

const Stat = ({darkMode}) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-between ">
        <div className="flex flex-col gap-4 w-full md:w-2/3 lg:w-2/4">
            {empolyeesData.map((data,index)=>(
                <Card key={index} data={data} />
            ))}
        </div>
       <Balance/>
    </div>
  )
}

export default Stat
