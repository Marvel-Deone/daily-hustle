export function Review() {
    return (
        <section id="reviews" className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-[10px] font-black uppercase text-brand-red tracking-[0.4em] mb-4">
                        Community Voice
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-gray-900 leading-tight">
                        Trust <span className="text-brand-red">Stories</span>
                    </h3>
                </div>

                {/* <div className="carousel-container multi-item"> */}
                <div
                    className="flex gap-6"
                >
                    <div className="!rounded-[2rem] shadow-md relative hover:shadow-xl hover:shadow-[#c4162a]/20 hover:-translate-y-2.5 transition-all duration-500 hover:border-[#c4162a]/20 p-8 h-full flex flex-col justify-between border hover:border-2 border-gray-100">
                        <div>
                            <div className="flex items-center space-x-1 text-yellow-400 mb-6 text-xs">
                                ★★★★★
                            </div>
                            <p className="text-[14px] text-gray-600 font-medium italic leading-relaxed mb-8">
                                "I earned my first 15k just by following brands and installing
                                apps. Payouts are truly instant!"
                            </p>
                        </div>

                        <div className="flex items-center space-x-4 border-t border-gray-100 pt-6">
                            <img
                                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&q=80"
                                className="w-10 h-10 rounded-full object-cover grayscale"
                                alt="Amaka O."
                            />
                            <div>
                                <h5 className="text-xs font-black uppercase text-gray-900">
                                    Amaka O.
                                </h5>
                                <p className="text-[8px] font-black text-brand-red uppercase tracking-widest">
                                    Worker • Lagos
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="!rounded-[2rem] shadow-md relative hover:shadow-xl hover:shadow-[#c4162a]/20 hover:-translate-y-2.5 transition-all duration-500 hover:border-[#c4162a]/20 p-8 h-full flex flex-col justify-between border hover:border-2 border-gray-100">
                        <div>
                            <div className="flex items-center space-x-1 text-yellow-400 mb-6 text-xs">
                                ★★★★★
                            </div>
                            <p className="text-[14px] text-gray-600 font-medium italic leading-relaxed mb-8">
                                "The app installs were real and verified. A massive game changer
                                for our fintech brand growth."
                            </p>
                        </div>

                        <div className="flex items-center space-x-4 border-t border-gray-100 pt-6">
                            <img
                                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80"
                                className="w-10 h-10 rounded-full object-cover grayscale"
                                alt="Tunde W."
                            />
                            <div>
                                <h5 className="text-xs font-black uppercase text-gray-900">
                                    Tunde W.
                                </h5>
                                <p className="text-[8px] font-black text-brand-red uppercase tracking-widest">
                                    Employer • Ibadan
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="!rounded-[2rem] shadow-md relative hover:shadow-xl hover:shadow-[#c4162a]/20 hover:-translate-y-2.5 transition-all duration-500 hover:border-[#c4162a]/20 p-8 h-full flex flex-col justify-between border hover:border-2 border-gray-100">
                        <div>
                            <div className="flex items-center space-x-1 text-yellow-400 mb-6 text-xs">
                                ★★★★★
                            </div>
                            <p className="text-[14px] text-gray-600 font-medium italic leading-relaxed mb-8">
                                "DailyHustle covers my transport costs every week. Simple tasks
                                that pay real money."
                            </p>
                        </div>

                        <div className="flex items-center space-x-4 border-t border-gray-100 pt-6">
                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=150&q=80"
                                className="w-10 h-10 rounded-full object-cover grayscale"
                                alt="Chidi E."
                            />
                            <div>
                                <h5 className="text-xs font-black uppercase text-gray-900">
                                    Chidi E.
                                </h5>
                                <p className="text-[8px] font-black text-brand-red uppercase tracking-widest">
                                    Worker • Abuja
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </section>
    )
}