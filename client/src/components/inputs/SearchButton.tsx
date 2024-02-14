import { CiSearch } from "react-icons/ci";

const SearchButton = () => {
    return (
        <>
            <div className="flex flex-row items-center">
                <div className="relative flex w-full h-full flex-wrap items-stretch">
                    <input
                        type="search"
                        className="relative rounded-l-full w-[540px] block flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        placeholder="Telusuri"
                        aria-label="Search"
                        aria-describedby="button-addon1" />

                    <button
                        className="relative flex items-center rounded-r-full bg-[#f8f8f8] hover:bg-gray-200 cursor-pointer border border-r-[#d3d3d3] border-t-[#d3d3d3] border-b-[#d3d3d3] px-[18px] py-[7px] text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-primary-700"
                        type="button"
                        id="button-addon1"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        <CiSearch color="black" size={24} />
                    </button>
                </div>
            </div>
        </>
    )
}

export default SearchButton