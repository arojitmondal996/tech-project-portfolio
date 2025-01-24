import python from '../../assets/Python.png'
import cPlus from '../../assets/6132222.png'
import java from '../../assets/java.webp'
import cSharp from '../../assets/csharp.png'
import mySqual from '../../assets/mysql.png'
import mongodb from '../../assets/mongodb.png'
import react from '../../assets/react.webp'
import mongoose from '../../assets/Mongoose.png'
const Familiar = () => {
    return (
        <div>
            {/* More Button */}
            <div className="flex justify-center items-center mt-10">
                <a className="btn rounded-4xl border-1 border-black ">More</a>
            </div>
            {/* Heading */}
            <div className="items-center flex justify-center mb-10">
                <h2 className="text-2xl font-bold mt-10">Familiar With</h2>
            </div>
            {/* Card Section */}
            {/* First card section */}
            <div className='flex gap-5'>
                {/*Top Left card */}
                <div className="w-[552px] h-[297px] bg-gray-200 rounded-xl mb-5">
                    <div className='flex gap-5 p-3 items-center px-3 py-5'>
                        {/* image */}
                        <div>
                            <img className='w-[94px] h-[108px] rounded-xl' src={python} alt="" />
                        </div>
                        {/* text */}
                        <div>
                            <h2 className="text-2xl font-bold mt-4">React</h2>
                            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Saepe dolores quae quod sit aliquid est facilis ducimus, <br /> beatae  voluptatibus modi eum nemo eaque dignissimos. <br /> Tempora voluptas expedita  libero a numquam ipsum <br /> animi itaque corporis, architecto  sed laudantium eos quo eaque!</p>
                            <button className="text-black underline hover:text-gray-700 focus:outline-none mt-3">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
                {/*Top Right card */}
                <div className="w-[552px] h-[297px] bg-gray-200 rounded-xl mb-5">
                    <div className='flex gap-5 p-3 items-center px-3 py-5'>
                        {/* text */}
                        <div>
                            <h2 className="text-2xl font-bold mt-4">C++</h2>
                            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Saepe dolores quae quod sit aliquid est facilis ducimus, <br /> beatae  voluptatibus modi eum nemo eaque dignissimos. <br /> Tempora voluptas expedita  libero a numquam ipsum <br /> animi itaque corporis, architecto  sed laudantium eos quo eaque!</p>
                            <button className="text-black underline hover:text-gray-700 focus:outline-none mt-3">
                                Learn More
                            </button>
                        </div>
                        {/* image */}
                        <div>
                            <img className='w-[94px] h-[94px] rounded-xl' src={cPlus} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* 2nd card section */}
            <div className='flex gap-5'>
                {/*Top Left card */}
                <div className="w-[552px] h-[297px] bg-gray-200 rounded-xl mb-5">
                    <div className='flex gap-5 p-3 items-center px-3 py-5'>
                        {/* image */}
                        <div>
                            <img className='w-[94px] h-[94px] rounded-xl' src={java} alt="" />
                        </div>
                        {/* text */}
                        <div>
                            <h2 className="text-2xl font-bold mt-4">Java</h2>
                            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Saepe dolores quae quod sit aliquid est facilis ducimus, <br /> beatae  voluptatibus modi eum nemo eaque dignissimos. <br /> Tempora voluptas expedita  libero a numquam ipsum <br /> animi itaque corporis, architecto  sed laudantium eos quo eaque!</p>
                            <button className="text-black underline hover:text-gray-700 focus:outline-none mt-3">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
                {/*Top Right card */}
                <div className="w-[552px] h-[297px] bg-gray-200 rounded-xl mb-5">
                    <div className='flex gap-5 p-3 items-center px-3 py-5'>
                        {/* text */}
                        <div>
                            <h2 className="text-2xl font-bold mt-4">C#</h2>
                            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Saepe dolores quae quod sit aliquid est facilis ducimus, <br /> beatae  voluptatibus modi eum nemo eaque dignissimos. <br /> Tempora voluptas expedita  libero a numquam ipsum <br /> animi itaque corporis, architecto  sed laudantium eos quo eaque!</p>
                            <button className="text-black underline hover:text-gray-700 focus:outline-none mt-3">
                                Learn More
                            </button>
                        </div>
                        {/* image */}
                        <div>
                            <img className='w-1304px] h-[108px] rounded-xl' src={cSharp} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* 3rd card section */}
            <div className='flex gap-5'>
                {/*Top Left card */}
                <div className="w-[552px] h-[297px] bg-gray-200 rounded-xl mb-5">
                    <div className='flex gap-5 p-3 items-center px-3 py-5'>
                        {/* image */}
                        <div>
                            <img className='w-[94px] h-[94px] rounded-xl' src={mySqual} alt="" />
                        </div>
                        {/* text */}
                        <div>
                            <h2 className="text-2xl font-bold mt-4">My Squal</h2>
                            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Saepe dolores quae quod sit aliquid est facilis ducimus, <br /> beatae  voluptatibus modi eum nemo eaque dignissimos. <br /> Tempora voluptas expedita  libero a numquam ipsum <br /> animi itaque corporis, architecto  sed laudantium eos quo eaque!</p>
                            <button className="text-black underline hover:text-gray-700 focus:outline-none mt-3">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
                {/*Top Right card */}
                <div className="w-[552px] h-[297px] bg-gray-200 rounded-xl mb-5">
                    <div className='flex gap-5 p-3 items-center px-3 py-5'>
                        {/* text */}
                        <div>
                            <h2 className="text-2xl font-bold mt-4">MongoDB</h2>
                            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Saepe dolores quae quod sit aliquid est facilis ducimus, <br /> beatae  voluptatibus modi eum nemo eaque dignissimos. <br /> Tempora voluptas expedita  libero a numquam ipsum <br /> animi itaque corporis, architecto  sed laudantium eos quo eaque!</p>
                            <button className="text-black underline hover:text-gray-700 focus:outline-none mt-3">
                                Learn More
                            </button>
                        </div>
                        {/* image */}
                        <div>
                            <img className='w-1304px] h-[108px] rounded-xl' src={mongodb} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* 4th card section */}
            <div className='flex gap-5'>
                {/*Top Left card */}
                <div className="w-[552px] h-[297px] bg-gray-200 rounded-xl mb-5">
                    <div className='flex gap-5 p-3 items-center px-3 py-5'>
                        {/* image */}
                        <div>
                            <img className='w-[94px] h-[94px] rounded-xl' src={react} alt="" />
                        </div>
                        {/* text */}
                        <div>
                            <h2 className="text-2xl font-bold mt-4">React</h2>
                            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Saepe dolores quae quod sit aliquid est facilis ducimus, <br /> beatae  voluptatibus modi eum nemo eaque dignissimos. <br /> Tempora voluptas expedita  libero a numquam ipsum <br /> animi itaque corporis, architecto  sed laudantium eos quo eaque!</p>
                            <button className="text-black underline hover:text-gray-700 focus:outline-none mt-3">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
                {/*Top Right card */}
                <div className="w-[552px] h-[297px] bg-gray-200 rounded-xl mb-5">
                    <div className='flex gap-5 p-3 items-center px-3 py-5'>
                        {/* text */}
                        <div>
                            <h2 className="text-2xl font-bold mt-4">Mongoose</h2>
                            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Saepe dolores quae quod sit aliquid est facilis ducimus, <br /> beatae  voluptatibus modi eum nemo eaque dignissimos. <br /> Tempora voluptas expedita  libero a numquam ipsum <br /> animi itaque corporis, architecto  sed laudantium eos quo eaque!</p>
                            <button className="text-black underline hover:text-gray-700 focus:outline-none mt-3">
                                Learn More
                            </button>
                        </div>
                        {/* image */}
                        <div>
                            <img className='w-[94px] h-[94px] rounded-xl' src={mongoose} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Familiar;