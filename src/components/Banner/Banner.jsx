import image from '../../assets/10798281_19362653.jpg'
const Banner = () => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                {/* Banner Text */}
                <div className='mt-15'>
                    <h1 className="text-5xl font-bold text-center mb-3">Become A Developer,</h1>
                    <h1 className="text-5xl font-bold text-center mb-3"> I do hard work</h1>
                    <h1 className="text-5xl font-bold text-center"> every Moment.</h1>
                    <p className="text-center mt-10">Lorem Ipsum is simply dummy text of the printing <br />
                        and typesetting industry. Lorem Ipsum has been <br />
                        the industry standard dummy text.</p>
                    {/* Button */}
                    <div className="navbar-end mt-10 ml-15">
                        <a className="btn rounded-4xl border-1 border-black">Download Resume</a>
                    </div>
                </div>

                {/* Banner image */}
                <div className='mt-10'>
                    <img className='w-[491px] h-[343px]' src={image} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;