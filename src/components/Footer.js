import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-info">

          <div className="footer-company">
            <span className="footer-label">SC GARstar SRL</span>
          </div>

          <div className="footer-contact">

            <div className="footer-contact-line">
              <span>ADRESĂ</span>
              <p>Str. Republicii Nr. 26, Blaj, România</p>
            </div>

            <div className="footer-contact-line">
              <span>EMAIL</span>
              <p>office@garstar.ro</p>
            </div>

            <div className="footer-contact-line">
              <span>TELEFON</span>
              <p>0723-561806; 0258-711486</p>
            </div>

            <div className="footer-contact-line">
              <span>PROGRAM</span>
              <p>Luni – Vineri, 08:00 – 17:00</p>
            </div>

            <div className="footer-contact-line">
              <span>Fax</span>
              <p>0258-711486</p>
            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 SC GARstar SRL. Toate drepturile rezervate.
          </p>

          <span>
            GARNITURI TEHNICE • SOLUȚII DE ETANȘARE
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
