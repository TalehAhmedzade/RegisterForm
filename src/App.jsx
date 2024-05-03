// import "./App.css";
import ClientApp from "./ClientCard/ClientApp";
import CustomerButton from "./CustomerButton/CustomerButton";
import Employee from "./Employees/Employee";
import UserLogin from "./Event/UserLogin";
import Galary from "./Galary/Galary";
import CreditCardApp from "./KreditCards/CreditCardApp";
import Dice from "./LiveCircle/Dice";
import PizzaOrder from "./PizzaOrder/PizzaOrder";
import ToDoList from "./ToDoList/ToDoList";
import Wine from "./WineProject/Wine";
function App() {
  return (
    <>
      {/* <UserLogin /> */}
      {/* <Dice/> */}
      {/* <ToDoList /> */}
      {/* <PizzaOrder/> */}
      {/* <ClientApp /> */}
      {/* <CustomerButton text="Warning" hint= "WarningButton" warnMessage="Something went wrong. If this issue persists please contact us through our help center at help.openai.com."/>
      <CustomerButton text="Danger" hint= "DangerButton" warnMessage=""/>
      <CustomerButton text="Error" hint= "" warnMessage="Error 404"/> */}
      {/* <Employee/> */}
      {/* <Galary/> */}
      <CreditCardApp />
    </>
  );
}

export default App;
