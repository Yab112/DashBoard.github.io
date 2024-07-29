import {Title} from "../../ui"
import { shortcutLink } from "../../constants"
import { IoIosArrowForward } from "react-icons/io"
const Shortcut = () => {
  return (
    <div className="flex gap-4 flex-col rounded-lg p-4 dark:bg-gray-600
    ">
        <Title>Shortcuts</Title>
        {shortcutLink.map((link,index)=>(
            <div key={index} className="flex justify-between items-center cursor-pointer rounded-sm">
                    <div className="flex gap-4 items-center">
                        <span className="bg-blue-100 p-2 rounded-full  dark:bg-gray-800 dark:text-gray-300 w-8 h-8
                                 flex items-center justify-center">
                                <link.icon/>
                        </span>
                        <h3 className="font-medium dark:text-gray-300">{link.title}</h3>
                    </div>
                    <span className="bg-purple-300 p-2 rounded-md dark:bg-gray-700 
                    dark:text-gray-300 hover:mr-3 transition-all duration-500 ">
                        <IoIosArrowForward/>
                    </span>
            </div>
        ))}
        
    </div>
  )
}

export default Shortcut
