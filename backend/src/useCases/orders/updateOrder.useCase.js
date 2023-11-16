const {Order} =require('../../entities')
const {ordersRepository} =require('../../frameworks/repositories/inMemory')
module.exports=dependencies=>{
    const {
        ordersRepository
    }=dependencies

    if(!ordersRepository){
        throw new Error('productsRepository should be in dependencies')
    }

    const execute=({
        order
    })=>{
        return ordersRepository.update(order)
    }

    return {
        execute
    }
}