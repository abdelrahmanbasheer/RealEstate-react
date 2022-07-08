import axios from "axios";
 export const baseUrl="https://bayut.p.rapidapi.com"


export const fetchApi =async (url)=>{
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key':"9e9d1774c1msh466883d3e45f1a2p177ae1jsnbecdb564c67e",
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
    return data;
}