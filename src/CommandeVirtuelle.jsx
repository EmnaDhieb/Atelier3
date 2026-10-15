import { useState , useEffect } from "react";

function CommandeVirtuelle({numero}) {
  const [avancement, setAvancement] = useState(0);
  const [estLivree, setEstLivree] = useState(false);

  // La situation se déduit du nombre d'étapes validées
  const situation =
    avancement === 0 ? "📦 Commande reçue" :
    avancement < 2 ? "🔧 En préparation" :
    avancement < 3 ? "🚚 Expédiée" :
    "✅ Livrée";
     // Met à jour 'estLivree' uniquement lorsque l'avancement correspond à "Livrée"
  useEffect(() => {
    if (avancement >= 3) {
      setEstLivree(true);
    } else {
      setEstLivree(false); // Réinitialise si la commande est annulée ou reculée
    }
  }, [avancement]);

  function avancer() {
    setAvancement(avancement + 1);
  }

  return (
    <div className="container mt-4 p-4 bg-light border rounded shadow-sm">
        <h3>{numero}</h3>
      <p>{situation}</p>
      <p>Étapes validées : {avancement}</p>
      {estLivree && (
        <p className="text-success font-weight-bold">
          Statut : Commande bien livrée à destination !
        </p>
      )}
      <button onClick={avancer} disabled ={avancement  >= 3}>➤ Faire avancer</button>
      <button onClick={() => setAvancement(0)}>🗙 Annuler la commande</button>

    </div>
  );
}

export default CommandeVirtuelle;
