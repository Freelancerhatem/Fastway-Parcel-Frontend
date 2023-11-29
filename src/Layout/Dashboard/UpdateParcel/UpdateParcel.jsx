import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateParcel = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const { displayName, email } = user;
    const { id } = useParams();
    console.log(id)

    const [weight, setWeight] = useState('');
    const [price, setPrice] = useState('');

    const handleWeightChange = (event) => {
        const newWeight = event.target.value;
        setWeight(newWeight);



        const calculatedPrice = calculatePrice(newWeight);
        setPrice(calculatedPrice);
    };
    const calculatePrice = (weight) => {

        const pricePerUnitWeight = 50;
        let calculatedPrice;

        if (weight === '' || weight <= 0) {
            calculatedPrice = '';
        } else if (weight == 1) {
            calculatedPrice = pricePerUnitWeight;
        } else if (weight == 2) {
            calculatedPrice = pricePerUnitWeight * 2;
        } else {

            calculatedPrice = 150;
        }

        return calculatedPrice
    };
    const todayDate = new Date();
    const tomorrowDate = new Date();
    tomorrowDate.setDate(todayDate.getDate() + 3);
    const formattedTomorrowDate = `${tomorrowDate.getFullYear()}-${(tomorrowDate.getMonth() + 1).toString().padStart(2, '0')}-${tomorrowDate.getDate().toString().padStart(2, '0')}`;

    const currentDate = new Date();
    const year = currentDate.getUTCFullYear();
    const month = (currentDate.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getUTCDate().toString().padStart(2, '0');

    const yyMMDD = year.toString() + '-' + month + '-' + day;


    const handleUpdate = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const category = form.category.value;
        const weight = form.weight.value;
        const receiversName = form.receiversName.value;
        const receiversNumber = form.receiversNumber.value;
        const ParcelDeliveryAddress = form.ParcelDeliveryAddress.value;
        const deliveryDate = form.deliveryDate.value;
        const latitude = form.latitude.value;
        const longitude = form.longitude.value;
        const status = 'pending';
        const deliveryMan = ''
        const price = form.price.value;

        const updateparcelData = { name, email, number, category, weight, receiversName, receiversNumber, ParcelDeliveryAddress, deliveryDate, status, deliveryMan, bookingDate: yyMMDD, latitude, longitude, price }

        Swal.fire({
            title: "Are you sure?",
            text: "Do You Want To Update this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/updateParcel/${id}`, updateparcelData)
                    .then(res => {

                        if (res.data.modifiedCount>0) {
                            toast.success('parcel updated successfully')
                        }
                        console.log(res.data)
                    })
                
            }
        });


        // console.log(parcelData);


    }
    return (
        <div className="w-full p-14">
            <div className="  bg-white ">
                <Toaster></Toaster>

                <form onSubmit={handleUpdate}>
                    <h1 className="text-center text-3xl font-semibold mt-6 text-green-400">Update Your Parcel</h1>

                    <div className="grid   gap-6 my-6 lg:grid-cols-2">
                        <div>
                            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                            <input name="name" type="text" required defaultValue={displayName} readOnly className="bg-gray-50  border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Name" />
                        </div>
                        <div>
                            <label htmlFor="buyer mail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">User Email</label>
                            <input name="email" type="email" readOnly required defaultValue={email} className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" />
                        </div>
                        <div>
                            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number</label>
                            <input name="number" type="number" min={'01'} required className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" />
                        </div>
                        <div>

                            <label htmlFor="option" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Parcel Type?</label>

                            <select name='category' defaultValue={'category'} htmlFor="Category" required className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">Category
                                <option value="category">Type</option>
                                <option value="Box">Box</option>
                                <option value="Poly Mailers">Poly Mailers</option>
                                <option value="Flat Rate Boxes">Flat Rate Boxes</option>

                            </select>
                        </div>
                        <div>
                            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Parcel Weight</label>
                            <input name="weight" type="number" onChange={handleWeightChange} min={1} required className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" />
                        </div>

                        <div>
                            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Receivers Name</label>
                            <input type="text" name="receiversName" required className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" />
                        </div>
                        <div>
                            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Receivers Number</label>
                            <input type="number" min={'0'} name="receiversNumber" required className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" />
                        </div>
                        <div>
                            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Parcel Delivery Address</label>
                            <input type="text" name="ParcelDeliveryAddress" required className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" />
                        </div>
                        <div>
                            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Request Delivery Date</label>
                            <input type="date" name="deliveryDate" defaultValue={formattedTomorrowDate} required className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" />
                        </div>
                        <div>
                            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Latitude</label>
                            <input type="" name="latitude" required className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" />
                        </div>
                        <div>
                            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Longitude</label>
                            <input type="" name="longitude" required className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" />
                        </div>

                        <div>
                            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
                            <input type="number" name="price" required min={0} defaultValue={price} className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" />
                        </div>


                    </div>

                    <div className="w-full text-center">
                        <button type="submit" className="text-white w-44 mx-auto bg-green-400 hover:bg-green-300 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm  px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Update Parcel</button>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default UpdateParcel;