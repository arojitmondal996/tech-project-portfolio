import image from '../../assets/html-5 1.png'
import cssImage from '../../assets/css.png'
import jsImage from '../../assets/javascript.png'
import nodeImage from '../../assets/node (1).png'
import expressImage from '../../assets/node (2).png'
import reactImage from '../../assets/react.svg'

const Skill = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-center mt-15 mb-2">My Skill</h2>
            <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry standard dummy text.</p>
            {/* Card Section */}
            {/* Above card section */}
            <div className='flex justify-between'>
                {/* First Card */}
                <div className="w-[340px] h-[299px] bg-gray-200 rounded-xl p-7 mt-10">
                    <img className='h-[56px] w-[56px] mt-5' src={image} alt="" />
                    <h2 className="text-2xl font-bold mt-4">HTML</h2>
                    <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    <button className="text-black underline hover:text-gray-700 focus:outline-none mt-3">
                        Learn More
                    </button>
                </div>
                {/* Second Card */}
                <div className="w-[340px] h-[299px] bg-gray-200 rounded-xl p-7 mt-10">
                    <img className='h-[56px] w-[56px] mt-5' src={cssImage} alt="" />
                    <h2 className="text-2xl font-bold mt-4">CSS</h2>
                    <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    <button className="text-black underline hover:text-gray-700 focus:outline-none mt-3">
                        Learn More
                    </button>
                </div>
                {/* Third Card */}
                <div className="w-[340px] h-[299px] bg-gray-200 rounded-xl p-7 mt-10">
                    <img className='h-[56px] w-[56px] mt-5' src={jsImage} alt="" />
                    <h2 className="text-2xl font-bold mt-4">JS</h2>
                    <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    <button className="text-black underline hover:text-gray-700 focus:outline-none mt-3">
                        Learn More
                    </button>
                </div>
            </div>
            {/* Below card section */}
            <div className='flex justify-between '>
                {/* Fourth Card */}
                <div className="w-[340px] h-[299px] bg-gray-200 rounded-xl p-7 mt-10">
                    <img className='h-[56px] w-[56px] mt-5' src={nodeImage} alt="" />
                    <h2 className="text-2xl font-bold mt-4">NodeJS</h2>
                    <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    <button className="text-black underline hover:text-gray-700 focus:outline-none mt-3">
                        Learn More
                    </button>
                </div>
                {/* Fifth Card */}
                <div className="w-[340px] h-[299px] bg-gray-200 rounded-xl p-7 mt-10">
                    <img className='h-[56px] w-[56px] mt-5' src={expressImage} alt="" />
                    <h2 className="text-2xl font-bold mt-4">ExpressJS</h2>
                    <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    <button className="text-black underline hover:text-gray-700 focus:outline-none mt-3">
                        Learn More
                    </button>
                </div>
                {/* Six Card */}
                <div className="w-[340px] h-[299px] bg-gray-200 rounded-xl p-7 mt-10">
                    <img className='h-[56px] w-[56px] mt-5' src={reactImage} alt="" />
                    <h2 className="text-2xl font-bold mt-4">React</h2>
                    <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    <button className="text-black underline hover:text-gray-700 focus:outline-none mt-3">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Skill;