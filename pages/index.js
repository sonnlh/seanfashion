import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../slices/counterSlice';
import Navbar from '@/components/nav/NavBar';
import Banner from '@/components/Banner';

export default function Home() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col relative '>
    <Navbar></Navbar>
    <Banner></Banner>
    </div>
    // <div className="p-10">
    //   <h1 className="text-4xl font-bold mb-4">Next.js with Redux Toolkit and Tailwind CSS</h1>
    //   <p className="mb-4">Counter: {count}</p>
    //   <div>
    //     <button className="bg-blue-500 text-white px-4 py-2 mr-2" onClick={() => dispatch(increment())}>
    //       Increment
    //     </button>
    //     <button className="bg-red-500 text-white px-4 py-2" onClick={() => dispatch(decrement())}>
    //       Decrement
    //     </button>
    //   </div>
    // </div>
  );
}
