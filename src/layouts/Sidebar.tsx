import { MdHomeFilled } from "react-icons/md";

const Sidebar = ({ openSidebar }: { openSidebar: boolean }) => {
  return (
    <>
      <div className={`w-[${openSidebar ? '100px' : '50px'}] bg`}>
        {openSidebar ? (
          <div>hello</div>
        ) : (
          <div className="flex flex-col gap-5 pt-3">
            <div className='pl-5'>
              <div className="hover:bg-slate-300 flex gap-2 justify-center items-center">
                <MdHomeFilled size={30} />
                <span className='text-sm' style={{ fontFamily: 'sans-serif', marginLeft: '5px' }}>Beranda</span>
              </div>

            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Sidebar