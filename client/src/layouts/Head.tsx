import Logo from "../assets/new-youtube-logo.svg"
import SearchButton from "../components/inputs/SearchButton";
import { IoMdMic, IoMdMenu } from "react-icons/io";
import { MdOutlineVideoCameraFront } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";

const Head = () => {
    return (
        <>
            <div className="flex flex-row justify-between items-center gap-10 h-[56px] px-[16px]">
                <div className="flex flex-row gap-3 items-center">
                    <button className="rounded-full hover:bg-gray-100 cursor-pointer p-1">
                        <IoMdMenu size={30} />
                    </button>
                    <img src={Logo} width={90} className="cursor-pointer" height={20} />
                </div>
                <div className="flex flex-row gap-3 items-center">
                    <SearchButton />
                    <div className="bg-gray-100 rounded-full hover:bg-gray-300 cursor-pointer p-3">
                        <IoMdMic size={20} />
                    </div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                    <div className="hover:bg-gray-100 rounded-full p-2 cursor-pointer">
                        <MdOutlineVideoCameraFront size={28} />
                    </div>
                    <div className="hover:bg-gray-100 rounded-full p-2 cursor-pointer relative">
                        <CiBellOn size={28} />
                        <span className="absolute px-[3px] mt-[-30px] right-0 bg-red-600 text-white text-xs rounded-full">
                            9+
                        </span>
                    </div>
                    <img src="https://yt3.ggpht.com/RQegk8W3M7NinsIiCFbJVECWlbE8g6HBmyDb8DEH9De5Kd7Qm0q7ZYKF0FG3sByYXFxVuD3BbQ=s88-c-k-c0x00ffffff-no-rj" width={32} height={32} className=" rounded-full" />
                </div>
            </div>
        </>
    )
}

export default Head