import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGreeting } from "../Redux/greetingSlice";

const Greeting = () => {
    const dispatch = useDispatch();
    const greeting = useSelector((state) => state.greeting);
  
    useEffect(() => {
      dispatch(fetchGreeting());
    }, [dispatch]);
  
    return (
      <div className="greeting_div">
        <h1 className="heading">Refresh the page to view new greeting</h1>
        <ul className="list">
          {greeting.map((greeting) => (
            <li className="list_item" key={greeting.id}>{greeting.message}</li>
          ))}
        </ul>
      </div>
    )
  }

    export default Greeting;