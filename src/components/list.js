import Button from "./atoms/Button";
import Input from "./atoms/Input";

// code Here
function List(props) {
    return (
      <div>
        <h1>{props.name}</h1>
        <h1>{props.address}</h1>
        <p>{props.desc}</p>

        <div>
            <Input label="Name" type="text" placeholder="Masukan nama" />
            <Input label="Email" type="email"  />
            <Input label="Password" type="password"  />
            <div>
                <Button onClick={() => alert("Selamat anda login")} name="Login" />
            </div>
        </div>

      </div>
    );
}

export default List;