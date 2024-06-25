import React, {useEffect,useRef} from "react";
import img from "../images/lege.mp4"
// import backImage from "../images/HomeBanner.mp4"
import Image from "../images/jeremy-thomas-4dpAqfTbvKA-unsplash.jpg"
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../../Redux/ActionCreator";
import { useNavigate } from "react-router-dom";
import axios  from "axios";



const Login = () => {

  let navigate  = useNavigate()

    const videoRef = useRef(null);
    // const userInfo = useSelector((state) => state.userLogin);
    const dispatch = useDispatch();
    
    useEffect(()=>{
      if (videoRef.current) {
        videoRef.current.playbackRate = 2;
      }
    },[])

      let handleSubmit = async(e) =>{
        e.preventDefault();
        let post = Object.fromEntries(new FormData(e.target));
       
        dispatch(userLogin(post , navigate));
       

        // e.target.reset();
        
//         axios.post("http://192.168.0.206:8080",post)
// .then((res)=>{
//   console.log(res)
// })
// .catch((err)=>{
//   console.log(err)
// })


 


    }

    
    
  return (
    <>
   
    <div className="min-h-screen py-10" style={{ backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)" }}>
      <div className="container-fluid mx-auto">
        <div className=" flex flex-col lg:flex-row w-11/12 lg:w-11/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden" style={{height : "87vh"}}>
          <div
            className="border border-violet-400 bg-transparent w-full lg:w-3/4 flex flex-col items-center justify-center p-0 bg-no-repeat bg-cover bg-center"
            style={{backgroundColor: "#8185a8" , clipPath: "polygon(0% 0, 100% 0, 75% 100%, 0% 100%)"}}
          >
          {/* <video id="videos" autoPlay loop muted style={{ aspectRatio: '4/3'   , objectFit : "cover"}} >
          <source src={backImage} type="video/mp4" />
        </video> */}
          </div>
          <div className="flex flex-col justify-start items-center w-full lg:w-1/2 py-16 bg-white px-6">
            
            <video ref={videoRef}  id="videod" autoPlay loop muted width={100} playbackrate="2" >
            <source src={img} type="video/mp4" />
            </video>
            <h2 className="text-3xl mb-4 font-bold">Sign In To Continue</h2>

            <form onSubmit={handleSubmit}>
              <input
                required
                name="username"
                className={`rounded-full w-full bg-slate-100 mt-5 text-xl border border-fuchsia-300 px-2 py-1 placeholder-fuchsia-950 focus:text-black-400 focus:border-violet-100 focus:outline-none focus:ring-2 focus:ring-violet-50`}
                placeholder="User Name"
              /> 
               <input
                required
                name="password"
                type="password"
                className={`rounded-full w-full bg-slate-100 mt-5 text-xl border border-violet-200 px-2 py-1 placeholder-fuchsia-950 focus:text-black-400 focus:border-violet-100 focus:outline-none focus:ring-2 focus:ring-violet-50`}
                placeholder="Password"
              />

              <div className="mt-5">
                <button  className="w-full rounded-full bg-purple-500 py-3 text-center text-white font-bold">
                  LOGIN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
