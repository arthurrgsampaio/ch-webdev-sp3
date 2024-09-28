const Card = ({ number, title, description, mTop = 0 }) => {
    return (
        <div
            className="card font-nats flex flex-col"
            style={{ width: "40rem", marginTop: mTop }}
        >
            <div id="topPart" style={{ position: "relative" }}>
                <div
                    className="bg-projRed rounded-full h-20 w-20 flex justify-center items-center text-white text-5xl"
                    style={{
                        position: "absolute",
                        top: "-2rem",
                        left: "-2.5rem",
                    }}
                >
                    {number}
                </div>
                <div className="bg-projBurgundy rounded-r-full text-white text-2xl pl-14 pt-2 pb-2">
                    {title}
                </div>
            </div>
            <div
                id="description"
                className="bg-projGray text-2xl rounded-b-2xl flex justify-center items-center"
                style={{ width: "37rem", alignSelf: "center", textAlign: "justify", padding: "0 2.5rem", height: "18rem" }}
            >
                {description}
            </div>
        </div>
    );
};

export default Card;
