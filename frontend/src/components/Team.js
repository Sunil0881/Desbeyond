import person1 from "../assets/person1.jpeg"

const Team = () => {
    return ( 
        <div>
            <div className="grid grid-cols-4">
                <h1 className=" text-xl md:text-4xl font-bold text-white pl-7 flex justify-center pr-7">
                    Team That Make It Happen
                </h1>
                <p></p>
                <p className="text-white hidden md:block text-lg col-span-2 pr-7">
                Meet the mega-talented crew on a mission to help brands create memorable websites that sell. Our people are Huemor’s rocket fuel. They make it possible to build award-winning websites that lead the industry and convert more customers. Oh, and they’re great to work with.
                </p>
            </div>

            <div>
                <img src={person1} alt="img"></img>
            </div>
        </div>
     );
}
 
export default Team;