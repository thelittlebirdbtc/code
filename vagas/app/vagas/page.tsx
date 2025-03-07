import JobItem from "@/components/cards/job-item";

const job = {
    id: "1",
    tittle: "Desenvolvedor Frontend",
    company: "Google",
    city: "São Paulo",
    salary: 10000,
  }

export default function Vagas() {
  return (
    <main className="py-10">
      <h2 className="font-display mb-12 text-2xl font-bold">Todas as Vagas</h2>
      <div className="space-y-8">
        <JobItem job={job} />
        <JobItem job={job} />
        <JobItem job={job} />
        <JobItem job={job} />
        <JobItem job={job} />
        <JobItem job={job} />
        <JobItem job={job} />
        <JobItem job={job} />
        <JobItem job={job} />
        <JobItem job={job} />
        <JobItem job={job} />
        <JobItem job={job} />
      </div>
    </main>
  );
}