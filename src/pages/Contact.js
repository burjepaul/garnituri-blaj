import "./Contact.css";

function Contact() {
  return (
    <div className="contact">

      <div className="contact-container">

        <h1>Contact</h1>

        <p>
          Dacă ai nevoie de o ofertă personalizată,
          completează formularul de mai jos.
        </p>

        <form>

          <input
            type="text"
            placeholder="Nume"
          />

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="text"
            placeholder="Telefon"
          />

          <textarea
            rows="6"
            placeholder="Mesaj"
          ></textarea>

          <button>
            Trimite
          </button>

        </form>

        <div className="info">

          <h3>Date de contact</h3>

          <p>📍 Blaj, jud. Alba</p>

          <p>📞 +40 723 561 806</p>

          <p>✉ office@garstar.ro</p>

        </div>

      </div>
    </div>
  );
}

export default Contact;