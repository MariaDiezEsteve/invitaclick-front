import axios from 'axios'
import {ref} from 'vue'


async function getDataReviews(){

    let isError = false
    let isLoading = true 
    let data = ref("")

    const url= "http://127.0.0.1:5000/reviews";
    
        try{
            let response = await axios.get(url);
            data.value = await response.data
        }catch (error) {
            console.log(error);
            isError = true
        }
    
    isLoading = false

    return{
        isError, isLoading, data
    }
     
  }


export default {getDataReviews} 