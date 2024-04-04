import Image from "next/image";
import Person from "../../components/Person";

interface Item {
  name: string;
  address: string;
  phone: string;
  email: string;
  status: string;
}

const dataPerson: Array<Item> = [
  {
    name: "Marcelo",
    address: "My Address",
    phone: "(11)93821-4811",
    email: "name@email.com.br",
    status: "success",
  },
  {
    name: "Marselo",
    address: "My Address",
    phone: "(11)91391-4312",
    email: "name@email.com.br",
    status: "error",
  },
  {
    name: "Celo",
    address: "My Address",
    phone: "(11)93913-8551",
    email: "name@email.com.br",
    status: "success",
  },
  {
    name: "Selo",
    address: "My Address",
    phone: "(11)94141-0319",
    email: "name@email.com.br",
    status: "error",
  },
];

export default function Home() {
  return (
    <main>
      {dataPerson.map((item) => {
        return (
          <Person
            key={Math.random()}
            name={item.name}
            address={item.address}
            phone={item.phone}
            email={item.email}
            status={item.status}
          />
        );
      })}
    </main>
  );
}
