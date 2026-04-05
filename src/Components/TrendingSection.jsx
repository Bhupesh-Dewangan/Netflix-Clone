import React, { useRef } from 'react'
import TRENDING_POSTERS from '../Data/TrendingShows'


function TrendingSection() {
    const scrollerRef = useRef(null)

    const scrollNext = () => {
        const el = scrollerRef.current
        if (!el) return
        const amount = Math.min(el.clientWidth * 0.75, 520)
        el.scrollBy({ left: amount, behavior: 'smooth' })
    }

    return (
        <section className="relative z-20 mt-16 w-full bg-black md:mt-24">
            {/* Curved divider: overlaps hero; black below arc + red glow stroke */}
            <div
                className="relative -mt-[min(11vw,6.5rem)] h-[min(13vw,5.25rem)] w-full pointer-events-none select-none"
                aria-hidden
            >
                <svg
                    className="absolute inset-x-0 bottom-0 h-full w-full"
                    viewBox="0 0 1200 72"
                    preserveAspectRatio="none"
                >
                    <defs>
                        {/* Reference: thin red/magenta on the edge; soft indigo wash underneath */}
                        <linearGradient id="trending-stroke-h" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#e50914" stopOpacity="0" />
                            <stop offset="10%" stopColor="#e50914" stopOpacity="0.55" />
                            <stop offset="50%" stopColor="#e50914" stopOpacity="0.65" />
                            <stop offset="90%" stopColor="#e50914" stopOpacity="0.55" />
                            <stop offset="100%" stopColor="#e50914" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="trending-curve-wash" gradientUnits="userSpaceOnUse" x1="600" y1="8" x2="600" y2="72">
                            <stop offset="0%" stopColor="#4338ca" stopOpacity="0.32" />
                            <stop offset="28%" stopColor="#1e1b4b" stopOpacity="0.18" />
                            <stop offset="55%" stopColor="#000000" stopOpacity="1" />
                            <stop offset="100%" stopColor="#000000" stopOpacity="1" />
                        </linearGradient>
                    </defs>

                    {/* Convex arc (middle rises toward hero): matches reference divider */}
                    <path fill="#000000" d="M0,54 Q600,10 1200,54 L1200,72 L0,72 Z" />

                    {/* Soft indigo → black under-light directly beneath the red line */}
                    <path fill="url(#trending-curve-wash)" d="M0,54 Q600,10 1200,54 L1200,72 L0,72 Z" opacity="0.88" />

                    {/* Thin red/magenta hairline on the curve */}
                    <path
                        d="M0,54 Q600,10 1200,54"
                        fill="none"
                        stroke="url(#trending-stroke-h)"
                        strokeWidth="1.15"
                        strokeLinecap="round"
                        vectorEffect="nonScalingStroke"
                    />
                </svg>
            </div>

            {/* Trending body: solid black + under-lighting from the curve */}
            <div className="relative bg-black">
                <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[radial-gradient(ellipse_140%_100%_at_50%_-5%,rgba(49,46,129,0.28)_0%,rgba(30,27,75,0.14)_42%,transparent_68%)]"
                    aria-hidden
                />
                <div className="relative px-6 pb-14 pt-2 md:px-14 lg:px-24">
                    <h2 className="mb-5 text-left text-2xl font-bold tracking-tight text-white md:text-[1.65rem]">
                        Trending Now
                    </h2>

                    <div className="relative">
                        <div
                            ref={scrollerRef}
                            className="trending-scroll flex gap-1 overflow-x-auto overflow-y-visible scroll-smooth pb-2 pl-1 pr-16 pt-2 [-webkit-overflow-scrolling:touch]"
                        >
                            {TRENDING_POSTERS.map((item) => (
                                <div
                                    key={item.rank}
                                    className="group relative flex shrink-0 items-end"
                                    style={{ width: 'clamp(200px, 28vw, 260px)' }}
                                >
                                    <span
                                        className="trending-rank absolute bottom-0 left-0 z-0 text-[clamp(4.25rem,13vw,7rem)] tabular-nums leading-none translate-y-[0.12em]"
                                        style={{ marginLeft: '-0.001em' }}
                                    >
                                        {item.rank}
                                    </span>
                                    <div className="relative z-10 ml-[clamp(2.35rem,8.5vw,4rem)] w-full">
                                        <img
                                            src={item.poster}
                                            alt={item.title}
                                            className="aspect-2/3 w-full rounded-[10px] object-cover shadow-[0_12px_40px_-12px_rgba(0,0,0,0.85)] ring-1 ring-white/10 transition duration-300 group-hover:scale-[1.03] group-hover:ring-white/25"
                                            loading="lazy"
                                            draggable={false}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={scrollNext}
                            className="absolute right-0 top-1/2 z-20 flex h-30 w-8 -translate-y-1/2 items-center justify-center rounded-md bg-zinc-900/85 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-[2px] transition hover:bg-zinc-800/95"
                            aria-label="Scroll trending row"
                        >
                            <span className="text-lg font-light leading-none opacity-95">&gt;</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrendingSection;
