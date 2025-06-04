const Orbs = ({ posx, posy, rotation }) => (
    <div className={`absolute ${posx} ${posy} flex items-center justify-center blur-2xl opacity-40 ${rotation}`}>
        <div className="absolute bg-tertiary w-128 h-128 top-4 left-2 rounded-full mix-blend-multiply animate-orbs animation-delay-3000 z-1"></div>
        <div className="absolute bg-quaternary w-128 h-128 top-8 rounded-full mix-blend-multiply animate-orbs z-1"></div>
        <div className="absolute bg-quinary w-128 h-128 top-4 right-2 rounded-full mix-blend-multiply animate-orbs animation-delay-6000 z-1"></div>
    </div>
)

export { Orbs }