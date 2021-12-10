import { useState, useEffect } from "react";

export default () => {
    const [randNum, setRandNum] = useState(0);
    
    const [scroll, setScroll] = useState(0);

    window.addEventListener("scroll", function(e) {
        const offset = window.scrollY;

        if(offset - (offset % 100) !== scroll) {
            setScroll(offset - (offset % 100));
        }
    })


    useEffect(() => {
        setInterval(() => {
            const num = Math.random() * 10000;
            setRandNum(parseInt(num));
        }, 1000) 
    },[])

    
    const [randNuma, setRandNuma] = useState(null);

    useEffect(() => {
        setInterval(() => {
            const num = new Date().toLocaleTimeString()
            setRandNuma(num);
        }, 1000) 
    },[])

    return (
        <>
            <div style={{height: "3000px", position: "relative"}}>
                <div id="_container" style={{position: "sticky", top: "0", width: "100vw", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <div>{scroll}</div>
                    <div>{randNum}</div>
                    <div>{randNuma}</div>
                
                </div>
            </div>
        </>
    )

}