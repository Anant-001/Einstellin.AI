const Stats = () => {
    return (
        <div className="px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
                "15000+ Interviews",
                "55000+ Hours Saved",
                "15000+ Candidates",
                "90% Accuracy",
            ].map((item, i) => (
                <div key={i} className="bg-card p-6 rounded-xl border border-gray-800">
                    <h2 className="text-xl font-bold text-primary">{item.split(" ")[0]}</h2>
                    <p className="text-gray-400">{item.split(" ").slice(1).join(" ")}</p>
                </div>
            ))}
        </div>
    );
};

export default Stats;