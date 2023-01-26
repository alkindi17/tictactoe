function PopCard({children}) {
    return (
        <div className="absolute self-center backdrop-blur-[8px] bottom-auto bg-white/40 max-w-[80vw] px-[70px] pt-8 pb-6 rounded-lg text-center h-300 z-10 drop-shadow-2xl cursor-default">
            {children}
        </div>
    );
}

export default PopCard;