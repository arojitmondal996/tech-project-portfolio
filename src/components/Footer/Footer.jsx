import first from '../../assets/facebook.png'
import second from '../../assets/github.png'
import linkedIn from '../../assets/linkedin-icon 1.png'
const Footer = () => {
    return (
        <div className="mb-5 mt-10">
            <div className='flex justify-between'>
                {/* logo */}
                <div>
                    <a className="text-2xl font-bold">Arojit</a>
                </div>
                {/* image */}
                <div className='flex gap-2'>
                    <img className='h-[36px] w-[36px]' src={first} alt="" />
                    <img className='h-[36px] w-[36px]' src={second} alt="" />
                    <img className='h-[36px] w-[36px]' src={linkedIn} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;