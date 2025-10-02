interface DividerProps {
  children?: React.ReactNode;
}

export function Divider({ children }: DividerProps) {
  if (!children) {
    return <div className="border-t border-border" />;
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-border"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="bg-background px-4 text-muted-foreground">
          {children}
        </span>
      </div>
    </div>
  );
}
