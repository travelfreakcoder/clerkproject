import { axiosInstance } from "../axiosInstance/axiosInstance"
import { endPoints } from "../endPoints/endPoints"



export const fetchProducts=async(category)=>{
    try{

        const url=category?`${endPoints.products}/category/${category}`:`${endPoints.products}`

        const {data}=await axiosInstance.get(url)
        return data

    }
    catch(error){
        console.log(error);
        
    }
}