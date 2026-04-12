import './Events.css'

const EventsHandling = () => {
    let demo = () => {
        alert("Welcome")
    }

    let userName = (fnm) => {
        alert(`My name is ${fnm}`)
    }

    let GenerateOTP=()=>{
        let otp =Math.floor(Math.random()*9000+100)
        alert(`your OTP :${otp}`)
    }

    let CalculateAge=(dob)=>
    {
        if(typeof dob ==='number')
        {
            let a=new Date().getFullYear
        }
    }

    return (
        <>
            <div className="events">
                <h1>Events Handing</h1>
                <button onClick={demo}>Click Here</button>
                <button onClick={
                    () => {return userName('Dinga')}}>
                        PrintName </button>
                <button onClick={GenerateOTP()}>Generate OTP</button>


            </div>

        </>
    )
}

export default EventsHandling