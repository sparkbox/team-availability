export default function PastClients({ pastClients }) {
  return (
    <section aria-labelledby="past-clients" className="cmp-past-clients">
      <h2 id="past-clients" className="cmp-past-clients__heading">Past Clients</h2>
      <ul className="cmp-past-clients__list">
        {pastClients.map((client) => (
          <li key={client} className="cmp-past-clients__client">{client}</li>
        ))}
      </ul>
    </section>
  );
}
