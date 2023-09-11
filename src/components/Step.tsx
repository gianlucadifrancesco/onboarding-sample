export interface IStep {
  children: React.ReactNode;
}

export default function Step({ children }: IStep) {
  return <div className="Step">{children}</div>;
}
