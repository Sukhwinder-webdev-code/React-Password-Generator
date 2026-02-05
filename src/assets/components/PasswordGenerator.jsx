function PasswordGenerator(props) {





    return (
        <div className=" w-full bg-teal-900 pt-10 h-screen flex flex-col items-center">
            <div className="bg-yellow-200 p-4 w-[450px] shadow-md">
                <h1 className="font-bold mb-2 text-center">Password Generator App</h1>
                <span>
                    <input value={props.pass} className="border border-2 p-1" type="text" readOnly/>
                    <button type="button" className="bg-blue-700 text-white w-[80px] p-1 text-center" onClick={()=>{props.copy(props.pass)}}>{props.showCopy?'Copied':'Copy'}</button>
                </span>
                <div className="mt-2 flex justify-between">
                    <label className="flex">
                        <input className="mr-2 cursor-pointer" type="range" min={6} max={100} onChange={(e)=>{props.setLength(Number(e.target.value))}}/>
                        Length:{props.length}
                    </label>
                    <label htmlFor="numId" className="flex">
                        <input id="numId" checked={props.NumAllowed} onChange={()=>{props.setnumAllowed((previous)=>!previous)}} type="checkbox" />
                        Numbers
                    </label>
                    <label htmlFor="charId" className="flex">
                        <input id="charId"  checked={props.charAllowed}onChange={()=>{props.setCharAllowed((previous)=>!previous)}} type="checkbox" />
                        Characters
                    </label>
                </div>
            </div>
        </div>
    )
}
export default PasswordGenerator;