import React, { useEffect, useState, useContext } from 'react';
import AuthContext from '../Providers/AuthContext';
import Swal from 'sweetalert2';

const MyBookedTutorial = () => {
    const { user, loading } = useContext(AuthContext);
    const [bookedTutorials, setBookedTutorials] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/booking?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setBookedTutorials(data));
    }, [user]);

    const handelReview = () => {
        Swal.fire({
            title: 'Review.',
            text: 'Review Success',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    }


    if (loading) {
        return (
            <div className="flex justify-center items-center">
                <span className="loading loading-spinner text-error w-[50px]"></span>
            </div>
        );
    }
    return (
        <div className='w-7/12 mx-auto mt-10 mb-20'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tutor</th>
                            <th>Language</th>
                            <th>Price</th>
                            <th>Review</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookedTutorials.map((item, index) => (
                            <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt={item.language} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.userName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.language}</td>
                                <td>${item.price}</td>
                                <td>{item.review}</td>
                                <td>
                                    <button onClick={handelReview} className="btn btn-ghost btn-xs">Review</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookedTutorial;
