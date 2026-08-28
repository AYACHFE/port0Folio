type Props = {
  index: string;
  label: string;
};

export function SectionLabel({ index, label }: Props) {
  return (
    <div className="section-label">
      <span className="section-label__index">{index}</span>
      <span className="section-label__rule" aria-hidden="true" />
      <span className="section-label__text">{label}</span>
    </div>
  );
}
