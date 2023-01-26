function PointsBoard({player_x_points, player_o_points, draws}) {
    return (
        <div className="flex gap-5 text-center">
        <div className="w-full aspect-[1.5/1] flex bg-red-200 rounded-md"> 
            <div className="w-[50%] text-3xl m-auto">
                X
            </div> 
            <div className="w-[50%] text-lg m-auto">
                {player_x_points}
            </div>
        </div>
        <div className="w-full aspect-[1.5/1] bg-white flex flex-col pt-2 rounded-md">
            <div className="text-xs">
                Draw
            </div>
            <div className="text-xl  m-auto">
                {draws}
            </div>
            
        </div>
        <div className="w-full aspect-[1.5/1] flex bg-blue-200 rounded-md">
            <div className="w-[50%] text-lg m-auto">
                {player_o_points}
            </div>
            <div className="w-[50%] text-3xl m-auto">
                o
            </div> 
        </div>
        </div>
    );
}

export default PointsBoard;