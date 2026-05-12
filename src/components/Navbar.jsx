const Navbar = () => {
    return (
        <div className="flex items-center justify-between px-10 py-4 bg-black">

            {/* Logo */}
            <img src="/einstellen-logo.png" className="h-14 object-contain" />

            {/* Center Glass Menu */}
            <div className="hidden md:flex items-center gap-8 px-6 py-3 rounded-full
        bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]">

                <p className="text-gray-300 hover:text-white cursor-pointer transition">
                    Candidate
                </p>
                <p className="text-gray-300 hover:text-white cursor-pointer transition">
                    Employers
                </p>
                <p className="text-gray-300 hover:text-white cursor-pointer transition">
                    Product
                </p>
                <p className="text-gray-300 hover:text-white cursor-pointer transition">
                    About us
                </p>
            </div>

            {/* Right Buttons */}
            <div className="flex items-center gap-4">

                {/* Login */}
                <button className="px-5 py-2 rounded-lg border border-primary text-primary
          hover:bg-primary hover:text-lime-400 text-white border-lime-400 transition">
                    Log In
                </button>

                {/* CTA */}
                <button
                    className="px-6 py-2 rounded-lg bg-lime-400 text-black font-semibold
  shadow-[0_0_20px_#a3e635] hover:scale-105 hover:bg-lime-300 transition"
                >
                    Start Interview
                </button>

            </div>
        </div>
    );
};

export default Navbar;