// Composant Commande avec la prop couleurStatut
function Commande({ id, nom, statut, couleurStatut }) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Commande #{id} - {nom}</h5>
        <p className="card-text mb-0">
          Statut : <span style={{ color: couleurStatut, fontWeight: 'bold' }}>
            {statut}</span>
        </p>
      </div>
    </div>
  );
}

export default Commande