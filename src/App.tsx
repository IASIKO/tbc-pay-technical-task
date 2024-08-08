import { useRouteStore } from "./context/store";
import Header from "./components/Header";
import Main from "./components/Main";
import NameField from "./components/Fields/NameField";
import PasswordField from "./components/Fields/PasswordField";
import EmailField from "./components/Fields/EmailField";
// import Button from "./components/UI/Button";
// import Card from "./components/UI/Card";

function App() {
  const { route } = useRouteStore();

  return (
    <>
      <Header />
      {route === "main" && <Main />}
      {route === "name" && <NameField />}
      {route === "password" && <PasswordField />}
      {route === "email" && <EmailField />}

      {/* <Card>
        <div className="p-4 py-8 flex justify-center gap-2 items-center">
          <span className="text-[22px] font-bold">{route}</span>
          <Button onClick={() => actions.changeRoute("name")}>name</Button>
          <Button onClick={() => actions.changeRoute("password")}>
            password
          </Button>
          <Button onClick={() => actions.changeRoute("email")}>email</Button>
        </div>
      </Card> */}
    </>
  );
}

export default App;
