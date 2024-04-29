import React from "react";
import "/src/Event/userLogin.css"

const UserLogin = (props) => {
  const clickEmailInputHandler = () => {
    console.log(`Yalnız .ru domenlərinə icazə verilir.`);
  };
  const clickPasswordInputHandler=(event)=>{
    if(event.target.value.length < 8){
      console.log(`en azi 8 simvol`);
    }
  }
  return (
    <>
      <form>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="abc@gmail.ru"
          onClick={clickEmailInputHandler}
        />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="password" id="password" onInput={clickPasswordInputHandler}/>
        <button>Login</button>
      </form>
    </>
  );
};
export default UserLogin;
