function ChooseSide({difficulty, setNewGame, createSession}) {

    return (
        <>
            <h1 className="text-xl font-bold ">Choose Side</h1>
            <div className='flex flex-col gap-3 mt-5'>
                <div className='cell_x border-solid border-2 py-4 mx-2 rounded-xl hover:scale-95 cursor-pointer text-5xl font-bold uppercase'
                onClick={
                    () => {
                        setNewGame(difficulty, "x");
                    }
                }>
                    x
                </div>
                <div className='cell_o border-solid border-2 py-4 mx-2 rounded-xl hover:scale-95 cursor-pointer text-5xl font-bold uppercase'
                onClick={
                    async () => {
                        setNewGame(difficulty, "o");
                    }
                }>
                    o
                </div>
            </div>
        </>
    );
    

    
}

export default ChooseSide;