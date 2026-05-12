const Hero = () => {
    return (
        <section className="relative px-10 py-20 grid md:grid-cols-2 gap-10 items-center overflow-hidden">

            {/* LEFT */}
            <div>
                {/* Badge */}
                <p className="inline-block px-4 py-1 text-xs rounded-full
        bg-lime-400/10 text-lime-300 border border-lime-400/20 mb-6">
                    ⚡ NEXT-GEN RECRUITMENT INTELLIGENCE
                </p>

                {/* Heading */}
                <h1 className="text-5xl font-bold leading-tight">
                    One AI Interview <br />
                    <span className="text-lime-400">
            Infinite Job Opportunities
          </span>
                </h1>

                {/* Desc */}
                <p className="text-gray-400 mt-6 max-w-lg">
                    Einstellen AI helps engineers get discovered by top companies worldwide
                    through one unbiased AI interview.
                </p>

                {/* Buttons */}
                <div className="flex gap-4 mt-8">
                    <button className="bg-lime-400 text-black px-6 py-3 rounded-lg font-semibold
          shadow-[0_0_25px_#a3e635] hover:scale-105 transition">
                        Start Interview
                    </button>

                    <button className="border border-lime-400 text-white px-6 py-3 rounded-lg
          hover:bg-lime-400 hover:text-black transition">
                        Watch Demo
                    </button>
                </div>

                {/* Stats */}
                <div className="flex gap-10 mt-10">
                    {[
                        ["5k+", "Engineers Trust"],
                        ["95%", "Fast Hiring"],
                        ["90%", "Cost Effective"],
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-lime-400/20 flex items-center justify-center">
                                <div className="w-4 h-4 bg-lime-400 rounded-full"></div>
                            </div>
                            <div>
                                <p className="font-semibold">{item[0]}</p>
                                <p className="text-gray-400 text-sm">{item[1]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT SIDE GLOW */}
            <div className="relative flex justify-center">

                {/* Glow Background */}
                <div className="absolute w-[500px] h-[500px] bg-lime-400/30 blur-[120px] rounded-full"></div>

                {/* Card */}
                <div className="relative bg-[#11161D]/80 backdrop-blur-xl p-6 rounded-2xl
        border border-lime-400/20 w-full max-w-md
        shadow-[0_0_40px_rgba(163,230,53,0.3)]">

                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <h3 className="text-lg font-semibold">Interview Summary</h3>
                            <p className="text-xs text-gray-400">
                                Candidate ID: #ENG-9421
                            </p>
                        </div>

                        <span className="text-xs px-3 py-1 rounded-full
            bg-lime-400/10 text-lime-300 border border-lime-400/20">
              COMPLETED
            </span>
                    </div>

                    {/* Score Circle */}
                    <div className="flex items-center gap-6 my-6">
                        <div className="w-24 h-24 rounded-full border-[6px] border-lime-400 flex items-center justify-center">
                            <span className="text-xl font-bold">85</span>
                        </div>

                        {/* Progress */}
                        <div className="flex-1 space-y-3 text-sm">
                            {[
                                ["Python Proficiency", "92%"],
                                ["Data Structures", "88%"],
                                ["Problem Solving", "79%"],
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-gray-300">
                                        <span>{item[0]}</span>
                                        <span>{item[1]}</span>
                                    </div>
                                    <div className="w-full h-1 bg-gray-700 rounded mt-1">
                                        <div
                                            className="h-1 bg-lime-400 rounded"
                                            style={{ width: item[1] }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex gap-2 flex-wrap mt-4 text-xs">
                        {["Backend Engineering", "System Design", "Distributed Systems"].map(
                            (tag, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300"
                                >
                  {tag}
                </span>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
