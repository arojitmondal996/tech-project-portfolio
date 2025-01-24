const Newsletter = () => {
    return (
        <div className="mb-5">
            <h2 className="text-2xl font-bold text-center">Newsletter</h2>
            {/* input section */}
            <div className="w-[694px] h-[40px] bg-gray-200 ml-50 rounded-full mt-5">
                <div className="flex justify-end">
                    <button className="w-[110px] h-[40px] bg-amber-300 rounded-full font-bold items-end">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;