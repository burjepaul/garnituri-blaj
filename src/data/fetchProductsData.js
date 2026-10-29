const GOOGLE_SHEETS_API_URL = "https://script.google.com/macros/s/AKfycbwHI_QFNd2wBCfJ8APozSDeX__lXUSEx2Ja32rYR85SazEKv5QLQK5tbRDa5kW6lDUP/exec";

export async function fetchProductsData() {
  const response = await fetch(GOOGLE_SHEETS_API_URL);

  if (!response.ok) {
    throw new Error("Nu am putut prelua datele din Google Sheets.");
  }

  const data = await response.json();

  if (!data.products || !data.categoryDetails) {
    throw new Error(
      data.error || "Datele primite din Google Sheets sunt invalide."
    );
  }

  return {
    products: data.products,
    categoryDetails: data.categoryDetails
  };
}
