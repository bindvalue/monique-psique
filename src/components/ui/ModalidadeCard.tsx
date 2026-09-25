type Props = {
  children: React.ReactNode;
  variant?: "default" | "accent";
};

export default function ModalidadeCard({ children, variant = "default" }: Props) {
  return (
    <div
      className={`
        relative rounded-sm border transition-colors duration-500
        ${variant === "accent" 
          ? "border-bege/60 bg-bege/20" 
          : "border-bege/50 bg-creme"
        }
      `}
    >
      {children}
    </div>
  );
}