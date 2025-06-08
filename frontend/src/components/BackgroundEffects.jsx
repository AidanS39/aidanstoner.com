const Orbs = ({ posx, posy, rotation }) => (
    <div className="absolute w-full h-full overflow-clip">
        <div className={`absolute ${rotation} flex items-start justify-center w-full h-full blur-2xl opacity-40`}>
            <div className={`relative ${posx} ${posy} flex-none h-auto w-auto`}>
                <div className=" bg-secondary w-128 h-128 top-4 left-2 rounded-full lumin mix-blend-multiply animate-orbs animation-delay-3000 z-1"></div>
            </div>
            <div className={`relative ${posx} ${posy} flex-none h-auto w-auto`}>
                <div className=" bg-tertiary w-128 h-128 top-8 rounded-full mix-blend-multiply animate-orbs z-1"></div>
            </div>
            <div className={`relative ${posx} ${posy} flex-none h-auto w-auto`}>
                <div className=" bg-quaternary w-128 h-128 top-4 right-2 rounded-full mix-blend-multiply animate-orbs animation-delay-6000 z-1"></div>
            </div>
            <div className={`relative ${posx} ${posy} flex-none h-auto w-auto`}>
                <div className=" bg-quinary w-128 h-128 top-12 left-8 rounded-full mix-blend-multiply animate-orbs animation-delay-6000 z-1"></div>
            </div>
        </div>
    </div>
)

export { Orbs }