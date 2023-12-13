import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const emailRef = useRef(null);
  const nameRef = useRef(null);

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/confirmed", { state: { email: emailRef.current.value, name: nameRef.current.value } });
  }

  return (
    <div className="container">
      <h1>Register for Red30 Tech</h1>
      <p>
        Make sure to grab your spot for this year's conference! We love
        technology and consistently work towards being the premier provider of
        technology solutions and events that connect the world.
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Full name:
          <input type="text" name="name" ref={nameRef} />
        </label>
        <label>
          Email:
          <input type="text" name="email" ref={emailRef} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
