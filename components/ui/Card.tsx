type CardProps = {
  children: React.ReactNode;
};

export default function Card({
  children,
}: CardProps) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-gray-200
      bg-white
      p-8
      shadow-sm
      transition
      duration-300
      hover:-translate-y-2
      hover:shadow-xl
      "
    >
      {children}
    </div>
  );
}