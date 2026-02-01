// "use client"

// import { motion } from "framer-motion"
// import Image from "next/image"

// export function Hero() {
//   return (
//     <section className="relative overflow-hidden">
//       <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
//         {/* Left */}
//         <div>
//           <span className="inline-block mb-4 rounded-full bg-red-50 px-4 py-1 text-xs font-medium text-brand-red">
//             VERIFIED PLATFORM & INSTANT PAYOUTS
//           </span>

//           <h1 className="text-5xl font-extrabold leading-tight">
//             EASY TASKS.
//             <br />
//             <span className="text-brand-red">DAILY CASH.</span>
//           </h1>

//           <p className="mt-6 max-w-md text-neutral-600">
//             Join 50,000+ Nigerians earning real money daily using just their mobile phone.
//           </p>

//           <div className="mt-8 flex gap-4">
//             <button className="rounded-full bg-brand-red px-6 py-3 text-white">
//               Start Earning Now
//             </button>
//             <button className="rounded-full border px-6 py-3">
//               Hire Workers
//             </button>
//           </div>
//         </div>

//         {/* Right */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="relative"
//         >
//           <motion.div
//             whileHover={{ rotate: -2, y: -6 }}
//             className="relative mx-auto w-[320px]"
//           >
//             <Image
//               src="/images/iphone-hero.png"
//               alt="Phone"
//               width={320}
//               height={640}
//               className="rounded-[36px] shadow-soft"
//             />

//             {/* Floating payout */}
//             <div className="absolute bottom-12 -left-10 rounded-2xl bg-white px-5 py-4 shadow-soft">
//               <p className="text-xs text-neutral-500">Payment received</p>
//               <p className="font-bold text-lg">₦25,000.00</p>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
    return (
        <section className="relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-16 items-center">
                {/* Left */}
                <div className="max-w-xl">
                    <span className="inline-flex items-center gap-2 mb-6 rounded-full bg-red-50 px-4 py-2 text-[11px] font-semibold tracking-wide text-[color:var(--brand-red)]">
                        <span className="inline-block h-2 w-2 rounded-full bg-[color:var(--brand-red)]" />
                        VERIFIED PLATFORM & INSTANT PAYOUTS
                    </span>

                    <h1 className="text-[56px] leading-[1.02] font-extrabold tracking-tight">
                        EASY TASKS.
                        <br />
                        <span className="text-[color:var(--brand-red)]">DAILY CASH.</span>
                    </h1>

                    <p className="mt-6 max-w-md text-[15px] leading-7 text-black/55">
                        Join 50,000+ Nigerians earning real money daily using just their mobile phone.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <button className="rounded-full bg-[color:var(--brand-red)] px-7 py-3.5 text-white text-[13px] font-semibold shadow-[var(--shadow-soft)]">
                            Start Earning Now
                        </button>
                        <button className="rounded-full border border-black/10 px-7 py-3.5 text-[13px] font-semibold">
                            Hire Workers
                        </button>
                    </div>
                </div>

                {/* Right */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    className="relative"
                >
                    <motion.div
                        whileHover={{ rotate: -1.5, y: -6 }}
                        transition={{ type: "spring", stiffness: 160, damping: 18 }}
                        className="relative mx-auto w-[360px] lg:w-[420px]"
                    >
                        {/* IMPORTANT: this image must exist in /public/images/iphone-hero.png */}
                        <Image
                            src="/images/iphone-hero.png"
                            alt="Phone"
                            width={420}
                            height={760}
                            priority
                            className="w-full h-auto rounded-[44px] shadow-[var(--shadow-soft)]"
                        />

                        {/* Floating payout */}
                        <div className="absolute bottom-14 -left-10 rounded-2xl bg-white px-6 py-4 shadow-[var(--shadow-soft)]">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="h-8 w-8 rounded-xl bg-green-500/10 grid place-items-center text-green-600 font-bold">
                                    ✓
                                </span>
                                <p className="text-[11px] text-black/50 font-semibold">
                                    PAYMENT RECEIVED
                                </p>
                            </div>
                            <p className="font-extrabold text-[18px]">₦25,000.00</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
            <div className="bg-gray-50/30 py-8 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition duration-500">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                            NDPA Compliant
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                            Proof-of-Work
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                            Anti-Fraud Tech
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                            Verified Bank Payouts
                        </span>
                    </div>
                </div>
            </div>

        </section>
    )
}
