
const TraceParcel = () => {
    return (
        <div>
            <div className="   w-1/3  ">
                <form className="relative" >
                    <input type="text" name="search" placeholder="search" className="input  relative input-bordered rounded-full  bg-[#1db7ad]  placeholder:text-gray-200    focus:outline-none mx-auto  w-full " required />
                    <button type="submit" className="absolute  text-white bottom-3 right-8 text-2xl" ><TbSearch title="search"></TbSearch></button>

                </form>
            </div>
        </div>
    );
};

export default TraceParcel;