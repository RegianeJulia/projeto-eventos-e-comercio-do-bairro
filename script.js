const events = JSON.parse(localStorage.getItem("events")) || [];
const eventsList = document.querySelector("#events-list");
function displayEvents() {
  eventsList.innerHTML = "";

  if (events.length === 0) {
    eventsList.innerHTML = "<p>Nenhum evento cadastrado ainda.</p>";
    return;
  }

  events.forEach(function (event) {
    eventsList.innerHTML += `
      <div class="event-item">
        <h3>${event.name}</h3>
        <p>Organizador: ${event.organizer}</p>
        <p>Categoria: ${event.category}</p>
        <p>Endereço: ${event.address}</p>
        <p>Telefone: ${event.phone}</p>
        <p>E-mail: ${event.email}</p>

        <button class="button-edit" data-id="${event.id}">
          Editar
        </button>

        <button class="button-delete" data-id="${event.id}">
          Excluir
        </button>
    </div>
  `;
  });
}

if (eventsList) {
  displayEvents();

  eventsList.addEventListener("click", function (event) {
    if (event.target.classList.contains("button-edit")) {
      const eventId = Number(event.target.dataset.id);

      const selectedEvent = events.find(function (event) {
        return event.id === eventId;
      });

      if (selectedEvent) {
        window.location.href = `cadastro-eventos.html?id=${selectedEvent.id}`;
      }
      return;
    }

    if (event.target.classList.contains("button-delete")) {
      const eventId = Number(event.target.dataset.id);

      if (confirm("Tem certeza que deseja excluir este evento?")) {
        const eventIndex = events.findIndex(function (event) {
          return event.id === eventId;
        });

        if (eventIndex === -1) return;
        events.splice(eventIndex, 1);
        localStorage.setItem("events", JSON.stringify(events));
        displayEvents();
      }
    }
  });
}

const eventForm = document.querySelector(".event-form form");

if (eventForm) {
  const cancelButton = eventForm.querySelector('.button-cancel[type="button"]');
  const categorySelect = eventForm.querySelector("#tipo-de-evento");
  const newCategoryInput = eventForm.querySelector("#new-category");

  if (cancelButton) {
    cancelButton.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }

  const eventId = Number(new URLSearchParams(window.location.search).get("id"));
  const existingEvent = events.find(function (event) {
    return event.id === eventId;
  });

  if (existingEvent) {
    document.querySelector("#nome").value = existingEvent.name;
    document.querySelector("#organizador").value = existingEvent.organizer;
    document.querySelector("#email").value = existingEvent.email;
    document.querySelector("#endereco").value = existingEvent.address;
    document.querySelector("#telefone").value = existingEvent.phone;
    if (newCategoryInput) {
      newCategoryInput.value = existingEvent.category;
    } else if (categorySelect) {
      const categoryExists = Array.from(categorySelect.options).some(function (option) {
        return option.value === existingEvent.category;
      });

      if (!categoryExists) {
        const option = document.createElement("option");
        option.value = existingEvent.category;
        option.textContent = existingEvent.category;
        categorySelect.appendChild(option);
      }

      categorySelect.value = existingEvent.category;
    }
  }

  eventForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (newCategoryInput) {
      newCategoryInput.value = newCategoryInput.value.trim();
      if (!newCategoryInput.reportValidity()) return;
    }

    const eventData = {
      id: existingEvent ? existingEvent.id : Date.now(),
      name: document.querySelector("#nome").value,
      organizer: document.querySelector("#organizador").value,
      email: document.querySelector("#email").value,
      address: document.querySelector("#endereco").value,
      phone: document.querySelector("#telefone").value,
      category: newCategoryInput ? newCategoryInput.value : categorySelect.value,
    };

    if (existingEvent) {
      const eventIndex = events.findIndex(function (event) {
        return event.id === existingEvent.id;
      });
      if (eventIndex !== -1) {
        events[eventIndex] = eventData;
      } else {
        events.push(eventData);
      }
    } else {
      events.push(eventData);
    }

    localStorage.setItem("events", JSON.stringify(events));
    window.location.href = "lista-de-eventos.html";
  });
}
