import type { RobotSpec } from "@/lib/robots";

export function TechnicalSpec({ specs }: { specs: RobotSpec[] }) {
  return (
    <dl className="technical-spec" data-robot="specs">
      {specs.map((spec) => (
        <div className="spec-row" key={spec.label}>
          <dt>{spec.label}</dt>
          <span aria-hidden="true">/</span>
          <dd>{spec.value}</dd>
        </div>
      ))}
    </dl>
  );
}
