export function ProjectDetails({ details }: Readonly<{ details: string[] }>) {
  return (
    <section className="space-y-2.5 mt-6">
      {details.map((text, idx) => (
        <p key={`desc-${idx}`}>{text}</p>
      ))}
    </section>
  );
}
