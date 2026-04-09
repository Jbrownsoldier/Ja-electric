import { AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

const problems = [
"Unplanned downtime that interrupts production, storage, or operations",
"Aging distribution equipment that no longer matches your present electrical demand",
"Facility expansions that need new power distribution, lighting, or specialty systems",
"Maintenance gaps that let small faults grow into expensive outages",
"Exterior or underground work that requires accurate line location before digging",
"A need for a contractor who can support both construction and emergency repair",
];

const solutions = [
"Design-build electrical tailored to the building and operational requirements",
"Preventative maintenance that includes power quality analysis and line location",
"Documented upgrades to power distribution, life-safety, and specialty lighting systems",
"Emergency repair support that keeps downtime from stretching into lost business hours",
"Experienced field crews for industrial, commercial, agricultural, and airport-related work",
"Practical specialty support from a locally based electrical contractor",
];

export function PanelProblemSolution() {
 return (
 <section className="bg-surface-container-low py-20 md:py-28">
 <div className="max-w-7xl mx-auto container-padding">
 <div className="max-w-2xl mb-14">
 <p className="text-secondary font-semibold tracking-wide uppercase text-sm mb-3">
 Downtime &amp; The Fix
 </p>
 <h2 className="text-white mb-4">
 Reliable Facilities Depend on Reliable Electrical Support
 </h2>
 <p className="text-gray-500 text-lg leading-relaxed">
 When industrial electrical systems are undersized, aging, or poorly maintained,
 the cost shows up fast in lost productivity, safety risk, and reactive repair
 calls. JA Electric is built to step in before those issues snowball.
 </p>
 </div>

 <div className="grid md:grid-cols-2 gap-6 md:gap-8">
 <ProblemCard />
 <SolutionCard />
 </div>

 <div className="mt-8 p-6 md:p-8 bg-secondary/12 border border-secondary/30 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-5">
 <div className="w-11 h-11 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
 <AlertTriangle className="w-5 h-5 text-secondary"strokeWidth={1.75} />
 </div>
 <div className="flex-1">
 <p className="font-semibold text-white mb-1">Planning a complex facility upgrade?</p>
 <p className="text-gray-200 text-sm leading-relaxed">
 JA Electric takes on large and complex scopes where experienced planning,
 coordination, and reliable execution matter.
 </p>
 </div>
 <button className="inline-flex items-center gap-2 text-secondary font-semibold text-sm shrink-0 hover:text-sky-300 transition-colors group">
 Request a Quote
 <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"/>
 </button>
 </div>
 </div>
 </section>
 );
}

function ProblemCard() {
 return (
 <div className="bg-surface rounded-2xl shadow-ambient p-8">
 <div className="flex items-center gap-3 mb-6">
 <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
 <AlertTriangle className="w-5 h-5 text-red-500"strokeWidth={1.75} />
 </div>
 <div>
 <p className="font-bold text-white text-base leading-snug">The Problem</p>
 <p className="text-gray-500 text-xs">What creates preventable downtime</p>
 </div>
 </div>
 <ul className="space-y-3.5">
 {problems.map((item) => (
 <li key={item} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
 <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-2"/>
 {item}
 </li>
 ))}
 </ul>
 </div>
 );
}

function SolutionCard() {
 return (
 <div className="bg-primary rounded-2xl shadow-ambient p-8">
 <div className="flex items-center gap-3 mb-6">
 <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
 <CheckCircle2 className="w-5 h-5 text-secondary"strokeWidth={1.75} />
 </div>
 <div>
 <p className="font-bold text-white text-base leading-snug">The Solution</p>
 <p className="text-gray-400 text-xs">What JA Electric brings to the site</p>
 </div>
 </div>
 <ul className="space-y-3.5">
 {solutions.map((item) => (
 <li key={item} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
 <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5"strokeWidth={2} />
 {item}
 </li>
 ))}
 </ul>
 </div>
 );
}
