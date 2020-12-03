export const type="acctionMessages"
const acctionMessages = value =>{
    return {
        type    : type,
        payload : value
    }
}
export default acctionMessages