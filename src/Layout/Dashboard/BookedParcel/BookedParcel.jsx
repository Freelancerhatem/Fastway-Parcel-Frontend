import toast from "react-hot-toast";


const BookedParcel = () => {
    const userName = ''
    const yyMMDD = ''
    const userEmail = ''
    const handleSubmit = e => {
        e.preventDefault();
        toast.success('submitted')
    }
    return (
        <div className="w-full p-14">
            <div className="  bg-white ">

                <form onSubmit={handleSubmit}>
                    <h1 className="text-center text-3xl font-semibold mt-6 text-orange-400">Book Your Parcel</h1>

                    <div className="grid   gap-6 my-6 lg:grid-cols-2">
                        <div>
                            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                            <input type="text" required id="first_name" name="name" className="bg-gray-50  border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Name" />
                        </div>
                        <div>
                            <label htmlFor="buyer mail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">User Email</label>
                            <input type="email" readOnly name="useremail" required defaultValue={userEmail} className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" />
                        </div>
                        <div>
                            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number</label>
                            <input type="number" min={'0'} name="number" required className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" />
                        </div>
                        <div>

                            <label htmlFor="option" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Parcel Type?</label>

                            <select defaultValue={'category'} htmlFor="Category" name='category' required className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">Category
                                <option value="category">Type</option>
                                <option value="Pasta">Pasta</option>
                                <option value="Pizza">Pizza</option>
                                <option value="Salad">Salad</option>
                                <option value="Burger">Burger</option>
                                <option value="Sushi">Sushi</option>
                                <option value="Stir-Fry">Stir-Fry</option>
                                <option value="Seafood">Seafood</option>
                                <option value="Mexican">Mexican</option>
                                <option value="Beverage">Beverage</option>
                                <option value="Side Dish">Side Dish</option>
                                <option value="Soup">Soup</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Parcel Weight</label>
                            <input type="number" min={'0'} name="number" required className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" />
                        </div>
                        <div>
                            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date</label>
                            <input type="text" name="" required defaultValue={yyMMDD} readOnly className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" />
                        </div>
                        <div>
                            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Receivers Name</label>
                            <input type="text" readOnly name="username" required defaultValue={userName} className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" />
                        </div>
                        <div>
                            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Receivers Number</label>
                            <input type="number" min={'0'} name="receivers-number" required className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" />
                        </div>
                        <div>
                            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Parcel Delivery Address</label>
                            <input type="text"  name="ParcelDeliveryAddress" required className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" />
                        </div>
                        <div>
                            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Delivery Date</label>
                            <input type="date"  name="deliveryDate" required className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" />
                        </div>
                        <div>
                            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Latitude</label>
                            <input type="number"  min={'0'} name="latitude" required className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" />
                        </div>
                        <div>
                            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Longitude</label>
                            <input type="number"  min={'0'} name="longitude" required className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" />
                        </div>
                        
                        <div>
                            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
                            <input type="number" name="price" required min={0} className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" />
                        </div>
                        

                    </div>

                    <button type="submit" className="text-white w-full bg-orange-400 hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Add Food</button>
                </form>


            </div>
        </div>
    );
};

export default BookedParcel;