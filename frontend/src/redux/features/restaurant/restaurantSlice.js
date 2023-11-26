import axois from "axios"

const restaurantApi = axois.create({
    baseURL:"http://localhost:5000/api/v1",
    timeout:5000
})


export const createRestaurant = async ()=>{
    try {
        const response = restaurantApi.post("/restaurant")
        return response.data
    } catch (error) {
        console.log(error.message)
        return null
    }
}

export const getRestaurant = async ()=>{
    try {
        const response = restaurantApi.get("/restaurant")
        return response.data
    } catch (error) {
        console.log(error.message)
        return null
    }
}

export const deleteRestaurant = async ()=>{
    try {
        const response = restaurantApi.delete("/restaurant")
        return response.data
    } catch (error) {
        console.log(error.message)
        return null
    }
}

export const updateRestaurant = async ()=>{
    try {
        const response = restaurantApi.put("/restaurant")
        return response.data
    } catch (error) {
        console.log(error.message)
        return null
    }
}