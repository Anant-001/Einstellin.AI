const Talent = () => {
    return (
        <section className="px-10 py-16">
            <h2 className="text-3xl font-bold mb-6">Active Talent Pool</h2>

            <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-card p-6 rounded-xl border border-gray-800">
                        <img
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            className="rounded-lg mb-4"
                        />
                        <h3 className="font-semibold">John Doe</h3>
                        <p className="text-gray-400 text-sm">AI Engineer</p>

                        <button className="mt-4 w-full bg-primary text-black py-2 rounded-lg">
                            Request Interview
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Talent;