function Anim({text}){
    return(
        <h2 className="font-serif font-bold text-5xl">
            {text.split('').map((letter,index)=>(
                <span key={index} className="animate-fade-in" style={{animationDelay:`${index*100}ms`,animationFillMode:"backwards"}}>
                    {letter}
                </span>
            ))}
        </h2>
    )
}
function Home(){
    return(
        <div className="ml-60 mr-60 mt-60 flex flex-col justify-center items-center">
            <p className="pb-10"><Anim text="Hello, I am Aadit!"/></p>
            <p className="text-center text-3xl font-serif animate-fade-in1">
                Hardworking individual who likes to code and learn new ways of developing applications.
                Aspiring App Developer. Machine Learning and Data Science enthusiast. Has a creative mind.
                Pre-final year student at Vellore Institute of Technology, Chennai.
            </p>
            <div className="mt-5 text-2xl">Check out my social medias!</div>
            <div className="flex flex-row mt-5 text-2xl">
                <div className="size-28">
                    <a href="#GitHub">
                        <img src="./GitHub_Logo_White.png"alt="github"/>
                    </a>
                </div>
                <div className="size-28">
                    <a href="#LinkedIn">
                        <img className=" ml-5 size-10" src="./In-White-34@2x.png" alt="linkedin"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home;