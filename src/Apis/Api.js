 import axios from "axios"
export const Signup_api=async (data)=>{
    const sign_output= await axios({
        url:"https://webla-api.uc.r.appspot.com/api/v1/users/register",method:"POST",data:{
           "name" :data.username,
           "email":data.email,
           "password":data.password
            

        }

    })
    return sign_output;
}

const Token=localStorage.getItem("Token")
const Cart=localStorage.getItem('Cart_id')
export const Login_api=async (data)=>{
    const Login_output= await axios({
        url:"https://webla-api.uc.r.appspot.com/api/v1/users/login",method:"POST",data:{
          
           "email":data.email,
           "password":data.password
            

        }

    })
    return Login_output;
}




export const load=async ()=>{
    const response=await axios({
        url:"https://webla-api.uc.r.appspot.com/api/v1/products",
        method:'GET',
        headers:{
            "X-Authorization": `Bearer ${Token}`
        },params:{
            per_page: 25,
  page: 1
        }
    })
    return response ;

}
export const delete_Product=async(id)=>{
    const response=await axios({
        method:"DELETE",
        url:`https://webla-api.uc.r.appspot.com/api/v1/carts/${Cart}/remove/${id}`,
        headers:{
            "X-Authorization": `Bearer ${Token}`

        }

    })
    
    return response;

}
export const cart_add=async(id)=>{
    console.log(id)
    const resp=await axios({
        method:"POST",
        url:`https://webla-api.uc.r.appspot.com/api/v1/carts/${Cart}`,
        headers:{
            "X-Authorization": `Bearer ${Token}`
        },
        data:{
            "id" :`${id}`

        }

    })
    return resp

}
export const cart_data=async()=>{
    const resp=await axios({
        method:"GET",
        url:`https://webla-api.uc.r.appspot.com/api/v1/carts/${Cart}`,
        headers:{
            "X-Authorization":`Bearer ${Token}`
        }
    })
    return resp;
}
export const ApiCategories =[
    {
        title : 'Jeans',
        src : 'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        title: 'Jackets',
        src : 'https://images.pexels.com/photos/6770028/pexels-photo-6770028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        title: 'Style Tee Shirts',
        src : 'https://images.pexels.com/photos/8346230/pexels-photo-8346230.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
    }
]