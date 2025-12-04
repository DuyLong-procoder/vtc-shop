interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="mb-6 text-center">
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-sm text-slate-500 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
