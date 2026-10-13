export default function InterviewCard({ name, role, title, href }) {
  return (
    <article className="interview-card">
      <div className="photo" role="img" aria-label={name} />
      <h3><a href={href}>{title}</a></h3>
      <p className="meta">{name}, {role}</p>
    </article>
  );
}
