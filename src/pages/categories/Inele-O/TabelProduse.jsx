
import React from "react";

const materiale = [
  {
    denumire: "NBR (PERBUNAN)",
    tip: "cauciuc nitrilic",
    temperatura: ["-25°C", "+100°C"],
    rezistenta: (
      <>
        general utilizabil în hidraulică și pneumatică, apă până la 70°C,
        gaze, aer până la 90°C, uleiuri, substanțe alcaline, grăsimi,
        glicoli, alcooli, saramuri;
        <br />
        <em>rezistență bună la uzură</em>
      </>
    ),
  },
  {
    denumire: "EPDM",
    tip: "etilenă-propilenă",
    temperatura: ["-40°C", "+150°C"],
    rezistenta: (
      <>
        acizi diluați, baze, alcooli, apă fierbinte, aburi și aer fără ulei
        până la 150°C;
        <br />
        <em>rezistent la intemperii și la ozon</em>
      </>
    ),
  },
  {
    denumire: "FPM (VITON)",
    tip: "elastomeri fluorurați",
    temperatura: ["-25°C", "+200°C"],
    rezistenta: (
      <>
        uleiuri fierbinți, combustibili, solvenți aromatici, hidrocarburi,
        cloruri, diferiți acizi, vacuum înalt;
        <br />
        <em>rezistență mare la temperaturi/substanțe chimice</em>
      </>
    ),
  },
  {
    denumire: "MVQ",
    tip: "cauciuc siliconic",
    temperatura: ["-60°C", "+200°C"],
    rezistenta: (
      <>
        aer cald până la 210°C, oxigen, apă până la 100°C, în industria
        alimentară și farmaceutică;
        <br />
        <em>rezistență mare la temperatură</em>
      </>
    ),
  },
  {
    denumire: "CR (NEOPREN)",
    tip: "cauciuc cloroprenic",
    temperatura: ["-40°C", "+100°C"],
    rezistenta: (
      <>
        agenți frigorifici, substanțe alcaline, alcooli, grăsimi, glicoli,
        ozon, apă sărată;
        <br />
        <em>rezistent la îmbătrânire și intemperii</em>
      </>
    ),
  },
  {
    denumire: "FEP/Viton FEP/Silicon",
    tip: "cauciuc învelit",
    temperatura: ["-15°C / +205°C", "-60°C / +205°C"],
    rezistenta: (
      <>
        acizi și baze concentrate;
        <br />
        ozon, solvenți, uleiuri, aburi, apă fierbinte;
        <br />
        <em>rezistență chimică excelentă, alunecare bună</em>
      </>
    ),
  },
  {
    denumire: "FFPM (KALREZ)",
    tip: "cauciuc perfluoric",
    temperatura: ["-30°C", "+260°C"],
    rezistenta: (
      <>
        solvenți, acizi și baze concentrate, oxidanți puternici, clor,
        ozon, combustibili, saramuri;
        <br />
        <em>rezistență chimică și termică foarte mare (scump!)</em>
      </>
    ),
  },
];

export default function TabelMateriale() {
  const tableStyle = {
    width: "100%",
    minWidth: "650px",
    borderCollapse: "collapse",
    tableLayout: "fixed",
    fontSize: "13px",
    lineHeight: "1.35",
    color: "#26352d",
  };

  const cellStyle = {
    padding: "9px 12px",
    borderBottom: "1px solid #dfe5e2",
    verticalAlign: "top",
  };

  return (
    <section className="materiale-section">
      <div className="materiale-table-wrapper">
        <table style={tableStyle}>
          <thead>
            <tr style={{ background: "#175b35", color: "#fff" }}>
              <th style={{ ...cellStyle, width: "19%", textAlign: "left" }}>
                Denumire
              </th>
              <th style={{ ...cellStyle, width: "23%", textAlign: "center" }}>
                Temperaturi de lucru
              </th>
              <th style={{ ...cellStyle, width: "58%", textAlign: "left" }}>
                Rezistență chimică și fizică
              </th>
            </tr>
          </thead>

          <tbody>
            {materiale.map((material, index) => (
              <tr
                key={index}
                style={{
                  background: index % 2 === 0 ? "#ffffff" : "#f5f7f5",
                }}
              >
                <td style={cellStyle}>
                  <strong style={{ display: "block", fontSize: "13px" }}>
                    {material.denumire}
                  </strong>
                  <em style={{ color: "#52645a", fontSize: "12px" }}>
                    {material.tip}
                  </em>
                </td>

                <td
                  style={{
                    ...cellStyle,
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    fontWeight: "600",
                  }}
                >
                  {material.temperatura.map((temp, i) => (
                    <div key={i}>{temp}</div>
                  ))}
                </td>

                <td style={cellStyle}>
                  {material.rezistenta}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style>{`
        .materiale-section {
          width: 100%;
          margin: 30px 0;
        }

        .materiale-table-wrapper {
          width: 100%;
          overflow-x: auto;
          border: 1px solid #dfe5e2;
          border-radius: 6px;
          background: #fff;
        }

        .materiale-table-wrapper tbody tr:hover {
          background: #eaf2ec !important;
        }

        @media (max-width: 600px) {
          .materiale-table-wrapper {
            border-radius: 4px;
          }
        }
      `}</style>
    </section>
  );
}
