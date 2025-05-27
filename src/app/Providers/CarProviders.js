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
    
    export const CarContextProvider = ({children}) => {
       const [allData, setData] = useState([]);
       const [admindata, setadmindata]= useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getcardata();
      setData(data);
    };

    const fetchadmindata=async()=>{
      const data = await getAdmincars();
      setadmindata(data);
    }

    fetchData();
    fetchadmindata();
  }, []);

    return (
        <Carcontext.Provider value={{allData, admindata}}>
            {children}
        </Carcontext.Provider>
    );
};

// export default Carcontext;
