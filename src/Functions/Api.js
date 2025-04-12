const API_URL = "https://playground.4geeks.com";
const agendastartup = "startup";

export const getContacts = async () => {
  try {
    const response = await fetch(`${API_URL}/contact/agendas/${agendastartup}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await response.json();

    if (response.status === 404) {
      console.log("Usuario no encontrado creando uno nuevo");
      await postUser();
      return;
    }

    if (!response.ok) {
      console.log("Hubo un error", response.status);
    }

    return data.contacts;
  } catch (error) {
    console.log("Error al obtener usuario: ", error);
    return null;
  }
};

export const postUser = async () => {
  try {
    const response = await fetch(`${API_URL}/contact/agendas/${agendastartup}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ slug: agendaOfUser }),
    });

    if (response.status !== 201) {
      console.log("Hubo un error al crear el usuario: ", response.status);
      return;
    }

    console.log("Usuario creado con éxito");
    await getContacts();
  } catch (error) {
    console.error("Error al crear el usuario: ", error);
  }
};

export const deleteUser = async () => {
  try {
    const response = await fetch(`${API_URL}/contact/agendas/${agendastartup}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!response.ok) {
      console.log("Error al eliminar: ", response.status);
      return false;
    }

    console.log("Se elimino con exito");
    await getContacts();
    return true;
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const createContac = async (data) => {
  try {
    const response = await fetch(
      `${API_URL}/contact/agendas/${agendastartup}/contacts`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email,
          address: data.address,
        }),
      }
    );

    if (response.status !== 201) {
      console.log("Hubo un error al crear el contacto: ", response.status);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const deleteContact = async (id) => {
  try {
    const response = await fetch(
      `${API_URL}/contact/agendas/${agendastartup}/contacts/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    if (response.status !== 204) {
      const errorData = await response.json();
      console.log(
        "Error al eliminar el contacto: ",
        response.status,
        errorData
      );
      return false;
    }

    console.log("Lo has eliminado con exito");
    return true;
  } catch (error) {
    console.error("ERROR: ", error);
  }
};

export const putContact = async (id, contacData) => {
  try {
    const response = await fetch(
      `${API_URL}/contact/agendas/${agendastartup}/contacts/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(contacData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.log("No se edito correctamente: ", response.status, data);
      return false;
    }

    console.log("Felicidades lo editaste con exito");
    return true;
  } catch (error) {
    console.error("Error: ", error);
  }
};