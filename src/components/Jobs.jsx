const Jobs = () => {
    return (
        <section className="px-10 py-16">
            <h2 className="text-3xl font-bold mb-6">Top Job Categories</h2>

            <div className="grid md:grid-cols-3 gap-6">
                {["Software Engineer", "Data Science", "Cloud Engineer"].map(
                    (job, i) => (
                        <div key={i} className="bg-card p-6 rounded-xl border border-gray-800">
                            <h3 className="font-semibold">{job}</h3>
                            <p className="text-gray-400 text-sm mt-2">1000+ Openings</p>
                        </div>
                    )
                )}
            </div>
        </section>
    );
};

export default Jobs;
