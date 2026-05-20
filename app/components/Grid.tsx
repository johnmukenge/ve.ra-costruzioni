import { ReactNode } from "react";

type GridProps = {
  children: ReactNode;
  columns?: 2 | 3 | 4;
};

export function Grid({ children, columns = 3 }: GridProps) {
  const cols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return <div className={`grid grid-cols-1 gap-6 ${cols[columns]}`}>{children}</div>;
}
