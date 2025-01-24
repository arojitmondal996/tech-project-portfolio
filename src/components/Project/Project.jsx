import first from '../../assets/first.jpg'
import second from '../../assets/second.jpg'

const Project = () => {
    return (
        <div className='mb-5'>
            <div className="text-center mt-15 mb-7">
                <h1 className="text-2xl font-bold mb-3">My Project</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.</p>
            </div>
            {/* card section */}
            {/* First Card */}
            <div className="flex w-[1106px] h-[431px] border rounded-xl justify-between">
                {/* text */}
                <div className='p-7 mt-5'>
                    {/* text */}
                    <div>
                        <h2 className="text-2xl font-bold mt-4">React</h2>
                        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Saepe dolores quae quod sit aliquid est facilis ducimus, <br /> beatae  voluptatibus modi eum nemo eaque dignissimos. <br /> Tempora voluptas expedita  libero a numquam ipsum <br /> animi itaque corporis, architecto  sed laudantium eos quo eaque! <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Saepe dolores quae quod sit aliquid est facilis ducimus, <br /> beatae  voluptatibus modi eum nemo eaque dignissimos. <br /> Tempora voluptas expedita  libero a numquam ipsum <br /> animi itaque corporis, architecto  sed laudantium eos quo eaque!</p>
                        <button className="text-black underline hover:text-gray-700 focus:outline-none mt-3">
                            Learn More
                        </button>
                    </div>
                </div>
                {/* image */}
                <div>
                    <img className='w-[555px] h-full rounded-xl' src={first} alt="" />
                </div>
            </div>
            {/* Second Card */}
            <div className="flex w-[1106px] h-[431px] border rounded-xl justify-between mt-5">
                {/* image */}
                <div>
                    <img className='w-[555px] h-full rounded-xl' src={second} alt="" />
                </div>
                {/* text */}
                <div className='p-7 mt-5'>
                    {/* text */}
                    <div>
                        <h2 className="text-2xl font-bold mt-4">React</h2>
                        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Saepe dolores quae quod sit aliquid est facilis ducimus, <br /> beatae  voluptatibus modi eum nemo eaque dignissimos. <br /> Tempora voluptas expedita  libero a numquam ipsum <br /> animi itaque corporis, architecto  sed laudantium eos quo eaque! <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Saepe dolores quae quod sit aliquid est facilis ducimus, <br /> beatae  voluptatibus modi eum nemo eaque dignissimos. <br /> Tempora voluptas expedita  libero a numquam ipsum <br /> animi itaque corporis, architecto  sed laudantium eos quo eaque!</p>
                        <button className="text-black underline hover:text-gray-700 focus:outline-none mt-3">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            {/* Third Card */}
            <div className="flex w-[1106px] h-full border rounded-xl justify-between mt-5">
                {/* text */}
                <div className='p-7 mt-5'>
                    {/* text */}
                    <div>
                        <h2 className="text-2xl font-bold mt-4">React</h2>
                        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Saepe dolores quae quod sit aliquid est facilis ducimus, <br /> beatae  voluptatibus modi eum nemo eaque dignissimos. <br /> Tempora voluptas expedita  libero a numquam ipsum <br /> animi itaque corporis, architecto  sed laudantium eos quo eaque! <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Saepe dolores quae quod sit aliquid est facilis ducimus, <br /> beatae  voluptatibus modi eum nemo eaque dignissimos. <br /> Tempora voluptas expedita  libero a numquam ipsum <br /> animi itaque corporis, architecto  sed laudantium eos quo eaque!</p>
                        <button className="text-black underline hover:text-gray-700 focus:outline-none mt-3">
                            Learn More
                        </button>
                    </div>
                </div>
                {/* image */}
                <div>
                    <img className='w-[555px] h-[431px] rounded-xl' src={first} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Project;