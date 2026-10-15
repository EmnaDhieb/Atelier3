// Composant SuiviCommandes affichant trois <Commande /> avec des couleurs différentes
import Commande from './commende';

function SuiviCommandes() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-secondary">Suivi des commandes</h2>

      {/* Première commande avec couleur verte */}
      <Commande
        id="101"
        nom="Casque Bluetooth"
        statut="Livrée"
        couleurStatut="green"
      />

      {/* Deuxième commande avec couleur orange */}
      <Commande
        id="102"
        nom="Clavier Mécanique"
        statut="En cours d'expédition"
        couleurStatut="orange"
      />

      {/* Troisième commande avec couleur rouge */}
      <Commande
        id="103"
        nom="Écran 4K"
        statut="En attente de paiement"
        couleurStatut="red"
      />
    </div>
  );
}

export default SuiviCommandes;
