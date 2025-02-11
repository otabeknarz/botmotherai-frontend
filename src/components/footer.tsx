export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={`bg-background text-foreground ${className}`}>
      <div className="container mx-auto flex justify-center items-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} BotMaker. All rights reserved.</p>
      </div>
    </footer>
  );
}