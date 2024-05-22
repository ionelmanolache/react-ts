import { createContext, useContext, useState } from "react";
import "./App.css";
import { EmojiSmile } from "react-bootstrap-icons";

interface NameButtonProps {
  name?: string;
  children?: React.ReactNode;
  // onClick: React.MouseEventHandler<HTMLButtonElement>;
  onClick?: React.ComponentProps<"button">["onClick"];
}

interface NameButtonWithPropsProps
  extends React.ComponentPropsWithoutRef<"button"> {
  name?: string;
  children?: React.ReactNode;
}

interface NameButtonWithIconProps {
  name?: string;
  children?: React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
}

const NameButtonWithIcon = ({
  name = "World",
  ...props
}: NameButtonWithIconProps) => {
  return (
    <>
      <button>
        <props.icon className="h-4" /> Hello, {name}!
      </button>
    </>
  );
};

const NameButton = ({ name = "World", onClick }: NameButtonProps) => {
  return (
    <>
      <button onClick={onClick}> Hello, {name}!</button>
    </>
  );
};

const NameButtonWithProps = ({
  name = "World",
  ...props
}: NameButtonWithPropsProps) => {
  return (
    <>
      <button {...props}> Hello, {name}!</button>
    </>
  );
};

const useName = (): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [name, setName] = useState<string>("");
  //
  return [name, setName];
};

function App() {
  const [name, setName] = useName();

  // const [name, setName] = useState<string>();
  // const [names, setNames] = useState<string[]>([]);

  setName("ima");
  // setNames(["ima", "john"]);

  return (
    <>
      <NameButton name={name}>1</NameButton>
      {/* <NameButtonWithProps aria-readonly name={names[1]}>
        2
      </NameButtonWithProps> */}
      <NameButtonWithIcon icon={EmojiSmile}>3</NameButtonWithIcon>
    </>
  );
}

/*
const NameContext = createContext<string | null>(null);

const useNameContext = () => {
  const name = useContext(NameContext);
  if (name === null) {
    throw new Error("No name provided in context");
  }
  return name;
};

const NameButton2 = () => {
  const name = useNameContext();
  return (
    <>
      <button>Hello, {name}!</button>
    </>
  );
};

function App2() {
  return (
    <NameContext.Provider value="ima">
      <NameButton2 />
    </NameContext.Provider>
  );
}
*/

export default App;
