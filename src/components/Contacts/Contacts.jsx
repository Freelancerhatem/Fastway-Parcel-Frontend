import { HiOfficeBuilding,HiLocationMarker,HiOutlinePhoneMissedCall } from 'react-icons/hi';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
const Contacts = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_5sx7ybg', 'template_fjjf6na', e.target, 'uvSy1pe9ap-JM7kRS')
          .then((result) => {
              console.log(result.text);
              Swal.fire({
                title: "Success!",
                text: "Message Sent successfully!",
                icon: "success"
              });
          }, (error) => {
              console.log(error.text);
          });
        //   e.target.reset();
      };
    return (
        <div name='contact_us'  className="mt-12">
            <SectionTitle header={'Contact Us'} text={'Any questions or feedback, please feel free to reach out to us.'}></SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-5 ">
            <div  className="flex  lg:col-span-3 mx-auto lg:mx-0  lg:pl-12">
                <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <form ref={form} onSubmit={sendEmail} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-4 flex flex-col gap-6">
                            
                            <div className="flex flex-col md:flex-row mx-auto lg:mx-0 gap-4">
                            <div className="relative h-11 w-[200px] lg:min-w-[320px] ">
                                <input name='Fname' type="text" required
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#1db7ad] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#1db7ad] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#1db7ad] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#1db7ad] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Your FirstName
                                </label>
                            </div>
                            <div className="relative h-11 w-[200px] lg:min-w-[320px]">
                                <input name='Lname' type="text" required
                                    className="peer h-full w-full rounded-md  border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#1db7ad] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#1db7ad] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#1db7ad] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#1db7ad] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Your LastName
                                </label>
                            </div>
                            </div>

                            <div className="flex  flex-col md:flex-row mx-auto  gap-4">
                            <div className="relative h-11 w-[200px] lg:min-w-[320px] ">
                                <input name='email' type="email" required
                                    className="peer h-full w-full rounded-md  border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#1db7ad] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#1db7ad] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#1db7ad] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#1db7ad] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Your email
                                </label>
                            </div>
                            <div className="relative h-11 w-[200px] lg:min-w-[320px]">
                                <input name='number' type="number" required
                                    className="peer h-full w-full rounded-md  border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#1db7ad] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#1db7ad] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#1db7ad] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#1db7ad] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Phone Number
                                </label>
                            </div>
                            </div>
                            <div className="relative h-11 lg:w-full w-[200px] mx-auto md:mx-0 lg:min-w-[200px]">
                                <div className="md:w-96 ">
                                    <div className="relative w-full min-w-[100px] md:min-w-[416px]  lg:min-w-[656px] ">
                                        <textarea name='message'
                                            className="peer  h-full min-h-[100px] w-full resize-none rounded-[7px]  border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#1db7ad] focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-[#72f4eb]"
                                            placeholder=" "
                                        ></textarea>
                                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#1db7ad] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#1db7ad] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#1db7ad] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                            Message
                                        </label>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <button
                            className="mt-20 ml-14 md:ml-0 bg-gradient-to-tr from-[#1db7ad] to-[#72f4eb] block  select-none rounded-lg  py-3 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg hover:shadow-[#1db7ad]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="submit"
                            data-ripple-light="true"
                        >
                            Send Message
                        </button>
                       
                    </form>
                </div>
            </div>
            
            
            <div className=" w-full lg:col-span-2 ">
                <div className='flex flex-col justify-center items-center mt-4'>
                <span><HiOfficeBuilding className='w-8 h-8 text-[#1db7ad] '></HiOfficeBuilding></span>
                <h1 className='text-base lg:text-2xl font-medium'>Company information:</h1>
                <p className=' text-xs lg:text-base'>Fast Way Parcel Ltd.</p>
                
                </div>
                <div className='flex flex-col justify-center items-center mt-4'>
                <span><HiLocationMarker className='w-8 h-8 text-[#1db7ad]'></HiLocationMarker></span>
                <h1 className='text-base lg:text-2xl font-medium'>Address:</h1>
                <p className=' text-xs lg:text-base'>Jamalpur,Dhaka 1209</p>
                
                </div>
                <div className='flex flex-col justify-center items-center mt-4'>
                <span><HiOutlinePhoneMissedCall className='w-8 h-8 text-[#1db7ad]'></HiOutlinePhoneMissedCall></span>
                <h1 className='text-base lg:text-2xl font-medium '>Call us:</h1>
                <p className='text-center text-xs lg:text-base'>Call us to speak to a member of our team.</p>
                <h3 className='text-[#1db7ad] text-xs lg:text-base'>+88 016-09342968</h3>
                
                </div>
            </div>
            
            
            
            </div>
        </div>
    );
};

export default Contacts;