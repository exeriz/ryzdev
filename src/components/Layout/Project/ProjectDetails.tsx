export function ProjectDetails({ details }: Readonly<{ details: string[] }>) {
  return (
    <section className="space-y-2.5 mt-6">
      {details.map((text, idx) => (
        <p
          key={`desc-${idx}`}
          className="text-base/7 text-gray-700 dark:text-gray-300"
        >
          {text}
        </p>
      ))}
    </section>
  );
}
