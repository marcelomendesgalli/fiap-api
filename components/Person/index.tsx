import Key from "../Key";

interface Props{
    name: string;
    address: string;
    phone: string;
    email: string;
    status: string;
}

const Person = (props: Props) => {
    return (
    //<div className="ml-[15px] font-bold border space-x-[5px] border-4 border-l-[20px] border-green-500/100">
        <div className="uppercase">
            qualquer
        <Key field="Nome" value={props.name} />
        <Key field="Endereço" value={props.address} />
        <Key field="Telefone" value={props.phone} />
        <Key field="Email" value={props.email} />
        <Key field="Status" value={props.status} />
    </div>
    );
};

export default Person;