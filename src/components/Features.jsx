const Features = () => {
    return (
        <section className="px-10 py-16">
            <h2 className="text-3xl font-bold text-center mb-10">
                Why We Stand Out
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
                {[
                    "AI Powered Interviews",
                    "Instant Feedback",
                    "Get Dream Job",
                ].map((f, i) => (
                    <div key={i} className="bg-card p-6 rounded-xl border border-gray-800">
                        <h3 className="text-lg font-semibold mb-2">{f}</h3>
                        <p className="text-gray-400">
                            Experience next-gen hiring with AI-driven insights.
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;