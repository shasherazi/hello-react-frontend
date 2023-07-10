import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreetings } from "../redux/greetings/greetingsSlice";

function Greeting() {
  const { message } = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <>
      <h1> {message} </h1>
    </>
  );
}

export default Greeting;
