
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import clasiceData from "../../../data/subCategorieIneleO";
import "./SubCategorieIneleO.css";
import TabelMateriale from "./TabelProduse";

const GOOGLE_SHEETS_API_URL =
  "https://script.google.com/macros/s/AKfycbzrCX923pBXIrSOctCbWf9FnBDRcX2sSBTW4VFk7h4RzQTyTzQBYKs0xKaQLvwVYJ6t/exec";

const grupa = {
  "IneleO": "IneleO",
  "IneleOViton": "IneleOViton",
  "SnurViton": "SnurViton",
  "SnurNBR": "SnurNBR",
};

export default function SubCategorieIneleO() {
  const { categorie } = useParams();

  const grupaSelectata = grupa[categorie];

  const date = clasiceData[categorie];

  const [produse, setProduse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [eroare, setEroare] = useState("");

  useEffect(() => {
    async function incarcaProduse() {
      try {
        const response = await fetch(
          `${GOOGLE_SHEETS_API_URL}?sheet=IneleO`
        );

        if (!response.ok) {
          throw new Error("Nu s-au putut încărca datele.");
        }

        const rezultat = await response.json();

        if (!rezultat.success) {
          throw new Error("API-ul Google Sheets a returnat o eroare.");
        }

        setProduse(rezultat.data || []);
      } catch (error) {
        console.error("Eroare Google Sheets:", error);
        setEroare("Nu s-au putut încărca produsele.");
      } finally {
        setLoading(false);
      }
    }

    incarcaProduse();
  }, []);

  if (!date || !grupaSelectata) {
    return <h2>Categorie negăsită</h2>;
  }

  if (!date) {
    return <h2>Categorie negăsită</h2>;
  }

  return (
    <div className="categorie-page">

      <section className="categorie-general">

        <div className="categorie-details">

          <div className="categorie-heading">
            <span>01</span>
            <h2>INFORMAȚII GENERALE - {grupaSelectata}</h2>
          </div>

          <TabelMateriale/>

        </div>

        <div className="categorie-image-wrapper">
          <img src={date.image} alt={date.title} />
        </div>

      </section>

      {/* TABEL PRODUSE GOOGLE SHEETS */}

      <section className="categorie-products">

        <div className="categorie-heading">
          <span>02</span>
          <h2>PRODUSE DISPONIBILE - {grupaSelectata}</h2>
        </div>

        {loading && (
          <p>Se încarcă produsele...</p>
        )}

        {eroare && (
          <p className="categorie-error">{eroare}</p>
        )}

        {!loading && !eroare && (
          <div className="categorie-table-wrapper">

            <table className="categorie-table">

              <thead>
                <tr>
                  <th>Dimensiuni</th>
                  <th>Cantitate</th>
                  <th>Preț</th>
                </tr>
              </thead>

                <tbody>
                  {produse
                    .filter((produs) => {
                      const dateGrupa = produs[grupaSelectata];

                      return (
                        dateGrupa &&
                        (
                          dateGrupa.dimensiuni?.trim() ||
                          dateGrupa.cantitate?.trim() ||
                          dateGrupa.pret?.trim()
                        )
                      );
                    })
                    .map((produs, index) => (
                      <tr key={index}>
                        <td>{produs[grupaSelectata]?.dimensiuni || ""}</td>
                        <td>{produs[grupaSelectata]?.cantitate || ""}</td>
                        <td>{produs[grupaSelectata]?.pret || ""}</td>
                      </tr>
                    ))}
                </tbody>

            </table>

            {produse.length === 0 && (
              <p>Nu există produse în tabel.</p>
            )}

          </div>
        )}

      </section>


    </div>
  );
}
