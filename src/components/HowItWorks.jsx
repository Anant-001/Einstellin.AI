const steps = [
    "Register Your Account",
    "Take AI Interview",
    "Start Applying",
];

const HowItWorks = () => {
    return (
        <section className="px-10 py-16 text-center">
            <h2 className="text-3xl font-bold mb-10">How It Works</h2>

            <div className="grid md:grid-cols-3 gap-6">
                {steps.map((step, i) => (
                    <div key={i} className="bg-card p-6 rounded-xl border border-gray-800">
                        <div className="w-10 h-10 bg-primary text-black rounded-full flex items-center justify-center mx-auto mb-4">
                            {i + 1}
                        </div>
                        <p>{step}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;