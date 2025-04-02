 export const emailRegex=(email)=>{

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailValid=emailRegex.test(email)
    if(!emailValid)
        return "Enter a valid email id"
    return 
}

export const passRegex=(pass)=>{
    const passValid =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(pass);

    if(!passValid)
     return "Password must contain atlest one Uppercase, Lowercase, Number, Special character.  minimum 8 characters in length"

    return 
}


const validation = (email,pass) => {

    const emailValid=emailRegex(email)
    const passValid= passRegex(pass)

    if(emailValid)
        return emailValid
    if(passValid)
        return passValid




       return 
    }

export default validation

