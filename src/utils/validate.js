
export const validate = (email,password,name,mode) =>{
    if(!mode){
        const isNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name)
        if(!isNameValid) return "Full Name is not valid"

    }
    const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password)
    if(!isEmailValid) return "Email is not valid"
    if(!isPasswordValid) return "Password is not valid"
    return null
    
}