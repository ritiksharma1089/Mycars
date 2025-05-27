"use client"
import { createContext, useEffect, useState } from "react"
// import { POST } from "../api/updatemobile/route";

 export const  Carcontext = createContext();
 const getcardata =async()=>{
        
        const res = await fetch('/api/getcars');
     const data = await res.json();
     
     return data;
    }

  const getAdmincars=async()=>{
    const res = await fetch('/api/getcars',{
      method: "POST",
       headers: {
          'Content-Type': 'application/json',
        }
    });

    const data = await res.json();
    return data;
  }



  const fetchuser =async()=>{
   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
   const res = await fetch(`/api/User`);
    const data = await res.json();
    return data;
}

const fetchorderdata =async()=>{
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
   const res = await fetch(`/api/order`);
    const data = await res.json();
    return data;
}
    
    export const CarContextProvider = ({children}) => {
       const [allData, setData] = useState([]);
       const [admindata, setadmindata]= useState([]);
       const [Userdata, setuserdata]=useState([]);
       const [Orderdata, setOrderdata]=useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getcardata();
      setData(data);
    };

    const fetchadmindata=async()=>{
      const data = await getAdmincars();
      setadmindata(data);
    }
    const fetchuserdata=async()=>{
      const data = await fetchuser();
      setuserdata(data);
    }
    const fetchorder=async()=>{
      const data = await fetchorderdata()
      setOrderdata(data);
    }

    fetchData();
    fetchadmindata();
    fetchuserdata();
    fetchorder()
    
  }, []);

    return (
        <Carcontext.Provider value={{allData, admindata, Userdata, Orderdata}}>
            {children}
        </Carcontext.Provider>
    );
};

// export default Carcontext;
