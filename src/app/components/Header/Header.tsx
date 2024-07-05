interface IHeaderOptions {
  label: string;
  value: string;
}

interface IHeaderProps {
  logo: string;
  options: IHeaderOptions[];
}

export function Header({ logo, options }: IHeaderProps) {
  return (
    <>
      <div className="flex w-full border-b justify-between p-6">
        <p>{logo}</p>

        <div className="flex gap-3">
          {options.map((item) => (
            <p key={item.label}>{item.label}</p>
          ))}
        </div>
      </div>
    </>
  );
}
