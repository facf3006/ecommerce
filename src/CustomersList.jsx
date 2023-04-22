import React, { useState } from "react";

export default function CustomersList() {
  const [pageTitle] = useState("Clientes");
  const [customersCount, setCustomersCount] = useState(5);
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Fernando",
      phone: "123-456",
      address: { city: "Amarante" },
      photo: "https://picsum.photos/id/1010/60"
    },
    {
      id: 2,
      name: "Antonio",
      phone: "789-496",
      address: { city: "Braga" },
      photo: "https://picsum.photos/id/1011/60"
    },
    {
      id: 3,
      name: "Adão",
      phone: "135-856",
      address: { city: "Lisboa" },
      photo: "https://picsum.photos/id/1012/60"
    },
    {
      id: 4,
      name: "Nando",
      phone: null,
      address: { city: "Porto" },
      photo: "https://picsum.photos/id/1013/60"
    },
    {
      id: 5,
      name: "Fonseca",
      phone: "231-756",
      address: { city: "Amarante" },
      photo: "https://picsum.photos/id/1014/60"
    }
  ]);

  function getPhoneToRender(phone) {
    if (phone) {
      return phone;
    } else {
      return <div className="bg-warning p-2 text-center"> Sem telefone</div>;
    }
  }

  function getCustomerRow() {
    return customers.map((customer) => (
      <tr key={customer.id}>
        <td>{customer.id}</td>
        <td>
          <img src={customer.photo} alt="customer" />
          <div>
            <button
              className="btn btn-sm btn-secondary"
              onClick={() => onChangePictureClick(customer.id)}
            >
              Alterar foto
            </button>
          </div>
        </td>
        <td>{customer.name}</td>
        <td>{getPhoneToRender(customer.phone)}</td>
        <td>{customer.address.city}</td>
      </tr>
    ));
  }

  function onChangePictureClick(id) {
    setCustomers((prevCustomers) =>
      prevCustomers.map((customer) => {
        if (customer.id === id) {
          return { ...customer, photo: "https://picsum.photos/id/104/60" };
        } else {
          return customer;
        }
      })
    );
  }

  return (
    <div>
      <h4 className="m-1 p-1">
        {pageTitle}
        <span className="badge bg-secondary m-2">{customersCount}</span>
        <button className="btn btn-info" onClick={() => setCustomersCount(7)}>
          Atualizar
        </button>
      </h4>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Foto</th>
            <th>Nome do cliente</th>
            <th>Telefone</th>
            <th>Cidade</th>
          </tr>
        </thead>
        <tbody>{getCustomerRow()}</tbody>
      </table>
    </div>
  );
}

