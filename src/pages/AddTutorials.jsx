import React, { useContext } from 'react';

import BgImage2 from '../assets/banner.webp'
import AuthContext from '../Providers/AuthContext';

const AddTutorials = () => {
    const { user } = useContext(AuthContext)


    const handelAddTutorials = (e) => {
        e.preventDefault()

        const formdata = new FormData(e.target);

        const initialData = Object.fromEntries(formdata.entries());
        console.log(initialData)
       

        fetch('http://localhost:5000/tutor', {
           
            method: "POST",
            headers:{
                "content-type":"application/json",
            },
            body: JSON.stringify(initialData)
        })

        .then(res => res.json())
        .then(data => {
            console.log(data)
        })


        e.target.reset();



    }


    return (

        <div className='lg:h-[900px] w-full bg-cover bg-center relative lg:p-45 py-10 lg:-mt-10 ' style={{ backgroundImage: `url(${BgImage2})` }} >

            <div className='w-11/12 lg:w-9/12 mx-auto justify-center bg-base-300 p-10 rounded-2xl shadow-lg'>

                <h2 className="text-3xl font-bold text-center mb-8 text-primary">Add New Tutorial</h2>

                <form onSubmit={handelAddTutorials} className='grid grid-cols-1 md:grid-cols-2 gap-8'>

                   
                    <input type="email" name='userEmail' value={user?.email} readOnly className=" input input-bordered w-full text-lg p-4" placeholder="User Email" />

                  
                    <input type="text" name='userName' value={user?.displayName} readOnly className="input input-bordered w-full text-lg p-4" placeholder="User Name" />

                 
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Language</span>
                        </label>
                        <select name='language' defaultValue="default" className="select select-bordered w-full" required>
                            <option disabled value="default">Select A Language</option>
                            <option>English</option>
                            <option>Japanese</option>
                            <option>French</option>
                            <option>Spanish</option>
                            <option>German</option>
                            <option>Italian</option>
                            <option>Chinese</option>
                            <option>Arabic</option>
                            <option>Portuguese</option>
                        </select>
                    </div>

                   
                    <input type="text" name="image" className="input input-bordered w-full text-lg p-4" placeholder="Image URL" />

                
                    <input type="number" name="price" className="input input-bordered w-full text-lg p-4" placeholder="Price" />

              
                    <input type="number" name="review" min={0} max={5} step="0.1" className="input input-bordered w-full text-lg p-4" placeholder="Review (0 to 5)" />

         
                    <textarea name="description" className="textarea textarea-bordered w-full text-lg p-4 md:col-span-2" rows="4" placeholder="Description"></textarea>

                 
                    <div className="flex justify-center mt-10 md:col-span-2">
                        <button type="submit" className='btn btn-lg btn-warning px-10 text-lg'>Submit</button>
                    </div>

                </form>




            </div>

        </div>

    );
};

export default AddTutorials;
