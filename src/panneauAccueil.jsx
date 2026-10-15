function PanneauAccueil() {
  // Définition de la variable pour le nombre de commandes en cours
  const nombreCommandes = 3;

  return (
    <div className="container mt-4 p-4 bg-light border rounded shadow-sm">
      <h1 className="text-primary mb-3">Mon espace client</h1>
      <p className="lead mb-0">
        Vous avez actuellement <strong>{nombreCommandes}</strong> commande(s) en cours.
      </p>
    </div>
  );
}

export default PanneauAccueil;
