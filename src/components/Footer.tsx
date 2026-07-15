export default function Footer() {
  return (
    <footer className="p-5 border-t items-center text-sm">
      <p>
        &copy; {new Date().getFullYear()} Haiku Coffee. All rights reserved.
      </p>
    </footer>
  );
}
