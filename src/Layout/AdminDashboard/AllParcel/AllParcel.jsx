import { useEffect, useState } from "react";
import ParcelCardData from "./ParcelCardData";


const AllParcel = () => {
    const [parcelData, setParcelData] = useState([]);
    useEffect(() => {
        fetch('/parcel.json')
            .then(res => res.json())
            .then(data => setParcelData(data))
    }, []);

    


    const handleShowModal = (e) => {
        e.preventDefault();
        document.getElementById('my_modal').showModal()
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const type = form.type.value;
        console.log(type)
            // toast.success('click')
    }

    //to do: clicking on the submit button:
    //1: change the status pending to on the way
    //2: add the delivery man id


    return (


        <div className="overflow-x-hidden px-4 ">

            {/* <Toaster></Toaster> */}
            <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    
                    <form onSubmit={handleSubmit}>
                    
                    <select name="type" defaultValue={'option'} className="select select-success w-full max-w-xs">
                        <option disabled value={'option'} >Pick your favorite anime</option>
                        <option>One Piece</option>
                        <option>Naruto</option>

                    </select>
                        <button className="btn">Submit</button>
                    </form>

                    <div className="modal-action">
                        <form method="dialog">

                            <button className="btn">Close</button>
                        </form>

                    </div>
                </div>
            </dialog>

            <table className="table">
                {/* head */}
                <thead>
                    <tr className="bg-green-300 mt-12 rounded-md text-base text-black  grid grid-cols-8">
                        <td>Order No.</td>
                        <td>User Name</td>
                        <td>Phone</td>
                        <td>Booking Date</td>
                        <td>Delivery Date</td>
                        <td>Price</td>
                        <td>Status</td>
                        <td>Manage</td>


                    </tr>
                </thead>
                <tbody className="">

                    {
                        parcelData.map((parcelContent, index) => <ParcelCardData handleShowModal={handleShowModal} parcelContent={parcelContent} index={index} key={index}></ParcelCardData>)
                    }



                </tbody>

            </table>


        </div>


    );
};

export default AllParcel;